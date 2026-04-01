import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X, TrendingUp, Shield, Target, Users, DollarSign, Zap, BarChart3, HeartHandshake, ArrowRight } from "lucide-react";
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
  { label: "Kindness", icon: HeartHandshake },
  { label: "Abundance", icon: TrendingUp },
  { label: "Discipline", icon: Shield },
  { label: "Integrity", icon: Target },
];

export default function BuiltDifferent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}built-different-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,10,0.78)" }} />
        <div className="relative z-10 pt-52 pb-20 px-6 max-w-6xl mx-auto">
          <p className="text-sm font-black uppercase tracking-widest mb-5" style={{ color: ORANGE }}>Built Different</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 uppercase" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
            Independent.<br />Strategic.<br />
            <span style={{ color: ORANGE }}>Operator-Led.</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            Built for practices that want to scale with discipline, increase EBITDA, and stay in control of their future.
          </p>
        </div>
      </section>

      {/* WHY THIS EXISTS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Why This Exists</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Growth Is Being<br />Done Wrong.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Most practices face the same impossible choice — scale fast and lose margin, or stay small and get left behind. Both paths carry real risk.
              </p>
              <p className="text-gray-700 font-bold text-lg border-l-4 pl-5" style={{ borderColor: ORANGE }}>
                We built DSO Pricing for operators who want <span style={{ color: ORANGE }}>neither.</span>
              </p>
            </div>
            <div className="space-y-5">
              <div className="rounded-xl p-7 bg-gray-50 border-2 border-gray-200" data-testid="card-path-1">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-5">
                  <TrendingUp className="w-6 h-6 text-red-500" />
                </div>
                <p className="font-black text-2xl mb-2 text-gray-900 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Scale Fast</p>
                <p className="text-gray-500 text-lg">And lose margin.</p>
              </div>
              <div className="rounded-xl p-7 bg-gray-50 border-2 border-gray-200" data-testid="card-path-2">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-5">
                  <Shield className="w-6 h-6 text-gray-400" />
                </div>
                <p className="font-black text-2xl mb-2 text-gray-900 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Stay Small</p>
                <p className="text-gray-500 text-lg">And get stuck.</p>
              </div>
              <div className="rounded-xl p-7 border-2 text-center" style={{ backgroundColor: "#fff0f3", borderColor: ORANGE }} data-testid="card-third-path">
                <p className="text-xl font-black mb-2 text-gray-900 uppercase">Both Paths Have Risk.</p>
                <p className="text-gray-600">There's a smarter way to build.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRAGILE VS SCALABLE */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>The Choice</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Fragile Growth<br />vs. Scalable Growth
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="rounded-xl p-10 bg-white border-2 border-red-200 relative overflow-hidden" data-testid="card-fragile">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-400 rounded-t-xl" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Fragile Growth</h3>
              </div>
              <ul className="space-y-4">
                {fragileItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`item-fragile-${i}`}>
                    <span className="text-red-400 font-bold shrink-0 mt-0.5 text-lg">✕</span>
                    <span className="text-gray-500 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-10 bg-white border-2 relative overflow-hidden" style={{ borderColor: ORANGE }} data-testid="card-scalable">
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-xl" style={{ backgroundColor: ORANGE }} />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: "#fff0f3" }}>
                  <CheckCircle2 className="w-5 h-5" style={{ color: ORANGE }} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Scalable Growth</h3>
              </div>
              <ul className="space-y-4">
                {scalableItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`item-scalable-${i}`}>
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: ORANGE }} />
                    <span className="text-gray-700 font-semibold text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center py-4">
            <p className="text-gray-400 text-lg font-medium">Same growth.</p>
            <p className="text-gray-900 text-2xl font-black uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Very Different Outcomes.</p>
          </div>
        </div>
      </section>

      {/* CURATED, NOT CROWDED */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Curated, Not Crowded</p>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Most Groups Give<br />You More Options.<br />
                <span style={{ color: ORANGE }}>We Don't.</span>
              </h2>
              <p className="text-white/55 mb-5 leading-relaxed text-lg">
                More vendors don't create better outcomes. Better decisions do.
              </p>
              <p className="text-white/40 text-base italic border-l-4 pl-5 border-white/20">If it doesn't move the business forward — it doesn't belong here.</p>
            </div>
            <div className="space-y-4">
              <p className="text-white/50 font-bold uppercase tracking-wide text-sm mb-5">We Focus On:</p>
              {[
                { label: "High-impact partners", icon: Target, desc: "Every partner is evaluated for real business impact." },
                { label: "Proven operators", icon: Users, desc: "Real people who've built and scaled practices like yours." },
                { label: "Margin alignment", icon: DollarSign, desc: "Every relationship is built to protect and grow your margins." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-6 border border-white/10 flex items-start gap-4" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} data-testid={`item-curated-${i}`}>
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: ORANGE }}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base uppercase">{item.label}</p>
                    <p className="text-white/45 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPERATOR ACCESS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Operator Access</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              No Reps. No Layers.<br />Real Conversations.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Operators", desc: "People actively running and scaling practices right now.", icon: BarChart3 },
              { label: "Founders", desc: "Those who've built, scaled, and exited real dental businesses.", icon: Zap },
              { label: "People Who've Solved It", desc: "Practitioners with direct experience in your exact challenges.", icon: CheckCircle2 },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-8 border-2 border-gray-100 flex flex-col gap-4 hover:border-gray-200 transition-colors" data-testid={`item-access-${i}`}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: ORANGE }}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-black text-gray-900 text-xl uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.label}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR REAL OPERATORS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>The Environment Is Changing</p>
              <h2 className="text-4xl font-black mb-8 text-gray-900 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>Most Practices React.<br />We Help You Lead.</h2>
              <div className="space-y-4 mb-10">
                {["Costs are rising", "Labor is unstable", "Markets are shifting"].map((item, i) => (
                  <div key={i} className="rounded-xl p-5 bg-red-50 border-2 border-red-100 flex items-center gap-4" data-testid={`item-env-${i}`}>
                    <span className="text-red-500 font-black text-2xl shrink-0">↑</span>
                    <p className="font-bold text-gray-900 text-base uppercase">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-2xl font-black mb-8 text-gray-900 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>We Help You:</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Protect Margin", icon: Shield },
                  { label: "Simplify Decisions", icon: Target },
                  { label: "Build Structure", icon: BarChart3 },
                  { label: "Scale with Control", icon: TrendingUp },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl p-5 border-2 border-gray-100 flex flex-col items-start gap-3 bg-white" data-testid={`item-ahead-${i}`}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: ORANGE }}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="font-bold text-gray-800 text-sm uppercase">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl p-6 border-2" style={{ backgroundColor: "#fff0f3", borderColor: ORANGE }}>
                <p className="text-gray-800 font-bold leading-relaxed">
                  We don't just unlock pricing. We help you use it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Who This Is For</p>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Operators Who:
              </h2>
              <div className="space-y-4 mb-8">
                {["Think long-term", "Build with discipline", "Want real leverage"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4" data-testid={`item-isfor-${i}`}>
                    <CheckCircle2 className="w-6 h-6 shrink-0" style={{ color: ORANGE }} />
                    <p className="text-white font-bold text-xl">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-sm font-bold uppercase tracking-wide mt-4">Not for everyone. That's intentional.</p>
            </div>
            <div className="rounded-2xl p-10 border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
              <p className="text-sm font-black uppercase tracking-widest mb-6" style={{ color: ORANGE }}>Our Values</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {values.map((item, i) => (
                  <div key={i} className="rounded-xl p-5 border border-white/10 flex items-center gap-3" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: ORANGE }}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-white font-bold text-sm uppercase">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {["No ego", "No chaos", "No corporate BS"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <X className="w-4 h-4 text-red-400 shrink-0" />
                    <p className="text-white/50 font-medium text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: ORANGE }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Not Louder.<br />Not Flashier.<br />Just Smarter.
          </h2>
          <p className="text-white/75 text-lg mb-10">Build a stronger, more scalable dental business — on your terms.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white font-bold text-lg uppercase tracking-wide px-10 h-14" style={{ color: ORANGE }} data-testid="button-join-cta">
              <Link href="/pricing">Join DSO Pricing Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/15 bg-transparent text-base font-semibold px-10 h-14" data-testid="button-book-cta">
              <Link href="/contact">Book a Concierge Call with Janelle</Link>
            </Button>
          </div>
          <p className="text-white/40 text-sm font-black uppercase tracking-widest mt-10">Independent. Strategic. Leveraged.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
