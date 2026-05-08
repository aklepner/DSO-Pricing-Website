import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase, Vendor, Category } from "@/lib/supabase";

const NAVY2 = "#000000";
const NAVY = "#0F0F0F";
const ORANGE = "#DD042A";

export default function Vendors() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const prev = document.title;
    document.title = "Vendors | DSO Pricing";
    return () => { document.title = prev; };
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const [{ data: vendorData, error: vErr }, { data: catData, error: cErr }] = await Promise.all([
          supabase.from("businesses").select("*").order("title"),
          supabase.from("categories").select("*").order("name"),
        ]);
        if (vErr) throw vErr;
        if (cErr) throw cErr;
        const seen = new Set<string>();
        const unique = (vendorData || []).filter((v) => {
          const key = v.title.trim().toLowerCase();
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });
        setVendors(unique);
        setCategories(catData || []);
      } catch (e: any) {
        setError(e.message || "Failed to load vendors");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filtered = activeCategory === "all"
    ? vendors
    : vendors.filter((v) => v.categoryIds?.includes(activeCategory));

  const usedCategoryIds = new Set(vendors.flatMap((v) => v.categoryIds || []));
  const usedCategories = categories.filter((c) => usedCategoryIds.has(c.id));

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: NAVY2 }}>
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-12 px-6 text-center" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>
            Our Network
          </p>
          <h1
            className="text-5xl md:text-6xl font-black text-white uppercase leading-[1.05] mb-5"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            700+ <span style={{ color: ORANGE }}>Vendors</span> at<br />DSO-Level Pricing
          </h1>
          <p className="text-white/60 text-xl leading-relaxed">
            Every vendor below has been vetted and negotiated for members. Browse by category to find savings across your entire practice.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      {!loading && !error && (
        <section className="px-6 pb-8 sticky top-[72px] z-10" style={{ backgroundColor: NAVY2 }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center border-b border-white/10 pb-6">
              <button
                onClick={() => setActiveCategory("all")}
                className="px-4 py-2 rounded-full text-xs font-black uppercase tracking-wide transition-all"
                style={activeCategory === "all"
                  ? { backgroundColor: ORANGE, color: "#fff" }
                  : { backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.55)" }}
              >
                All ({vendors.length})
              </button>
              {usedCategories.map((cat) => {
                const count = vendors.filter((v) => v.categoryIds?.includes(cat.id)).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="px-4 py-2 rounded-full text-xs font-black uppercase tracking-wide transition-all"
                    style={activeCategory === cat.id
                      ? { backgroundColor: ORANGE, color: "#fff" }
                      : { backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.55)" }}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* VENDOR GRID */}
      <section className="flex-1 px-6 pb-20" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto pt-10">
          {loading && (
            <div className="flex items-center justify-center py-32">
              <div className="w-10 h-10 rounded-full border-4 border-white/10 animate-spin" style={{ borderTopColor: ORANGE }} />
            </div>
          )}
          {error && (
            <p className="text-center text-white/50 py-20">{error}</p>
          )}
          {!loading && !error && filtered.length === 0 && (
            <p className="text-center text-white/40 py-20">No vendors in this category yet.</p>
          )}
          {!loading && !error && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filtered.map((vendor) => (
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
  const href = vendor.website
    ? vendor.website.startsWith("http") ? vendor.website : `https://${vendor.website}`
    : null;

  return (
    <div
      className="group relative flex flex-col items-center justify-center rounded-2xl p-5 border border-white/8 transition-all duration-200 hover:border-white/20 hover:scale-[1.03]"
      style={{ backgroundColor: "rgba(255,255,255,0.04)", minHeight: "140px" }}
    >
      {vendor.logo ? (
        <img
          src={vendor.logo}
          alt={vendor.title.trim()}
          className="w-full h-16 object-contain mb-3"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      ) : (
        <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: "rgba(221,4,42,0.15)" }}>
          <span className="text-white font-black text-lg">{vendor.title.trim().charAt(0)}</span>
        </div>
      )}
      <p className="text-white text-xs font-black text-center uppercase leading-tight tracking-wide">
        {vendor.title.trim()}
      </p>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 rounded-2xl flex items-end justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={`Visit ${vendor.title.trim()}`}
        >
          <span className="rounded-full p-1" style={{ backgroundColor: ORANGE }}>
            <ExternalLink className="w-3 h-3 text-white" />
          </span>
        </a>
      )}
    </div>
  );
}
