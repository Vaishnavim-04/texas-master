import { Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Ready to Solve Your Plumbing Problems?
          </h2>
          <p className="mb-10 text-lg text-primary-foreground/85 leading-relaxed">
            Get a free estimate today. No service fees, no trip charges — just
            honest, professional plumbing service you can count on.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="xl"
              variant="accent"
              className="group"
            >
              <a href="tel:+18327369561">
                <Phone className="mr-2 h-5 w-5" />
                Call (832) 736-9561
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline-light"
              className="group"
            >
              <Link to="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Online
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
