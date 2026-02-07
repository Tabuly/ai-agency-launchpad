"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does it take to build an MVP?",
    answer:
      "We typically deliver a functional MVP within 2 weeks. The exact timeline depends on scope, but we're built for speed—focusing on core features first so you can launch and learn fast.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "A clear idea of your core problem and who it's for. We'll help refine it, but having a rough concept, target users, and must-have features will get us moving quickly.",
  },
  {
    question: "What's included in the MVP package?",
    answer:
      "Design, development, and deployment. You get battle-tested templates, polished UI, responsive layouts, and a shipped product ready for real users. We handle the technical heavy lifting so you can focus on validation.",
  },
  {
    question: "Can I make changes after launch?",
    answer:
      "Yes. We build with iteration in mind. Once your MVP is live, you can book follow-up slots for new features, tweaks, or scaling—based on what you learn from real users.",
  },
  {
    question: "Who is this best for?",
    answer:
      "Solo founders and small teams who want to move fast. If you have an idea and need it built without hiring a full team or spending months, we're built for you.",
  },
];

export const FAQSection = () => {
  return (
    <section
      id="faq"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative lg:flex lg:gap-16 lg:items-start max-w-6xl mx-auto">
        {/* Left: Sticky heading */}
        <div className="lg:sticky lg:top-32 lg:w-[38%] lg:shrink-0 mb-16 lg:mb-0">
          <p className="text-sm font-medium text-primary mb-3">FAQ</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-5xl font-semibold tracking-tight text-foreground leading-[1.1]">
            Everything you need to know before building your MVP with us.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-sm">
            No jargon. No fine print. Just the stuff that matters.
          </p>
        </div>

        {/* Right: FAQ cards */}
        <div className="lg:flex-1 space-y-4">
          <AccordionPrimitive.Root
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionPrimitive.Item
                key={index}
                value={`item-${index}`}
                className={cn(
                  "group rounded-2xl border border-border bg-card/50 backdrop-blur-sm",
                  "transition-all duration-300 ease-out",
                  "hover:border-primary/30 hover:bg-card/80",
                  "data-[state=open]:border-primary/50 data-[state=open]:bg-card data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5"
                )}
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex w-full items-start gap-4 px-6 py-5 text-left",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 rounded-2xl"
                    )}
                  >
                    <span className="text-sm font-medium text-muted-foreground shrink-0 mt-0.5">
                      0{index + 1}
                    </span>
                    <span className="font-heading text-lg sm:text-xl font-medium text-foreground flex-1 pr-4 group-data-[state=open]:font-semibold">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center",
                        "transition-all duration-300",
                        "group-hover:border-primary/50 group-hover:bg-primary/5",
                        "group-data-[state=open]:border-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground"
                      )}
                    >
                      <Plus className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content
                  className={cn(
                    "overflow-hidden text-base transition-all",
                    "data-[state=closed]:animate-accordion-up",
                    "data-[state=open]:animate-accordion-down"
                  )}
                >
                  <div className="px-6 pb-6 pt-0 pl-14 sm:pl-16">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </div>
      </div>
    </section>
  );
};
