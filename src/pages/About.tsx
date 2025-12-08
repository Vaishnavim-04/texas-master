import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTASection } from "@/components/CTASection";
import { Award, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
              <span className="text-secondary-foreground font-medium">About Us</span>
            </nav>
            <h1 className="text-4xl font-extrabold text-secondary-foreground sm:text-5xl lg:text-6xl">
              About Texas Master Plumber
            </h1>
            <p className="mt-5 text-lg text-secondary-foreground/80 max-w-2xl leading-relaxed">
              Your trusted plumbing professionals serving the Houston area since 2007.
            </p>
          </div>
        </section>

        {/* Story section */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              <div>
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                  Our Story
                </span>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Built on Trust, Driven by Excellence
                </h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Texas Master Plumber was founded with a simple mission: to provide honest, reliable plumbing services that homeowners can trust. Since 2007, we've been proudly serving League City, Houston, and the surrounding communities.
                  </p>
                  <p>
                    Our founder, a licensed Master Plumber, grew up in the area and understands the unique plumbing challenges that come with Texas weather and local building codes.
                  </p>
                  <p>
                    Today, we're proud to be one of the most requested plumbers in Houston, with thousands of satisfied customers and a reputation for excellence.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, value: "Licensed", label: "Texas State Board Certified" },
                  { icon: Shield, value: "Insured", label: "3x Required Coverage" },
                  { icon: Users, value: "5,000+", label: "Happy Customers" },
                  { icon: Clock, value: "15+", label: "Years Experience" },
                ].map((item) => (
                  <div key={item.value} className="rounded-2xl bg-primary/10 p-6 text-center transition-all duration-300 hover:bg-primary/15 hover:shadow-lg">
                    <item.icon className="mx-auto mb-3 h-10 w-10 text-primary" />
                    <p className="text-2xl font-bold text-foreground">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-muted/40">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground">The principles that guide everything we do.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                { num: "1", title: "Integrity", desc: "We believe in honest pricing, transparent communication, and doing the right thing — even when no one is watching." },
                { num: "2", title: "Quality", desc: "We never cut corners. Every repair, every installation is done to the highest standards using quality materials." },
                { num: "3", title: "Service", desc: "Your satisfaction is our priority. We treat every customer like family and every home like it's our own." },
              ].map((value) => (
                <div key={value.num} className="text-center group">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 transition-all duration-300 group-hover:bg-accent group-hover:shadow-lg">
                    <span className="text-2xl font-bold text-accent transition-colors group-hover:text-accent-foreground">{value.num}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
