import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserX, PhoneMissed, Eye, Clock, TrendingDown } from "lucide-react";

const struggles = [
  { icon: UserX, title: "Leads Come In... Then Disappear", desc: "You get enquiries from ads, website, WhatsApp — but nobody tracks them properly. They slip through the cracks silently." },
  { icon: PhoneMissed, title: "Your Team Forgets to Follow Up", desc: "That hot lead from Monday? Nobody called back. By Friday, they bought from your competitor." },
  { icon: Eye, title: "You Have Zero Visibility", desc: "How many leads came this week? Which salesperson is performing? Where are deals stuck? You're guessing, not knowing." },
  { icon: Clock, title: "Everything Is Manual & Slow", desc: "Excel sheets, WhatsApp forwards, sticky notes. Your team spends hours on admin instead of selling." },
  { icon: TrendingDown, title: "Revenue Stays Flat", desc: "Without data, without automation, without AI — you're leaving money on the table every single day." },
];

const CrmProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-destructive font-medium mb-3">Be honest with yourself...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            How Many Sales Did You <span className="gradient-text">Lose This Month</span> Because Nobody Followed Up?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            It's not your product. It's not your team. It's the <span className="text-foreground font-semibold">system</span> — or the lack of one.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {struggles.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-6 rounded-xl"
            >
              <s.icon className="text-destructive mb-3" size={24} />
              <h3 className="font-heading font-semibold text-sm mb-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-xl font-heading font-semibold"
        >
          What if your CRM could <span className="gradient-text">do all the follow-ups, tracking, and analysis for you?</span> Keep reading 👇
        </motion.p>
      </div>
    </section>
  );
};

export default CrmProblemSection;
