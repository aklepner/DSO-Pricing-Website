import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Star, DollarSign, Users, Network, BarChart3, Award, HeartHandshake } from "lucide-react";
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

const included = [
  { icon: DollarSign, label: "DSO-level vendor pricing", desc: "10%+ savings across supplies, labs, tech, and more", color: "#2563eb", bg: "#dbeafe" },
  { icon: Network, label: "Curated partner network", desc: "Vetted partners aligned with growth and margin improvement", color: "#7c3aed", bg: "#ede9fe" },
  { icon: BarChart3, label: "EBITDA optimization guidance", desc: "Margin-focused strategy from founders who've done it", color: "#059669", bg: "#d1fae5" },
  { icon: Users, label: "Founder & expert community", desc: "Direct access to experienced operators — no middlemen", color: "#dc2626", bg: "#fee2e2" },
  { icon: Award, label: "Growth Accelerator Call", desc: "A guided strategy session to unlock your next move", color: "#d97706", bg: "#fef3c7" },
  { icon: HeartHandshake, label: "Reduced & waived setup fees", desc: "Exclusive offers not available anywhere publicly", color: "#0891b2", bg: "#cffafe" },
];

const steps = [
  { step: 1, title: "Join the membership", desc: "Sign up in minutes. No lengthy onboarding, no contracts." },
  { step: 2, title: "Access preferred pricing", desc: "Unlock the partner portal and DSO-level vendor rates instantly." },
  { step: 3, title: "Connect with vetted experts", desc: "Book calls, ask questions, and get real guidance." },
  { step: 4, title: "Strengthen your margins", desc: "Reinvest savings into profitable, structured growth." },
];

const audiences = [
  "$1M+ independent practices ready to scale",
  "Owners focused on profitability, not just revenue",
  "Multi-associate and emerging multi-location groups",
  "Practices building long-term, transferable value",
];

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-20 px-6 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(234,88,12,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="flex justify-center mb-5">
            <StarRating count={5} size={20} />
          </div>
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Membership</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            DSO-Level Pricing —{" "}
            <span style={{ color: ORANGE_LIGHT }}>Without Giving Up Control</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Get better pricing, better partners, and better margins — immediately, for $399/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-white font-bold text-base h-13 px-10" style={{ backgroundColor: ORANGE }}>
              <Link href="/contact" data-testid="button-join-hero">Join DSO Pricing Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/25 text-white hover:bg-white/10 bg-transparent h-13 px-10">
              <Link href="/contact">Book a Growth Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PRICE CARD */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-xl mx-auto">
          <div className="rounded-3xl border border-white/15 p-12 relative overflow-hidden text-center" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ backgroundColor: ORANGE }} />
            <p className="text-white/60 font-semibold uppercase tracking-widest text-sm mb-4">Monthly Membership</p>
            <div className="flex items-start justify-center gap-1 mb-4">
              <span className="text-3xl font-bold text-white mt-3">$</span>
              <span className="font-extrabold text-white leading-none" style={{ fontSize: "6rem", fontFamily: "'Outfit', sans-serif" }}>399</span>
              <span className="text-xl text-white/50 mt-9">/mo</span>
            </div>
            <p className="text-white/50 mb-8 text-base">No contracts. Cancel anytime.</p>
            <Button asChild size="lg" className="w-full text-white font-bold text-lg h-14" style={{ backgroundColor: ORANGE }} data-testid="button-join-price">
              <Link href="/contact">Join DSO Pricing Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>What You Get</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Inside DSO Pricing, You Get:
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Every feature built to strengthen your margins and accelerate profitable growth.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow" data-testid={`card-get-${i}`}>
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

      {/* THE MATH */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>The Math</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              If Your Practice Collects $4M:
            </h2>
            <p className="text-white/60 text-xl">A 2% margin improvement = <span className="text-white font-bold">$80,000/year</span></p>
          </div>

          <div className="rounded-2xl border border-white/15 p-10 mb-8" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} data-testid="card-math-detail">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10 mb-8">
              <div className="text-center">
                <p className="text-white/50 text-sm uppercase tracking-wider font-medium mb-2">Your Investment</p>
                <p className="text-5xl font-extrabold text-white mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>$399<span className="text-2xl text-white/50 font-normal">/mo</span></p>
                <p className="text-white/40 text-sm">= $4,788/year</p>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center border border-white/15" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                <span className="text-white/40 font-bold text-sm">VS</span>
              </div>
              <div className="text-center">
                <p className="text-white/50 text-sm uppercase tracking-wider font-medium mb-2">Potential Return</p>
                <p className="text-5xl font-extrabold mb-1" style={{ fontFamily: "'Outfit', sans-serif", color: ORANGE_LIGHT }}>$80K<span className="text-2xl font-normal" style={{ color: "#f9731660" }}>/yr</span></p>
                <p className="text-white/40 text-sm">2% margin improvement</p>
              </div>
            </div>
            <p className="text-center text-2xl font-bold text-white">Would you trade $4,788 to make an extra $80,000?</p>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="text-white font-bold text-lg px-10 h-14" style={{ backgroundColor: ORANGE }} data-testid="button-join-math">
              <Link href="/contact">Yes — Join DSO Pricing Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>How It Works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Simple. Fast. Immediate.</h2>
            <p className="text-gray-500 text-lg">Four steps to stronger margins.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="rounded-2xl p-7 border border-gray-100 bg-gray-50 flex items-start gap-5" data-testid={`card-step-${step}`}>
                <div className="w-12 h-12 rounded-full text-white flex items-center justify-center text-xl font-extrabold shrink-0" style={{ backgroundColor: ORANGE, fontFamily: "'Outfit', sans-serif" }}>
                  {step}
                </div>
                <div>
                  <p className="font-bold text-xl text-gray-900 mb-1">{title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Who This Is For</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Built for Growth-Focused Operators
          </h2>
          <div className="space-y-4 text-left">
            {audiences.map((item, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl p-5 border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} data-testid={`item-whofor-${i}`}>
                <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: ORANGE_LIGHT }} />
                <p className="text-white/90 font-medium text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: ORANGE }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <StarRating count={5} size={22} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Start Keeping More of What You Earn
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">No contracts, no fluff — just DSO-level leverage for your independent practice.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white font-bold text-lg px-10 h-14" style={{ color: ORANGE }} data-testid="button-join-final">
              <Link href="/contact">Join DSO Pricing Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/15 bg-transparent text-lg px-10 h-14">
              <Link href="/contact">Book a Growth Accelerator Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
