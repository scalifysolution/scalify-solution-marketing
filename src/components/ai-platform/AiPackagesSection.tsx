import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Star, Flame } from "lucide-react";

const plans = [
  {
    icon: Zap,
    name: "AI Core",
    desc: "Conversational booking + smart operations",
    features: [
      "Natural language booking",
      "Smart follow-up questions",
      "One-message rescheduling",
      "Live tracking & chat",
      "Basic AI diagnosis",
      "Web + mobile deployment",
    ],
    highlight: false,
  },
  {
    icon: Star,
    name: "AI Intelligence",
    desc: "Full AI brain + provider management",
    features: [
      "Everything in AI Core",
      "Problem diagnosis before booking",
      "Price intelligence & transparency",
      "Photo/video understanding",
      "User memory & auto-history",
      "AI-powered technician assignment",
      "Provider copilot dashboard",
      "WhatsApp integration",
    ],
    highlight: true,
  },
  {
    icon: Flame,
    name: "AI Enterprise",
    desc: "Complete AI operations platform",
    features: [
      "Everything in AI Intelligence",
      "Preventive maintenance reminders",
      "Subscription & AMC management",
      "Emergency mode system",
      "Multi-location B2B management",
      "Invoice & expense intelligence",
      "Vendor onboarding via AI",
      "Multilingual voice support",
      "AI dispute resolution",
      "Dedicated AI team",
    ],
    highlight: false,
  },
];

const AiPackagesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">Start where you are, scale as you grow...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Choose Your <span className="gradient-text">AI Platform Level</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every layer builds on the previous. Start with the core and add intelligence as your platform grows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`glass-card p-7 rounded-2xl flex flex-col ${p.highlight ? "glow-primary gradient-border" : ""}`}
            >
              <p.icon className={`mb-3 ${p.highlight ? "text-primary" : "text-accent"}`} size={28} />
              <h3 className="font-heading font-bold text-xl mb-1">
                {p.name} {p.highlight && "⭐"}{!p.highlight && p.name === "AI Enterprise" && " 🔥"}
              </h3>
              <p className="text-sm text-muted-foreground mb-5">{p.desc}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center py-2.5 rounded-xl font-heading font-semibold text-sm transition-opacity hover:opacity-90 ${
                  p.highlight ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground border border-border"
                }`}
              >
                Get Proposal
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiPackagesSection;
