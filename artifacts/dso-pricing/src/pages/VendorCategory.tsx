import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Vendor, Category } from "@/lib/supabase";

const NAVY2 = "#000000";
const NAVY = "#0F0F0F";
const ORANGE = "#DD042A";

export default function VendorCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const isAll = categoryId === "all";
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Vendors | DSO Pricing";
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const { getSupabase } = await import("@/lib/supabase");
        const client = getSupabase();
        const [{ data: vendorData, error: vErr }, catResult] = await Promise.all([
          client.from("businesses").select("*").order("title"),
          isAll
            ? Promise.resolve({ data: null, error: null })
            : client.from("categories").select("*").eq("id", categoryId).maybeSingle(),
        ]);
        if (vErr) throw vErr;
        if (catResult.error) throw catResult.error;
        if (cancelled) return;

        const seenTitles = new Set<string>();
        const seenLogos = new Set<string>();
        const unique = (vendorData || []).filter((v: any) => {
          const titleKey = v.title.trim().toLowerCase();
          const logoKey = v.logo?.trim() || "";
          if (seenTitles.has(titleKey)) return false;
          if (logoKey && seenLogos.has(logoKey)) return false;
          seenTitles.add(titleKey);
          if (logoKey) seenLogos.add(logoKey);
          return true;
        });
        setVendors(isAll ? unique : unique.filter((v: Vendor) => v.categoryIds?.includes(categoryId)));
        const cat = (catResult.data as Category | null) || null;
        setCategory(cat);
        if (cat) document.title = `${cat.name} | DSO Pricing`;
      } catch (e: any) {
        if (!cancelled) setError(e.message || "Failed to load vendors");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchData();
    return () => { cancelled = true; };
  }, [categoryId, isAll]);

  const title = isAll ? "All Vendors" : category?.name || "Vendors";

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: NAVY2 }}>
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-12 px-6 text-center" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/built-different/vendors"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-black uppercase tracking-widest mb-6 transition-colors"
            data-testid="link-back-categories"
          >
            <ArrowLeft className="w-4 h-4" /> All Categories
          </Link>
          <h1
            className="text-4xl md:text-6xl font-black text-white uppercase leading-[1.05] mb-5"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            {title}
          </h1>
          {category?.description && (
            <p className="text-white/60 text-xl leading-relaxed">{category.description}</p>
          )}
        </div>
      </section>

      {/* VENDOR GRID */}
      <section className="flex-1 px-6 pb-20" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto pt-10">
          {loading && (
            <div className="flex items-center justify-center py-32">
              <div className="w-10 h-10 rounded-full border-4 border-white/10 animate-spin" style={{ borderTopColor: ORANGE }} />
            </div>
          )}
          {error && <p className="text-center text-white/50 py-20">{error}</p>}
          {!loading && !error && vendors.length === 0 && (
            <p className="text-center text-white/40 py-20">No vendors in this category yet.</p>
          )}
          {!loading && !error && vendors.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {vendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function VendorCard({ vendor }: { vendor: Vendor }) {
  return (
    <div
      className="group relative flex flex-col items-center justify-center rounded-2xl p-5 border border-white/8 transition-all duration-200 hover:border-white/20 hover:scale-[1.03]"
      style={{ backgroundColor: "rgba(255,255,255,0.04)", minHeight: "140px" }}
    >
      {vendor.logo ? (
        <div className="w-full h-16 mb-3 rounded-lg flex items-center justify-center p-2" style={{ backgroundColor: "#ffffff" }}>
          <img
            src={vendor.logo}
            alt={vendor.title.trim()}
            className="w-full h-full object-contain"
            onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = "none"; }}
          />
        </div>
      ) : (
        <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: "rgba(221,4,42,0.15)" }}>
          <span className="text-white font-black text-lg">{vendor.title.trim().charAt(0)}</span>
        </div>
      )}
      <p className="text-white text-xs font-black text-center uppercase leading-tight tracking-wide">
        {vendor.title.trim()}
      </p>
    </div>
  );
}
