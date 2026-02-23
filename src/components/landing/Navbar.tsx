import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const base = import.meta.env.BASE_URL || "/";
  const [open, setOpen] = useState(false);
  const MAIN_SITE = "https://www.scalifysolutions.com";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-3">
        <a href={MAIN_SITE} className="flex items-center gap-2">
          <img
            src={`${base}assets/logo/logo_white.svg`}
            alt="Scalify Solutions"
            className="h-8 md:h-9 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
          <a href={MAIN_SITE} className="hover:text-primary transition-colors">
            Home
          </a>
          <a href={`${MAIN_SITE}/about`} className="hover:text-primary transition-colors">
            About Us
          </a>
          <a href={`${MAIN_SITE}#services`} className="hover:text-primary transition-colors">
            Services
          </a>
          <a href={`${MAIN_SITE}/contact`} className="hover:text-primary transition-colors">
            Contact Us
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/918222822708"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity text-center leading-tight"
          >
            Get Call
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border/60 bg-secondary/30 hover:bg-secondary/50 transition-colors"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto py-4 space-y-2">
            <a href={MAIN_SITE} className="block px-3 py-2 rounded-lg hover:bg-secondary/40">
              Home
            </a>
            <a href={`${MAIN_SITE}/about`} className="block px-3 py-2 rounded-lg hover:bg-secondary/40">
              About Us
            </a>
            <a href={`${MAIN_SITE}#services`} className="block px-3 py-2 rounded-lg hover:bg-secondary/40">
              Services
            </a>
            <a href={`${MAIN_SITE}/contact`} className="block px-3 py-2 rounded-lg hover:bg-secondary/40">
              Contact Us
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
