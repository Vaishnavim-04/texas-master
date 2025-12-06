import { Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-charcoal border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <span className="font-serif text-3xl italic text-gold tracking-wide">
              Arethusa
            </span>
            <span className="font-body text-sm tracking-[0.3em] text-foreground/80 -mt-1">
              al tavolo
            </span>
          </div>

          {/* Tagline */}
          <p className="font-body text-lg text-foreground/60 italic">
            Local, Seasonal, Inspired.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
          </div>

          {/* Decorative Line */}
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {/* Address & Copyright */}
          <div className="space-y-2">
            <p className="font-body text-sm text-foreground/50">
              828 Bantam Road, Bantam, CT 06750 | (860) 567-0043
            </p>
            <p className="font-body text-xs text-foreground/40">
              © {currentYear} Arethusa al tavolo. All rights reserved.
            </p>
          </div>

          {/* Awards */}
          <div className="flex items-center gap-4 text-xs text-foreground/40">
            <span>OpenTable Top 100</span>
            <span>•</span>
            <span>Wine Spectator Award of Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
