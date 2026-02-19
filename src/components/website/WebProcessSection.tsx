import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "We Talk. We Listen.",
    desc: "Tell us about your business, your goals, your competitors. We'll understand what you actually need — not what a template gives you.",
  },
  {
    icon: Palette,
    step: "02",
    title: "We Design Your Identity",
    desc: "Custom design that reflects YOUR brand. Not a copy-paste. Every color, every section, every word — crafted for your audience.",
  },
  {
    icon: Code,
    step: "03",
    title: "We Build & Optimize",
    desc: "SEO-ready, mobile-perfect, fast-loading. Backend control so you can update anything. Connected to Google, WhatsApp, everything.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "We Launch & Grow",
    desc: "Your website goes live. But we don't disappear. Growth plans include ongoing SEO, social media, and lead generation support.",
  },
];

const WebProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <p className="text-sm text-primary font-medium mb-3">How it works...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            From <span className="gradient-text">Zero to Live</span> — Here's the Journey
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

export default WebProcessSection;
