import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import appetizerImage from '@/assets/dish-appetizer.jpg';
import mainImage from '@/assets/dish-main.jpg';
import dessertImage from '@/assets/dish-dessert.jpg';

const menuItems = [
  {
    category: 'First Course',
    image: appetizerImage,
    items: [
      { name: 'Heirloom Tomato Salad', description: 'Arethusa burrata, basil oil, aged balsamic', price: '22' },
      { name: 'Butternut Squash Soup', description: 'Brown butter, sage, crème fraîche', price: '18' },
      { name: 'Duck Liver Mousse', description: 'Brioche, cornichon, pickled shallot', price: '24' },
    ]
  },
  {
    category: 'Main Course',
    image: mainImage,
    items: [
      { name: 'Pan-Seared Duck Breast', description: 'Root vegetables, cherry gastrique, wild rice', price: '48' },
      { name: 'Berkshire Pork Chop', description: 'Apple mostarda, braised cabbage, jus', price: '44' },
      { name: 'Atlantic Halibut', description: 'Sunchoke purée, brown butter, capers', price: '52' },
    ]
  },
  {
    category: 'Dessert',
    image: dessertImage,
    items: [
      { name: 'Chocolate Mousse Tart', description: 'Gold leaf, cocoa crumble, espresso gelato', price: '16' },
      { name: 'Vanilla Bean Panna Cotta', description: 'Seasonal berries, shortbread', price: '14' },
      { name: 'Selection of Artisan Cheeses', description: 'Local honey, fig compote, crackers', price: '18' },
    ]
  }
];

const MenuCard = ({ item, index }: { item: typeof menuItems[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden mb-6">
        <img
          src={item.image}
          alt={item.category}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
        <h3 className="absolute bottom-6 left-6 font-serif text-2xl text-foreground">
          {item.category}
        </h3>
      </div>

      {/* Menu Items */}
      <div className="space-y-6">
        {item.items.map((menuItem, i) => (
          <div key={i} className="group/item">
            <div className="flex justify-between items-baseline gap-4">
              <h4 className="font-serif text-lg text-foreground group-hover/item:text-gold transition-colors">
                {menuItem.name}
              </h4>
              <span className="font-body text-gold">${menuItem.price}</span>
            </div>
            <p className="font-body text-sm text-muted-foreground mt-1">
              {menuItem.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const Menu = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="py-24 md:py-32 bg-charcoal-light relative">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <span className="font-body text-sm tracking-[0.4em] uppercase text-gold">
            Seasonal Selections
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4">
            Sample Menu
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-6">
            Our menu changes daily based on the freshest seasonal ingredients. 
            Below is a sample of what we offer.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {menuItems.map((item, index) => (
            <MenuCard key={item.category} item={item} index={index} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center font-body text-sm text-muted-foreground mt-16 italic"
        >
          *Menu is subject to change daily. Please inform us of any dietary restrictions.
        </motion.p>
      </div>
    </section>
  );
};
