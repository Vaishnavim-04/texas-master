import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/95 backdrop-blur-md supports-[backdrop-filter]:bg-card/85">
      {/* Top bar */}
      <div className="bg-secondary">
        <div className="container flex h-10 items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-secondary-foreground/90">
            <span className="hidden sm:inline font-medium">✓ Licensed & Insured Master Plumbers</span>
            <span className="inline sm:hidden font-medium">⚡ 24/7 Emergency Service</span>
          </div>
          <a
            href="tel:+18327369561"
            className="flex items-center gap-2 font-bold text-accent transition-all duration-300 hover:text-accent/80"
          >
            <Phone className="h-4 w-4" />
            (832) 736-9561
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
            <Droplets className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-tight text-foreground tracking-tight">
              Texas Master
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Plumber LLC
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-center md:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg",
                location.pathname === item.href
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              )}
            >
              {item.name}
              {location.pathname === item.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
          <Button asChild size="lg" variant="accent" className="ml-4">
            <a href="tel:+18327369561">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2.5 text-foreground hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300",
                  location.pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4" size="lg" variant="accent">
              <a href="tel:+18327369561">
                <Phone className="mr-2 h-4 w-4" />
                Call Now - (832) 736-9561
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
