import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PenTool, TrendingUp, Calendar, Megaphone, Eye, Users, BarChart3, Target, Search, Globe, Brain, Activity, MessageSquare, Film, Lightbulb } from "lucide-react";

const packages = [
  {
    name: "Social Media Growth",
    tagline: "We handle your social media. We think how your page will grow.",
    price: "50K / Month",
    features: [
      { icon: Calendar, text: "Monthly Content Strategy & Planning" },
      { icon: PenTool, text: "Post Design + Brand-Consistent Creatives" },
      { icon: Film, text: "Reels, Stories & Short Video Content" },
      { icon: Megaphone, text: "Consistent Posting & Scheduling" },
      { icon: Lightbulb, text: "Content Ideas & Trend Research" },
      { icon: Eye, text: "Organic Reach & Engagement Growth" },
      { icon: Users, text: "Community Building & Engagement" },
      { icon: BarChart3, text: "Monthly Performance Reports" },
      { icon: Brain, text: "Growth Strategy — We Think How to Improve" },
      { icon: MessageSquare, text: "Dedicated Account Manager" },
    ],
    bestFor: "Businesses that want their social media handled properly — with someone who actually THINKS about growth, not just posts and leaves.",
    cta: "🔥 Start Growing Now",
    badge: null,
    highlight: false,
  },
  {
    name: "Full Brand Visibility",
    tagline: "We take charge of EVERYTHING. Your brand will be everywhere.",
    price: "1L / Month",
    features: [
      { icon: TrendingUp, text: "Everything in Social Media Growth +" },
      { icon: Search, text: "Complete Website SEO & Ranking" },
      { icon: Globe, text: "Full Online Presence Management" },
      { icon: Target, text: "Lead Generation & Ad Campaigns" },
      { icon: Brain, text: "Competitor Analysis & Market Positioning" },
      { icon: Activity, text: "Brand Visibility in Your Area" },
      { icon: BarChart3, text: "Weekly Performance Tracking" },
      { icon: Eye, text: "Google, Instagram, Facebook — Everywhere" },
      { icon: Users, text: "Dedicated Growth Team" },
      { icon: Megaphone, text: "We Handle Everything — You Focus on Business" },
    ],
    bestFor: "Brands that want to DOMINATE their market. Full visibility, full growth, full results. We handle everything — social media, SEO, website, leads, brand presence.",
    cta: "🚀 Dominate My Market",
    badge: "⚡ Maximum Growth",
    highlight: true,
  },
];

const SocialPackagesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-6">
          <p className="text-sm text-primary font-medium mb-3">Two plans. One promise.</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Choose Your <span className="gradient-text">Growth Level</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't have 10 confusing plans. Pick one. We'll handle the rest.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12 max-w-4xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`glass-card p-7 rounded-2xl flex flex-col relative ${pkg.highlight ? "glow-primary gradient-border" : ""}`}
            >
              {pkg.badge && (
                <span className="absolute -top-3 right-5 px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground">
                  {pkg.badge}
                </span>
              )}

              <h3 className="font-heading font-bold text-xl mb-1">{pkg.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">{pkg.tagline}</p>

              <div className="mb-5">
                <span className="text-3xl font-heading font-bold gradient-text">{pkg.price}</span>
              </div>

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

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="glass-card p-6 rounded-2xl text-center"
        >
          <p className="text-lg font-heading font-bold mb-2">
            🎯 No Hidden Fees. No Surprise Costs. <span className="gradient-text">Just Pure Growth.</span>
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            We don't charge for "revisions" or "extra posts." You pay for results. And results are what we deliver. Every. Single. Month.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialPackagesSection;
