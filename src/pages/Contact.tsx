import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page header */}
        <section className="bg-secondary py-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <div className="container relative">
            <nav className="mb-6 text-sm text-secondary-foreground/60">
              <Link to="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <span className="mx-3">→</span>
              <span className="text-secondary-foreground font-medium">Contact Us</span>
            </nav>
            <h1 className="text-4xl font-extrabold text-secondary-foreground sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-5 text-lg text-secondary-foreground/80 max-w-2xl leading-relaxed">
              Ready to schedule your plumbing service? Get in touch with us today
              for a free estimate.
            </p>
          </div>
        </section>

        <ContactForm />
        <ServiceAreaMap />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
