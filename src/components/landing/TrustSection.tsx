import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, Users, Award, Headphones, RefreshCw } from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;
};

interface TrustSectionProps {
  testimonial?: Testimonial;
}

const trustPoints = [
  { icon: Shield, title: "100% Secure & Confidential", desc: "Your idea is safe with us. NDA from day one if you want it." },
  { icon: Clock, title: "Deadlines We Actually Keep", desc: "We commit to timelines and deliver. No ghosting, no excuses." },
  { icon: Users, title: "50+ Businesses Trusted Us", desc: "Startups, agencies & growing businesses across industries." },
  { icon: Award, title: "Quality Over Quantity", desc: "We take fewer projects and give each one everything we've got." },
  { icon: Headphones, title: "We Pick Up the Phone", desc: "Real humans. Real conversations. Not a ticket system." },
  { icon: RefreshCw, title: "We Improve, Always", desc: "Version 1.0 is just the beginning. We make it better every month." },
];

const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "99%", label: "Customer Satisfaction" },
  { value: "4Y+", label: "Industry Experience (in years)" },
  { value: "1Y", label: "Free Support (in years)" },
];

const defaultTestimonial: Testimonial = {
  quote:
    "I came to Scalify after 2 bad experiences with other agencies. They didn’t just deliver — they rebuilt my trust in this entire process.",
  author: "A founder who almost gave up",
};

const TrustSection = ({ testimonial = defaultTestimonial }: TrustSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-10">
          <p className="text-sm text-primary font-medium mb-3">Don't just take our word for it...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why People <span className="gradient-text">Choose Scalify</span> (and Stay)
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not the cheapest. We're not the biggest. But we're the team that treats your business like it's our own.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card p-5 rounded-xl text-center"
            >
              <span className="text-2xl md:text-3xl font-heading font-bold gradient-text">{s.value}</span>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {trustPoints.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-5 rounded-xl flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                <t.icon className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1">{t.title}</h3>
                <p className="text-xs text-muted-foreground">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="glass-card p-8 rounded-2xl text-center glow-accent max-w-2xl mx-auto"
        >
          <p className="text-lg font-heading italic text-foreground mb-3">
            “{testimonial.quote}”
          </p>
          <p className="text-sm text-muted-foreground">— {testimonial.author}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
