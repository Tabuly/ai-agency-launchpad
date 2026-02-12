const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const NavTabs = () => {
  return (
    <div className="hidden md:flex items-center rounded-full px-6 py-2.5">
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
