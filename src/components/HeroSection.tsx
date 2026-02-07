import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-end justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pb-20 pt-32">
        {/* Announcement Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border px-5 py-2 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-sm font-medium text-foreground/80">
            Now accepting new clients for 2026
          </span>
          <ArrowRight size={14} className="text-foreground/60" />
        </div>

        {/* Headline */}
        <h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Build smarter
          <br />
          with AI
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          We help businesses harness the power of artificial intelligence
          to automate workflows, unlock insights, and accelerate growth.
        </p>

        {/* CTA */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          <Button variant="hero" size="xl">
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
