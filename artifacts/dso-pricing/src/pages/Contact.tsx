import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("A valid email is required"),
  practiceName: z.string().min(1, "Practice name is required"),
  revenueRange: z.string().min(1, "Please select a revenue range"),
  message: z.string().min(10, "Please tell us how we can help"),
});

type ContactForm = z.infer<typeof contactSchema>;

const revenueRanges = [
  "$1M – $2M",
  "$2M – $4M",
  "$4M – $7M",
  "$7M – $10M",
  "$10M+",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      practiceName: "",
      revenueRange: "",
      message: "",
    },
  });

  function onSubmit(_data: ContactForm) {
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#f59e0b" }}>Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            Let's Connect.
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Whether you have a question, need direction, or want to explore DSO Pricing, we'll point you in the right direction.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Concierge Team</p>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Talk to Our Concierge Team</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">Have a question about:</p>
              <div className="space-y-4 mb-10">
                {["Membership", "Partner access", "Whether DSO Pricing is the right fit"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-muted rounded-lg" data-testid={`item-question-${i}`}>
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-foreground mb-10 italic">We're here to help. Fill out the form and our team will respond shortly.</p>

              {/* High Intent CTA */}
              <Card className="p-8 border-primary/20 bg-primary/5 shadow-sm" data-testid="card-high-intent">
                <p className="font-bold text-xl mb-3 text-foreground">Ready to Move Faster?</p>
                <p className="text-muted-foreground text-base mb-6">
                  If you're actively scaling and want clarity on how DSO Pricing fits your growth:
                </p>
                <Button asChild variant="default" size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-book-fast">
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Book a Growth Accelerator Call <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </Card>
            </div>

            <div>
              {submitted ? (
                <Card className="p-12 text-center border-primary/20 shadow-lg bg-white" data-testid="card-success">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">Inquiry Submitted</h3>
                  <p className="text-muted-foreground text-lg">
                    Thank you for reaching out. Our team will respond within 1–2 business days.
                  </p>
                </Card>
              ) : (
                <Card className="p-8 md:p-10 border-border shadow-xl bg-white" data-testid="card-form">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Name</FormLabel>
                            <FormControl>
                              <Input className="h-12 border-border focus-visible:ring-primary" placeholder="Your full name" data-testid="input-name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Email</FormLabel>
                            <FormControl>
                              <Input className="h-12 border-border focus-visible:ring-primary" type="email" placeholder="you@practice.com" data-testid="input-email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="practiceName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Practice Name</FormLabel>
                            <FormControl>
                              <Input className="h-12 border-border focus-visible:ring-primary" placeholder="Your practice name" data-testid="input-practice" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="revenueRange"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Revenue Range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 border-border focus:ring-primary" data-testid="select-revenue">
                                  <SelectValue placeholder="Select your revenue range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {revenueRanges.map((r) => (
                                  <SelectItem key={r} value={r} data-testid={`option-revenue-${r}`}>{r}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">What can we help you with?</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your practice and what you're looking to achieve..."
                                className="resize-none border-border focus-visible:ring-primary p-4"
                                rows={5}
                                data-testid="textarea-message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" size="lg" className="w-full h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-submit">
                        Submit Inquiry
                      </Button>
                    </form>
                  </Form>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Alignment Section */}
      <section className="py-24 px-6 bg-secondary text-white relative">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-secondary/90 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Who We Work Best With</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Built for growth-focused operators.</h2>
          <div className="space-y-6 mb-12 text-left max-w-xl mx-auto bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
            {[
              "Growth-focused operators.",
              "Leaders building long-term value.",
              "Practices & emerging groups scaling with intention.",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4" data-testid={`item-align-${i}`}>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-white/90 text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-white/70 text-xl italic mb-4">
            We're not built for everyone — and that's intentional.
          </p>
          <p className="text-white/90 text-lg">
            If you're serious about building a stronger, more scalable business, you'll fit right in.
          </p>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Prefer to reach out directly?</p>
          <div className="flex items-center justify-center gap-3 mt-6 p-6 bg-white rounded-xl border border-border shadow-sm max-w-md mx-auto">
            <Mail className="w-6 h-6 text-primary" />
            <a href="mailto:hello@dsopricing.com" className="text-xl font-bold text-foreground hover:text-primary transition-colors" data-testid="link-email-direct">
              hello@dsopricing.com
            </a>
          </div>
          <p className="text-muted-foreground text-sm mt-6">Response time: Typically within 1–2 business days</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
