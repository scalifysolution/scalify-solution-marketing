import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Clock, DollarSign, Users, Rocket, Shield } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "10x Higher Conversions", desc: "Users who talk convert faster than users who browse. AI removes every friction point between 'I need this' and 'booked'." },
  { icon: Clock, title: "Save 80% Operations Time", desc: "AI handles booking, assignment, follow-ups, tracking, and support. Your team focuses on growth, not grunt work." },
  { icon: DollarSign, title: "Reduce Costs Dramatically", desc: "Fewer wrong bookings, fewer revisits, fewer support tickets. AI does what 10 employees would do — 24/7." },
  { icon: Users, title: "Users That Stay Forever", desc: "AI remembers preferences, sends reminders, manages subscriptions. Your platform becomes a habit, not a one-time use." },
  { icon: Rocket, title: "Scale Without Hiring", desc: "10 users or 10,000 users — AI handles the same load. Grow revenue without growing headcount." },
  { icon: Shield, title: "Massive Brand Trust", desc: "Transparent pricing, smart diagnosis, emergency handling — users trust platforms that feel intelligent and honest." },
];

const AiBenefitsSection = () => {
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
          <p className="text-sm text-primary font-medium mb-3">Here's what changes for your business...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            It's Not Just Cool Tech — <span className="gradient-text">It's Real Business Results</span>
          </h2>
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
          The question isn't "should we build this?" — it's "how fast can we start?"
        </motion.p>
      </div>
    </section>
  );
};

export default AiBenefitsSection;
