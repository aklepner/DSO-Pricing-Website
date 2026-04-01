import { Router } from "express";
import { logger } from "../lib/logger";

const router = Router();

const GHL_API_BASE = "https://services.leadconnectorhq.com";

router.post("/contact", async (req, res) => {
  const { name, email, practiceName, phone, locations, message } = req.body;

  const apiToken = process.env["GHL_API_TOKEN"];
  const locationId = process.env["GHL_LOCATION_ID"];

  if (!apiToken || !locationId) {
    logger.error("GHL_API_TOKEN or GHL_LOCATION_ID is not set");
    res.status(500).json({ error: "Server misconfiguration" });
    return;
  }

  const headers = {
    Authorization: `Bearer ${apiToken}`,
    "Content-Type": "application/json",
    Version: "2021-07-28",
  };

  try {
    const contactRes = await fetch(`${GHL_API_BASE}/contacts/`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        locationId,
        firstName: name.split(" ")[0] ?? name,
        lastName: name.split(" ").slice(1).join(" ") || undefined,
        email,
        phone,
        companyName: practiceName,
        customFields: [
          { key: "number_of_locations", field_value: locations },
        ],
        source: "DSO Pricing Website",
        tags: ["dso-pricing-inquiry"],
      }),
    });

    const contactData = (await contactRes.json()) as { contact?: { id?: string }; id?: string };

    if (!contactRes.ok) {
      logger.error({ status: contactRes.status, body: contactData }, "GHL create contact failed");
      res.status(502).json({ error: "Failed to create contact in CRM" });
      return;
    }

    const contactId = contactData?.contact?.id ?? (contactData as { id?: string })?.id;

    if (contactId) {
      const noteBody = [
        `Practice Name: ${practiceName}`,
        `Phone: ${phone}`,
        `Locations: ${locations}`,
        ``,
        `Message:`,
        message,
      ].join("\n");

      const noteRes = await fetch(`${GHL_API_BASE}/contacts/${contactId}/notes`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          userId: contactId,
          body: noteBody,
        }),
      });

      if (!noteRes.ok) {
        const noteData = await noteRes.json();
        logger.warn({ status: noteRes.status, body: noteData }, "GHL create note failed");
      }
    }

    res.status(200).json({ success: true });
  } catch (err) {
    logger.error({ err }, "GHL request threw an error");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
