import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import cocktailImage from '@/assets/cocktail.jpg';

const cocktails = [
  {
    name: 'Bitter Sweet',
    ingredients: 'Victoria Pink Gin, Elderflower, Grapefruit-Lime Sour',
    price: '18'
  },
  {
    name: 'Huckleberry Lemon Thyme',
    ingredients: '44 North Huckleberry Vodka, Fresh Lemon, Thyme Infused Simple',
    price: '18'
  },
  {
    name: 'Bantam Old Fashioned',
    ingredients: 'Litchfield Bourbon, Byrrh, House Blend Bitter, Dehydrated Orange',
    price: '18'
  },
  {
    name: 'Mighty Manhattan',
    ingredients: 'Bourbon, Rye, Cocchi di Torino, Orange, Luxardo Cherry',
    price: '18'
  },
  {
    name: 'Kiwi Bellini',
    ingredients: 'Yuzu-Kiwi Sour, Giffard Pêche de Vigne, Prosecco',
    price: '18'
  },
  {
    name: 'Lychee Jalapeño Margarita',
    ingredients: 'Corazón Blanco, Lychee-Lime Sour, Combier, Pressed Jalapeño',
    price: '18'
  },
];

export const Cocktails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cocktails" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 w-1/3 h-96 bg-gradient-to-l from-gold/5 to-transparent -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="font-body text-sm tracking-[0.4em] uppercase text-gold">
                Crafted with Care
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
                Signature
                <span className="block text-gold italic">Cocktails</span>
              </h2>
              <p className="font-body text-lg text-foreground/80 max-w-lg">
                Each cocktail is carefully crafted by our expert mixologists, 
                featuring premium spirits and fresh, seasonal ingredients.
              </p>
            </div>

            {/* Cocktail List */}
            <div className="space-y-6">
              {cocktails.map((cocktail, index) => (
                <motion.div
                  key={cocktail.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group border-b border-border/30 pb-4"
                >
                  <div className="flex justify-between items-baseline gap-4">
                    <h3 className="font-serif text-xl text-foreground group-hover:text-gold transition-colors">
                      {cocktail.name}
                    </h3>
                    <span className="font-body text-gold">${cocktail.price}</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {cocktail.ingredients}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={cocktailImage}
                alt="Signature cocktail at Arethusa al tavolo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-gold/30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
