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
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Membership</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            DSO-Level Pricing{" "}
            <span className="text-primary">Without Giving Up Control</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Get better pricing, better partners, and better margins immediately.
          </p>
        </div>
      </section>

      {/* Price Card */}
      <section className="py-24 px-6 bg-background relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-secondary" />
        <div className="max-w-lg mx-auto relative z-10">
          <Card className="p-12 text-center border-primary/20 shadow-2xl bg-white relative overflow-hidden" data-testid="card-price">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-primary/60" />
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Monthly Membership</p>
            <div className="flex items-start justify-center gap-1 mb-3">
              <span className="text-2xl font-bold text-foreground mt-2">$</span>
              <span className="text-7xl font-bold text-foreground leading-none tracking-tight">399</span>
              <span className="text-xl text-muted-foreground mt-6">/mo</span>
            </div>
            <p className="text-muted-foreground text-base mb-10">No contracts. Cancel anytime.</p>
            <Button asChild size="lg" className="w-full h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-md" data-testid="button-join-price">
              <Link href="/contact">Join DSO Pricing Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 text-center">What You Get</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">Inside DSO Pricing, you get:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Preferred pricing (10%+ savings) across vetted vendors",
              "Reduced or waived setup fees with select partners",
              "Exclusive offers not available publicly",
              "Direct access to operators and experts",
            ].map((item, i) => (
              <Card key={i} className="p-8 flex items-start gap-5 border-border shadow-sm bg-white" data-testid={`card-get-${i}`}>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-lg text-foreground pt-1">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Math */}
      <section className="py-24 px-6 bg-secondary text-white relative">
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary to-secondary/90 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 text-center">The Math</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">If your practice collects $4M:</h2>
          <p className="text-white/80 text-center mb-12 text-xl">
            A 2% margin improvement = <span className="text-white font-bold">$80,000/year</span>
          </p>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-10 mb-8 shadow-xl" data-testid="card-math-detail">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-8 border-b border-white/10 gap-8">
              <div className="text-center md:text-left w-full md:w-auto">
                <p className="text-white/70 text-sm mb-2 uppercase tracking-wider font-medium">Your investment</p>
                <p className="text-4xl font-bold text-white mb-1">$399<span className="text-xl text-white/70 font-normal">/mo</span></p>
                <p className="text-white/50 text-base">= $4,788/year</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <span className="text-lg text-white/40 font-bold uppercase tracking-widest">VS</span>
              </div>
              <div className="text-center md:text-right w-full md:w-auto">
                <p className="text-white/70 text-sm mb-2 uppercase tracking-wider font-medium">Potential return</p>
                <p className="text-4xl font-bold text-primary mb-1">$80,000<span className="text-xl text-primary/70 font-normal">/yr</span></p>
                <p className="text-white/50 text-base">2% margin improvement</p>
              </div>
            </div>
            <p className="text-center text-2xl font-bold text-white">
              Would you trade $4,788 to make an extra $80,000?
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 text-center">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">Simple. Fast. Immediate.</h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">Four steps to stronger margins.</p>
          <div className="grid md:grid-cols-2 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary/5 rounded-full z-0" />
            {[
              { step: 1, title: "Join the membership", desc: "Sign up in minutes." },
              { step: 2, title: "Unlock preferred pricing", desc: "Access the partner portal." },
              { step: 3, title: "Work with the right partners", desc: "Connect directly with vetted experts." },
              { step: 4, title: "Increase margins", desc: "Reinvest into profitable growth." },
            ].map(({ step, title, desc }) => (
              <Card key={step} className="p-8 flex items-start gap-6 border-border shadow-sm hover:shadow-md transition-shadow bg-white z-10" data-testid={`card-step-${step}`}>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shrink-0 shadow-sm">
                  {step}
                </div>
                <div>
                  <p className="font-bold text-xl text-foreground mb-1">{title}</p>
                  <p className="text-muted-foreground">{desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Who This Is For</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Built for growth-focused operators.</h2>
          <div className="flex flex-col gap-6 items-center">
            {[
              "$1M+ practices",
              "Owners focused on profitability",
              "Practices and emerging groups actively growing or scaling",
            ].map((item, i) => (
              <Card key={i} className="w-full max-w-lg p-6 flex items-center gap-4 bg-white border-primary/10 shadow-sm" data-testid={`item-whofor-${i}`}>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-lg text-foreground">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-8">
            Start Keeping More of What You Earn
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 h-14" data-testid="button-join-final">
              <Link href="/contact">Join DSO Pricing Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
          <p className="mt-8 text-primary-foreground/80 text-base">
            Not sure if it's a fit?{" "}
            <Link href="/contact" className="font-medium underline underline-offset-4 hover:text-primary-foreground transition-colors" data-testid="link-book-secondary">
              Book a Growth Accelerator Call
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
