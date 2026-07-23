import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAVY2 = "#000000";
const ORANGE = "#DD042A";

export default function OnboardingCall() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Book Your Onboarding Call | DSO Pricing";

    const script = document.createElement("script");
    script.src = "https://go.dsopricing.com/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.title = prev;
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: NAVY2 }}>
      <Navbar />

      {/* HEADER */}
      <section className="pt-40 pb-12 px-6 text-center" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>
            You're Almost There
          </p>
          <h1
            className="text-5xl md:text-6xl font-black text-white uppercase leading-[1.05] mb-5"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            Book Your <span style={{ color: ORANGE }}>Onboarding Call</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed">
            Pick a time that works for you. We'll get you set up, walk you through the platform, and start unlocking your savings.
          </p>
        </div>
      </section>

      {/* CALENDAR EMBED */}
      <section className="flex-1 px-6 pb-20" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
          <iframe
            src="https://go.dsopricing.com/widget/booking/ON0vOBuxWcGIF263CqMH"
            style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
            scrolling="no"
            id="ON0vOBuxWcGIF263CqMH_1784805859632"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
