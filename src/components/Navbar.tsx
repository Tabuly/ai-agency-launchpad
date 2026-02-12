import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NavTabs } from "@/components/NavTabs";
import { ShimmerButton } from "./ui/shimmer-button";
import logo from "@/assets/logos/2-cropped.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past hero section (roughly)
      setScrolled(currentScrollY > 100);
      
      if (currentScrollY < 80) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between relative">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img src={logo} alt="Krayoon" className="w-28 h-auto" />
        </a>

        {/* Desktop Nav Tabs - centered */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <NavTabs />
        </div>

        {/* Desktop CTA - right */}
        <div className="hidden md:block shrink-0">
          <Button
            // variant="navCta"
            size="default"
            className="px-6 -translate-y-0.5 shadow-[0_2px_6px_rgba(0,0,0,0.06)] hover:shadow-[0_3px_10px_rgba(0,0,0,0.08)]"
            asChild
          >
            <a
              href="https://cal.com/joshipallava/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs"
            >
              Book a slot
            </a>
          </Button>
          {/* <ShimmerButton asChild background="hsl(var(--primary))" className="shadow-2xl">
            <a href="https://cal.com/joshipallava/discovery-call" target="_blank" rel="noopener noreferrer" className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white dark:from-white dark:to-slate-900/10">
              Book a slot
            </a>
          </ShimmerButton> */}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/80 border-b border-border px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button variant="navCta" size="default" className="w-full mt-2" asChild>
                <a
                  href="https://cal.com/joshipallava/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a call
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
