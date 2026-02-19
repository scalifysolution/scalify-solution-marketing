import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Lightbulb, Code2, Rocket, Headphones } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "Week 1", title: "We Listen & Map Your Sales Flow", desc: "We sit with you, understand how your business sells, and map out every lead touchpoint." },
  { icon: Lightbulb, step: "Week 2", title: "We Design Your CRM Experience", desc: "Clean, intuitive UI your team will actually enjoy using — not some ugly enterprise software." },
  { icon: Code2, step: "Week 3-5", title: "We Build & Integrate AI", desc: "Development + AI automation + WhatsApp/Email integration + testing. Everything in one sprint." },
  { icon: Rocket, step: "Week 6", title: "Launch + Team Training", desc: "We deploy, train your team in a live session, and make sure everyone is confident." },
  { icon: Headphones, step: "Ongoing", title: "We Stay With You", desc: "Post-launch support, updates, and AI optimization. We're your CRM partner, not just a vendor." },
];

const CrmProcessSection = () => {
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
          <p className="text-sm text-primary font-medium mb-3">From idea to live CRM...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Your CRM Journey <span className="gradient-text">With Scalify</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No 6-month timelines. No complicated processes. Just <span className="text-foreground font-semibold">fast, focused delivery</span> that gets you selling smarter in weeks.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />
          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex items-start gap-5 md:ml-0"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 z-10">
                  <s.icon className="text-primary" size={20} />
                </div>
                <div className="glass-card px-5 py-4 rounded-xl flex-1">
                  <span className="text-xs text-primary font-semibold">{s.step}</span>
                  <h3 className="font-heading font-semibold text-sm mt-1">{s.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrmProcessSection;
