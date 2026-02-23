import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SERVICE_ROUTES = [
  { label: "App Development", to: "/app-development" },
  { label: "CRM Development", to: "/crm-development" },
  { label: "AI Platform", to: "/ai-platform" },
  { label: "Website Development", to: "/website-development" },
  { label: "Social Media Marketing", to: "/social-media-marketing" },
];

const Navbar = () => {
  const base = import.meta.env.BASE_URL || "/";
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const currentPath = location.pathname || "/app-development";
  const aboutLink = useMemo(() => `${currentPath}#about`, [currentPath]);
  const servicesLink = useMemo(() => `${currentPath}#services`, [currentPath]);
  const contactLink = useMemo(() => `${currentPath}#contact`, [currentPath]);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/app-development#home" className="flex items-center gap-2">
          <img
            src={`${base}assets/logo/logo_white.svg`}
            alt="Scalify Solutions"
            className="h-8 md:h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/app-development#home" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link to={aboutLink} className="hover:text-primary transition-colors">
            About Us
          </Link>

          <div className="relative group">
            <Link
              to={servicesLink}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              Services <ChevronDown size={16} />
            </Link>
            <div className="absolute left-0 top-full pt-3 hidden group-hover:block">
              <div className="glass-card p-2 rounded-xl w-64">
                {SERVICE_ROUTES.map((s) => (
                  <Link
                    key={s.to}
                    to={`${s.to}#home`}
                    className="block px-3 py-2 rounded-lg text-sm text-foreground/90 hover:bg-secondary/60 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to={contactLink} className="hover:text-primary transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Desktop contact bits */}
        <div className="hidden xl:flex items-center gap-5 text-xs text-muted-foreground">
          <a
            href="tel:+918222822708"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            +91 8222822708
          </a>
          <a
            href="mailto:sales@scalifysolutions.com"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            sales@scalifysolutions.com
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
            <Link to="/app-development#home" className="block px-3 py-2 rounded-lg hover:bg-secondary/40">
              Home
            </Link>
            <Link to={aboutLink} className="block px-3 py-2 rounded-lg hover:bg-secondary/40">
              About Us
            </Link>

            <button
              type="button"
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-secondary/40"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              <span>Services</span>
              <ChevronDown size={16} className={servicesOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </button>
            {servicesOpen ? (
              <div className="pl-3 space-y-1">
                {SERVICE_ROUTES.map((s) => (
                  <Link
                    key={s.to}
                    to={`${s.to}#home`}
                    className="block px-3 py-2 rounded-lg text-sm text-foreground/90 hover:bg-secondary/40"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            ) : null}

            <Link to={contactLink} className="block px-3 py-2 rounded-lg hover:bg-secondary/40">
              Contact Us
            </Link>

            <div className="pt-2 border-t border-border/50 text-xs text-muted-foreground space-y-1">
              <a href="tel:+918222822708" className="block px-3 py-2 rounded-lg hover:bg-secondary/20">
                Call: +91 8222822708
              </a>
              <a href="mailto:sales@scalifysolutions.com" className="block px-3 py-2 rounded-lg hover:bg-secondary/20">
                Email: sales@scalifysolutions.com
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
