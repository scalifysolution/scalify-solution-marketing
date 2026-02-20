const Navbar = () => {
  const base = import.meta.env.BASE_URL || "/";
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        <a href="/" className="flex items-center">
          <img
            src={`${base}assets/logo/logo_white.svg`}
            alt="Scalify Solutions"
            className="h-8 md:h-9 w-auto"
          />
        </a>

        <div className="hidden lg:flex items-center gap-5 text-xs text-muted-foreground">
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

        <a
          href="https://wa.me/918222822708"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity text-center leading-tight"
        >
          Get Call
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
