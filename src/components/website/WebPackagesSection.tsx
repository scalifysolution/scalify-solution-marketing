import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Search, MapPin, Share2, MessageSquare, Phone as PhoneIcon, CheckCircle, BarChart3, TrendingUp, Brain, Target, Megaphone, PenTool, Eye, Users, Zap, Settings, FileText, Activity, Lock } from "lucide-react";

const packages = [
  {
    name: "Simple Business Website",
    tagline: "Get online. Look professional. Start now.",
    price: "₹25,000",
    priceNote: "One-Time",
    monthly: null,
    monthlyNote: null,
    features: [
      { icon: Globe, text: "5 Custom-Designed Pages" },
      { icon: Smartphone, text: "Mobile Responsive Design" },
      { icon: MessageSquare, text: "Contact Form + WhatsApp Button" },
      { icon: PhoneIcon, text: "Click-to-Call Button" },
      { icon: Search, text: "Basic SEO Structure" },
      { icon: MapPin, text: "Google Map Integration" },
      { icon: Share2, text: "Social Media Links" },
      { icon: Globe, text: "Domain & Hosting Guidance" },
    ],
    bestFor: "New businesses that need a clean, professional online presence — fast.",
    cta: "🌐 Get My Website",
    badge: null,
    highlight: false,
  },
  {
    name: "Custom SEO Website",
    tagline: "Rank on Google. Control everything. Own your brand.",
    price: "₹75,000",
    priceNote: "Website (One-Time)",
    monthly: "25K – 50K / Month",
    monthlyNote: "Ongoing SEO & Ranking",
    features: [
      { icon: CheckCircle, text: "Everything in Simple Plan +" },
      { icon: Search, text: "Complete SEO Optimization" },
      { icon: Settings, text: "Full Backend Control (CMS)" },
      { icon: Zap, text: "Speed & Performance Optimized" },
      { icon: Lock, text: "SSL Security & Analytics" },
      { icon: PenTool, text: "Custom UI/UX Design" },
      { icon: FileText, text: "Blog / Content Section" },
      { icon: Target, text: "Lead Capture & Conversion Focus" },
    ],
    bestFor: "Growing businesses that want to rank on Google and manage their own content without calling a developer.",
    cta: "🔥 Build My SEO Website",
    badge: "Most Popular",
    highlight: true,
  },
  {
    name: "Website + Growth Plan",
    tagline: "We don't just build it. We grow it. Every single month.",
    price: "₹75,000",
    priceNote: "Website (One-Time)",
    monthly: "50K – 1L / Month",
    monthlyNote: "SEO + Social Media + Growth",
    features: [
      { icon: CheckCircle, text: "Custom SEO Website Included +" },
      { icon: BarChart3, text: "Monthly SEO & Ranking Reports" },
      { icon: Megaphone, text: "Social Media Content & Management" },
      { icon: TrendingUp, text: "Lead Generation Strategy" },
      { icon: Brain, text: "Competitor Analysis & Positioning" },
      { icon: Eye, text: "Brand Visibility & Organic Reach" },
      { icon: Users, text: "Dedicated Growth Team" },
      { icon: Activity, text: "Monthly Performance Reviews" },
    ],
    bestFor: "Businesses that want RESULTS — not just a website. Leads, ranking, brand growth, everything handled.",
    cta: "🚀 Start My Growth Plan",
    badge: "Results Guaranteed",
    highlight: false,
  },
];

const WebPackagesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-6">
          <p className="text-sm text-primary font-medium mb-3">Choose your level...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Three Plans. <span className="gradient-text">One Promise: Results.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you need a simple site or a full growth engine — we've got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 mb-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`glass-card p-7 rounded-2xl flex flex-col relative ${pkg.highlight ? "glow-primary gradient-border" : ""}`}
            >
              {pkg.badge && (
                <span className={`absolute -top-3 right-5 px-3 py-1 rounded-full text-xs font-bold ${pkg.highlight ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
                  {pkg.badge}
                </span>
              )}

              <h3 className="font-heading font-bold text-xl mb-1">{pkg.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">{pkg.tagline}</p>

              <div className="mb-1">
                <span className="text-3xl font-heading font-bold gradient-text">{pkg.price}</span>
                <span className="text-xs text-muted-foreground ml-2">{pkg.priceNote}</span>
              </div>

              {pkg.monthly && (
                <div className="mb-1">
                  <span className="text-lg font-heading font-bold text-foreground">+ {pkg.monthly}</span>
                  <span className="text-xs text-muted-foreground ml-2">{pkg.monthlyNote}</span>
                </div>
              )}

              <div className="mb-4" />

              <ul className="space-y-2.5 mb-6 flex-1">
                {pkg.features.map((f) => (
                  <li key={f.text} className="text-sm text-muted-foreground flex items-start gap-2">
                    <f.icon className="text-primary shrink-0 mt-0.5" size={16} />
                    {f.text}
                  </li>
                ))}
              </ul>

              <div className="glass-card p-3 rounded-xl mb-5">
                <p className="text-xs text-muted-foreground">
                  📌 <span className="text-foreground font-medium">Best for:</span> {pkg.bestFor}
                </p>
              </div>

              <a
                href="#contact"
                className={`text-center py-2.5 rounded-xl font-heading font-semibold text-sm transition-opacity hover:opacity-90 block ${
                  pkg.highlight ? "bg-primary text-primary-foreground glow-primary" : "bg-secondary text-foreground border border-border"
                }`}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* The Scalify Promise */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="glass-card p-6 rounded-2xl text-center glow-primary"
        >
          <p className="text-lg font-heading font-bold mb-2">
            ⚡ The Scalify Problem: <span className="gradient-text">We Can't Work Simple.</span>
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Even our ₹25K website is better than most ₹1L websites out there. And our Growth Plan? You'll see results that make you wonder why you didn't start sooner. That's just how we're built.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WebPackagesSection;
