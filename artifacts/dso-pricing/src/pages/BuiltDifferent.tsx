import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X, TrendingUp, Shield, Target, Users, DollarSign, Zap, BarChart3, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAVY = "#0F0F0F";
const NAVY2 = "#000000";
const ORANGE = "#DD042A";
const ORANGE_LIGHT = "#FF1A3D";

const fragileItems = [
  "Growing revenue, shrinking margins",
  "Reactive decisions",
  "Vendor chaos",
  "Expansion without structure",
];

const scalableItems = [
  "Margin protected at every stage",
  "Intentional decisions",
  "Curated partners",
  "Expansion with structure",
];

const values = [
  { label: "Kindness", icon: HeartHandshake, color: "#2563eb", bg: "rgba(37,99,235,0.15)" },
  { label: "Abundance", icon: TrendingUp, color: "#7c3aed", bg: "rgba(124,58,237,0.15)" },
  { label: "Discipline", icon: Shield, color: "#059669", bg: "rgba(5,150,105,0.15)" },
  { label: "Integrity", icon: Target, color: "#d97706", bg: "rgba(217,119,6,0.15)" },
];

export default function BuiltDifferent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-20 px-6 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(124,58,237,0.10) 0%, transparent 70%)" }} />
        <div className="max-w-5xl mx-auto relative">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Built Different</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Independent. Strategic.<br />
            <span style={{ color: ORANGE_LIGHT }}>Operator-Led.</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl">
            Built for practices that want to scale with discipline, increase EBITDA, and stay in control.
          </p>
        </div>
      </section>

      {/* WHY THIS EXISTS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Why This Exists</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Growth is being done wrong.
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl p-8 bg-red-50 border border-red-100" data-testid="card-path-1">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-red-500" />
              </div>
              <p className="font-extrabold text-2xl mb-3 text-gray-900">Scale fast</p>
              <p className="text-gray-600 text-lg">And lose margin.</p>
            </div>
            <div className="rounded-2xl p-8 bg-gray-50 border border-gray-200" data-testid="card-path-2">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-gray-400" />
              </div>
              <p className="font-extrabold text-2xl mb-3 text-gray-900">Stay small</p>
              <p className="text-gray-600 text-lg">And get stuck.</p>
            </div>
          </div>
          <div className="rounded-2xl p-10 text-center border border-red-100" style={{ backgroundColor: "#fff0f3" }} data-testid="card-third-path">
            <p className="text-xl font-bold mb-3 text-gray-900">Both paths have risk.</p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We built DSO Pricing for operators who want{" "}
              <strong style={{ color: ORANGE }}>neither.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* FRAGILE VS SCALABLE GROWTH */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>The Choice</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Fragile Growth vs. Scalable Growth
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
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
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#fff0f3" }}>
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
          <div className="text-center py-6">
            <p className="text-gray-500 text-lg font-medium">Same growth.</p>
            <p className="text-gray-900 text-xl font-extrabold">Very different outcomes.</p>
          </div>
        </div>
      </section>

      {/* CURATED, NOT CROWDED */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Curated, Not Crowded</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Most groups give you more options.<br />We don't.
              </h2>
              <p className="text-white/65 mb-5 leading-relaxed text-lg">
                More vendors don't create better outcomes. Better decisions do.
              </p>
              <p className="text-white/50 text-base italic">If it doesn't move the business forward — it doesn't belong here.</p>
            </div>
            <div className="space-y-4">
              <p className="text-white/60 font-medium mb-4">We focus on:</p>
              {[
                { label: "High-impact partners", icon: Target, color: "#2563eb", bg: "rgba(37,99,235,0.15)" },
                { label: "Proven operators", icon: Users, color: "#7c3aed", bg: "rgba(124,58,237,0.15)" },
                { label: "Margin alignment", icon: DollarSign, color: "#059669", bg: "rgba(5,150,105,0.15)" },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl p-6 border border-white/10 flex items-center gap-4" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} data-testid={`item-curated-${i}`}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <p className="text-white/80 font-semibold text-base">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPERATOR ACCESS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Operator Access</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                No reps. No layers.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Real conversations create better decisions.
              </p>
              <p className="text-gray-700 font-semibold text-base">You get direct access to:</p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Operators", desc: "People actively running and scaling practices", icon: BarChart3, color: "#2563eb", bg: "#dbeafe" },
                { label: "Founders", desc: "Those who've built and exited real businesses", icon: Zap, color: "#7c3aed", bg: "#ede9fe" },
                { label: "People who've solved it", desc: "Practitioners with direct experience in your challenges", icon: CheckCircle2, color: "#059669", bg: "#d1fae5" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-6 border border-gray-100 shadow-sm flex items-start gap-4" data-testid={`item-access-${i}`}>
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base">{item.label}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR REAL OPERATORS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Built for Real Operators</p>
              <h2 className="text-3xl font-extrabold mb-8 text-gray-900" style={{ fontFamily: "'Outfit', sans-serif" }}>The environment is changing:</h2>
              <div className="space-y-4 mb-10">
                {[
                  { label: "Costs are rising" },
                  { label: "Labor is unstable" },
                  { label: "Markets are shifting" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl p-5 bg-red-50 border border-red-100 flex items-center gap-4" data-testid={`item-env-${i}`}>
                    <span className="text-red-500 font-bold text-xl shrink-0">↑</span>
                    <p className="font-bold text-gray-900 text-base">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 text-lg italic border-l-4 pl-4 font-medium" style={{ borderColor: ORANGE }}>Most practices react. We help you lead.</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold mb-8 text-gray-900" style={{ fontFamily: "'Outfit', sans-serif" }}>We help you:</p>
              <div className="space-y-5">
                {[
                  { label: "Protect margin", icon: Shield, color: "#2563eb", bg: "#dbeafe" },
                  { label: "Simplify decisions", icon: Target, color: "#7c3aed", bg: "#ede9fe" },
                  { label: "Build structure", icon: BarChart3, color: "#059669", bg: "#d1fae5" },
                  { label: "Scale with control", icon: TrendingUp, color: "#d97706", bg: "#fef3c7" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4" data-testid={`item-ahead-${i}`}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <p className="font-semibold text-gray-800 text-base">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 rounded-xl border" style={{ backgroundColor: "#fff0f3", borderColor: "#fecdd3" }}>
                <p className="text-gray-800 font-semibold leading-relaxed">
                  We don't just unlock pricing. We help you use it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Who This Is For</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Operators who:
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "Think long-term",
                  "Build with discipline",
                  "Want real leverage",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3" data-testid={`item-isfor-${i}`}>
                    <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: ORANGE_LIGHT }} />
                    <p className="text-white font-semibold text-lg">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-base font-medium">Not for everyone.</p>
              <p className="text-white/50 text-sm italic">That's intentional.</p>
            </div>
            <div className="rounded-2xl p-10 border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
              <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: ORANGE }}>Our Values</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {values.map((item, i) => (
                  <div key={i} className="rounded-xl p-4 border border-white/10 flex items-center gap-3" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                      <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {["No ego", "No chaos", "No corporate BS"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <X className="w-4 h-4 text-red-400 shrink-0" />
                    <p className="text-white/60 font-medium text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section className="py-16 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Not louder.<br />Not flashier.<br />
            <span style={{ color: ORANGE_LIGHT }}>Just smarter.</span>
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-10" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Build a stronger, more scalable<br />
            <span style={{ color: ORANGE_LIGHT }}>dental business — on your terms.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-white font-bold text-lg px-10 h-14" style={{ backgroundColor: ORANGE }} data-testid="button-join-cta">
              <Link href="/pricing">Join DSO Pricing Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/25 text-white hover:bg-white/10 bg-transparent text-lg px-10 h-14" data-testid="button-book-cta">
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
