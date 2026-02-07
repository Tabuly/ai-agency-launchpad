import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import twocal from "@/assets/projects/2cal.mov";
import tabuly from "@/assets/projects/tabuly.png";
import cal from "@/assets/projects/cal.jpeg";
import ed from "@/assets/projects/ed.png";
import tng from "@/assets/projects/t&g.png";
import nesoi from "@/assets/projects/nesoi.mov";

export interface Project {
  image?: string;
  video?: string;
  title: string;
  description?: string;
  link?: string;
  featured?: boolean;
  imageFit?: "cover" | "contain";
}

const projects: Project[] = [
  {
    video: twocal,
    title: "2cal",
    description: "Smart scheduling for busy teams. Built for founders who need to move fast.",
  },
  {
    image: tng,
    title: "Project Four",
    description: "Brief description of the project.",
    imageFit: "cover",
  },
  {
    image: cal,
    title: "Project Three",
    description: "Brief description of the project.",
  },
  {
    video: nesoi,
    title: "Project Four",
    description: "Brief description of the project.",
  },
  {
    image: tabuly,
    title: "Tabuly",
    description: "AI-powered table extraction from PDFs. Extract and export tables instantly.",
    imageFit: "cover",
  },
  

  {
    image: ed,
    title: "Project Four",
    description: "Brief description of the project.",
  },
];

export const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;

      if (sectionRect.bottom < viewportCenter) return;
      if (sectionRect.top > viewportCenter) {
        setActiveIndex(0);
        return;
      }

      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const triggerPoint = rect.top + rect.height * 0.3;
        const distance = Math.abs(triggerPoint - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="work" ref={sectionRef} className="relative">
      {/* Mobile: header only */}
      <div className="lg:hidden mb-12 px-6 pt-20">
        <p className="text-sm font-medium text-primary mb-2">Selected work</p>
        <h2 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight text-foreground max-w-2xl">
          Projects we&apos;re proud of
        </h2>
      </div>

      <div className="lg:flex lg:items-start px-6 md:px-12 lg:px-24 pt-0 lg:pt-20 pb-24">
        {/* Left: STICKY column - header + media */}
        <div className="hidden lg:flex lg:sticky lg:top-24 lg:self-start lg:w-[55vw] lg:shrink-0 lg:flex-col lg:gap-8 lg:pl-0 lg:pr-4">
          <div className="mb-4 lg:mb-0">
            <p className="text-sm font-medium text-primary mb-2">Selected work</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight text-foreground max-w-2xl">
              Projects we&apos;re proud of
            </h2>
          </div>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`absolute inset-0 rounded-2xl overflow-hidden transition-opacity duration-500 ${
                  activeIndex === index
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {project.video ? (
                  <video
                    src={project.video}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                ) : (
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`absolute inset-0 h-full w-full object-center ${
                      project.imageFit === "contain"
                        ? "object-contain bg-muted"
                        : "object-cover"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Scrollable column with overlay */}
        <div className="relative flex flex-col lg:flex-1 min-w-0 lg:pl-12">
          {/* <div
            className="hidden lg:block sticky top-24 left-0 right-0 h-[300px] -mb-[300px] pointer-events-none z-10 shrink-0"
            style={{
              background: `linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--background)) 50%, transparent 100%)`,
            }}
          /> */}
          <div className="lg:pt-[150px]">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="min-h-[75vh] flex flex-col lg:flex-row lg:items-start px-6 py-20 lg:px-0 lg:py-16 lg:min-h-[75vh] gap-8 lg:gap-0"
            >
              <div className="lg:hidden relative w-full aspect-video rounded-2xl overflow-hidden bg-muted shrink-0 shadow-lg">
                {project.video ? (
                  <video
                    src={project.video}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                ) : (
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`absolute inset-0 h-full w-full object-center ${
                      project.imageFit === "contain"
                        ? "object-contain bg-muted"
                        : "object-cover"
                    }`}
                  />
                )}
              </div>
              <div className="max-w-xl border-l-2 border-primary pl-6">
                <span className="text-sm font-medium text-muted-foreground">
                  0{index + 1}
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mt-2 mb-4">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    View project
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};
