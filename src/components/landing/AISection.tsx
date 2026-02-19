import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Brain, Settings, BarChart3, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Your App Talks to Customers — 24/7",
    desc: "AI chat that answers questions, takes orders, and builds trust while you sleep.",
  },
  {
    icon: Brain,
    title: "It Knows What Users Want",
    desc: "Smart recommendations that increase order value and keep users engaged longer.",
  },
  {
    icon: Settings,
    title: "It Runs Itself (Almost)",
    desc: "Automated workflows that handle operations, notifications, and follow-ups without your team lifting a finger.",
  },
  {
    icon: BarChart3,
    title: "It Tells You What's Working",
    desc: "AI-powered insights that show you exactly where users drop off and what to fix.",
  },
  {
    icon: MessageSquare,
    title: "It Captures Leads For You",
    desc: "Visitors become customers automatically with smart lead capture and intelligent follow-ups.",
  },
];

const AISection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ai" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 ai-glow-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <p className="text-sm text-accent font-medium mb-3">Why AI changes everything...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            AI Isn't the Future — <span className="gradient-text">It's Already Here</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your competitors are already using AI. The question isn't <em>if</em> you should — it's <span className="text-foreground font-semibold">how fast you can start</span>. 
            We make your app feel alive — it learns your users, predicts their needs, and delivers experiences that feel <span className="text-foreground font-semibold">personal, not generic</span>.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-6 rounded-2xl glow-accent group hover:bg-accent/5 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <f.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-heading font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10 text-base font-heading text-muted-foreground"
        >
          Apps without AI are like phones without internet — they work, but they're <span className="gradient-text font-bold">already outdated</span>. We make sure yours isn't.
        </motion.p>
      </div>
    </section>
  );
};

export default AISection;
