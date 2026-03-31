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
  { label: "10%+ preferred pricing with select partners", icon: DollarSign },
  { label: "Exclusive offers, bonuses, and reduced fees", icon: HeartHandshake },
  { label: "Access to trusted service providers, consultants, and coaches", icon: Users },
  { label: "Consolidate all your procurement processes and vendors in one place", icon: Package },
  { label: "A centralized way to source products, services, and growth support", icon: Network },
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
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="flex justify-center mb-6">
            <StarRating count={5} size={20} />
          </div>
          <p className="text-white/50 text-base font-black uppercase tracking-widest mb-4">Access The Pricing Power Of A Larger Group</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 uppercase" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
            Same Products.<br />
            <span style={{ color: ORANGE }}>Better Pricing.</span><br />
            Smarter Partners.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Built for private practices and growing groups that want stronger margins and smarter decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-white font-bold text-base uppercase tracking-wide h-14 px-10" style={{ backgroundColor: ORANGE }} data-testid="button-join-hero">
              <Link href="/contact">Join DSO Pricing Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/25 text-white hover:bg-white/10 bg-transparent h-14 px-10 font-semibold">
              <Link href="/contact">Book a Concierge Call with Janelle</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PRICE CARD */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl border-2 border-white/15 p-12 relative overflow-hidden text-center" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
            <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl" style={{ backgroundColor: ORANGE }} />
            <p className="text-white/50 font-black uppercase tracking-widest text-xs mb-4">Monthly Membership</p>
            <div className="flex items-start justify-center gap-1 mb-4">
              <span className="text-3xl font-bold text-white mt-3">$</span>
              <span className="font-black text-white leading-none" style={{ fontSize: "6rem", fontFamily: "'Outfit', sans-serif" }}>399</span>
              <span className="text-xl text-white/50 mt-9">/mo</span>
            </div>
            <p className="text-white/40 mb-8 text-sm font-semibold uppercase tracking-wide">No contracts. Cancel anytime.</p>
            <Button asChild size="lg" className="w-full text-white font-bold text-lg uppercase tracking-wide h-14" style={{ backgroundColor: ORANGE }} data-testid="button-join-price">
              <Link href="/contact">Join DSO Pricing Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHAT YOUR MEMBERSHIP UNLOCKS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Member Benefits</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What Your<br />Membership Unlocks
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Benefits vary by partner — but every relationship is designed to give you better access, better terms, and better outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-4">
            {membershipBenefits.map((item, i) => (
              <div key={i} className="flex items-center gap-5 p-6 rounded-xl border-2 border-gray-100 bg-white hover:border-gray-200 transition-colors" data-testid={`card-get-${i}`}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: ORANGE }}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-800 font-bold text-base">{item.label}</p>
                <CheckCircle2 className="w-5 h-5 shrink-0 ml-auto" style={{ color: ORANGE }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>How It Works</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Simple. Fast.<br />Immediate.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              We aggregate buying power across thousands of practices, negotiate preferred pricing, and give you access instantly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "You Keep Your Systems.", desc: "No need to change how you run your practice.", num: "01" },
              { label: "You Keep Control.", desc: "Your decisions, your vendors, your practice — your way.", num: "02" },
              { label: "You Get Better Pricing.", desc: "DSO-level leverage, available immediately.", num: "03" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-8 border-2 border-white/10 flex flex-col gap-4" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} data-testid={`card-step-${i + 1}`}>
                <p className="font-black text-5xl" style={{ color: ORANGE, fontFamily: "'Outfit', sans-serif" }}>{item.num}</p>
                <p className="font-black text-white text-xl uppercase leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.label}</p>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MATH */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>The Math</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              If Your Practice<br />Collects $4M:
            </h2>
          </div>
          <div className="rounded-2xl border-2 border-white/15 p-10 mb-8" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} data-testid="card-math-detail">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10 mb-8">
              <div className="text-center">
                <p className="text-white/40 text-xs uppercase tracking-wider font-black mb-2">Your Investment</p>
                <p className="text-5xl font-black text-white mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>$399<span className="text-2xl text-white/40 font-normal">/mo</span></p>
                <p className="text-white/30 text-sm">= $4,788/year</p>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center border border-white/15" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                <span className="text-white/40 font-black text-sm">VS</span>
              </div>
              <div className="text-center">
                <p className="text-white/40 text-xs uppercase tracking-wider font-black mb-2">Potential Return</p>
                <p className="text-5xl font-black mb-1" style={{ fontFamily: "'Outfit', sans-serif", color: ORANGE_LIGHT }}>$80K<span className="text-2xl font-normal" style={{ color: "#FF1A3D60" }}>/yr</span></p>
                <p className="text-white/30 text-sm">2% improvement</p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <p className="text-white/50 text-base">Most practices see meaningful savings within the first 30–60 days.</p>
              <p className="text-white font-black text-xl uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Small Shift. Massive Impact.</p>
            </div>
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="text-white font-bold text-lg uppercase tracking-wide px-10 h-14" style={{ backgroundColor: ORANGE }} data-testid="button-join-math">
              <Link href="/contact">Join DSO Pricing Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Who This Is For</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Built For<br />Growth-Focused Operators
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((item, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl p-7 border-2 border-gray-200 bg-white hover:border-gray-300 transition-colors" data-testid={`item-whofor-${i}`}>
                <CheckCircle2 className="w-7 h-7 shrink-0" style={{ color: ORANGE }} />
                <p className="text-gray-800 font-bold text-lg leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: ORANGE }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <StarRating count={5} size={22} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Start Strengthening<br />Your Margins Today.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button asChild size="lg" className="bg-white font-bold text-lg uppercase tracking-wide px-10 h-14" style={{ color: ORANGE }} data-testid="button-join-final">
              <Link href="/contact">Join DSO Pricing Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/15 bg-transparent text-base font-semibold px-10 h-14">
              <Link href="/contact">Book a Concierge Call with Janelle</Link>
            </Button>
          </div>
          <p className="text-white/40 text-xs font-black uppercase tracking-widest mt-10">Independent. Strategic. Leveraged.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
