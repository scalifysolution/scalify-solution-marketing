import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Armchair, Rocket, Eye, Users, Clock, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Armchair, title: "You Sit Back — CRM Does the Work", desc: "Follow-ups, reminders, emails, WhatsApp — all automated. Your team just shows up and closes." },
  { icon: Eye, title: "See Everything in One Dashboard", desc: "Every lead, every deal, every salesperson's performance — one screen, real-time, no guessing." },
  { icon: Clock, title: "Save 4+ Hours Every Day", desc: "No more Excel. No more manual entries. AI handles the boring stuff so your team can sell." },
  { icon: Users, title: "Your Team Actually Uses It", desc: "We build CRMs that are so simple and fast, your team won't need training — they'll just start using it." },
  { icon: TrendingUp, title: "Watch Your Revenue Climb", desc: "More follow-ups = more conversations = more deals. It's math. And our CRM makes it automatic." },
  { icon: Rocket, title: "Scale Without Hiring More People", desc: "AI handles what 3 extra employees would do. Grow your business without growing your payroll." },
];

const CrmBenefitsSection = () => {
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
          <p className="text-sm text-primary font-medium mb-3">Here's what changes for you...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Imagine a CRM Where <span className="gradient-text">You Don't Have to Do Anything</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not building you a fancy spreadsheet. We're building a <span className="text-foreground font-semibold">sales machine</span> that runs on autopilot.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-6 rounded-2xl hover:glow-primary transition-shadow"
            >
              <b.icon className="text-primary mb-3" size={28} />
              <h3 className="font-heading font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-lg font-heading font-semibold gradient-text"
        >
          Your only job? Show up and close the deals AI already warmed up for you.
        </motion.p>
      </div>
    </section>
  );
};

export default CrmBenefitsSection;
