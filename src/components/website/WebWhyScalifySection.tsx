import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const comparisons = [
  {
    emoji: "🎨",
    before: "Template website from a freelancer",
    after: "Custom-designed website built for YOUR brand",
  },
  {
    emoji: "🔍",
    before: "Zero SEO — invisible on Google",
    after: "SEO-optimized — ranks and brings organic traffic",
  },
  {
    emoji: "🔒",
    before: "Can't change anything without calling the developer",
    after: "Full backend control — update anything yourself",
  },
  {
    emoji: "📉",
    before: "Website exists but generates zero leads",
    after: "Every page is designed to convert visitors into leads",
  },
  {
    emoji: "📱",
    before: "Broken on mobile, slow to load",
    after: "Lightning-fast, pixel-perfect on every device",
  },
  {
    emoji: "🚀",
    before: "Built once. Forgotten forever.",
    after: "Ongoing growth support — SEO, social media, lead generation",
  },
];

const WebWhyScalifySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <p className="text-sm text-primary font-medium mb-3">The Scalify difference...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Others Build Websites. <span className="gradient-text">We Build Growth Engines.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's why businesses switch to Scalify — and never go back.
          </p>
        </motion.div>

        <div className="space-y-4">
          {comparisons.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-5 rounded-2xl grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center"
            >
              <div className="flex items-center gap-3">
                <span className="text-destructive text-lg">✗</span>
                <p className="text-sm text-muted-foreground">{c.before}</p>
              </div>
              <span className="text-2xl text-center hidden md:block">{c.emoji}</span>
              <div className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span>
                <p className="text-sm text-foreground font-medium">{c.after}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="glass-card p-6 rounded-2xl text-center mt-10 glow-primary"
        >
          <p className="text-lg font-heading font-bold mb-2">
            ⚡ That's our problem — <span className="gradient-text">when we get involved, we deliver results.</span>
          </p>
          <p className="text-sm text-muted-foreground">
            We don't work simple. We work smart. And we don't stop until your business is growing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WebWhyScalifySection;
