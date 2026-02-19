import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, GitBranch, Contact, ListChecks, Phone, Receipt, Shield, BarChart3, Settings } from "lucide-react";

const modules = [
  { icon: Users, title: "Lead Capture & Management", desc: "Every lead from every source — auto-captured, auto-assigned, never lost" },
  { icon: GitBranch, title: "Visual Sales Pipeline", desc: "Drag-and-drop deal stages so you always know where every deal stands" },
  { icon: Contact, title: "Customer 360° View", desc: "Complete history of every interaction, purchase, and conversation in one place" },
  { icon: ListChecks, title: "Smart Task & Follow-ups", desc: "AI assigns tasks, sets reminders, and nudges your team before deadlines" },
  { icon: Phone, title: "WhatsApp & Call Integration", desc: "Track every call, every message — right inside your CRM dashboard" },
  { icon: Receipt, title: "Quotes & Invoices", desc: "Generate professional quotes in seconds and convert them to invoices instantly" },
  { icon: Shield, title: "Role-Based Access", desc: "Admin sees everything. Managers see their team. Sales sees their leads. Secure." },
  { icon: BarChart3, title: "AI-Powered Reports", desc: "Not just charts — actionable insights that tell you exactly what to do next" },
  { icon: Settings, title: "Custom Workflows", desc: "Your business is unique. Your CRM workflows should be too." },
];

const CrmModulesSection = () => {
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
          <p className="text-sm text-primary font-medium mb-3">Everything your sales team needs...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            One CRM. <span className="gradient-text">Every Module You'll Ever Need.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No more juggling 5 different tools. Everything lives in one place — and it all talks to each other.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-5 rounded-xl flex items-start gap-4 hover:bg-secondary/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <m.icon className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm mb-1">{m.title}</h3>
                <p className="text-xs text-muted-foreground">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrmModulesSection;
