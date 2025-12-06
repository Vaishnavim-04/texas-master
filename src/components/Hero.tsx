import { motion } from 'framer-motion';
import { Button } from './ui/button';
import heroImage from '@/assets/hero-dish.jpg';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant farm-to-table dish at Arethusa al tavolo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold/50" />
            <span className="font-body text-sm tracking-[0.4em] uppercase text-gold/80">
              OpenTable Top 100 in U.S.
            </span>
            <div className="h-px w-12 bg-gold/50" />
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide">
            <span className="block text-foreground">Local, Seasonal,</span>
            <span className="block text-gold italic mt-2">Inspired.</span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            American Cuisine by Executive Chef Dan Magill
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Button variant="hero" size="xl" className="min-w-[200px]" asChild>
              <a href="https://www.opentable.com/arethusa-al-tavolo" target="_blank" rel="noopener noreferrer">
                Reserve a Table
              </a>
            </Button>
            <Button variant="gold" size="xl" className="min-w-[200px]" asChild>
              <a href="#menu">View Menu</a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-foreground/50">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};