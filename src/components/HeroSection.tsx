import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/Scene-1.jpg";
import mvpHighlight from "@/assets/marker-pink.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-end justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* <svg className="absolute w-0 h-0">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="3"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix in="noise" type="saturate" values="0" />
            <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
          </filter>
        </svg> */}
        <div
          className="w-full h-full"
          style={{ filter: "brightness(0.87) url(#grain)" }}
        >
          {/* <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover"
          /> */}
        </div>
        {/* Gradient overlay: blend image into background at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        {/* Frame lines overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          {/* Top horizontal */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gray-200 mt-20" />  
          {/* Bottom horizontal - ~1/3 from bottom */}
          {/* <div className="absolute bottom-[33%] left-0 right-0 h-[2px] bg-white/50" /> */}
          {/* Left vertical - ~20% from left */}
          <div className="absolute top-0 bottom-0 left-[20%] w-[1.5px] bg-gray-200" />
          {/* Right vertical - ~20% from right */}
          <div className="absolute top-0 bottom-0 right-[20%] w-[1.5px] bg-gray-200" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pb-64 pt-10">
        {/* Announcement Badge */}

        {/* Headline */}
        <h1
          className="font-heading text-black text-4xl sm:text-6xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-white mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Build and Launch Your{" "}
          <span
            className="relative inline-block px-6 py-4 text-white"
            style={{
              backgroundImage: `url(${mvpHighlight})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "120% 120%",
            }}
          >
            MVP
          </span>{" "}
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
          <Button className="shadow-lg rounded-full" variant="hero" size="lg" asChild>
            <a
              href="https://cal.com/joshipallava/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a slot
            </a>
          </Button>
          <Button className="shadow-lg rounded-full bg-white text-black" variant="outline" size="lg">
            Learn more
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
