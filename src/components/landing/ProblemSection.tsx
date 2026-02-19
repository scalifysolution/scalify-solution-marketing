import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const struggles = [
  {
    emoji: "😤",
    title: "You hired a developer before...",
    desc: "They took your money, missed deadlines, and delivered something full of bugs. You felt stuck.",
  },
  {
    emoji: "😰",
    title: "You got a 'finished' app...",
    desc: "But users kept leaving. Crashes, slow loading, confusing UI — nobody stayed.",
  },
  {
    emoji: "🤷",
    title: "You got designs but no strategy...",
    desc: "The app looked nice but had no plan for growth, retention, or revenue. Just screens.",
  },
  {
    emoji: "😞",
    title: "You're still waiting to start...",
    desc: "Because you're scared of wasting money again on someone who doesn't understand your vision.",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-sm text-primary font-medium mb-3">We've heard this story too many times...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Does This Sound Like <span className="gradient-text">Your Story?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            If even one of these hits close to home — you're in the right place.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mt-10">
          {struggles.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass-card p-6 rounded-xl text-left"
            >
              <span className="text-2xl mb-3 block">{s.emoji}</span>
              <h3 className="text-sm font-heading font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg font-heading font-semibold text-foreground mb-2">
            We built Scalify because we were tired of seeing this happen.
          </p>
          <p className="text-base gradient-text font-bold">
            Your idea deserves better. And we're here to prove it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
