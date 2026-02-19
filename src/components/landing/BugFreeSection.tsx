import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, CheckCircle } from "lucide-react";

const commitments = [
  "Every screen tested on real devices — not just emulators",
  "Clean code that future developers can actually understand",
  "Scalable backend that doesn't break when users grow 10x",
  "Security-first approach — your data & users are safe",
  "Post-launch monitoring so we catch bugs before your users do",
];

const BugFreeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-8 md:p-12 rounded-2xl glow-primary">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-8"
          >
            <Shield className="text-primary mx-auto mb-4" size={40} />
            <p className="text-sm text-primary font-medium mb-3">Our promise to you</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              We'll Never Deliver <span className="gradient-text">a Broken App</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              You've probably heard "it's ready" before — only to find crashes, missing features, and embarrassing bugs. 
              <span className="text-foreground font-semibold"> That doesn't happen with us.</span>
            </p>
          </motion.div>

          <div className="flex flex-col gap-4 max-w-lg mx-auto">
            {commitments.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="text-primary shrink-0" size={20} />
                <span className="text-sm text-muted-foreground">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-8 font-heading font-bold text-foreground text-center"
          >
            Because your reputation is on the line — and we take that personally.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default BugFreeSection;
