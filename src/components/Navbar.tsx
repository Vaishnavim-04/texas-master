import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Cocktails', href: '#cocktails' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-charcoal/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex flex-col items-center">
          <span className="font-serif text-2xl md:text-3xl italic text-gold tracking-wide">
            Arethusa
          </span>
          <span className="font-body text-xs md:text-sm tracking-[0.3em] text-foreground/80 -mt-1">
            al tavolo
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-body text-sm tracking-widest uppercase text-foreground/80 hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <Button variant="gold" size="lg" asChild>
            <a href="https://www.opentable.com/arethusa-al-tavolo" target="_blank" rel="noopener noreferrer">
              Reservations
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-charcoal/98 backdrop-blur-lg border-t border-border/20"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-body text-lg tracking-widest uppercase text-foreground/80 hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="gold" size="lg" className="mt-4" asChild>
                <a href="https://www.opentable.com/arethusa-al-tavolo" target="_blank" rel="noopener noreferrer">
                  Reservations
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
