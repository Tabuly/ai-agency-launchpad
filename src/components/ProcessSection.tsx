"use client";

import { PhoneCall, Lightbulb, Code2, Rocket, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: PhoneCall,
    title: "Initial call.",
    description: "We understand your idea, users, and must-have features.",
  },
  {
    icon: Lightbulb,
    title: "Strategy.",
    description: "We map out scope, prioritize features, and define the path to launch.",
  },
  {
    icon: Code2,
    title: "Code.",
    description: "AI-augmented development with clean, scalable architecture.",
  },
  {
    icon: Rocket,
    title: "Launch.",
    description: "Deployed, tested, and ready for users—within 2 weeks.",
  },
];

const blobPaths = [
  "M45.3,-51.2C58.1,-40.9,67.5,-25.3,70.1,-8.4C72.7,8.5,68.4,26.7,58.1,40.1C47.8,53.5,31.5,62.1,13.7,67.1C-4.1,72.1,-23.4,73.5,-39.4,66.1C-55.4,58.7,-68.1,42.5,-73.1,24.3C-78.1,6.1,-75.4,-14.1,-66.2,-29.8C-57,-45.5,-41.3,-56.7,-25.3,-65.7C-9.3,-74.7,6.9,-81.5,22.1,-77.3C37.3,-73.1,51.5,-57.9,45.3,-51.2Z",
  "M39.9,-47.7C52.7,-36.9,64.7,-25.1,68.7,-10.6C72.7,3.9,68.7,21.1,59.4,34.5C50.1,47.9,35.5,57.5,19.4,62.5C3.3,67.5,-14.3,67.9,-29.1,61.5C-43.9,55.1,-55.9,41.9,-63.3,26.1C-70.7,10.3,-73.5,-8.1,-68.1,-23.4C-62.7,-38.7,-49.1,-50.9,-34.8,-61.3C-20.5,-71.7,-5.5,-80.3,6.5,-78.1C18.5,-75.9,27.1,-58.5,39.9,-47.7Z",
  "M44.1,-52.8C56.5,-42.3,65.3,-27.6,68.9,-11.4C72.5,4.8,70.9,22.5,62.5,36.4C54.1,50.3,38.9,60.4,22.4,65.7C5.9,71,-11.9,71.5,-27.4,65.3C-42.9,59.1,-56.1,46.2,-64.1,30.5C-72.1,14.8,-74.9,-3.7,-70.1,-19.8C-65.3,-35.9,-52.9,-49.6,-38.8,-59.7C-24.7,-69.8,-8.9,-76.3,4.3,-75.1C17.5,-73.9,31.7,-63.3,44.1,-52.8Z",
  "M42.7,-51.1C54.9,-40.8,64,-26.4,67.8,-10.3C71.6,5.8,70.1,23.6,61.5,37.5C52.9,51.4,37.2,61.4,20.5,66.3C3.8,71.2,-13.9,71,-29.2,64.5C-44.5,58,-57.4,45.2,-65.1,29.7C-72.8,14.2,-75.3,-4,-70.2,-19.5C-65.1,-35,-52.4,-47.8,-38.4,-57.8C-24.4,-67.8,-9.1,-75,3.4,-74.4C15.9,-73.8,30.5,-61.4,42.7,-51.1Z",
];

interface ProcessStepCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  blobVariant: number;
  showTopDot?: boolean;
  showBottomDot?: boolean;
}

const ProcessStepCard = ({ title, description, icon: Icon, blobVariant, showTopDot = true, showBottomDot = true }: ProcessStepCardProps) => {
  return (
    <figure
      className={cn(
        "relative flex items-center gap-4 bg-white rounded-2xl p-5",
        "transition-all duration-200 ease-in-out shadow-lg",
        "border border-black/5",
        "w-full"
      )}
    >
      {showTopDot && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-gray-200 bg-white z-10" />
      )}
      {showBottomDot && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-gray-200 bg-white z-10" />
      )}

      <div className="relative shrink-0 w-14 h-14">
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full"
          style={{ transform: `rotate(${blobVariant * 45}deg)` }}
        >
          <path
            d={blobPaths[blobVariant % blobPaths.length]}
            fill="#DBEAFE"
            transform="translate(100 100)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm text-foreground leading-relaxed">
          <span className="font-semibold">{title}</span>{" "}
          <span className="text-muted-foreground">{description}</span>
        </p>
      </div>
    </figure>
  );
};

export const ProcessSection = () => {
  return (
    <section
      id="process"
      className="relative px-4 md:px-6 lg:px-8 bg-background w-full overflow-hidden"
    >
      <style>
        {`
          @keyframes flowLine {
            0% { stroke-dashoffset: 24; }
            100% { stroke-dashoffset: 0; }
          }
        `}
      </style>
      <div className="mb-12 lg:mb-16 px-10">
          <p className="text-sm font-medium text-primary mb-3">Our process</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight text-foreground max-w-2xl leading-[1.1]">
            From idea to launch in 2 weeks.
          </h2>
        </div>
      <div className="w-full max-w-3xl mx-auto">
   
            
        {/* Desktop Flowchart - Vertical staggered layout */}
        <div className="hidden md:block space-y-6">
          {/* Step 1 - Left aligned */}
          <div className="relative flex">
            <div className="w-1/2 pr-8">
              <ProcessStepCard
                title={steps[0].title}
                description={steps[0].description}
                icon={steps[0].icon}
                blobVariant={0}
                showTopDot={true}
                showBottomDot={true}
              />
            </div>
          </div>

          {/* Connector 1→2 */}
          <div className="relative h-12 flex justify-center">
            <svg width="300" height="48" className="overflow-visible">
              <path
                d="M 75 0 Q 75 24, 150 24 Q 225 24, 225 48"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="8 8"
                style={{ animation: "flowLine 1s linear infinite" }}
              />
            </svg>
          </div>

          {/* Step 2 - Right aligned */}
          <div className="relative flex justify-end">
            <div className="w-1/2 pl-8">
              <ProcessStepCard
                title={steps[1].title}
                description={steps[1].description}
                icon={steps[1].icon}
                blobVariant={1}
                showTopDot={true}
                showBottomDot={true}
              />
            </div>
          </div>

          {/* Connector 2→3 */}
          <div className="relative h-12 flex justify-center">
            <svg width="300" height="48" className="overflow-visible">
              <path
                d="M 225 0 Q 225 24, 150 24 Q 75 24, 75 48"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="8 8"
                style={{ animation: "flowLine 1s linear infinite" }}
              />
            </svg>
          </div>

          {/* Step 3 - Left aligned */}
          <div className="relative flex">
            <div className="w-1/2 pr-8">
              <ProcessStepCard
                title={steps[2].title}
                description={steps[2].description}
                icon={steps[2].icon}
                blobVariant={2}
                showTopDot={true}
                showBottomDot={true}
              />
            </div>
          </div>

          {/* Connector 3→4 */}
          <div className="relative h-12 flex justify-center">
            <svg width="300" height="48" className="overflow-visible">
              <path
                d="M 75 0 Q 75 24, 150 24 Q 225 24, 225 48"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="8 8"
                style={{ animation: "flowLine 1s linear infinite" }}
              />
            </svg>
          </div>

          {/* Step 4 - Right aligned */}
          <div className="relative flex justify-end">
            <div className="w-1/2 pl-8">
              <ProcessStepCard
                title={steps[3].title}
                description={steps[3].description}
                icon={steps[3].icon}
                blobVariant={3}
                showTopDot={true}
                showBottomDot={false}
              />
            </div>
          </div>
        </div>

        {/* Mobile: Vertical flow */}
        <div className="md:hidden space-y-2">
          {steps.map((step, index) => (
            <div key={step.title}>
              <ProcessStepCard
                title={step.title}
                description={step.description}
                icon={step.icon}
                blobVariant={index}
                showTopDot={index > 0}
                showBottomDot={index < steps.length - 1}
              />
              {index < steps.length - 1 && (
                <div className="flex justify-center h-6">
                  <svg width="4" height="24" className="overflow-visible">
                    <line
                      x1="2"
                      y1="0"
                      x2="2"
                      y2="24"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeDasharray="8 8"
                      style={{ animation: "flowLine 1s linear infinite" }}
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-muted-foreground text-sm">
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
