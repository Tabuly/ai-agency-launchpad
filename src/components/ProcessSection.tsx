"use client";

import { PhoneCall, Lightbulb, Code2, Rocket, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Initial call",
    description:
      "We jump on a call to understand your idea, target users, and must-have features. No lengthy forms—just a focused conversation to align on what we're building.",
    color: "#00C9A7",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description:
      "We map out the scope, prioritize features, and define a clear path to launch.",
    color: "#FFB800",
  },
  {
    number: "03",
    icon: Code2,
    title: "Code",
    description:
      "Industry-standard coding, AI-augmented development, and clean, scalable architecture.",
    color: "#1E86FF",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "Deployed, tested, and ready for users. We hand over a live product—within 2 weeks.",
    color: "#FF3D71",
  },
];

interface ProcessStepCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const ProcessStepCard = ({
  number,
  title,
  description,
  icon: Icon,
  color,
}: ProcessStepCardProps) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[500px] cursor-pointer overflow-hidden rounded-2xl p-5",
        "transition-all duration-200 ease-in-out hover:scale-[102%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "dark:bg-white/5 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.12)]"
      )}
    >
      <div className="flex flex-row items-start gap-4">
        <div
          className="flex size-12 shrink-0 items-center justify-center rounded-2xl text-white"
          style={{ backgroundColor: color }}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <figcaption className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base font-medium">
            <span className="font-heading text-foreground">{title}</span>
            <span className="text-muted-foreground">·</span>
            <span className="font-heading text-2xl text-muted-foreground/80">
              {number}
            </span>
          </figcaption>
          <p className="mt-1.5 text-sm font-normal leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export const ProcessSection = () => {
  return (
    <section
      id="process"
      className="relative py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-background"
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="mb-12 lg:mb-16">
          <p className="text-sm font-medium text-primary mb-3">
            Our process
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight text-foreground max-w-2xl leading-[1.1]">
            From idea to launch in 2 weeks.
          </h2>
        </div>

        <div className="relative flex min-h-[480px] w-full flex-col overflow-hidden rounded-2xl p-4 md:p-6 bg-muted/40 border border-border">
          <AnimatedList
            className="w-full gap-4 flex-col-reverse items-center"
            delay={600}
          >
            {steps.map((step) => (
              <ProcessStepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                color={step.color}
              />
            ))}
          </AnimatedList>
        </div>

        <p className="mt-10 text-center text-muted-foreground text-sm">
          Ready to start?{" "}
          <a
            href="https://cal.com/joshipallava/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline underline-offset-4"
          >
            Book your initial call →
          </a>
        </p>
      </div>
    </section>
  );
};
