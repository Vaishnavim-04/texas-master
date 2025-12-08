import { Wrench, Flame, Droplets, Fuel, AlertTriangle, Home, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import waterHeaterImg from "@/assets/water-heater.jpg";
import drainCleaningImg from "@/assets/drain-cleaning.jpg";
import gasServiceImg from "@/assets/gas-service.jpg";

const services = [
  {
    icon: Wrench,
    title: "Plumbing Repairs",
    description:
      "Expert repairs for leaky faucets, running toilets, pipe repairs, and all residential plumbing issues.",
    image: null,
  },
  {
    icon: Flame,
    title: "Water Heater Services",
    description:
      "Installation, repair, and maintenance for traditional and tankless water heaters.",
    image: waterHeaterImg,
  },
  {
    icon: Droplets,
    title: "Drain Cleaning",
    description:
      "Professional drain cleaning and clog removal using state-of-the-art equipment.",
    image: drainCleaningImg,
  },
  {
    icon: Fuel,
    title: "Gas Line Services",
    description:
      "Safe gas line installation, repair, and leak detection by certified professionals.",
    image: gasServiceImg,
  },
  {
    icon: AlertTriangle,
    title: "Emergency Plumbing",
    description:
      "24/7 emergency plumbing services for burst pipes, major leaks, and urgent repairs.",
    image: null,
  },
  {
    icon: Home,
    title: "Residential Plumbing",
    description:
      "Complete plumbing solutions for your home, from new installations to renovations.",
    image: null,
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Our Services
          </span>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Professional Plumbing Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From minor repairs to major installations, our licensed plumbers deliver
            quality workmanship backed by years of experience.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-border/60 bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1"
            >
              {service.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              <CardHeader className={service.image ? "pb-3" : ""}>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg">
                  <service.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all services button */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
