import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Brain, Code2, Layers, Rocket, Headphones } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "Week 1-2", title: "We Understand Your Domain", desc: "We map your entire service flow — how users book, how providers work, where things break. Every domain is different." },
  { icon: Brain, step: "Week 2-3", title: "We Train the AI Brain", desc: "We build the NLP model, diagnosis trees, smart follow-ups, and matching algorithms specific to YOUR industry." },
  { icon: Code2, step: "Week 3-6", title: "We Build the Platform", desc: "Conversational UI, provider dashboard, admin panel, integrations — everything in one focused sprint." },
  { icon: Layers, step: "Week 6-7", title: "We Add Intelligence Layers", desc: "Photo understanding, price intelligence, memory, preventive reminders — the AI gets smarter." },
  { icon: Rocket, step: "Week 8", title: "Launch & Go Live", desc: "Deploy, test with real users, train your team. Your AI platform goes live." },
  { icon: Headphones, step: "Ongoing", title: "AI Gets Smarter Over Time", desc: "Post-launch optimization, model training with real data, new features. The AI learns and improves continuously." },
];

const AiProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">From concept to live AI platform...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Your AI Platform Journey <span className="gradient-text">With Scalify</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't take 12 months. We build in <span className="text-foreground font-semibold">focused 8-week sprints</span> — from domain understanding to a live AI platform.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />
          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 z-10">
                  <s.icon className="text-primary" size={20} />
                </div>
                <div className="glass-card px-5 py-4 rounded-xl flex-1">
                  <span className="text-xs text-primary font-semibold">{s.step}</span>
                  <h3 className="font-heading font-semibold text-sm mt-1">{s.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiProcessSection;
