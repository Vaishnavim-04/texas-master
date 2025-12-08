import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Droplets, Facebook, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main footer */}
      <div className="container py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-lg transition-all duration-300 group-hover:scale-105">
                <Droplets className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">
                  Texas Master
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Plumber LLC
                </span>
              </div>
            </Link>
            <p className="text-sm text-secondary-foreground/75 leading-relaxed">
              Your trusted plumbing professionals serving Houston and surrounding
              areas since 2007. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-foreground/10 transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="group flex items-center gap-2 text-secondary-foreground/75 transition-all duration-300 hover:text-accent"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Our Services</h3>
            <ul className="space-y-4 text-sm">
              {[
                "Plumbing Repairs",
                "Water Heater Services",
                "Drain Cleaning",
                "Gas Line Services",
                "Emergency Plumbing",
              ].map((service) => (
                <li key={service}>
                  <span className="group flex items-center gap-2 text-secondary-foreground/75 transition-all duration-300 hover:text-accent cursor-pointer">
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Contact Info</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-secondary-foreground/60 mb-1">Call Us</p>
                  <a href="tel:+18327369561" className="font-semibold hover:text-accent transition-colors">
                    (832) 736-9561
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-secondary-foreground/60 mb-1">Email Us</p>
                  <a href="mailto:info@texasmasterplumber.com" className="font-semibold hover:text-accent transition-colors break-all">
                    info@texasmasterplumber.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-secondary-foreground/60 mb-1">Service Area</p>
                  <span className="font-semibold">League City, TX & Surrounding</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-secondary-foreground/60 mb-1">Hours</p>
                  <span className="font-semibold">24/7 Emergency Available</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container py-6 text-center text-sm text-secondary-foreground/60">
          <p>
            © {new Date().getFullYear()} Texas Master Plumber LLC. All rights
            reserved. Licensed by the Texas State Board of Plumbing Examiners.
          </p>
        </div>
      </div>
    </footer>
  );
}
