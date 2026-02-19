import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Server, Puzzle, Database, Gauge, Lock } from "lucide-react";

const techPoints = [
  { icon: Cloud, label: "Cloud-First Architecture", desc: "Access your CRM from anywhere — office, home, or on the road" },
  { icon: Server, label: "Scalable Infrastructure", desc: "10 users today, 1000 tomorrow — your CRM grows with you" },
  { icon: Puzzle, label: "API Integrations", desc: "Connect with WhatsApp, Google, Zapier, and your existing tools" },
  { icon: Database, label: "Enterprise-Grade Database", desc: "Your data is fast, secure, and always backed up" },
  { icon: Gauge, label: "Lightning-Fast Performance", desc: "Pages load instantly — because your team's time is money" },
  { icon: Lock, label: "Bank-Level Security", desc: "Encrypted data, secure access, and compliance-ready architecture" },
];

const CrmSaasSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 ai-glow-bg pointer-events-none" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-accent font-medium mb-3">Built to last, built to scale...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Enterprise Power, <span className="gradient-text">Startup Speed</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Under the hood, your CRM runs on the same tech that powers billion-dollar SaaS companies — 
            but we deliver it in <span className="text-foreground font-semibold">weeks, not years</span>.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techPoints.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card p-5 rounded-xl gradient-border"
            >
              <t.icon className="text-accent mb-3" size={24} />
              <h3 className="font-heading font-semibold text-sm mb-1">{t.label}</h3>
              <p className="text-xs text-muted-foreground">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrmSaasSection;
