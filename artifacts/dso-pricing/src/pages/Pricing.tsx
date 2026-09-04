import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Star, DollarSign, Users, Package, Network, HeartHandshake, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useOrderUrl } from "@/contexts/AffiliateContext";

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
  { label: "CE with DentalFlix", icon: BookOpen },
];

const audiences = [
  "Private practices doing $1M+",
  "Growing groups scaling to multiple locations",
  "Operators serious about margin and structure",
];

export default function Pricing() {
  const orderUrl = useOrderUrl();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="flex justify-center mb-6">
            <StarRating count={5} size={20} />
          </div>
          <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 uppercase" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
            Members<br />
            <span style={{ color: ORANGE }}>Pricing</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Limited to the first 100 practices. Lock in your savings before pricing increases.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="text-white font-bold text-base uppercase tracking-wide h-14 px-10" style={{ backgroundColor: ORANGE }} data-testid="button-join-hero">
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">Lock In Your Savings</a>
            </Button>
          </div>
        </div>
      </section>

      {/* PRICE BLOCK */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl border-2 border-white/15 p-12 relative overflow-hidden text-center" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
            <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl" style={{ backgroundColor: ORANGE }} />
            <p className="text-white/50 font-black uppercase tracking-widest text-xs mb-2">Member Pricing</p>
            <p className="text-white/30 text-sm font-semibold mb-4">Limited to the first 100 practices</p>
            <div className="flex items-start justify-center gap-1 mb-2">
              <span className="text-3xl font-bold text-white mt-3">$</span>
              <span className="font-black text-white leading-none" style={{ fontSize: "6rem", fontFamily: "'Outfit', sans-serif" }}>297</span>
              <span className="text-xl text-white/50 mt-9">/mo</span>
            </div>
            <p className="text-white/40 mb-8 text-sm font-semibold uppercase tracking-wide">No long-term contracts.</p>
            <Button asChild size="lg" className="w-full text-white font-bold text-lg uppercase tracking-wide h-14" style={{ backgroundColor: ORANGE }} data-testid="button-join-price">
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">Lock In Your Savings <ArrowRight className="ml-2 w-5 h-5" /></a>
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
              Every relationship is designed to give you better access, better terms, and better outcomes.
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

      {/* THIS PAYS FOR ITSELF */}
      <section className="py-20 px-6 border-t border-white" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>The Math</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              This Pays For Itself… Fast
            </h2>
            <div className="flex justify-center mt-8">
              <Button asChild size="lg" className="text-white font-black text-sm uppercase tracking-widest h-14 px-10" style={{ backgroundColor: ORANGE }}>
                <Link href="/calculator">Calculate Your Savings <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-white/15 p-10 mb-8" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
            <div className="space-y-4 mb-8">
              {[
                { label: "Save $400 on Every Clear Aligner Case", detail: "At 4 aligners/month = $1,600/month saved" },
                { label: "Save $50 per crown", detail: "At 30 crowns/month = $1,500/month saved" },
                { label: "Subtract your Membership: $297/mo", detail: null },
              ].map((row, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: ORANGE }} />
                  <div>
                    <p className="text-white font-bold text-lg">{row.label}</p>
                    {row.detail && <p className="text-white/50 text-sm mt-0.5">{row.detail}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center py-6 border-t border-white/10">
              <p className="text-white/50 text-base mb-2">That's</p>
              <p className="font-black text-[38px] sm:text-[56px] leading-none whitespace-nowrap mb-4" style={{ fontFamily: "'Outfit', sans-serif", color: ORANGE }}>$2,800/month</p>
              <p className="font-black text-white uppercase" style={{ fontSize: "28px", fontFamily: "'Outfit', sans-serif" }}>BACK IN YOUR PRACTICE</p>
            </div>
            <div className="mt-6 rounded-xl p-6 text-center border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
              <p className="text-white font-black text-xl uppercase mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>If two decisions makes you $2,800/month…</p>
              <p className="text-white text-base font-bold underline underline-offset-4">What happens when you optimize the rest?</p>
            </div>
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="text-white font-black uppercase tracking-widest h-14 px-12" style={{ backgroundColor: ORANGE }}>
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">Sign Up $297/Mo <ArrowRight className="ml-2 w-4 h-4" /></a>
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
          <p className="text-white/80 text-xs font-black uppercase tracking-widest mb-4">Member Pricing</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Get In Before<br />Pricing Increases
          </h2>
          <div className="flex items-center justify-center gap-6 mb-4">
            <p className="font-black text-white" style={{ fontSize: "3rem", fontFamily: "'Outfit', sans-serif" }}>$297<span className="text-2xl font-normal opacity-70">/mo</span></p>
          </div>
          <p className="text-white/80 font-semibold mb-8">Limited to the first 100 practices.</p>
          <div className="flex justify-center mt-10">
            <Button asChild size="lg" className="bg-white font-bold text-lg uppercase tracking-wide px-10 h-14" style={{ color: ORANGE }} data-testid="button-join-final">
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">Lock In Your Savings <ArrowRight className="ml-2 w-5 h-5" /></a>
            </Button>
          </div>
          <p className="text-white/60 text-sm mt-5 italic">Most members cover the cost with one change.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
