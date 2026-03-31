import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Star, ChevronDown, ChevronUp, DollarSign, Users, TrendingUp, Shield, Zap, BarChart3, Package, Cpu, ShoppingCart, Network, Lightbulb, HeartHandshake, Award, Target } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAVY = "#0F0F0F";
const NAVY2 = "#000000";
const ORANGE = "#DD042A";
const ORANGE_LIGHT = "#FF1A3D";

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
    <div className="border border-white/10 rounded-xl p-6 cursor-pointer hover:border-white/20 transition-colors" onClick={() => setOpen(!open)} style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
      <div className="flex items-start justify-between gap-4">
        <p className="text-white font-bold text-base leading-snug">{q}</p>
        {open ? <ChevronUp className="w-5 h-5 text-white/60 shrink-0 mt-0.5" /> : <ChevronDown className="w-5 h-5 text-white/60 shrink-0 mt-0.5" />}
      </div>
      {open && <p className="text-white/60 mt-4 leading-relaxed text-sm">{a}</p>}
    </div>
  );
}

const solutions = [
  {
    icon: DollarSign,
    title: "Pricing Leverage",
    desc: "Stop paying retail. Get DSO-level pricing on the supplies and products you already use.",
    bullets: ["10%+ preferred pricing with select partners", "Exclusive member-only offers and bonuses", "Immediate savings from day one"],
  },
  {
    icon: Network,
    title: "Partner Network",
    desc: "Access a curated ecosystem of service providers, consultants, and experts built for growth-focused practices.",
    bullets: ["Pre-vetted, high-impact partners only", "No noise — every partner is curated", "Direct access, no middlemen"],
  },
  {
    icon: Package,
    title: "Smart Procurement",
    desc: "Centralize all your vendors and purchasing decisions in one place with real-time visibility.",
    bullets: ["All vendors centralized in one platform", "Real-time pricing and availability", "Streamlined ordering and cost control"],
  },
  {
    icon: TrendingUp,
    title: "Growth Support",
    desc: "Move from reactive to proactive with strategic guidance built for scaling operators.",
    bullets: ["Structured frameworks for expansion", "Margin protection at every stage", "Support that scales with you"],
  },
  {
    icon: Cpu,
    title: "AI-Powered Tools",
    desc: "Smarter buying decisions powered by AI-driven inventory management and analytics.",
    bullets: ["AI-driven inventory management", "Spend analytics and forecasting", "Smarter reordering, less waste"],
  },
  {
    icon: Users,
    title: "Operator Community",
    desc: "Connect directly with operators, founders, and experts who have built and scaled real practices.",
    bullets: ["Operators actively scaling practices", "Founders who've built and exited", "Real answers to real problems"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,10,0.78)" }} />

        {/* Content */}
        <div className="relative z-10 pt-48 pb-16 px-6 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 uppercase" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
            Same Products.<br />Better Pricing.<br />
            <span style={{ color: ORANGE }}>Smarter Partners.</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            DSO Pricing gives independent practices the pricing power, partners, and strategic leverage of a large group — without giving up control.
          </p>
          <div className="flex flex-col items-center gap-3">
            <Button asChild size="lg" className="text-white font-black text-sm uppercase tracking-widest h-14 px-12" style={{ backgroundColor: ORANGE }} data-testid="button-join-hero">
              <Link href="/pricing">Join DSO Pricing Now</Link>
            </Button>
            <p className="text-white/45 text-sm italic">Book a Concierge Call with Janelle →{" "}
              <Link href="/contact" className="underline underline-offset-2 hover:text-white/70 transition-colors" data-testid="button-book-hero">Schedule here</Link>
            </p>
          </div>
        </div>

        {/* TRUST BADGES */}
        <div className="relative z-10 border-t border-white/15 grid grid-cols-3 divide-x divide-white/15 max-w-full" style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
          {[
            { icon: Award, label: "Driven by Values", sub: "Kindness. Integrity. Results." },
            { icon: Shield, label: "Built for Dentists", sub: "By operators, for operators." },
            { icon: Target, label: "Proven Results", sub: "$80K+ avg. annual savings." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-6 py-7">
              <item.icon className="w-8 h-8 shrink-0" style={{ color: ORANGE }} />
              <div className="text-center sm:text-left">
                <p className="text-white font-black text-xs uppercase tracking-widest">{item.label}</p>
                <p className="text-white/45 text-xs mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY DSO PRICING EXISTS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Why DSO Pricing Exists</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Growth Is Being<br />Done Wrong.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Most practices aren't failing — they're just not built for pressure. Margins are tighter than they should be, costs keep rising, and decisions get made without full visibility.
              </p>
              <p className="text-gray-500 text-base leading-relaxed border-l-4 pl-5 italic" style={{ borderColor: ORANGE }}>
                DSO Pricing exists for operators who refuse to accept either path — scale and lose margin, or stay small and fall behind.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Scale fast and lose control", icon: TrendingUp, bad: true, desc: "Growth without structure leads to fragmented systems and margin erosion." },
                { label: "Stay small and fall behind", icon: Shield, bad: true, desc: "Staying put while the market moves forward is its own form of risk." },
                { label: "Build with structure and win", icon: Zap, bad: false, desc: "The practices that win build with intentional systems and better leverage." },
              ].map((item, i) => (
                <div key={i} className={`rounded-xl p-6 border-2 flex items-start gap-5 ${item.bad ? "border-gray-200 bg-gray-50" : "bg-white"}`} style={!item.bad ? { borderColor: ORANGE } : {}}>
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${item.bad ? "bg-gray-100" : ""}`} style={!item.bad ? { backgroundColor: ORANGE } : {}}>
                    <item.icon className={`w-5 h-5 ${item.bad ? "text-gray-400" : "text-white"}`} />
                  </div>
                  <div>
                    <p className={`font-bold text-base mb-1 ${item.bad ? "text-gray-500 line-through" : "text-gray-900"}`}>{item.label}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DARK BAND */}
      <section className="py-16 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/40 text-sm font-black uppercase tracking-widest mb-4">Introducing DSO Pricing</p>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.01em" }}>
            And Here's How We Solve It:
          </h2>
          <p className="text-white/50 text-lg mt-6 max-w-2xl mx-auto">
            A growth leverage platform that gives independent practices the buying power, partners, and structure of a large group — without the loss of control.
          </p>
        </div>
      </section>

      {/* OUR SOLUTIONS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Our Solutions</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Choose The Problem<br />You Need Solved.
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl">Start where it matters most. Every solution is curated, proven, and built for dental operators scaling with intention.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <div key={i} className="border-2 border-gray-100 rounded-xl p-7 flex flex-col gap-4 hover:border-gray-200 transition-colors bg-white">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: ORANGE }}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 text-xl mb-2 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                </div>
                <ul className="space-y-2 mb-5">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: ORANGE }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="sm" className="mt-auto text-white font-bold uppercase tracking-wide text-xs h-10 px-5 w-fit" style={{ backgroundColor: ORANGE }}>
                  <Link href="/pricing">Learn More <ArrowRight className="ml-1.5 w-3.5 h-3.5" /></Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALREADY HAVE VENDORS? */}
      <section className="py-16 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Already Have<br />Vendors?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Perfect. Keep working with the partners you trust. DSO Pricing simply gives you more — better pricing, better terms, better access.
              </p>
            </div>
            <div className="space-y-4">
              {["Better pricing", "Better terms", "Better access"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 rounded-xl p-5 border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                  <CheckCircle2 className="w-6 h-6 shrink-0" style={{ color: ORANGE }} />
                  <p className="text-white font-bold text-xl">{item}</p>
                </div>
              ))}
              <p className="text-white/40 text-sm pl-2 italic">Where it actually matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-14 px-6" style={{ backgroundColor: ORANGE }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-white/80 text-center text-xs font-black uppercase tracking-widest mb-10">Making An Impact For Practices Like Yours</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "$80K+", label: "Average Annual Savings for $4M Practice" },
              { value: "60 Days", label: "Avg. Time to See Margin Improvement" },
              { value: "2–3%", label: "Typical EBITDA Improvement" },
              { value: "1,200+", label: "Practices Benefiting" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-black text-white mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{s.value}</p>
                <p className="text-white/75 text-sm font-medium leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROW SMARTER SPLIT */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden border-4 border-gray-200 aspect-video flex items-center justify-center" style={{ backgroundColor: NAVY2 }}>
              <div className="text-center px-8">
                <p className="text-white font-black text-3xl uppercase mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>The Real Outcome</p>
                <p className="text-white/50 text-base">This isn't about pricing.</p>
                <p className="font-bold text-lg mt-2" style={{ color: ORANGE }}>It's about building from strength.</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Grow Smarter. Lead With Strength.</p>
              <h2 className="text-4xl font-black text-gray-900 uppercase leading-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Whether You're At<br />1 Location Or 5.
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                So whether you add locations, expand your team, increase income, or prepare for a transition — you're building from strength, not guesswork.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { label: "Stronger margins", icon: DollarSign },
                  { label: "Smarter decisions", icon: Lightbulb },
                  { label: "Better partners", icon: HeartHandshake },
                  { label: "Real structure", icon: BarChart3 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: ORANGE }} />
                    <p className="text-gray-800 font-semibold">{item.label}</p>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="text-white font-bold uppercase tracking-wide h-13 px-8" style={{ backgroundColor: ORANGE }}>
                <Link href="/pricing">Join DSO Pricing Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Social Proof</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Don't Just Take<br />Our Word For It
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">Hear from practice owners already saving, scaling, and strengthening their margins.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-xl border-2 border-white/10 p-7 flex flex-col gap-5 hover:border-white/20 transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                data-testid={`card-testimonial-${i}`}
              >
                <StarRating count={t.rating} size={16} />
                <p className="text-white/75 leading-relaxed text-base italic flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <Avatar initials={t.initials} color={t.color} size={44} />
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-white/45 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Got Questions?</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Frequently Asked<br />Questions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: ORANGE }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <StarRating count={5} size={24} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Build A Stronger,<br />More Scalable<br />Dental Business.
          </h2>
          <p className="text-white/75 text-lg mb-10">On your terms. Independent. Strategic. Leveraged.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white font-bold text-lg uppercase tracking-wide px-10 h-14" style={{ color: ORANGE }} data-testid="button-join-final">
              <Link href="/pricing">Join DSO Pricing Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/15 bg-transparent text-base font-semibold px-10 h-14" data-testid="button-book-final">
              <Link href="/contact">Book a Concierge Call with Janelle</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
