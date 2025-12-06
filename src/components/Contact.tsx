import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Button } from './ui/button';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    lines: ['828 Bantam Road', 'Bantam, CT 06750'],
    note: 'Parking located behind the restaurant on Doyle Road'
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['(860) 567-0043'],
    note: 'For general inquiries & gift card requests'
  },
  {
    icon: Clock,
    title: 'Hours',
    lines: [
      'Tuesday - Thursday: 5:00pm - 9:00pm',
      'Friday - Saturday: 4:30pm - 9:30pm',
    ],
    note: 'Closed Sunday & Monday'
  },
  {
    icon: Mail,
    title: 'Pick-up Orders',
    lines: ['orders@arethusaaltavolo.com'],
    note: 'Email by 3:30PM for same day pick-up'
  }
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal-light relative">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <span className="font-body text-sm tracking-[0.4em] uppercase text-gold">
            Visit Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4">
            Contact & Hours
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-6">
            We look forward to welcoming you to our table. Reservations can be made 
            through OpenTable up to 90 days in advance.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center p-6 bg-charcoal border border-border/30 hover:border-gold/30 transition-colors duration-300"
            >
              <info.icon className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl text-foreground mb-3">{info.title}</h3>
              <div className="space-y-1 mb-4">
                {info.lines.map((line, i) => (
                  <p key={i} className="font-body text-sm text-foreground/80">
                    {line}
                  </p>
                ))}
              </div>
              <p className="font-body text-xs text-muted-foreground italic">
                {info.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="https://www.opentable.com/arethusa-al-tavolo" target="_blank" rel="noopener noreferrer">
              Make a Reservation
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
