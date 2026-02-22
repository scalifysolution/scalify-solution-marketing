import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Brain, MessageSquare, BarChart3, Mail, Sparkles, Target, Users } from "lucide-react";

const aiFeatures = [
  { icon: Bot, title: "AI Auto Follow-ups", desc: "Your CRM sends WhatsApp messages, emails, and reminders automatically. No human needed. No lead forgotten. Ever.", color: "text-accent" },
  { icon: Brain, title: "AI Lead Scoring", desc: "AI analyzes every lead and tells you: 'This one is HOT — call them NOW.' Stop guessing who to chase first.", color: "text-accent" },
  { icon: BarChart3, title: "AI Sales Analytics", desc: "Why are deals stuck? Which salesperson is underperforming? AI reads your data and gives you answers humans can't see.", color: "text-accent" },
  { icon: MessageSquare, title: "AI Reply Suggestions", desc: "Not sure what to say to that lead? AI writes the perfect follow-up message based on the conversation history.", color: "text-accent" },
  { icon: Mail, title: "AI Campaign Automation", desc: "Launch targeted campaigns that reach the right leads at the right time — AI decides when and what to send.", color: "text-accent" },
  { icon: Target, title: "AI Conversion Predictions", desc: "Know which deals will close this month before they do. AI predicts outcomes so you can focus your energy where it matters.", color: "text-accent" },
  { icon: Users, title: "AI Customer Insights", desc: "Understand your customers better than they understand themselves. AI finds buying patterns, preferences, and opportunities.", color: "text-accent" },
  { icon: Sparkles, title: "AI Data Entry", desc: "Stop typing. AI captures lead details from calls, forms, and messages — and fills in your CRM automatically.", color: "text-accent" },
];

const CrmAISection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 ai-glow-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[600px] md:h-[600px] bg-accent/5 rounded-full blur-[110px] md:blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm text-accent font-medium mb-3">This is where the magic happens...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Your CRM Won't Just Store Data — <span className="gradient-text">It'll Sell For You</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't slap AI on as a feature. We <span className="text-foreground font-semibold">build it into every layer</span> — so your CRM doesn't just organize leads, 
            it <span className="text-foreground font-semibold">nurtures them, follows up, analyzes, and closes deals</span> while your team focuses on what matters.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aiFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-5 rounded-2xl glow-accent group hover:bg-accent/5 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                <f.icon className={f.color} size={22} />
              </div>
              <h3 className="font-heading font-semibold text-sm mb-2">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10 text-base font-heading text-muted-foreground"
        >
          While your competitors manually type follow-ups, <span className="gradient-text font-bold">your CRM is already 3 steps ahead</span>. That's the Scalify difference.
        </motion.p>
      </div>
    </section>
  );
};

export default CrmAISection;
