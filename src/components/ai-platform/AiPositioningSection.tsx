import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AiPositioningSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 ai-glow-bg pointer-events-none" />
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-sm text-accent font-medium mb-3">Final positioning...</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            ❌ Not a "Chatbot for Booking Services"<br />
            <span className="gradient-text">✅ An AI Home & Business Assistant</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Your competitors are building apps with buttons and forms.<br />
          <span className="text-foreground font-semibold">You will build intelligence that manages operations, understands users, and grows revenue — automatically.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass-card p-10 rounded-2xl glow-accent max-w-xl mx-auto"
        >
          <p className="text-2xl font-heading font-bold gradient-text mb-4">
            "We don't build apps.<br />We build AI that runs your business."
          </p>
          <p className="text-sm text-muted-foreground">— Scalify AI Platform Division</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AiPositioningSection;
