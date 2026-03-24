import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X, ArrowRight, Star, TrendingUp, Shield, Zap, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAVY = "#0f1628";
const NAVY2 = "#161e35";
const ORANGE = "#ea580c";
const ORANGE_LIGHT = "#f97316";

function StarRating({ count = 5, size = 16 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} fill="#fbbf24" color="#fbbf24" width={size} height={size} />
      ))}
    </div>
  );
}

const fragileItems = [
  "Growing revenue, shrinking margins",
  "Reactive decision-making",
  "Vendor overwhelm with no curation",
  "Team strain and operational bloat",
  "Expansion without structure or strategy",
];

const scalableItems = [
  "Margins protected at every growth stage",
  "Intentional, data-informed decisions",
  "Curated partners aligned with profitability",
  "Strong teams and scalable systems",
  "Expansion with structure built to last",
];

const partnerBenefits = [
  { icon: Target, label: "A curated group of partners focused on improving margins", color: "#2563eb", bg: "rgba(37,99,235,0.15)" },
  { icon: TrendingUp, label: "Access to founders and experts who've scaled real practices", color: "#7c3aed", bg: "rgba(124,58,237,0.15)" },
  { icon: Shield, label: "Direct conversations that lead to faster, better decisions", color: "#059669", bg: "rgba(5,150,105,0.15)" },
];

const envChallenges = [
  { label: "Costs are rising", detail: "Supplies, labor, and overhead climb every year" },
  { label: "Labor is unpredictable", detail: "Hiring and retention put constant pressure on margins" },
  { label: "Margins are tightening", detail: "Revenue growth alone no longer guarantees profitability" },
];

const stayAhead = [
  "Strengthening cost structure through better pricing leverage",
  "Simplifying partner and vendor decisions — no more overwhelm",
  "Supporting faster, more confident implementation of growth strategies",
];

export default function BuiltDifferent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-20 px-6 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(124,58,237,0.10) 0%, transparent 70%)" }} />
        <div className="max-w-5xl mx-auto relative">
          <div className="flex items-center gap-3 mb-5">
            <StarRating count={5} size={18} />
            <span className="text-white/60 text-sm font-medium">Trusted by 1,200+ dental practices</span>
          </div>
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Built Different</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Built for Practices That Want to Scale —{" "}
            <span style={{ color: ORANGE_LIGHT }}>Without Losing Their Margins</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl">
            Most growth paths trade profit for scale. We give you both.
          </p>
        </div>
      </section>

      {/* WHY THIS EXISTS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Why This Exists</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Most practices are pushed into two paths:
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl p-8 bg-red-50 border border-red-100" data-testid="card-path-1">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-6">
                <span className="text-red-500 font-extrabold text-xl">1</span>
              </div>
              <p className="font-extrabold text-2xl mb-3 text-gray-900">Scale Fast</p>
              <p className="text-gray-600 text-lg">And watch margins tighten as operational bloat takes over.</p>
            </div>
            <div className="rounded-2xl p-8 bg-gray-50 border border-gray-100" data-testid="card-path-2">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <span className="text-gray-500 font-extrabold text-xl">2</span>
              </div>
              <p className="font-extrabold text-2xl mb-3 text-gray-900">Stay Small</p>
              <p className="text-gray-600 text-lg">And limit your long-term growth and eventual valuation.</p>
            </div>
          </div>
          <div className="rounded-2xl p-10 text-center border border-orange-100" style={{ backgroundColor: "#fff7ed" }} data-testid="card-third-path">
            <p className="text-2xl font-bold mb-4 text-gray-900">Neither builds a strong, valuable business.</p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              DSO Pricing was built for practices that want a third path:{" "}
              <strong style={{ color: ORANGE }}>Profitable, structured growth — on your terms.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* GROWTH COMPARISON */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>The Choice</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Which Growth Path Are You Building?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-10 bg-white border border-red-100 shadow-sm relative overflow-hidden" data-testid="card-fragile">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-400 rounded-t-2xl" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900">Fragile Growth</h3>
              </div>
              <ul className="space-y-5">
                {fragileItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`item-fragile-${i}`}>
                    <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                    <span className="text-gray-500 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-10 bg-white border border-green-100 shadow-md relative overflow-hidden" data-testid="card-scalable">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ backgroundColor: ORANGE }} />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#fff7ed" }}>
                  <CheckCircle2 className="w-5 h-5" style={{ color: ORANGE }} />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900">Scalable Growth</h3>
              </div>
              <ul className="space-y-5">
                {scalableItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`item-scalable-${i}`}>
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: ORANGE }} />
                    <span className="text-gray-700 font-medium text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BETTER PARTNERS */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Better Partners. Better Decisions.</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Most platforms give you more options. We don't.
              </h2>
              <p className="text-white/65 mb-5 leading-relaxed text-lg">
                Because more options don't lead to better outcomes — better alignment does.
              </p>
              <p className="text-white/65 leading-relaxed text-lg">With DSO Pricing, you get:</p>
            </div>
            <div className="space-y-4">
              {partnerBenefits.map((item, i) => (
                <div key={i} className="rounded-2xl p-6 border border-white/10 flex items-start gap-4" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} data-testid={`item-partners-${i}`}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <p className="text-white/80 font-medium leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REAL-WORLD GROWTH */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Built for Real-World Growth</p>
              <h2 className="text-3xl font-extrabold mb-8 text-gray-900" style={{ fontFamily: "'Outfit', sans-serif" }}>The environment is changing:</h2>
              <div className="space-y-4 mb-10">
                {envChallenges.map((item, i) => (
                  <div key={i} className="rounded-xl p-5 bg-red-50 border border-red-100 flex items-start gap-4" data-testid={`item-env-${i}`}>
                    <span className="text-red-500 font-bold text-xl shrink-0">↑</span>
                    <div>
                      <p className="font-bold text-gray-900 text-base">{item.label}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 text-lg italic border-l-4 pl-4 font-medium" style={{ borderColor: ORANGE }}>Most practices react too late.</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold mb-8 text-gray-900" style={{ fontFamily: "'Outfit', sans-serif" }}>We help you stay ahead by:</p>
              <div className="space-y-5">
                {stayAhead.map((item, i) => (
                  <div key={i} className="flex items-start gap-4" data-testid={`item-ahead-${i}`}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#fff7ed" }}>
                      <CheckCircle2 className="w-5 h-5" style={{ color: ORANGE }} />
                    </div>
                    <p className="font-medium text-gray-800 text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 rounded-xl border" style={{ backgroundColor: "#fff7ed", borderColor: "#fed7aa" }}>
                <p className="text-gray-800 leading-relaxed font-semibold">
                  So your growth isn't chaotic — it's controlled and built to last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR / NOT FOR */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Fit Check</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900" style={{ fontFamily: "'Outfit', sans-serif" }}>Is DSO Pricing Right for You?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-10 bg-white border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#fff7ed" }}>
                  <Zap className="w-5 h-5" style={{ color: ORANGE }} />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest" style={{ color: ORANGE }}>This Is For You</p>
              </div>
              <div className="space-y-5">
                {[
                  "Practices doing $1M+ that want to protect and grow margins",
                  "Owners focused on profitability — not just top-line revenue",
                  "Practices scaling and needing stronger systems and partners",
                  "Leaders who want to stay in control as they grow",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3" data-testid={`item-isfor-${i}`}>
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: ORANGE }} />
                    <p className="text-gray-700 text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-10 bg-white border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <X className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">This Is NOT For</p>
              </div>
              <div className="space-y-5">
                {[
                  "Practices chasing short-term wins at the expense of margins",
                  "Owners who don't track performance or profitability metrics",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3" data-testid={`item-notfor-${i}`}>
                    <X className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                    <p className="text-gray-400 text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <StarRating count={5} size={22} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Start Building a More Profitable, Scalable Practice
          </h2>
          <p className="text-white/60 text-xl mb-10 max-w-xl mx-auto">The third path is here. Growth and margin protection, on your terms.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-white font-bold text-lg px-10 h-14" style={{ backgroundColor: ORANGE }} data-testid="button-join-cta">
              <Link href="/pricing">Join DSO Pricing Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/25 text-white hover:bg-white/10 bg-transparent text-lg px-10 h-14" data-testid="button-book-cta">
              <Link href="/contact">Book a Growth Accelerator Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
