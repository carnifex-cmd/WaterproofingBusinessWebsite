import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="font-heading text-xl font-bold text-primary" data-testid="link-logo">
              Shri Siddhivinayak Waterproofing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <div className="flex gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover-elevate active-elevate-2 min-h-9 px-4 py-2 cursor-pointer ${isActive(link.href)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                      }`}
                    data-testid={`link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            <Link href="/contact" onClick={() => window.scrollTo(0, 0)}>
              <span className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover-elevate active-elevate-2 min-h-9 px-4 py-2 cursor-pointer" data-testid="button-cta-nav">
                <Phone className="w-4 h-4 mr-2" />
                Get Free Inspection
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-1" data-testid="mobile-menu">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover-elevate active-elevate-2 min-h-9 px-4 py-2 w-full cursor-pointer ${isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground"
                    }`}
                  onClick={() => setIsOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
              <span
                className="flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover-elevate active-elevate-2 min-h-9 px-4 py-2 w-full mt-4 cursor-pointer"
                data-testid="button-cta-mobile"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Free Inspection
              </span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
