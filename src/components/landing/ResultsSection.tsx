import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const results = [
  {
    before: "Random freelancer with no strategy",
    after: "A dedicated team that plans, builds, and grows with you",
    emoji: "🤝",
  },
  {
    before: "Buggy app that users uninstall in minutes",
    after: "Smooth, fast app that users love and recommend",
    emoji: "⚡",
  },
  {
    before: "No idea if anyone is using the app",
    after: "Clear analytics, user insights, and growth metrics",
    emoji: "📊",
  },
  {
    before: "App launched and... nothing happened",
    after: "Growth strategy baked in — users come and stay",
    emoji: "🚀",
  },
];

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">The transformation...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Life <span className="text-destructive">Before</span> Scalify vs.{" "}
            <span className="gradient-text">After</span> Scalify
          </h2>
        </motion.div>

        <div className="space-y-5">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass-card p-5 md:p-6 rounded-2xl grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center"
            >
              <div className="flex items-center gap-3">
                <span className="text-destructive text-lg">✗</span>
                <p className="text-sm text-muted-foreground">{r.before}</p>
              </div>
              <span className="text-2xl text-center hidden md:block">{r.emoji}</span>
              <div className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span>
                <p className="text-sm text-foreground font-medium">{r.after}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10 text-lg font-heading font-bold gradient-text"
        >
          Which side do you want to be on?
        </motion.p>
      </div>
    </section>
  );
};

export default ResultsSection;
