import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, X, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fragileItems = [
  "Growing revenue, shrinking margins",
  "Reactive decision-making",
  "Vendor overwhelm",
  "Team strain",
  "Expansion without structure",
];

const scalableItems = [
  "Margins protected at every stage",
  "Intentional, strategic decisions",
  "Curated partners aligned with growth",
  "Strong teams and systems",
  "Expansion with structure",
];

export default function BuiltDifferent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Built Different</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Built for Practices That Want to Scale —{" "}
            <span className="text-primary">Without Losing Their Margins</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
            Most growth paths trade profit for growth. We help you grow and keep more of what you earn.
          </p>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Why This Exists</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Most practices are pushed into two paths:</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <Card className="p-6 border-destructive/20" data-testid="card-path-1">
              <p className="font-semibold text-lg mb-2">Scale fast</p>
              <p className="text-muted-foreground">And watch margins tighten.</p>
            </Card>
            <Card className="p-6 border-muted" data-testid="card-path-2">
              <p className="font-semibold text-lg mb-2">Stay small</p>
              <p className="text-muted-foreground">And limit long-term growth.</p>
            </Card>
          </div>
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-8" data-testid="card-third-path">
            <p className="text-lg font-semibold mb-2">Neither builds a strong, valuable business.</p>
            <p className="text-foreground">
              DSO Pricing was built for practices that want a third path:{" "}
              <strong className="text-primary">Profitable, structured growth.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Growth Comparison */}
      <section className="py-20 px-6 bg-muted/40">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 text-center">The Choice</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Which Growth Path Are You Building?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 border-destructive/20 bg-destructive/5" data-testid="card-fragile">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <h3 className="text-xl font-bold text-destructive/80">Fragile Growth</h3>
              </div>
              <ul className="space-y-3">
                {fragileItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`item-fragile-${i}`}>
                    <X className="w-4 h-4 text-destructive/60 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-8 border-primary/30 bg-primary/5" data-testid="card-scalable">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <h3 className="text-xl font-bold text-primary">Scalable Growth</h3>
              </div>
              <ul className="space-y-3">
                {scalableItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`item-scalable-${i}`}>
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Better Partners */}
      <section className="py-20 px-6 bg-secondary text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Better Partners. Better Decisions.</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Most platforms give you more options. We don't.
              </h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                Because more options don't lead to better outcomes — better alignment does.
              </p>
              <p className="text-white/60 leading-relaxed">
                With DSO Pricing, you get:
              </p>
            </div>
            <div className="space-y-5 mt-2 md:mt-16">
              {[
                "A curated group of partners focused on improving margins",
                "Access to founders and experts who have scaled real practices",
                "Direct, real conversations that lead to faster, better decisions",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3" data-testid={`item-partners-${i}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Growth */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Built for Real-World Growth</p>
              <h2 className="text-3xl font-bold mb-6">The environment is changing:</h2>
              <div className="space-y-3 mb-8">
                {[
                  "Costs are rising",
                  "Labor is unpredictable",
                  "Margins are tightening",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-muted-foreground" data-testid={`item-env-${i}`}>
                    <span className="text-destructive font-bold">↑</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed italic">Most practices react too late.</p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-6">We help you stay ahead by:</p>
              <div className="space-y-4">
                {[
                  "Strengthening cost structure through better pricing",
                  "Simplifying partner and vendor decisions",
                  "Supporting faster, more confident implementation",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3" data-testid={`item-ahead-${i}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-muted-foreground leading-relaxed">
                So your growth isn't chaotic — it's controlled and built to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-6 bg-muted/40">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Who This Is For</p>
              <h2 className="text-2xl font-bold mb-6">This is for practices that:</h2>
              <div className="space-y-3">
                {[
                  "Are doing $1M+ and want to protect and grow margins",
                  "Care about profitability — not just top-line revenue",
                  "Are scaling and need stronger systems and partners",
                  "Want to stay in control as they grow",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3" data-testid={`item-isfor-${i}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-muted-foreground">This is NOT for:</h2>
              <div className="space-y-3">
                {[
                  "Practices chasing short-term wins",
                  "Owners who don't track performance or profitability",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-muted-foreground" data-testid={`item-notfor-${i}`}>
                    <X className="w-4 h-4 shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Start Building a More Profitable, Scalable Practice
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
