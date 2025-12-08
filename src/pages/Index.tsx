import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TestimonialsSection } from "@/components/TestimonialsSection.tsx";
import { CTASection } from "@/components/CTASection";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <ServiceAreaMap />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
