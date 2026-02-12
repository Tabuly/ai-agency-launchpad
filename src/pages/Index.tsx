import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ProcessSection } from "../components/ProcessSection";
import { TestimonialSection } from "../components/TestimonialSection";
import { FAQSection } from "../components/FAQSection";
import { Footer } from "@/components/Footer";
import gradientBg from "@/assets/gradient bg.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero area with gradient background */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${gradientBg})` }}
      >
        <Navbar />
        <HeroSection />
        {/* Fade to background */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, hsl(36, 33%, 97%) 100%)",
          }}
        />
      </div>
      <ProjectsSection />
      <ProcessSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
