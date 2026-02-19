import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, MessageCircle, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "We Study Your Brand & Market",
    desc: "We audit your social media, research your competitors, understand your audience. Before we post anything — we know everything.",
  },
  {
    icon: MessageCircle,
    step: "02",
    title: "We Plan & Create",
    desc: "Content calendar, designs, reels, captions, hashtags — all planned with strategy. Not random. Every post has a purpose.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "We Post, Engage & Grow",
    desc: "Consistent posting. Engagement handling. Organic reach optimization. We don't just upload — we make sure people SEE it.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "We Report & Improve",
    desc: "Monthly reports. What worked, what didn't, what's next. We constantly evolve your strategy for maximum growth.",
  },
];

const SocialStrategySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <p className="text-sm text-primary font-medium mb-3">How we work...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our <span className="gradient-text">Growth System</span> — Step by Step
          </h2>
        </motion.div>

        <div className="space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card p-6 rounded-2xl flex items-start gap-5"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <s.icon className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-xs text-primary font-medium mb-1">Step {s.step}</p>
                <h3 className="font-heading font-bold text-lg mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialStrategySection;
