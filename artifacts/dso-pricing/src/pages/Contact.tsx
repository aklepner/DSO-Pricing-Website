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
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/10 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Let's Connect.
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Whether you have a question, need direction, or want to explore DSO Pricing, we'll point you in the right direction.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Concierge Team</p>
              <h2 className="text-3xl font-bold mb-4">Talk to Our Concierge Team</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">Have a question about:</p>
              <div className="space-y-2 mb-8">
                {["Membership", "Partner access", "Whether DSO Pricing is the right fit"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3" data-testid={`item-question-${i}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mb-8">We're here to help. Fill out the form and our team will respond shortly.</p>

              {/* High Intent CTA */}
              <Card className="p-6 border-primary/20 bg-primary/5" data-testid="card-high-intent">
                <p className="font-bold mb-2">Ready to Move Faster?</p>
                <p className="text-muted-foreground text-sm mb-4">
                  If you're actively scaling and want clarity on how DSO Pricing fits your growth:
                </p>
                <Button asChild variant="default" size="sm" data-testid="button-book-fast">
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Book a Growth Accelerator Call <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </Card>
            </div>

            <div>
              {submitted ? (
                <Card className="p-10 text-center" data-testid="card-success">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Inquiry Submitted</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. Our team will respond within 1–2 business days.
                  </p>
                </Card>
              ) : (
                <Card className="p-8" data-testid="card-form">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" data-testid="input-name" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="you@practice.com" data-testid="input-email" {...field} />
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
                            <FormLabel>Practice Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your practice name" data-testid="input-practice" {...field} />
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
                            <FormLabel>Revenue Range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-revenue">
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
                            <FormLabel>What can we help you with?</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your practice and what you're looking to achieve..."
                                className="resize-none"
                                rows={4}
                                data-testid="textarea-message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" size="lg" className="w-full" data-testid="button-submit">
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
      <section className="py-20 px-6 bg-secondary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Who We Work Best With</p>
          <h2 className="text-3xl font-bold mb-10">Built for growth-focused operators.</h2>
          <div className="space-y-4 mb-10 text-left max-w-xl mx-auto">
            {[
              "Growth-focused operators.",
              "Leaders building long-term value.",
              "Practices & emerging groups scaling with intention.",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3" data-testid={`item-align-${i}`}>
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <p className="text-white/80 font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-lg italic mb-2">
            We're not built for everyone — and that's intentional.
          </p>
          <p className="text-white/70">
            If you're serious about building a stronger, more scalable business, you'll fit right in.
          </p>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Prefer to reach out directly?</p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <a href="mailto:hello@dsopricing.com" className="text-lg font-medium hover:text-primary transition-colors" data-testid="link-email-direct">
              hello@dsopricing.com
            </a>
          </div>
          <p className="text-muted-foreground text-sm mt-2">Response time: Typically within 1–2 business days</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
