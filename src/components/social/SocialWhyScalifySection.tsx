import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const comparisons = [
  {
    emoji: "📱",
    before: "Random posts with no strategy",
    after: "Every post is planned, branded, and growth-focused",
  },
  {
    emoji: "📊",
    before: "No idea if posts are working",
    after: "Monthly reports, insights, and strategy improvements",
  },
  {
    emoji: "🎯",
    before: "Zero leads from social media",
    after: "Content designed to generate inquiries and conversions",
  },
  {
    emoji: "👻",
    before: "Brand is invisible in your area",
    after: "People see your brand everywhere — online and offline",
  },
  {
    emoji: "🤷",
    before: "Post and pray approach",
    after: "Data-driven growth system with clear objectives",
  },
  {
    emoji: "🚀",
    before: "Social media guy disappears after uploading",
    after: "Dedicated team that thinks, builds, and scales your brand 24/7",
  },
];

const SocialWhyScalifySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <p className="text-sm text-primary font-medium mb-3">The Scalify difference...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Others Make Posts. <span className="gradient-text">We Build Empires.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't work simple. If we join — we scale. Otherwise, we don't join.
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
            We don't just handle social media. We take charge of your brand's entire online presence and growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialWhyScalifySection;
