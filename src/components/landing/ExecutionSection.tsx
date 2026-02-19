import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    phase: "Phase 1",
    title: "We Listen & Plan",
    desc: "We understand your business, your users, and your goals. Then we create a roadmap that makes sense — not a template.",
    emoji: "🎯",
  },
  {
    phase: "Phase 2",
    title: "We Design & Build",
    desc: "Beautiful UI, smooth UX, and clean code. You see progress every week — no disappearing for months.",
    emoji: "🛠️",
  },
  {
    phase: "Phase 3",
    title: "We Test & Launch",
    desc: "Rigorous testing on real devices. When it launches, it works. No 'we'll fix it later' excuses.",
    emoji: "🚀",
  },
  {
    phase: "Phase 4",
    title: "We Grow Together",
    desc: "After launch, we monitor, improve, and scale your app. New features, better performance, more users.",
    emoji: "📈",
  },
];

const ExecutionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">Here's how your journey looks...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            From Your Idea to a <span className="gradient-text">Live, Growing App</span>
          </h2>
          <p className="text-muted-foreground">Transparent, fast, and no surprises.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex gap-5 items-start"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-2xl relative z-10">
                  {s.emoji}
                </div>
                <div className="glass-card p-5 md:p-6 rounded-2xl flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1 block">{s.phase}</span>
                  <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionSection;
