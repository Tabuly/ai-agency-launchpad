import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowRight, ArrowRightIcon, ChevronRight } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";
import heroImage from "@/assets/Scene-1.jpg";
import mvpHighlight from "@/assets/marker-pink.png";
import { cn } from "@/lib/utils";
import { AvatarCirclesComponent } from "./AvatarCircles";
import { ShimmerButton } from "./ui/shimmer-button";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import auraLogo from "@/assets/brands/aura.png";
import nesoiLogo from "@/assets/brands/nesoi.png";
import logo from "@/assets/brands/logo.svg";
import ed from "@/assets/brands/ed.png";
import { Marquee } from "@/components/ui/marquee";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-end justify-center overflow-hidden bg-background">
      {/* Soft light-blue to white gradient (tint of primary) - concentrated in center, fades to background at edges */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 55%, #D6E4FC 0%, rgba(232, 240, 253, 0.7) 45%, rgba(255, 255, 255, 0.2) 70%, hsl(36, 33%, 97%) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pb-40 pt-10">
        {/* Animated shiny text - above headline */}

        <div className="z-10 flex min-h-64 items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <AvatarCirclesComponent />
              <span>Trusted by founders who move fast</span>
            </AnimatedShinyText>
          </div>
        </div>


        {/* Headline */}
        <h1
          className="font-heading text-4xl sm:text-6xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-black mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Build and Launch Your{" "}
          <Highlighter action="underline" color="#135DFC">
            MVP
          </Highlighter>{" "}
          in 2
          <br />
          Weeks
        </h1>

        {/* Subtitle */}
        <p
          className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          We help solo founders and small teams turn ideas into shipped
          products—with battle-tested templates, polished designs, and
          hands-on development support.
        </p>

        {/* CTA */}
        <div
          className="animate-fade-in-up gap-4 flex items-center justify-center"
          style={{ animationDelay: "0.7s" }}
        >
          <ShimmerButton asChild className="shadow-2xl">
            <a href="https://cal.com/joshipallava/discovery-call" target="_blank" rel="noopener noreferrer" className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white dark:from-white dark:to-slate-900/10">
              Book a slot
            </a>
          </ShimmerButton>
        </div>

        {/* Companies marquee - fades from gradient into background to avoid hard cut */}
        <div
          className="absolute bottom-0 left-0 right-0 pt-6"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, hsl(36, 33%, 97%) 35%, hsl(36, 33%, 97%) 100%)",
          }}
        >
          <p className="text-center text-xs font-medium text-muted-foreground uppercase tracking-wider mb-5">
            Companies we&apos;ve worked with
          </p>
          <div className="relative w-full overflow-hidden">
            <Marquee pauseOnHover className="theme [--duration:20s] [--gap:2rem] p-0">
              {[auraLogo, nesoiLogo, logo, ed].map((src, i) => (
                <div
                  key={i}
                  className="flex shrink-0 items-center justify-center size-16 md:size-20"
                >
                  <img
                    src={src}
                    alt=""
                    className="size-full object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
