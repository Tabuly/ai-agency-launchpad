import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import agentCtaBg from "@/assets/agent-cta-background.webp";

const footerLinks = {
  Work: [
    { label: "Projects", href: "#work" },
    { label: "Services", href: "#" },
    { label: "Process", href: "#process" },
  ],
  Company: [
    // { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#" },
  ],
  Connect: [
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative">
      <div
        className="relative text-primary-foreground overflow-hidden bg-primary bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${agentCtaBg})` }}
      >
        <div className="relative max-w-5xl mx-auto px-8 sm:px-10 md:px-16 lg:px-20 xl:px-32 py-14 lg:py-20">
          <div className="max-w-2xl">
            <div className="pb-20">
            <p className="text-primary-foreground/70 text-sm font-medium mb-8">
              Ready to build?
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              Let&apos;s turn your idea into something real.
            </h2>
            </div>
            <p className="text-primary-foreground/70 text-lg mb-10">
              Book a slot and we&apos;ll get your MVP shipped in 2 weeks.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2"
              asChild
            >
              <a
                href="https://cal.com/joshipallava/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Book a slot
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-background border-t border-border">
        <div className="max-w-5xl mx-auto px-8 sm:px-10 md:px-16 lg:px-20 xl:px-32 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-8">
            <div className="lg:max-w-xs">
              <a
                href="/"
                className="font-heading text-2xl tracking-tight text-foreground hover:opacity-80 transition-opacity"
              >
                Agency
              </a>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                We help solo founders and small teams ship MVPs in 2 weeks.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-8">
              {Object.entries(footerLinks).map(([group, links]) => (
                <div key={group}>
                  <p className="text-sm font-medium text-foreground mb-4">
                    {group}
                  </p>
                  <ul className="space-y-3">
                    {links.map(({ label, href }) => (
                      <li key={label}>
                        <a
                          href={href}
                          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-12 pt-8 border-t border-border text-muted-foreground text-sm">
            © {new Date().getFullYear()} Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
