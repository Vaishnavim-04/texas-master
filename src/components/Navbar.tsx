import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Cocktails", href: "#cocktails" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
      ${scrolled ? "bg-charcoal/95 backdrop-blur-md py-4" : "bg-transparent py-6"}`}
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

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              className="font-body text-sm tracking-widest uppercase text-foreground/80 hover:text-gold transition-colors"
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

        {/* Mobile Toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-charcoal/95 border-t border-border/30">
          <div className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href}
                className="font-body text-lg uppercase text-foreground/80 hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <Button variant="gold" size="lg" className="mt-2" asChild>
              <a href="https://www.opentable.com/arethusa-al-tavolo" target="_blank" rel="noopener noreferrer">
                Reservations
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
