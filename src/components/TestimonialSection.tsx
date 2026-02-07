"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import testimonialPhoto from "@/assets/hf_20260204_161431_8563e100-2af6-43af-8707-f9fd43734657.png";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  image?: string;
  featured?: boolean;
  background?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "They shipped our scheduling app in 12 days. No endless meetings, no scope creep—just execution. Exactly what we needed to validate with real users.",
    name: "Sarah Chen",
    role: "Founder",
    company: "2cal",
    initials: "SC",
    image: testimonialPhoto,
    featured: true,
    background: "cornsilk"
  },
  {
    quote:
      "Turned our messy PDF idea into a polished product. The team understood what we were building and moved fast. Highly recommend for MVPs.",
    name: "Marcus Webb",
    role: "Solo Founder",
    company: "Tabuly",
    image: testimonialPhoto,
    initials: "MW",
    featured: false,
    background: "powderblue"
  },
  {
    quote:
      "Finally, a dev shop that gets it. They don't overbuild—they build what matters. We had paying users within 3 weeks of our first call.",
    name: "Priya Patel",
    role: "Co-founder",
    company: "Flowbase",
    image: testimonialPhoto,
    initials: "PP",
    featured: false,
    background: "hotpink"
  },
];

export const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-sm font-medium text-primary mb-3">Testimonials</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight text-foreground max-w-2xl">
            Founders who shipped with us.
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className={cn(
                "relative rounded-2xl border border-border p-8",
                "transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20",
                t.featured && "lg:col-span-2 lg:row-span-1"
              )}
              style={{ backgroundColor: t.background }}
            >
              {/* Quote icon */}
              <Quote
                className={cn(
                  "absolute text-primary/10",
                  t.featured ? "top-8 right-8 h-16 w-16" : "top-6 right-6 h-12 w-12"
                )}
              />

              {/* Shipped badge - for featured */}
              {t.featured && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6">
                  Shipped in 12 days
                </span>
              )}

              <blockquote
                className={cn(
                  "font-body text-foreground leading-relaxed",
                  t.featured ? "text-xl lg:text-2xl" : "text-md"
                )}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <footer className="mt-8 flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-border">
                  {t.image && (
                    <AvatarImage src={t.image} alt={t.name} className="object-cover" />
                  )}
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Trust line */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Join 50+ founders who&apos;ve shipped their MVP with us.
        </p>
      </div>
    </section>
  );
};
