import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@assets/DSO_Pricing_Logo_1774232568739.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/built-different", label: "Built Different" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10" style={{ backgroundColor: "#0f1628" }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center" data-testid="link-logo">
          <img src={logo} alt="DSO Pricing" className="h-9 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
        </Link>

        <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                location === link.href
                  ? "text-white bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
            <Link href="/contact" data-testid="button-book-call">Book a Call</Link>
          </Button>
          <Button asChild size="sm" className="text-white font-semibold" style={{ backgroundColor: "#ea580c" }}>
            <Link href="/pricing" data-testid="button-join-nav">Join DSO Pricing</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          data-testid="button-mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-2 shadow-lg" style={{ backgroundColor: "#0f1628" }} data-testid="nav-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              data-testid={`link-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
              className={`px-4 py-2 text-base font-medium rounded-md ${
                location === link.href
                  ? "text-white bg-white/10"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-white/10">
            <Button asChild variant="outline" size="sm" className="border-white/20 text-white bg-transparent w-full">
              <Link href="/contact" onClick={() => setOpen(false)} data-testid="button-mobile-book">Book a Call</Link>
            </Button>
            <Button asChild size="sm" className="w-full text-white font-semibold" style={{ backgroundColor: "#ea580c" }}>
              <Link href="/pricing" onClick={() => setOpen(false)} data-testid="button-mobile-join">Join DSO Pricing</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
