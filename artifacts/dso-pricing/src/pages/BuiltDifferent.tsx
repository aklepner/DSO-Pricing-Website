import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X, TrendingUp, Shield, Target, Users, DollarSign, BookOpen, ArrowRight, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useOrderUrl } from "@/contexts/AffiliateContext";

const NAVY = "#0F0F0F";
const NAVY2 = "#000000";
const ORANGE = "#DD042A";
const ORANGE_LIGHT = "#FF1A3D";

const values = [
  { label: "Kindness", icon: HeartHandshake },
  { label: "Abundance", icon: TrendingUp },
  { label: "Discipline", icon: Shield },
  { label: "Integrity", icon: Target },
];

export default function BuiltDifferent() {
  const orderUrl = useOrderUrl();
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
            Why DSO Pricing<br />
            <span style={{ color: ORANGE }}>Is Different</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            Most groups give you discounts. We help you increase profit and grow your practice — including CE.
          </p>
        </div>
      </section>

      {/* CUT OVERHEAD COSTS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>The Real Opportunity</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Cut Overhead Costs While Growing Your Practice
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Most dentists focus on saving $10 here and there. That's not what grows your practice.
              </p>
              <p className="text-gray-700 font-bold text-lg border-l-4 pl-5" style={{ borderColor: ORANGE }}>
                The real opportunity is choosing the right vendors, improving efficiency, and making better growth decisions.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-500 text-sm font-black uppercase tracking-widest mb-5">DSO Pricing helps you:</p>
              {[
                { label: "Choose the right vendors", icon: Target, desc: "Stop guessing. We've already vetted the vendors that actually move the needle." },
                { label: "Improve efficiency", icon: Shield, desc: "Better systems and smarter decisions — not just cheaper products." },
                { label: "Make better growth decisions", icon: TrendingUp, desc: "With guidance from operators who've actually scaled practices like yours." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-6 border-2 border-gray-100 flex items-start gap-4 bg-white hover:border-gray-200 transition-colors">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: ORANGE }}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base uppercase">{item.label}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
              <p className="text-gray-400 text-sm italic pl-2">…without having to figure it out yourself.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRADITIONAL vs DSO PRICING */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>The Difference</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Most Groups Give You Access.<br />We Give You Direction.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="rounded-xl p-10 bg-white border-2 border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-300 rounded-t-xl" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
                  <X className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-2xl font-black text-gray-500 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Traditional Buying Groups</h3>
              </div>
              <ul className="space-y-4">
                {["Vendor lists", "Discounts", "You figure it out"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gray-300 font-bold shrink-0 mt-0.5 text-lg">✕</span>
                    <span className="text-gray-400 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* DSO Pricing */}
            <div className="rounded-xl p-10 bg-white border-2 relative overflow-hidden" style={{ borderColor: ORANGE }}>
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-xl" style={{ backgroundColor: ORANGE }} />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: "#fff0f3" }}>
                  <CheckCircle2 className="w-5 h-5" style={{ color: ORANGE }} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>DSO Pricing</h3>
              </div>
              <ul className="space-y-4">
                {["High-impact vendors", "Hands-on guidance", "Clear direction on what to change"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: ORANGE }} />
                    <span className="text-gray-700 font-semibold text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MORE THAN JUST SAVINGS */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>More Than Just Savings</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              You Become Part of a Community<br />Focused on Your Growth.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: DollarSign,
                title: "DSO-Level Pricing",
                desc: "DSO-level pricing across labs, aligners, implants, and supplies",
              },
              {
                icon: Users,
                title: "Operator Guidance",
                desc: "Guidance from operators who've scaled multi-location practices",
              },
              {
                icon: BookOpen,
                title: "CE Credits",
                desc: "CE through DentalFlix",
              },
              {
                icon: HeartHandshake,
                title: "Peer Network",
                desc: "A network of growth-focused dentists",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-8 border border-white/10 flex flex-col gap-5 text-center" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto" style={{ backgroundColor: ORANGE }}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-black text-white text-lg uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.title}</p>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Our Values</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight mb-14" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What We Stand For
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <div key={i} className="rounded-2xl p-8 border-2 border-gray-100 flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: ORANGE }}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-black text-gray-900 text-lg uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: ORANGE }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/80 text-xs font-black uppercase tracking-widest mb-4">Founding Member Pricing</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Get In Before<br />Pricing Increases
          </h2>
          <div className="flex items-center justify-center gap-6 mb-4">
            <p className="font-black text-white" style={{ fontSize: "3rem", fontFamily: "'Outfit', sans-serif" }}>$399<span className="text-2xl font-normal opacity-70">/mo</span></p>
            <p className="text-white/50 text-2xl font-black line-through">$499/mo</p>
          </div>
          <p className="text-white/80 text-base font-semibold mb-8">Limited only to 100 practices.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white font-bold text-lg uppercase tracking-wide px-10 h-14" style={{ color: ORANGE }} data-testid="button-join-cta">
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">Lock In $399/Mo <ArrowRight className="ml-2 w-5 h-5" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/15 bg-transparent text-base font-semibold px-10 h-14" data-testid="button-book-cta">
              <a href="https://link.elijahdesmond.com/widget/booking/qRepUNdAesl5YtZoT17b" target="_blank" rel="noopener noreferrer">Book a Concierge Call with Janelle</a>
            </Button>
          </div>
          <p className="text-white/60 text-sm mt-5 italic">Most members cover the cost with one change.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
