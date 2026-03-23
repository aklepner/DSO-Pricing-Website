import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/10 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Membership</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            DSO-Level Pricing{" "}
            <span className="text-primary">Without Giving Up Control</span>
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Get better pricing, better partners, and better margins immediately.
          </p>
        </div>
      </section>

      {/* Price Card */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-lg mx-auto">
          <Card className="p-10 text-center border-primary/30 shadow-xl" data-testid="card-price">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">Monthly Membership</p>
            <div className="flex items-start justify-center gap-1 mb-2">
              <span className="text-2xl font-bold text-foreground mt-2">$</span>
              <span className="text-7xl font-bold text-foreground leading-none">399</span>
              <span className="text-xl text-muted-foreground mt-4">/mo</span>
            </div>
            <p className="text-muted-foreground text-sm mb-8">No contracts. Cancel anytime.</p>
            <Button asChild size="lg" className="w-full" data-testid="button-join-price">
              <Link href="/contact">Join DSO Pricing Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 text-center">What You Get</p>
          <h2 className="text-3xl font-bold mb-10 text-center">Inside DSO Pricing, you get:</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Preferred pricing (10%+ savings) across vetted vendors",
              "Reduced or waived setup fees with select partners",
              "Exclusive offers not available publicly",
              "Direct access to operators and experts",
            ].map((item, i) => (
              <Card key={i} className="p-5 flex items-start gap-4" data-testid={`card-get-${i}`}>
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="font-medium text-foreground">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Math */}
      <section className="py-20 px-6 bg-secondary text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 text-center">The Math</p>
          <h2 className="text-3xl font-bold mb-3 text-center">If your practice collects $4M:</h2>
          <p className="text-white/60 text-center mb-10">
            A 2% margin improvement = $80,000/year
          </p>
          <Card className="bg-white/5 border-white/10 p-8 mb-4" data-testid="card-math-detail">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
              <div>
                <p className="text-white/60 text-sm mb-1">Your investment</p>
                <p className="text-2xl font-bold">$399/month</p>
                <p className="text-white/50 text-sm">= $4,788/year</p>
              </div>
              <div className="text-4xl text-white/20 font-bold">vs</div>
              <div className="text-right">
                <p className="text-white/60 text-sm mb-1">Potential return</p>
                <p className="text-2xl font-bold text-primary">$80,000/year</p>
                <p className="text-white/50 text-sm">2% margin improvement</p>
              </div>
            </div>
            <p className="text-center text-lg font-bold">
              Would you trade $4,788 to make an extra $80,000?
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 text-center">How It Works</p>
          <h2 className="text-3xl font-bold mb-3 text-center">Simple. Fast. Immediate.</h2>
          <p className="text-muted-foreground text-center mb-12">Four steps to stronger margins.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { step: 1, title: "Join the membership" },
              { step: 2, title: "Unlock preferred vendor pricing" },
              { step: 3, title: "Work with the right partners" },
              { step: 4, title: "Increase margins and reinvest into growth" },
            ].map(({ step, title }) => (
              <Card key={step} className="p-6 flex items-start gap-5" data-testid={`card-step-${step}`}>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                  {step}
                </div>
                <p className="font-semibold pt-2">{title}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-6 bg-muted/40">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Who This Is For</p>
          <h2 className="text-3xl font-bold mb-10">Built for growth-focused operators.</h2>
          <div className="flex flex-col gap-4 items-center">
            {[
              "$1M+ practices",
              "Owners focused on profitability",
              "Practices and emerging groups actively growing or scaling",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-lg" data-testid={`item-whofor-${i}`}>
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Start Keeping More of What You Earn
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" variant="secondary" data-testid="button-join-final">
              <Link href="/contact">Join DSO Pricing Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
          <p className="mt-6 text-primary-foreground/60 text-sm">
            Not sure if it's a fit?{" "}
            <Link href="/contact" className="underline underline-offset-2 hover:text-primary-foreground transition-colors" data-testid="link-book-secondary">
              Book a Growth Accelerator Call
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
