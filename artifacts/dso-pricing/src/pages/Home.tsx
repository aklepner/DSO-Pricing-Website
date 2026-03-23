import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Users, Shield, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/10 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Private Membership</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl">
            Stop Operating Without Leverage. Access DSO-Level Pricing —{" "}
            <span className="text-primary">Without Giving Up Control</span>
          </h1>
          <p className="text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
            Strengthen margins, increase EBITDA, and scale on your terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" data-testid="button-join-hero">
              <Link href="/pricing">Join DSO Pricing Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white bg-transparent" data-testid="button-book-hero">
              <Link href="/contact">Book a Growth Accelerator Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What DSO Pricing Is */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">What It Is</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                DSO Pricing is a private membership built for growth-focused dental practices and emerging groups.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Purpose-built for practices from $1M to multi-location — combining pricing leverage with direct access to proven founders, partners, and experts who have solved the real challenges of growth.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "DSO-level buying power across key services", icon: TrendingUp },
                { label: "Access to curated partners aligned with growth and profitability", icon: Users },
                { label: "Direct connection to founders and experts who've scaled real practices", icon: Shield },
              ].map((item, i) => (
                <Card key={i} className="p-5 flex items-start gap-4" data-testid={`card-value-${i}`}>
                  <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* So You Can */}
      <section className="py-16 px-6 bg-muted/40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">So you can:</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Protect and strengthen your margins",
              "Make smarter, more confident decisions",
              "Build a practice that scales with structure",
            ].map((item, i) => (
              <Card key={i} className="p-6 text-left" data-testid={`card-outcome-${i}`}>
                <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                <p className="font-semibold text-foreground">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Not Just Pricing */}
      <section className="py-20 px-6 bg-secondary text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Not Just Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Inside DSO Pricing, this isn't about theory.
              </h2>
              <p className="text-white/60 leading-relaxed">
                No corporate layers. No generic advice. No theory. Just people who have done it — and can help you do it faster and smarter.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Founders and practice owners who have scaled multi-location businesses",
                "Experts who have solved the exact challenges you're facing",
                "Partners focused on growth, profitability, and long-term value",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3" data-testid={`item-notjust-${i}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Built Different */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Built Different</p>
              <h2 className="text-3xl font-bold mb-6">You won't get:</h2>
              <div className="space-y-3">
                {[
                  "Endless vendor lists",
                  "Conflicting advice",
                  "Generic \"discounts\" that don't move the needle",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-muted-foreground" data-testid={`item-wont-${i}`}>
                    <span className="text-destructive font-bold">✕</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 mt-8 md:mt-0">Instead, you'll get:</h2>
              <div className="space-y-3">
                {[
                  "Curated, high-impact partners only",
                  "Real-world insight from experienced founders",
                  "Strategic alignment focused on strengthening margins",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3" data-testid={`item-will-${i}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-6 bg-muted/40">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Who This Is For</p>
              <h2 className="text-3xl font-bold mb-6">Built for practices ready to scale with intention.</h2>
              <div className="space-y-3">
                {[
                  "$1M+ independent practices",
                  "Multi-associate groups",
                  "Emerging multi-location practices",
                  "Owners expanding teams, operatories, or locations",
                  "Practices focused on strengthening EBITDA and long-term value",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3" data-testid={`item-for-${i}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground italic">
                Most members see measurable margin improvement within the first 60–90 days. Even small improvements (1–3%) can translate into $50K–$150K+ annually depending on practice size.
              </p>
            </div>

            {/* How It Works */}
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">How It Works</p>
              <h2 className="text-3xl font-bold mb-6">Simple. Strategic. Immediate.</h2>
              <div className="space-y-5">
                {[
                  "Join the membership",
                  "Unlock DSO-level pricing and curated partners",
                  "Implement with guidance from experienced founders and experts",
                  "Strengthen margins as you scale",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4" data-testid={`step-how-${i}`}>
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    <p className="font-medium pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Math */}
      <section className="py-20 px-6 bg-secondary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Let's Do Some Math</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our members invest: $399/month</h2>
          <p className="text-white/70 mb-8 text-lg">
            Most practices see meaningful margin improvement within the first 60 days of working with the right partners.
          </p>
          <Card className="bg-white/5 border-white/10 p-8 mb-8" data-testid="card-math">
            <p className="text-xl font-semibold mb-2">For a $4M practice…</p>
            <p className="text-3xl font-bold text-primary mb-4">A 2% improvement in margin = $80,000/year</p>
            <p className="text-white/60 text-sm">vs. $4,788/year investment</p>
          </Card>
          <p className="text-xl font-bold text-white mb-10">
            Would you trade $4,788 to strengthen your margins and unlock $80,000+ in value?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" data-testid="button-join-math">
              <Link href="/pricing">Join DSO Pricing Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white bg-transparent" data-testid="button-book-math">
              <Link href="/contact">Book a Growth Accelerator Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Strengthen Your Margins. Build a More Scalable Practice.
          </h2>
          <p className="text-primary-foreground/70 mb-8">Build a Stronger, More Scalable Dental Business — On Your Terms.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" data-testid="button-join-cta">
              <Link href="/pricing">Join DSO Pricing Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-transparent" data-testid="button-book-cta">
              <Link href="/contact">Book a Growth Accelerator Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
