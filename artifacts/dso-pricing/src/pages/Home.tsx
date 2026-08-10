import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Star, ChevronDown, ChevronUp, DollarSign, Users, TrendingUp, Shield, Zap, BarChart3, Package, Network, Lightbulb, HeartHandshake, Award, Target } from "lucide-react";
import { useState, useEffect } from "react";
import { Category } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useOrderUrl } from "@/contexts/AffiliateContext";

const NAVY = "#0F0F0F";
const NAVY2 = "#000000";
const ORANGE = "#DD042A";
const ORANGE_LIGHT = "#FF1A3D";

function CategoryMiniGrid() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { getSupabase } = await import("@/lib/supabase");
        const { data } = await getSupabase().from("categories").select("*").order("name");
        setCategories(data || []);
      } catch {
        // silently omit the grid if categories can't load
      }
    }
    fetchCategories();
  }, []);

  if (categories.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-10 max-w-5xl mx-auto">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`/built-different/vendors/${cat.id}`}
          className="group flex items-center gap-3 rounded-xl px-4 py-3 border border-white/8 transition-all duration-200 hover:border-white/25 text-left"
          style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
          data-testid={`link-home-category-${cat.id}`}
        >
          {cat.icon ? (
            <img src={cat.icon} alt="" className="w-8 h-8 object-contain shrink-0" />
          ) : (
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(221,4,42,0.15)" }}>
              <span className="text-white font-black text-xs">{cat.name.charAt(0)}</span>
            </div>
          )}
          <span className="text-white/80 group-hover:text-white text-xs font-bold leading-snug transition-colors">
            {cat.name}
          </span>
        </Link>
      ))}
      <Link
        href="/built-different/vendors/all"
        className="group flex items-center gap-3 rounded-xl px-4 py-3 border border-white/8 transition-all duration-200 hover:border-white/25 text-left"
        style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
        data-testid="link-home-category-all"
      >
        <img src="/dso-pricing-logo.png" alt="" className="w-8 h-8 object-contain shrink-0" />
        <span className="text-white/80 group-hover:text-white text-xs font-bold leading-snug transition-colors">
          All Vendors
        </span>
      </Link>
    </div>
  );
}

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
  {
    q: "Does DSO Pricing actually pay for itself?",
    a: "Yes. Most members cover the cost with one change.\n\nFor example, many practices save around $50 per crown. At approximately 30 crowns per month, that's $1,500 per month in savings.\n\nWith a $297 monthly membership, that's $1,200 per month back in your practice from one vendor alone — and that's before we look at aligners, implants, or supplies.",
  },
  {
    q: "How much can I realistically save on overhead?",
    a: "It depends on your current vendors and volume, but most practices see savings across labs (crowns, implants), aligners, supplies, and merchant services. Even small improvements across multiple categories can add up to thousands per month in reduced overhead.",
  },
  {
    q: "Is this just a dental buying group?",
    a: "No. Most buying groups focus on discounts. DSO Pricing goes further by helping you choose the right vendors, implement changes that improve margins, and get guidance from operators who have scaled practices.",
  },
  {
    q: "How is DSO Pricing different from other groups?",
    a: "Traditional groups focus on negotiated pricing and vendor access. DSO Pricing focuses on profitability, hands-on guidance, and helping you think and operate like a high-performing group. We also partner with DentalFlix, so you can gain CE. Most groups give you options. We help you make the right decisions.",
  },
  {
    q: "What does \"DSO-level pricing\" actually mean?",
    a: "DSOs get better pricing because they have higher volume, stronger vendor relationships, and more negotiation leverage. DSO Pricing gives independent dentists access to similar pricing structures, preferred partners, and group-level advantages — so you can compete without selling your practice.",
  },
  {
    q: "Who is DSO Pricing best for?",
    a: "DSO Pricing is best for practices doing $1M or more, growth-focused dentists, multi-associate or multi-location practices, and owners looking to increase profitability and EBITDA. If you are trying to grow or prepare for an eventual exit, this is built for you.",
  },
  {
    q: "How quickly can I start seeing savings?",
    a: "In many cases, immediately. Once you switch to preferred vendors, you can begin reducing costs right away — especially in high-volume categories like labs or aligners. Many practices see meaningful savings within the first 30 to 60 days.",
  },
  {
    q: "Do I have to switch all my vendors?",
    a: "No. Most members start with one or two high-impact changes, such as labs or aligners, and expand from there. You stay in control. We help you prioritize what will actually move the needle.",
  },
  {
    q: "Are there long-term contracts or commitments?",
    a: "No long-term, restrictive contracts. You are not locked into multi-year agreements. The goal is to deliver enough value that staying is an easy decision.",
  },
  {
    q: "How does this help me grow my practice, not just save money?",
    a: "Saving money is just the starting point. Inside DSO Pricing, you also get strategic guidance from experienced operators, help identifying growth opportunities, and support improving efficiency and profitability. This is why most dentists join for savings, but stay for growth.",
  },
  {
    q: "What is the biggest mistake dentists make with overhead?",
    a: "Focusing on small savings instead of big opportunities. Many dentists try to save small amounts here and there while missing opportunities worth thousands per month. The real leverage comes from choosing the right vendors, improving efficiency, and making better strategic decisions.",
  },
  {
    q: "How can independent dentists compete with DSOs?",
    a: "By operating smarter, not just working harder. DSOs win because of better pricing, stronger vendor relationships, and more structured decision-making. DSO Pricing helps you access those same advantages while staying independent and in control.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl p-6 cursor-pointer hover:border-white/20 transition-colors" onClick={() => setOpen(!open)} style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
      <div className="flex items-start justify-between gap-4">
        <p className="text-white font-bold text-base leading-snug">{q}</p>
        {open ? <ChevronUp className="w-5 h-5 text-white/60 shrink-0 mt-0.5" /> : <ChevronDown className="w-5 h-5 text-white/60 shrink-0 mt-0.5" />}
      </div>
      {open && <p className="text-white/60 mt-4 leading-relaxed text-sm whitespace-pre-line">{a}</p>}
    </div>
  );
}


export default function Home() {
  const orderUrl = useOrderUrl();
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
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,10,0.78)" }} />
        <div className="relative z-10 pt-48 pb-16 px-6 text-center max-w-5xl mx-auto">
          <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 uppercase" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
            Get DSO-Level Pricing…<br />
            <span style={{ color: ORANGE }}>Without Becoming a DSO</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Most dentists overpay for overhead. DSO Pricing fixes that and helps you operate like a high-performing group.
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Button asChild size="lg" className="text-white font-black text-sm uppercase tracking-widest h-14 px-12" style={{ backgroundColor: ORANGE }} data-testid="button-join-hero">
                <a href={orderUrl} target="_blank" rel="noopener noreferrer">Sign Up $297/mo</a>
              </Button>
              <a
                href="https://www.dentira.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 rounded-lg text-white text-sm font-black uppercase tracking-widest border-2 border-white/40 hover:border-white transition-colors"
                style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
              >
                Login to DSO Pricing
              </a>
            </div>
            <div className="flex flex-col items-center gap-0.5 text-center">
              <p className="font-bold text-white" style={{ fontSize: "15px" }}>Limited Summer Special...Normally $797</p>
              <p className="font-bold text-white" style={{ fontSize: "15px" }}>
                <Link href="/profitability-call" className="text-white underline underline-offset-2 hover:text-white/70 transition-colors" data-testid="button-book-hero">→ Book a Business Advisor Profitability Call</Link>
              </p>
            </div>
          </div>
        </div>

        {/* TRUST BADGES */}
        <div className="relative z-10 border-t border-white/15 grid grid-cols-3 divide-x divide-white/15 max-w-full" style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
          {[
            { icon: Award, label: "Driven by Values", sub: "Kindness. Integrity. Results." },
            { icon: Shield, label: "Built for Dentists", sub: "By operators, for operators." },
            { icon: Target, label: "Proven Results", sub: "$1,100+/mo back in your practice." },
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


      {/* VENDOR BAND */}
      <section className="pt-16 pb-10 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white font-black uppercase tracking-wide mb-3" data-testid="text-gpo-label">The purpose of this app:</p>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8" data-testid="text-gpo-description">
            DSO Pricing is a group purchasing organization for dental practices. Members get DSO-level pricing from a vetted network of product and service vendors, and sign in at login to reach their member benefits and ordering platform.
          </p>
          <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Our Network</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
            More Than a Buying Group.<br />Vetted Vendors. Strategic Guidance.<br />Profitable Growth.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-white font-black text-sm uppercase tracking-widest h-14 px-10 border-2 border-white/30 hover:border-white bg-transparent hover:bg-white/10" data-testid="button-our-vendors">
              <Link href="/built-different/vendors">Our Vendors</Link>
            </Button>
            <Button asChild size="lg" className="text-white font-black text-sm uppercase tracking-widest h-14 px-10" style={{ backgroundColor: ORANGE }}>
              <Link href="/calculator">Calculate Your Savings <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
          <CategoryMiniGrid />
        </div>
      </section>

      {/* SAVE / GROW / SUPPORT */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Why Members Stay</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Most Dentists Join for Savings.<br />They Stay Because We Help Them Grow.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "Save",
                color: ORANGE,
                icon: DollarSign,
                bullets: [
                  "$1,000+/month saved on crowns alone",
                  "Access to 700+ vendors across labs, aligners, implants, and more",
                ],
              },
              {
                label: "Grow",
                color: ORANGE,
                icon: TrendingUp,
                bullets: [
                  "Hands-on guidance from operators who've scaled multi-location practices",
                  "Proven strategies to solve real growth bottlenecks",
                  "Advisors focused on increasing your profitability and EBITDA",
                ],
              },
              {
                label: "Support",
                color: ORANGE,
                icon: Users,
                bullets: [
                  "CE through DentalFlix",
                  "Network with growth-focused, like-minded dentists",
                ],
              },
            ].map((col, i) => (
              <div key={i} className="rounded-2xl p-8 border-2 border-gray-100 bg-white flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ backgroundColor: ORANGE }}>
                    <col.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-black text-2xl text-gray-900 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>{col.label}</p>
                </div>
                <ul className="space-y-3">
                  {col.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: ORANGE }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild size="lg" className="text-white font-bold uppercase tracking-wide h-14 px-10" style={{ backgroundColor: ORANGE }}>
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">Join DSO Pricing <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* WHAT IS DSO PRICING */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>What Is DSO Pricing</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Get the Same Pricing, Partners, and Strategic Support Top-Performing Groups Use to Grow.
              </h2>
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-white font-black text-lg uppercase mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Inside, you get:</p>
                <ul className="space-y-3">
                  {[
                    "DSO-level pricing across labs, aligners, implants, and more",
                    "Proven vendors selected for one reason: improving your margins",
                    "Hands-on guidance from operators who've scaled multi-location practices",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-base">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: ORANGE }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white font-black text-lg uppercase mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>So you can:</p>
                <ul className="space-y-3">
                  {[
                    "Keep more profit from every patient",
                    "Make confident, high-impact decisions",
                    "Build a practice that scales — without guesswork",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-base">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: ORANGE }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THIS PAYS FOR ITSELF */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>The Math</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              This Pays For Itself… Fast
            </h2>
            <p className="text-white/55 text-lg mt-4">Most practices cover the cost with one change.</p>
          </div>
          <div className="rounded-2xl border-2 border-white/15 p-10 mb-8" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
            <div className="space-y-4 mb-8">
              {[
                { label: "Save ~$50 per crown", detail: "At ~30 crowns/month = ~$1,500/month saved" },
                { label: "Membership: $297/mo", detail: null },
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
              <p className="font-black text-white mb-2" style={{ fontSize: "3.5rem", fontFamily: "'Outfit', sans-serif", color: ORANGE }}>$1,100/mo</p>
              <p className="font-black text-white uppercase" style={{ fontSize: "28px", fontFamily: "'Outfit', sans-serif" }}>BACK IN YOUR PRACTICE</p>
              <p className="text-white/40 text-sm mt-3 italic">And that's just one vendor.</p>
            </div>
            <div className="mt-6 rounded-xl p-6 text-center border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
              <p className="text-white font-black text-xl uppercase mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>If one decision makes you $1,100/mo…</p>
              <p className="text-white/50 text-base">What happens when you optimize the rest?</p>
            </div>
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="text-white font-black uppercase tracking-widest h-14 px-12" style={{ backgroundColor: ORANGE }}>
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">Sign Up $297/Mo <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
            <p className="text-white/30 text-sm mt-3">Limited Summer Special...Normally $797</p>
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

      {/* GET IN BEFORE PRICING INCREASES */}
      <section className="py-20 px-6" style={{ backgroundColor: ORANGE }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/80 text-xs font-black uppercase tracking-widest mb-4">Founding Member Pricing</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Get In Before<br />Pricing Increases
          </h2>
          <div className="flex items-center justify-center gap-6 mb-4">
            <p className="font-black text-white" style={{ fontSize: "3rem", fontFamily: "'Outfit', sans-serif" }}>$297<span className="text-2xl font-normal opacity-70">/mo</span></p>
            <p className="text-white/50 text-2xl font-black line-through">$797/mo</p>
          </div>
          <p className="text-white/80 text-base font-semibold mb-8">Limited to the first 100 practices.</p>
          <Button asChild size="lg" className="bg-white font-black text-sm uppercase tracking-widest h-14 px-12" style={{ color: ORANGE }}>
            <a href={orderUrl} target="_blank" rel="noopener noreferrer">Sign Up $297/Mo</a>
          </Button>
          <p className="text-white/60 text-sm mt-4 italic">Most members cover the cost with one change.</p>
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
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
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
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">Sign Up $297/Mo <ArrowRight className="ml-2 w-5 h-5" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/15 bg-transparent text-base font-semibold px-10 h-14" data-testid="button-book-final">
              <Link href="/profitability-call">Book a Business Advisor Profitability Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
