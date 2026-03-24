import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Mail, ArrowRight, Star, Phone, Clock } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAVY = "#0f1628";
const NAVY2 = "#161e35";
const ORANGE = "#ea580c";
const ORANGE_LIGHT = "#f97316";

function StarRating({ count = 5, size = 16 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} fill="#fbbf24" color="#fbbf24" width={size} height={size} />
      ))}
    </div>
  );
}

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

      {/* HERO */}
      <section className="pt-28 pb-20 px-6 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(234,88,12,0.10) 0%, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="flex justify-center mb-5">
            <StarRating count={5} size={20} />
          </div>
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Contact</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Let's Connect.
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Whether you have a question, need direction, or are ready to join — we'll point you in the right direction fast.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left: Info */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Concierge Team</p>
              <h2 className="text-3xl font-extrabold text-white mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>Talk to Our Concierge Team</h2>
              <p className="text-white/60 mb-8 text-lg leading-relaxed">Have a question about:</p>
              <div className="space-y-3 mb-10">
                {["Membership benefits and what's included", "Partner access and how it works", "Whether DSO Pricing is the right fit for your practice"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} data-testid={`item-question-${i}`}>
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: ORANGE_LIGHT }} />
                    <p className="text-white/80 font-medium text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mb-10 italic text-base">Fill out the form and our team will respond within 1–2 business days.</p>

              {/* Quick contact info */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(234,88,12,0.15)" }}>
                    <Mail className="w-5 h-5" style={{ color: ORANGE_LIGHT }} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Email</p>
                    <a href="mailto:hello@dsopricing.com" className="text-white font-semibold hover:opacity-80 transition-opacity" data-testid="link-email-hero">hello@dsopricing.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(234,88,12,0.15)" }}>
                    <Clock className="w-5 h-5" style={{ color: ORANGE_LIGHT }} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Response Time</p>
                    <p className="text-white font-semibold">Within 1–2 business days</p>
                  </div>
                </div>
              </div>

              {/* High Intent CTA */}
              <div className="rounded-2xl p-7 border border-white/10" style={{ backgroundColor: "rgba(234,88,12,0.08)", borderColor: "rgba(234,88,12,0.25)" }} data-testid="card-high-intent">
                <p className="font-extrabold text-white text-xl mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Ready to Move Faster?</p>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  If you're actively scaling and want clarity on how DSO Pricing fits your growth, skip the form.
                </p>
                <Button asChild size="lg" className="w-full text-white font-bold" style={{ backgroundColor: ORANGE }} data-testid="button-book-fast">
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Book a Growth Accelerator Call <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div className="rounded-2xl p-12 text-center border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} data-testid="card-success">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "rgba(234,88,12,0.15)" }}>
                    <CheckCircle2 className="w-10 h-10" style={{ color: ORANGE_LIGHT }} />
                  </div>
                  <h3 className="text-3xl font-extrabold mb-4 text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>Inquiry Submitted</h3>
                  <p className="text-white/60 text-lg mb-8">
                    Thank you for reaching out. Our concierge team will respond within 1–2 business days.
                  </p>
                  <Button asChild size="lg" className="text-white font-bold" style={{ backgroundColor: ORANGE }}>
                    <Link href="/">Back to Home</Link>
                  </Button>
                </div>
              ) : (
                <div className="rounded-2xl p-8 md:p-10 border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} data-testid="card-form">
                  <h3 className="text-white font-extrabold text-xl mb-7" style={{ fontFamily: "'Outfit', sans-serif" }}>Send Us a Message</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70 font-medium text-sm">Name</FormLabel>
                            <FormControl>
                              <Input
                                className="h-12 text-white placeholder:text-white/30 border-white/15 focus-visible:ring-orange-500"
                                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                                placeholder="Your full name"
                                data-testid="input-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-orange-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70 font-medium text-sm">Email</FormLabel>
                            <FormControl>
                              <Input
                                className="h-12 text-white placeholder:text-white/30 border-white/15 focus-visible:ring-orange-500"
                                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                                type="email"
                                placeholder="you@practice.com"
                                data-testid="input-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-orange-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="practiceName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70 font-medium text-sm">Practice Name</FormLabel>
                            <FormControl>
                              <Input
                                className="h-12 text-white placeholder:text-white/30 border-white/15 focus-visible:ring-orange-500"
                                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                                placeholder="Your practice name"
                                data-testid="input-practice"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-orange-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="revenueRange"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70 font-medium text-sm">Revenue Range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger
                                  className="h-12 text-white border-white/15 focus:ring-orange-500"
                                  style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                                  data-testid="select-revenue"
                                >
                                  <SelectValue placeholder="Select your revenue range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {revenueRanges.map((r) => (
                                  <SelectItem key={r} value={r} data-testid={`option-revenue-${r}`}>{r}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-orange-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70 font-medium text-sm">What can we help you with?</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your practice and what you're looking to achieve..."
                                className="resize-none text-white placeholder:text-white/30 border-white/15 focus-visible:ring-orange-500 p-4"
                                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                                rows={5}
                                data-testid="textarea-message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-orange-400" />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" size="lg" className="w-full h-14 text-lg text-white font-bold" style={{ backgroundColor: ORANGE }} data-testid="button-submit">
                        Submit Inquiry <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Who We Work Best With</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Built for Growth-Focused Operators
          </h2>
          <div className="space-y-4 text-left mb-12">
            {[
              "Growth-focused dental practice owners and operators",
              "Leaders building long-term, high-value dental businesses",
              "Practices and emerging groups scaling with intention and structure",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-xl border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} data-testid={`item-align-${i}`}>
                <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: ORANGE_LIGHT }} />
                <p className="text-white/80 font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-lg italic mb-3">We're not built for everyone — and that's intentional.</p>
          <p className="text-white/80 text-lg">If you're serious about building a stronger, more scalable business, you'll fit right in.</p>
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="py-16 px-6" style={{ backgroundColor: ORANGE }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4">Prefer to reach out directly?</p>
          <div className="flex items-center justify-center gap-3 mt-2">
            <Mail className="w-6 h-6 text-white" />
            <a href="mailto:hello@dsopricing.com" className="text-2xl font-extrabold text-white hover:opacity-80 transition-opacity" style={{ fontFamily: "'Outfit', sans-serif" }} data-testid="link-email-direct">
              hello@dsopricing.com
            </a>
          </div>
          <p className="text-white/70 text-sm mt-4">Response time: Typically within 1–2 business days</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
