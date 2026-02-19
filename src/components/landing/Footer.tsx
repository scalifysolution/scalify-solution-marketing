const Footer = () => {
  const base = import.meta.env.BASE_URL || "/";
  return (
  <footer className="border-t border-border py-10 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <span className="flex items-center">
        <img
          src={`${base}assets/logo/logo_white.svg`}
          alt="Scalify Solutions"
          className="h-8 w-auto"
        />
      </span>

      <div className="flex flex-col items-center md:items-start gap-1 text-sm text-muted-foreground">
        <a href="tel:+918222822708" className="hover:text-primary transition-colors">
          +918222822708
        </a>
        <a
          href="mailto:sales@scalifysolutions.com"
          className="hover:text-primary transition-colors"
        >
          sales@scalifysolutions.com
        </a>
        <span className="text-center md:text-left">
          Office No. 5 Supermax Galleria, Sec. 33, Rathdhana, Sonipat, Haryana
        </span>
      </div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Scalify Solutions. All rights reserved.
      </p>
    </div>

    <div className="container mx-auto mt-6 text-center">
      <p className="text-sm text-muted-foreground italic">
        "We build apps that users love, and markets trust."
      </p>
    </div>
  </footer>
  );
};

export default Footer;
