import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FormInput, Clock, UserX, PhoneMissed, TrendingDown } from "lucide-react";

const painPoints = [
  { icon: FormInput, title: "Your Users Hate Forms", desc: "Long sign-ups, category dropdowns, filter menus — users give up before they even start. They just want to SAY what they need." },
  { icon: Clock, title: "Booking Takes Too Long", desc: "Search → filter → compare → select → fill form → confirm → wait. By then, they've already called your competitor." },
  { icon: UserX, title: "Wrong Bookings, Wrong People", desc: "Without smart diagnosis, users pick the wrong service, wrong technician, wrong time. You waste money on revisits." },
  { icon: PhoneMissed, title: "No Follow-ups, No Retention", desc: "Customer booked once? Great. Did you remind them for maintenance? Did you follow up? No. They forgot about you." },
  { icon: TrendingDown, title: "Your Operations Don't Scale", desc: "Manual assignment, manual tracking, manual support. Every new customer means more headaches, not more profit." },
];

const AiProblemSection = () => {
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
          <p className="text-sm text-destructive font-medium mb-3">Let's be real...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Your Current Platform Is <span className="gradient-text">Losing You Customers</span> Every Day
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The old way of building service platforms is broken. Users want <span className="text-foreground font-semibold">conversations, not categories</span>.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {painPoints.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-6 rounded-xl"
            >
              <p.icon className="text-destructive mb-3" size={24} />
              <h3 className="font-heading font-semibold text-sm mb-2">{p.title}</h3>
              <p className="text-xs text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-xl font-heading font-semibold"
        >
          What if your entire platform was just <span className="gradient-text">one conversation?</span> 👇
        </motion.p>
      </div>
    </section>
  );
};

export default AiProblemSection;
