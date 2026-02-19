import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { XCircle, CheckCircle2 } from "lucide-react";

const comparison = [
  { before: "Leads tracked in Excel & WhatsApp groups", after: "Every lead auto-captured & organized by AI" },
  { before: "Team forgets to follow up", after: "AI follows up automatically — never misses one" },
  { before: "No idea which leads are hot or cold", after: "AI scores every lead and tells you who to call first" },
  { before: "Manual reports that nobody reads", after: "AI dashboards that show exactly what to fix" },
  { before: "Sales team works harder, not smarter", after: "AI does the grunt work — team focuses on closing" },
  { before: "Losing deals to faster competitors", after: "Your CRM responds in seconds, even at midnight" },
];

const CrmWhyScalifySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">The difference is night and day...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Life <span className="text-destructive">Before</span> vs. <span className="gradient-text">After</span> Scalify CRM
          </h2>
        </motion.div>

        <div className="space-y-4">
          {comparison.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="grid md:grid-cols-2 gap-3"
            >
              <div className="glass-card p-4 rounded-xl flex items-center gap-3 border-destructive/20">
                <XCircle className="text-destructive shrink-0" size={18} />
                <span className="text-sm text-muted-foreground">{c.before}</span>
              </div>
              <div className="glass-card p-4 rounded-xl flex items-center gap-3 border-primary/20 bg-primary/5">
                <CheckCircle2 className="text-primary shrink-0" size={18} />
                <span className="text-sm font-medium">{c.after}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-10 text-lg font-heading font-semibold gradient-text"
        >
          Which side do you want to be on?
        </motion.p>
      </div>
    </section>
  );
};

export default CrmWhyScalifySection;
