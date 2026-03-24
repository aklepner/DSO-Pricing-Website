import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Star, ChevronDown, ChevronUp, DollarSign, Users, TrendingUp, Shield, Zap, BarChart3, Package, Cpu, ShoppingCart, Network, Lightbulb, HeartHandshake } from "lucide-react";
import { useState } from "react";
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

function Avatar({ initials, color, size = 48 }: { initials: string; color: string; size?: number }) {
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-bold border-2 border-white/20 shrink-0"
      style={{ width: size, height: size, backgroundColor: color, fontSize: size * 0.35 }}
    >
      {initials}
    </div>
  );
}

const avatarData = [
  { initials: "JM", color: "#2563eb" },
  { initials: "SK", color: "#7c3aed" },
  { initials: "RL", color: "#059669" },
  { initials: "AT", color: "#dc2626" },
  { initials: "PW", color: "#d97706" },
  { initials: "CN", color: "#0891b2" },
];

const membershipBenefits = [
  "10%+ preferred pricing with select partners",
  "Exclusive offers, bonuses, and reduced fees",
  "Access to trusted Backstage service providers, consultants, and coaches",
  "A centralized way to source products, services, and growth support",
  "Curated solutions built for operators scaling intentionally",
];

const procurementItems = [
  { icon: Package, label: "All your vendors, centralized", color: "#2563eb", bg: "#dbeafe" },
  { icon: BarChart3, label: "Real-time pricing and availability across suppliers", color: "#7c3aed", bg: "#ede9fe" },
  { icon: Cpu, label: "AI-driven inventory management", color: "#059669", bg: "#d1fae5" },
  { icon: ShoppingCart, label: "Streamlined ordering and cost control", color: "#dc2626", bg: "#fee2e2" },
];

const testimonials = [
  {
    name: "Dr. Michelle R.",
    role: "3-Location Group Owner",
    text: "Within 60 days of joining, we renegotiated two major vendor contracts and saved over $28,000 annualized. The ROI is undeniable.",
    initials: "MR",
    color: "#2563eb",
    rating: 5,
  },
  {
    name: "Dr. Brandon K.",
    role: "Solo Practice, $2.4M Revenue",
    text: "I was skeptical about another membership. But DSO Pricing is different — the partners are real, the savings are real, and the community is genuinely helpful.",
    initials: "BK",
    color: "#7c3aed",
    rating: 5,
  },
  {
    name: "Dr. Lisa T.",
    role: "Emerging Group Practice",
    text: "We finally feel like we have the leverage and backing of a DSO without having to give up our independence. This is exactly what was missing.",
    initials: "LT",
    color: "#059669",
    rating: 5,
  },
];

const faqs = [
  { q: "Who is DSO Pricing for?", a: "DSO Pricing is built for independent dental practices doing $1M+ in revenue, multi-associate groups, and emerging multi-location practices that want to scale intelligently without giving up control." },
  { q: "How soon can I expect results?", a: "Most members see measurable margin improvement within the first 30–60 days. Even small improvements of 1–2% can translate into $40K–$80K+ annually depending on practice size." },
  { q: "Is there a long-term contract?", a: "No. Your membership is month-to-month. Stay because it delivers value, not because you're locked in." },
  { q: "What kinds of vendors and partners are included?", a: "Partners span supplies, technology, lab services, HR, financing, marketing, and more — all curated for quality and alignment with growth-focused practices." },
  { q: "Can I keep my current vendors?", a: "Absolutely. DSO Pricing works alongside your existing vendor relationships. We simply give you better pricing, better terms, and better access where it actually matters." },
  { q: "How is DSO Pricing different from a GPO?", a: "DSO Pricing goes far beyond a buying group. Beyond pricing leverage, you get access to curated partners, strategic support, AI-driven procurement tools, and direct connection to experts who have scaled real practices." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-5 cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between gap-4">
        <p className="text-white font-semibold text-lg">{q}</p>
        {open ? <ChevronUp className="w-5 h-5 text-white/60 shrink-0" /> : <ChevronDown className="w-5 h-5 text-white/60 shrink-0" />}
      </div>
      {open && <p className="text-white/70 mt-3 leading-relaxed text-base">{a}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-20 px-6 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <StarRating count={5} size={18} />
                <span className="text-white/70 text-sm font-medium">Trusted by growing practices nationwide</span>
              </div>
              <p className="text-white/60 text-lg font-medium mb-3">Access the pricing power of a larger group.</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Same Products.<br />
                <span style={{ color: ORANGE_LIGHT }}>Better Pricing.</span><br />
                Smarter Partners.
              </h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-lg">
                Built for private practices and growing groups that want stronger margins, smarter decisions, and real operational leverage.
              </p>
              <p className="text-white/50 text-sm font-semibold uppercase tracking-widest mb-6">Independent. Strategic. Leveraged.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-white font-bold text-base h-13 px-8" style={{ backgroundColor: ORANGE }}>
                  <Link href="/pricing" data-testid="button-join-hero">Join DSO Pricing Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/25 text-white hover:bg-white/10 bg-transparent h-13 px-8">
                  <Link href="/contact" data-testid="button-book-hero">Book a Concierge Call with Janelle</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {avatarData.slice(0, 4).map((a, i) => (
                    <Avatar key={i} initials={a.initials} color={a.color} size={36} />
                  ))}
                </div>
                <p className="text-white/60 text-sm">Join hundreds of growing practices</p>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-3 gap-3">
              {avatarData.map((a, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 flex flex-col items-center justify-center gap-3 border border-white/10"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", backdropFilter: "blur(8px)" }}
                >
                  <Avatar initials={a.initials} color={a.color} size={56} />
                  <StarRating count={5} size={12} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE REALITY */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>The Reality</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Most practices aren't failing.<br />They're just not built for pressure.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            They're growing — but margins are tighter than they should be, costs are rising, and decisions are made without full visibility.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Scale fast and lose control", icon: TrendingUp, color: "#dc2626", bg: "#fee2e2", desc: "Growth without structure leads to fragmented systems and margin erosion." },
              { label: "Stay small and fall behind", icon: Shield, color: "#d97706", bg: "#fef3c7", desc: "Staying put while the market moves forward is its own form of risk." },
              { label: "Build with structure and win", icon: Zap, color: "#059669", bg: "#d1fae5", desc: "The practices that win build with intentional systems and better leverage." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: item.bg }}>
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT DSO PRICING IS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>What DSO Pricing Is</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                A smarter way to buy, build, and grow.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Consolidate all your procurement processes and vendors in one place.
              </p>
              <div className="space-y-5">
                {[
                  { icon: DollarSign, label: "DSO-level pricing on the products you already use", color: "#2563eb", bg: "#dbeafe" },
                  { icon: Network, label: "Access to curated service providers, consultants, and experts", color: "#7c3aed", bg: "#ede9fe" },
                  { icon: TrendingUp, label: "Strategic support to help you scale with structure", color: "#059669", bg: "#d1fae5" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <p className="text-gray-700 font-medium text-base leading-snug pt-2">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl p-10 border border-gray-100 shadow-sm bg-gray-50">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>How It Works</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                We aggregate buying power across thousands of practices, negotiate preferred pricing once, and give you access instantly — without changing how you run your business.
              </p>
              <div className="space-y-4">
                {[
                  "You keep control.",
                  "You get better terms.",
                  "You make better decisions.",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: ORANGE }} />
                    <p className="text-gray-700 font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* START WHERE IT MATTERS */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Start Where It Matters</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            You don't need everything fixed.<br />You need the right thing fixed first.
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            Start with the area where margin or growth is leaking most. We help you solve that first. Then expand.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Supplies and procurement", icon: Package, color: "#2563eb", bg: "rgba(37,99,235,0.15)" },
              { label: "Services and experts", icon: Users, color: "#7c3aed", bg: "rgba(124,58,237,0.15)" },
              { label: "Partner access", icon: HeartHandshake, color: "#059669", bg: "rgba(5,150,105,0.15)" },
              { label: "Growth support", icon: TrendingUp, color: "#d97706", bg: "rgba(217,119,6,0.15)" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-6 border border-white/10 flex flex-col items-center gap-3 text-center" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: item.bg }}>
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <p className="text-white/80 font-medium text-sm leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-sm mt-8 italic">Always curated. Never overwhelming.</p>
        </div>
      </section>

      {/* WHAT YOUR MEMBERSHIP UNLOCKS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Member Benefits</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What Your Membership Unlocks
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Benefits vary by partner — but every relationship is designed to give you better access, better terms, and better outcomes.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10">
            <div className="space-y-5">
              {membershipBenefits.map((item, i) => (
                <div key={i} className="flex items-start gap-4 pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                  <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" style={{ color: ORANGE }} />
                  <p className="text-gray-700 text-base font-medium leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCUREMENT POWER */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              {procurementItems.map((item, i) => (
                <div key={i} className="rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col gap-3" data-testid={`card-procurement-${i}`}>
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ backgroundColor: item.bg }}>
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <p className="text-gray-700 font-medium text-sm leading-tight">{item.label}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Procurement Power</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Everything you need — in one place.
              </h2>
              <div className="space-y-3 mb-8">
                {["Same products.", "Better visibility.", "Better decisions."].map((line, i) => (
                  <p key={i} className="text-gray-600 text-lg font-semibold">{line}</p>
                ))}
              </div>
              <Button asChild size="lg" className="text-white font-bold" style={{ backgroundColor: ORANGE }}>
                <Link href="/pricing">Start Saving Today <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ALREADY HAVE VENDORS? */}
      <section className="py-14 px-6" style={{ backgroundColor: ORANGE }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Already have vendors?
              </h2>
              <p className="text-white/85 text-lg leading-relaxed">
                Perfect. You can keep working with the partners you trust. DSO Pricing simply gives you more.
              </p>
            </div>
            <div className="space-y-4">
              {["Better pricing", "Better terms", "Better access"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <p className="text-white font-semibold text-lg">{item}</p>
                </div>
              ))}
              <p className="text-white/70 text-sm pt-2">Where it actually matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Who This Is For</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Two types of operators win here.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Track 1 */}
            <div className="rounded-2xl p-8 border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6" style={{ backgroundColor: ORANGE, color: "white" }}>
                Track 1 — The Builder
              </div>
              <p className="text-white/50 text-sm font-medium mb-6">1–2 Locations | $1M–$2M+</p>
              <p className="text-white/70 font-medium mb-4">You're growing — but:</p>
              <div className="space-y-2 mb-8">
                {["Costs feel higher than they should", "Decisions feel fragmented", "You don't have a full team yet"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-white/60">
                    <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/70 font-medium mb-4">You need:</p>
              <div className="space-y-2 mb-8">
                {["Better pricing", "Trusted partners", "Smarter guidance"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: ORANGE_LIGHT }} />
                    <p className="text-white/80 text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-sm italic">We help you scale without guessing.</p>
            </div>
            {/* Track 2 */}
            <div className="rounded-2xl p-8 border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6" style={{ backgroundColor: "#2563eb", color: "white" }}>
                Track 2 — The Operator
              </div>
              <p className="text-white/50 text-sm font-medium mb-6">2–5 Locations | Growing Group</p>
              <p className="text-white/70 font-medium mb-4">You're scaling — but:</p>
              <div className="space-y-2 mb-8">
                {["Systems aren't fully aligned", "Vendors are fragmented", "Margin needs protection"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-white/60">
                    <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/70 font-medium mb-4">You need:</p>
              <div className="space-y-2 mb-8">
                {["Consolidation", "Structure", "Better leverage"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: ORANGE_LIGHT }} />
                    <p className="text-white/80 text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-sm italic">We help you scale with control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE MATH */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>The Math</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Margin protection is one of the fastest ways to increase profitability.
            </h2>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10">
            <div className="grid md:grid-cols-3 gap-8 text-center mb-10">
              <div>
                <p className="text-5xl font-extrabold text-gray-900 mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>$4M</p>
                <p className="text-gray-500 text-sm font-medium">Practice Collection</p>
              </div>
              <div>
                <p className="text-5xl font-extrabold mb-2" style={{ fontFamily: "'Outfit', sans-serif", color: ORANGE }}>$80K</p>
                <p className="text-gray-500 text-sm font-medium">2% improvement = $80,000/year</p>
              </div>
              <div>
                <p className="text-5xl font-extrabold text-gray-900 mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>$399</p>
                <p className="text-gray-500 text-sm font-medium">Membership per month ($4,788/yr)</p>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-8 text-center">
              <p className="text-gray-700 font-semibold text-lg mb-2">Most practices see meaningful savings within the first 30–60 days.</p>
              <p className="text-gray-400 font-medium">Small shift. Massive impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE REAL OUTCOME */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>The Real Outcome</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            This isn't about pricing.
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">It's about building from strength — not guesswork.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { label: "Stronger margins", icon: DollarSign, color: "#2563eb", bg: "rgba(37,99,235,0.15)" },
              { label: "Smarter decisions", icon: Lightbulb, color: "#7c3aed", bg: "rgba(124,58,237,0.15)" },
              { label: "Better partners", icon: HeartHandshake, color: "#059669", bg: "rgba(5,150,105,0.15)" },
              { label: "Real structure", icon: BarChart3, color: "#d97706", bg: "rgba(217,119,6,0.15)" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-6 border border-white/10 flex items-center gap-4" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <p className="text-white font-semibold text-base">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-white/60 text-base mb-2">So whether you add locations, expand your team, increase income, or prepare for a transition —</p>
          <p className="text-white font-semibold text-lg">you're building from strength.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Social Proof</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Don't Just Take Our Word For It
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">Hear from practice owners who are already saving, scaling, and strengthening their margins.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 border border-white/10 flex flex-col gap-5"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                data-testid={`card-testimonial-${i}`}
              >
                <StarRating count={t.rating} size={16} />
                <p className="text-white/80 leading-relaxed text-base italic">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                  <Avatar initials={t.initials} color={t.color} size={44} />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Got Questions?</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <StarRating count={5} size={22} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Build a stronger, more scalable<br />
            <span style={{ color: ORANGE_LIGHT }}>dental business — on your terms.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button asChild size="lg" className="text-white font-bold text-lg px-10 h-14" style={{ backgroundColor: ORANGE }} data-testid="button-join-footer-cta">
              <Link href="/pricing">Join DSO Pricing Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/25 text-white hover:bg-white/10 bg-transparent text-lg px-10 h-14" data-testid="button-book-footer-cta">
              <Link href="/contact">Book a Concierge Call with Janelle</Link>
            </Button>
          </div>
          <p className="text-white/40 text-sm font-semibold uppercase tracking-widest mt-8">Independent. Strategic. Leveraged.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
