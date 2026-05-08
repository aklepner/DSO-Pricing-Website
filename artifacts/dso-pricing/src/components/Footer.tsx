import { Link } from "wouter";
const logo = `${import.meta.env.BASE_URL}dso-pricing-logo.png`;

const NAVY = "#000000";
const ORANGE = "#DD042A";

export default function Footer() {
  return (
    <footer className="text-white/70 border-t border-white/10" style={{ backgroundColor: NAVY }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="mb-4">
              <img
                src={logo}
                alt="DSO Pricing"
                className="h-20 w-auto"
                
              />
            </div>
            <p className="text-base leading-relaxed text-white/50">
              A growth leverage platform for dental practices. Built to protect margins and scale smarter.
            </p>
          </div>
          <div>
            <p className="text-white/90 font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</p>
            <ul className="space-y-2 text-base">
              {[
                { href: "/", label: "Home" },
                { href: "/built-different", label: "How It Works" },
                { href: "/pricing", label: "Pricing" },
                { href: "/calculator", label: "Savings Calculator" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-white transition-colors" data-testid={`footer-link-${link.label.toLowerCase().replace(" ", "-")}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white/90 font-semibold text-sm mb-4 uppercase tracking-wider">Contact</p>
            <p className="text-base">
              <a href="mailto:hello@dsopricing.com" className="text-white/50 hover:text-white transition-colors" data-testid="footer-email">
                hello@dsopricing.com
              </a>
            </p>
            <p className="text-sm mt-1 text-white/40">Response within 1–2 business days</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} DSO Pricing. All rights reserved.</p>
          <p>Build a Stronger, More Scalable Dental Business — On Your Terms.</p>
        </div>
      </div>
    </footer>
  );
}
