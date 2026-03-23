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
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#f59e0b" }}>Built Different</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Built for Practices That Want to Scale —{" "}
            <span style={{ color: "#f59e0b" }}>Without Losing Their Margins</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Most growth paths trade profit for growth. We help you grow and keep more of what you earn.
          </p>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-base font-semibold uppercase tracking-widest mb-3 text-center md:text-left">Why This Exists</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left text-foreground">Most practices are pushed into two paths:</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-destructive/20 shadow-sm" data-testid="card-path-1">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-destructive font-bold text-xl">1</span>
              </div>
              <p className="font-bold text-2xl mb-3 text-foreground">Scale fast</p>
              <p className="text-muted-foreground text-lg">And watch margins tighten as operational bloat takes over.</p>
            </Card>
            <Card className="p-8 border-border shadow-sm" data-testid="card-path-2">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-6">
                <span className="text-muted-foreground font-bold text-xl">2</span>
              </div>
              <p className="font-bold text-2xl mb-3 text-foreground">Stay small</p>
              <p className="text-muted-foreground text-lg">And limit your long-term growth and eventual valuation.</p>
            </Card>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center shadow-sm" data-testid="card-third-path">
            <p className="text-2xl font-bold mb-4 text-foreground">Neither builds a strong, valuable business.</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              DSO Pricing was built for practices that want a third path:{" "}
              <strong className="font-semibold" style={{ color: "#f59e0b" }}>Profitable, structured growth.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Growth Comparison */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary text-base font-semibold uppercase tracking-widest mb-3 text-center">The Choice</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-foreground">Which Growth Path Are You Building?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-10 border-destructive/20 bg-white shadow-md relative overflow-hidden" data-testid="card-fragile">
              <div className="absolute top-0 left-0 w-full h-1 bg-destructive" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Fragile Growth</h3>
              </div>
              <ul className="space-y-5">
                {fragileItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4" data-testid={`item-fragile-${i}`}>
                    <X className="w-5 h-5 text-destructive/50 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-10 border-primary/30 bg-white shadow-xl relative overflow-hidden" data-testid="card-scalable">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Scalable Growth</h3>
              </div>
              <ul className="space-y-5">
                {scalableItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4" data-testid={`item-scalable-${i}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Better Partners */}
      <section className="py-24 px-6 bg-secondary text-white relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-secondary/95 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-base font-semibold uppercase tracking-widest mb-3">Better Partners. Better Decisions.</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
                Most platforms give you more options. We don't.
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Because more options don't lead to better outcomes — better alignment does.
              </p>
              <p className="text-white/80 leading-relaxed text-lg">
                With DSO Pricing, you get:
              </p>
            </div>
            <div className="space-y-6">
              {[
                "A curated group of partners focused on improving margins",
                "Access to founders and experts who have scaled real practices",
                "Direct, real conversations that lead to faster, better decisions",
              ].map((item, i) => (
                <Card key={i} className="bg-white/5 border-white/10 p-6 backdrop-blur-sm" data-testid={`item-partners-${i}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    </div>
                    <p className="text-white/90 text-lg pt-1">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Growth */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-primary text-base font-semibold uppercase tracking-widest mb-3">Built for Real-World Growth</p>
              <h2 className="text-3xl font-bold mb-8 text-foreground">The environment is changing:</h2>
              <div className="space-y-4 mb-10">
                {[
                  "Costs are rising",
                  "Labor is unpredictable",
                  "Margins are tightening",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-muted-foreground p-4 bg-muted rounded-lg" data-testid={`item-env-${i}`}>
                    <span className="text-destructive font-bold text-xl">↑</span>
                    <p className="text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed italic border-l-4 border-primary pl-4">Most practices react too late.</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-8 text-foreground">We help you stay ahead by:</p>
              <div className="space-y-6">
                {[
                  "Strengthening cost structure through better pricing",
                  "Simplifying partner and vendor decisions",
                  "Supporting faster, more confident implementation",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4" data-testid={`item-ahead-${i}`}>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-medium text-lg text-foreground pt-1">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <p className="text-foreground leading-relaxed font-medium">
                  So your growth isn't chaotic — it's controlled and built to last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-10 border-primary/20 shadow-md bg-white">
              <p className="text-primary text-base font-semibold uppercase tracking-widest mb-3">Who This Is For</p>
              <h2 className="text-2xl font-bold mb-8 text-foreground">This is for practices that:</h2>
              <div className="space-y-5">
                {[
                  "Are doing $1M+ and want to protect and grow margins",
                  "Care about profitability — not just top-line revenue",
                  "Are scaling and need stronger systems and partners",
                  "Want to stay in control as they grow",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4" data-testid={`item-isfor-${i}`}>
                    <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <p className="text-lg text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-10 border-border shadow-sm bg-white/50">
              <h2 className="text-2xl font-bold mb-8 text-muted-foreground mt-8">This is NOT for:</h2>
              <div className="space-y-5">
                {[
                  "Practices chasing short-term wins",
                  "Owners who don't track performance or profitability",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 text-muted-foreground" data-testid={`item-notfor-${i}`}>
                    <X className="w-6 h-6 shrink-0 mt-0.5 opacity-50" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-8">
            Start Building a More Profitable, Scalable Practice
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
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
