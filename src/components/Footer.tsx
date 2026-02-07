import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Work: [
    { label: "Projects", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  Connect: [
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative">
      {/* CTA band */}
      <div className="relative bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-primary-foreground/70 text-sm font-medium mb-4">
              Ready to build?
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              Let&apos;s turn your idea into something real.
            </h2>
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

      {/* Main footer */}
      <div className="bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-8">
            {/* Logo & tagline */}
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

            {/* Links grid */}
            <div className="flex flex-wrap gap-12 lg:gap-16">
              {Object.entries(footerLinks).map(([group, links]) => (
                <div key={group}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    {group}
                  </p>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-foreground/80 hover:text-foreground text-sm font-medium transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Agency. All rights reserved.
            </p>
            <p className="text-muted-foreground/80 text-sm">
              Built for founders who move fast.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
