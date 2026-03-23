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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center" data-testid="link-logo">
          <img src={logo} alt="DSO Pricing" className="h-9 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              className={`px-4 py-2 text-base font-medium rounded-md transition-colors ${
                location === link.href
                  ? "text-primary bg-primary/5"
                  : "text-secondary/70 hover:text-primary hover:bg-primary/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 bg-transparent">
            <Link href="/contact" data-testid="button-book-call">Book a Call</Link>
          </Button>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/pricing" data-testid="button-join-nav">Join DSO Pricing</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-secondary p-2"
          onClick={() => setOpen(!open)}
          data-testid="button-mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-2 shadow-lg" data-testid="nav-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              data-testid={`link-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
              className={`px-4 py-2 text-base font-medium rounded-md ${
                location === link.href
                  ? "text-primary bg-primary/10"
                  : "text-secondary/70 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-border">
            <Button asChild variant="outline" size="sm" className="border-primary/20 text-primary bg-transparent w-full">
              <Link href="/contact" onClick={() => setOpen(false)} data-testid="button-mobile-book">Book a Call</Link>
            </Button>
            <Button asChild size="sm" className="w-full bg-primary text-primary-foreground">
              <Link href="/pricing" onClick={() => setOpen(false)} data-testid="button-mobile-join">Join DSO Pricing</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
