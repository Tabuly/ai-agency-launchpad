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
    <section className="relative min-h-[auto] sm:min-h-screen w-full flex items-start sm:items-center justify-center overflow-hidden pb-8 sm:pb-0">
      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-5 sm:px-6 pt-40 sm:pt-24">
        {/* Animated shiny text - above headline */}

        <div className="z-10 flex items-center justify-center pb-4 sm:pb-8">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-white/80 text-xs transition-all ease-in hover:cursor-pointer"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-3 sm:px-4 py-1 transition ease-out text-foreground/70">
              <AvatarCirclesComponent />
              <span className="text-[10px] sm:text-xs">Trusted by founders who move fast</span>
            </AnimatedShinyText>
          </div>
        </div>


        {/* Headline */}
        <h1
          className="font-heading text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] sm:leading-[0.95] tracking-tight text-black/80 mb-4 sm:mb-6 animate-fade-in-up"
        >
          Build and Launch
          <br className="sm:hidden" />
          {" "}Your{" "}
          <Highlighter action="underline" color="#135DFC">
            MVP
          </Highlighter>
          <br />
          in Two Weeks
        </h1>

        {/* Subtitle */}
        <p
          className="text-[13px] sm:text-base font-medium text-muted-foreground max-w-xs sm:max-w-2xl mx-auto mb-6 sm:mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          We help solo founders and small teams turn ideas into shipped
          products—with polished designs and hands-on development support.
        </p>

        {/* CTA */}
        <div
          className="animate-fade-in-up gap-4 flex items-center justify-center"
          style={{ animationDelay: "0.7s" }}
        >
          <ShimmerButton asChild background="hsl(var(--primary))" className="shadow-2xl py-4 px-8 cursor-pointer">
            <a href="https://cal.com/joshipallava/discovery-call" target="_blank" rel="noopener noreferrer" className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white dark:from-white dark:to-slate-900/10">
              Book a slot
            </a>
          </ShimmerButton>
        </div>

        {/* Companies marquee */}
        <div className="mt-4 sm:mt-6 left-0 right-0 pt-4 sm:pt-6 pb-6 sm:pb-8">
          <p className="text-center text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4 sm:mb-5">
            Companies we&apos;ve worked with
          </p>
          <div className="relative w-full overflow-hidden">
            <Marquee pauseOnHover className="theme [--duration:20s] [--gap:1.5rem] sm:[--gap:2rem] p-0">
              {[auraLogo, nesoiLogo, logo, ed].map((src, i) => (
                <div
                  key={i}
                  className="flex shrink-0 items-center justify-center size-12 sm:size-16 md:size-20"
                >
                  <img
                    src={src}
                    alt=""
                    className="size-full object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 sm:w-1/4 bg-gradient-to-r from-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 sm:w-1/4 bg-gradient-to-l from-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
