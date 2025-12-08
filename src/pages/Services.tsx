import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const serviceDetails = [
  {
    title: "Residential Plumbing",
    items: ["Faucet repair and installation", "Toilet repair and replacement", "Garbage disposal services", "Pipe repair and replacement", "Fixture installation", "Repiping services"],
  },
  {
    title: "Water Heater Services",
    items: ["Tank water heater installation", "Tankless water heater installation", "Water heater repair", "Water heater maintenance", "Emergency replacement", "Energy-efficient upgrades"],
  },
  {
    title: "Drain Services",
    items: ["Drain cleaning", "Clog removal", "Video camera inspection", "Hydro jetting", "Sewer line repair", "Root intrusion removal"],
  },
  {
    title: "Gas Line Services",
    items: ["Gas line installation", "Gas leak detection", "Gas line repair", "Gas appliance hookup", "Gas pressure testing", "Emergency gas services"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page header */}
        <section className="bg-secondary py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="container relative">
            <nav className="mb-6 text-sm text-secondary-foreground/60">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="mx-3">→</span>
              <span className="text-secondary-foreground font-medium">Services</span>
            </nav>
            <h1 className="text-4xl font-extrabold text-secondary-foreground sm:text-5xl lg:text-6xl">
              Our Plumbing Services
            </h1>
            <p className="mt-5 text-lg text-secondary-foreground/80 max-w-2xl leading-relaxed">
              From routine repairs to emergency plumbing, we offer comprehensive services to keep your home's plumbing in top shape.
            </p>
          </div>
        </section>

        <ServicesSection />

        {/* Detailed services */}
        <section className="py-24 bg-muted/40">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Complete Service Details
              </h2>
              <p className="text-lg text-muted-foreground">Everything we offer to keep your plumbing running smoothly.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {serviceDetails.map((category) => (
                <div key={category.title} className="rounded-2xl bg-card p-8 shadow-lg border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <h3 className="mb-6 text-xl font-bold text-foreground">{category.title}</h3>
                  <ul className="space-y-4">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-4 w-4 text-primary shrink-0" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
