"use client";

import { PhoneCall, Lightbulb, Code2, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Initial call",
    description:
      "We jump on a call to understand your idea, target users, and must-have features. No lengthy forms—just a focused conversation to align on what we're building.",
    bento: "lg:col-span-2 lg:row-span-2", // Large card
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description:
      "We map out the scope, prioritize features, and define a clear path to launch.",
    bento: "lg:col-span-1",
  },
  {
    number: "03",
    icon: Code2,
    title: "Code",
    description:
      "Industry-standard coding, AI-augmented development, and clean, scalable architecture.",
    bento: "lg:col-span-1",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "Deployed, tested, and ready for users. We hand over a live product—within 2 weeks.",
    bento: "lg:col-span-2", // Wide card
  },
];

export const ProcessSection = () => {
  return (
    <section
      id="process"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-sm font-medium text-primary-foreground/70 mb-3">
            Our process
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight text-primary-foreground max-w-2xl leading-[1.1]">
            From idea to launch in 2 weeks.
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-fr">
          {steps.map((step, i) => (
            <div
              key={i}
              className={cn(
                "group relative overflow-hidden rounded-2xl lg:rounded-3xl",
                "border border-primary-foreground/10 bg-primary-foreground/[0.03]",
                "p-6 lg:p-8 transition-all duration-300 min-h-[200px]",
                "hover:border-primary-foreground/20 hover:bg-primary-foreground/[0.06]",
                "flex flex-col",
                step.bento,
                i === 0 && "lg:bg-primary-foreground/[0.05] lg:border-primary-foreground/15"
              )}
            >
              {/* Gradient glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 60%)`,
                }}
              />

              {/* Icon */}
              <div
                className={cn(
                  "relative z-10 flex items-center justify-center rounded-xl w-12 h-12 mb-6",
                  "bg-primary-foreground/10 border border-primary-foreground/10",
                  "group-hover:bg-primary-foreground/15 group-hover:border-primary-foreground/20 transition-colors"
                )}
              >
                <step.icon className="h-6 w-6 text-primary-foreground" />
              </div>

              {/* Number - large for first card */}
              <span
                className={cn(
                  "font-heading font-bold text-primary-foreground/30 mb-2 block",
                  step.bento.includes("row-span-2") ? "text-6xl lg:text-7xl" : "text-4xl"
                )}
              >
                {step.number}
              </span>

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-heading text-xl lg:text-2xl font-semibold text-primary-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm lg:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <p className="mt-12 text-center text-primary-foreground/60 text-sm">
          Ready to start?{" "}
          <a
            href="#contact"
            className="text-primary-foreground font-medium hover:underline underline-offset-4"
          >
            Book your initial call →
          </a>
        </p>
      </div>
    </section>
  );
};
