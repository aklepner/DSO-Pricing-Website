import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Star, DollarSign, Users, Package, Network, HeartHandshake } from "lucide-react";
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

const membershipBenefits = [
  { label: "10%+ preferred pricing with select partners", icon: DollarSign, color: "#2563eb", bg: "#dbeafe" },
  { label: "Exclusive offers, bonuses, and reduced fees", icon: HeartHandshake, color: "#7c3aed", bg: "#ede9fe" },
  { label: "Access to trusted Backstage service providers, consultants, and coaches", icon: Users, color: "#059669", bg: "#d1fae5" },
  { label: "Consolidate all your procurement processes and vendors in one place", icon: Package, color: "#dc2626", bg: "#fee2e2" },
  { label: "A centralized way to source products, services, and growth support", icon: Network, color: "#d97706", bg: "#fef3c7" },
];

const audiences = [
  "Private practices doing $1M+",
  "Growing groups scaling to multiple locations",
  "Operators serious about margin and structure",
];

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-20 px-6 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(221,4,42,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="flex justify-center mb-5">
            <StarRating count={5} size={20} />
          </div>
          <p className="text-white/60 text-lg font-medium mb-3">Access the pricing power of a larger group.</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Same Products.<br />
            <span style={{ color: ORANGE_LIGHT }}>Better Pricing.</span><br />
            Smarter Partners.
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Built for private practices and growing groups that want stronger margins and smarter decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-white font-bold text-base h-13 px-10" style={{ backgroundColor: ORANGE }}>
              <Link href="/contact" data-testid="button-join-hero">Join DSO Pricing Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/25 text-white hover:bg-white/10 bg-transparent h-13 px-10">
              <Link href="/contact">Book a Concierge Call with Janelle</Link>
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

      {/* WHAT YOUR MEMBERSHIP UNLOCKS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Member Benefits</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What Your Membership Unlocks
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Benefits vary by partner — but every relationship is designed to give you better access, better terms, and better outcomes.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10">
            <div className="space-y-5">
              {membershipBenefits.map((item, i) => (
                <div key={i} className="flex items-start gap-5 pb-5 border-b border-gray-100 last:border-0 last:pb-0" data-testid={`card-get-${i}`}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <p className="text-gray-700 font-medium text-base leading-snug pt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>How It Works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Simple. Fast. Immediate.
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We aggregate buying power across thousands of practices, negotiate preferred pricing, and give you access instantly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "You keep your systems.", desc: "No need to change how you run your practice.", num: "01" },
              { label: "You keep control.", desc: "Your decisions, your vendors, your practice — your way.", num: "02" },
              { label: "You get better pricing and better partners.", desc: "DSO-level leverage, available immediately.", num: "03" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-7 border border-white/10 flex flex-col gap-4" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} data-testid={`card-step-${i + 1}`}>
                <p className="font-extrabold text-4xl" style={{ color: ORANGE, fontFamily: "'Outfit', sans-serif" }}>{item.num}</p>
                <p className="font-bold text-white text-lg leading-snug">{item.label}</p>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALREADY HAVE VENDORS? */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Already Have Vendors?</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Perfect.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                You can keep working with the partners you trust. DSO Pricing simply improves:
              </p>
              <p className="text-gray-400 text-sm italic">Where it matters.</p>
            </div>
            <div className="rounded-2xl p-10 border border-gray-100 shadow-sm bg-gray-50">
              <div className="space-y-5">
                {["Pricing", "Terms", "Access"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 shrink-0" style={{ color: ORANGE }} />
                    <p className="text-gray-800 font-semibold text-xl">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE MATH */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>The Math</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              If your practice collects $4M:
            </h2>
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
                <p className="text-5xl font-extrabold mb-1" style={{ fontFamily: "'Outfit', sans-serif", color: ORANGE_LIGHT }}>$80K<span className="text-2xl font-normal" style={{ color: "#FF1A3D60" }}>/yr</span></p>
                <p className="text-white/40 text-sm">2% improvement</p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <p className="text-white/60 text-base">Most practices see meaningful savings within the first 30–60 days.</p>
              <p className="text-white font-bold text-lg">Small shift. Massive impact.</p>
            </div>
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="text-white font-bold text-lg px-10 h-14" style={{ backgroundColor: ORANGE }} data-testid="button-join-math">
              <Link href="/contact">Join DSO Pricing Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Start strengthening your margins today.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button asChild size="lg" className="bg-white font-bold text-lg px-10 h-14" style={{ color: ORANGE }} data-testid="button-join-final">
              <Link href="/contact">Join DSO Pricing Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/15 bg-transparent text-lg px-10 h-14">
              <Link href="/contact">Book a Concierge Call with Janelle</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section className="py-16 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Build a stronger, more scalable dental business — on your terms.
          </h2>
          <p className="text-white/40 text-sm font-semibold uppercase tracking-widest mt-4">Independent. Strategic. Leveraged.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
