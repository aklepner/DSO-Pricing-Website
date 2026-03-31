import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logo from "@assets/image_1774973076070.png";

const leftLinks = [
  { href: "/", label: "Home" },
  { href: "/built-different", label: "Built Different" },
];

const rightLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const allLinks = [...leftLinks, ...rightLinks];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "#0F0F0F", borderBottom: "2px solid #DD042A" }}>
      {/* DESKTOP */}
      <div className="hidden md:grid max-w-6xl mx-auto px-6 h-20" style={{ gridTemplateColumns: "1fr auto 1fr" }}>
        {/* LEFT LINKS */}
        <nav className="flex items-center justify-end gap-8" data-testid="nav-left">
          {leftLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-black uppercase tracking-widest transition-colors"
              style={{ color: location === link.href ? "#DD042A" : "rgba(255,255,255,0.75)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CENTERED LOGO */}
        <Link href="/" className="flex items-center justify-center px-10" data-testid="link-logo">
          <img src={logo} alt="DSO Pricing" className="h-12 w-auto"  />
        </Link>

        {/* RIGHT LINKS */}
        <nav className="flex items-center justify-start gap-8" data-testid="nav-right">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-black uppercase tracking-widest transition-colors"
              style={{ color: location === link.href ? "#DD042A" : "rgba(255,255,255,0.75)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* MOBILE */}
      <div className="md:hidden flex items-center justify-between px-6 h-16">
        <Link href="/" className="flex items-center" data-testid="link-logo-mobile">
          <img src={logo} alt="DSO Pricing" className="h-8 w-auto"  />
        </Link>
        <button
          className="text-white p-2"
          onClick={() => setOpen(!open)}
          data-testid="button-mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-white/10 px-6 py-4 flex flex-col gap-1" style={{ backgroundColor: "#0F0F0F" }} data-testid="nav-mobile">
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              data-testid={`link-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
              className="px-4 py-3 text-sm font-black uppercase tracking-widest rounded-lg transition-colors"
              style={{ color: location === link.href ? "#DD042A" : "rgba(255,255,255,0.7)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
