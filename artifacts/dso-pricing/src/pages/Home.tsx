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
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Private Membership</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl text-white">
            Stop Operating Without Leverage. Access DSO-Level Pricing —{" "}
            <span className="text-primary">Without Giving Up Control</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            Strengthen margins, increase EBITDA, and scale on your terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-join-hero">
              <Link href="/pricing">Join DSO Pricing Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" data-testid="button-book-hero">
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
              <p className="text-muted-foreground leading-relaxed text-lg">
                Purpose-built for practices from $1M to multi-location — combining pricing leverage with direct access to proven founders, partners, and experts who have solved the real challenges of growth.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "DSO-level buying power across key services", icon: TrendingUp },
                { label: "Access to curated partners aligned with growth and profitability", icon: Users },
                { label: "Direct connection to founders and experts who've scaled real practices", icon: Shield },
              ].map((item, i) => (
                <Card key={i} className="p-5 flex items-start gap-4 border-primary/10 shadow-sm" data-testid={`card-value-${i}`}>
                  <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-base font-medium text-foreground pt-1">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* So You Can */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-foreground">So you can:</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Protect and strengthen your margins",
              "Make smarter, more confident decisions",
              "Build a practice that scales with structure",
            ].map((item, i) => (
              <Card key={i} className="p-8 text-center border-primary/10 shadow-sm bg-background flex flex-col items-center" data-testid={`card-outcome-${i}`}>
                <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                <p className="font-semibold text-lg text-foreground">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Not Just Pricing */}
      <section className="py-20 px-6 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/90 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Not Just Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Inside DSO Pricing, this isn't about theory.
              </h2>
              <p className="text-white/80 leading-relaxed text-lg">
                No corporate layers. No generic advice. No theory. Just people who have done it — and can help you do it faster and smarter.
              </p>
            </div>
            <div className="space-y-6 md:pt-12">
              {[
                "Founders and practice owners who have scaled multi-location businesses",
                "Experts who have solved the exact challenges you're facing",
                "Partners focused on growth, profitability, and long-term value",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4" data-testid={`item-notjust-${i}`}>
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-white/90 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Built Different */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Built Different</p>
              <h2 className="text-3xl font-bold mb-8 text-foreground">You won't get:</h2>
              <div className="space-y-4">
                {[
                  "Endless vendor lists",
                  "Conflicting advice",
                  "Generic \"discounts\" that don't move the needle",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-muted-foreground" data-testid={`item-wont-${i}`}>
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                      <span className="text-destructive font-bold text-sm">✕</span>
                    </div>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 mt-8 md:mt-0 md:pt-8 text-foreground">Instead, you'll get:</h2>
              <div className="space-y-4">
                {[
                  "Curated, high-impact partners only",
                  "Real-world insight from experienced founders",
                  "Strategic alignment focused on strengthening margins",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4" data-testid={`item-will-${i}`}>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-medium text-lg text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Who This Is For</p>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Built for practices ready to scale with intention.</h2>
              <div className="space-y-4">
                {[
                  "$1M+ independent practices",
                  "Multi-associate groups",
                  "Emerging multi-location practices",
                  "Owners expanding teams, operatories, or locations",
                  "Practices focused on strengthening EBITDA and long-term value",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4" data-testid={`item-for-${i}`}>
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                    <p className="text-foreground text-lg">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-white rounded-xl border border-primary/10 shadow-sm">
                <p className="text-sm text-foreground/80 italic leading-relaxed">
                  Most members see measurable margin improvement within the first 60–90 days. Even small improvements (1–3%) can translate into $50K–$150K+ annually depending on practice size.
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">How It Works</p>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Simple. Strategic. Immediate.</h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
                {[
                  "Join the membership",
                  "Unlock DSO-level pricing and curated partners",
                  "Implement with guidance from experienced founders and experts",
                  "Strengthen margins as you scale",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-6 relative z-10" data-testid={`step-how-${i}`}>
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold shrink-0 shadow-md">
                      {i + 1}
                    </div>
                    <p className="font-medium text-lg text-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Math */}
      <section className="py-24 px-6 bg-secondary text-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/95 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Let's Do Some Math</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our members invest: $399/month</h2>
          <p className="text-white/80 mb-10 text-lg md:text-xl">
            Most practices see meaningful margin improvement within the first 60 days of working with the right partners.
          </p>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-10 mb-10 shadow-2xl" data-testid="card-math">
            <p className="text-xl font-medium mb-4 text-white/90">For a $4M practice…</p>
            <p className="text-3xl md:text-4xl font-bold text-primary mb-4">A 2% improvement in margin = $80,000/year</p>
            <p className="text-white/70 text-lg border-t border-white/10 pt-4 mt-4 inline-block">vs. $4,788/year investment</p>
          </Card>
          <p className="text-2xl font-bold text-white mb-10">
            Would you trade $4,788 to strengthen your margins and unlock $80,000+ in value?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14" data-testid="button-join-math">
              <Link href="/pricing">Join DSO Pricing Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent text-lg px-8 h-14" data-testid="button-book-math">
              <Link href="/contact">Book a Growth Accelerator Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Strengthen Your Margins. Build a More Scalable Practice.
          </h2>
          <p className="text-primary-foreground/90 text-xl mb-10">Build a Stronger, More Scalable Dental Business — On Your Terms.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 h-14" data-testid="button-join-cta">
              <Link href="/pricing">Join DSO Pricing Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent text-lg px-8 h-14" data-testid="button-book-cta">
              <Link href="/contact">Book a Growth Accelerator Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
