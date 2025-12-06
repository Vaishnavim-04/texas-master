import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ambianceImage from '@/assets/restaurant-ambiance.jpg';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={ambianceImage}
                alt="Elegant dining room at Arethusa al tavolo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="font-body text-sm tracking-[0.4em] uppercase text-gold">
                Our Story
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
                A Celebration of
                <span className="block text-gold italic">Connecticut's Finest</span>
              </h2>
            </div>

            <div className="space-y-6 font-body text-lg text-foreground/80 leading-relaxed">
              <p>
                Located in Bantam, Connecticut, Arethusa al tavolo is a purveyor of fine 
                American dining from the vision of Executive Chef Dan Magill. Opened in 
                June 2013, we've become a celebrated destination for those who appreciate 
                the finest Litchfield County has to offer.
              </p>
              <p>
                Situated in what was the historic Village General Store, next to the 
                Arethusa Farm Dairy, we pride ourselves on exclusively using Arethusa 
                dairy products and procuring only the finest seasonal ingredients for 
                our daily-changing menu.
              </p>
            </div>

            {/* Decorative Line */}
            <div className="h-px w-24 bg-gold/50" />

            {/* Signature */}
            <div className="space-y-1">
              <p className="font-serif text-xl italic text-gold">Chef Dan Magill</p>
              <p className="font-body text-sm tracking-wider text-foreground/60 uppercase">
                Executive Chef
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
