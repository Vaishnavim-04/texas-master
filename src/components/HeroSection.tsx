import { Phone, Star, Shield, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-plumber.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary min-h-[600px] lg:min-h-[700px]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional plumber working on kitchen sink"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
      </div>

      <div className="container relative py-24 lg:py-36">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-2 text-sm font-semibold text-accent backdrop-blur-sm">
            <Star className="h-4 w-4 fill-accent text-accent" />
            Houston's Most Trusted Plumber Since 2007
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-secondary-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
            Expert Plumbing Services You Can{" "}
            <span className="text-accent">Trust</span>
          </h1>

          {/* Description */}
          <p className="mb-10 text-lg text-secondary-foreground/85 sm:text-xl leading-relaxed">
            Licensed and insured plumbing professionals serving League City,
            Houston, and surrounding areas. From emergency repairs to water heater
            installations, we've got you covered.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="xl" variant="accent" className="group">
              <a href="tel:+18327369561">
                <Phone className="mr-2 h-5 w-5" />
                Call (832) 736-9561
              </a>
            </Button>
            <Button
              asChild
              variant="outline-light"
              size="xl"
              className="group"
            >
              <Link to="/contact">
                Get Free Estimate
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-8">
            <div className="flex flex-col items-center text-center sm:flex-row sm:text-left gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20 border border-accent/30 backdrop-blur-sm">
                <Shield className="h-7 w-7 text-accent" />
              </div>
              <div>
                <p className="text-sm font-bold text-secondary-foreground">
                  Licensed & Insured
                </p>
                <p className="hidden sm:block text-xs text-secondary-foreground/70 mt-0.5">
                  Full protection
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center sm:flex-row sm:text-left gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20 border border-accent/30 backdrop-blur-sm">
                <Clock className="h-7 w-7 text-accent" />
              </div>
              <div>
                <p className="text-sm font-bold text-secondary-foreground">
                  24/7 Emergency
                </p>
                <p className="hidden sm:block text-xs text-secondary-foreground/70 mt-0.5">
                  Always available
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center sm:flex-row sm:text-left gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20 border border-accent/30 backdrop-blur-sm">
                <Star className="h-7 w-7 text-accent" />
              </div>
              <div>
                <p className="text-sm font-bold text-secondary-foreground">
                  5-Star Rated
                </p>
                <p className="hidden sm:block text-xs text-secondary-foreground/70 mt-0.5">
                  500+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
