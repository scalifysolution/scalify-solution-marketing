import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Plane, GraduationCap, Wrench, ShoppingCart, Briefcase, HeartPulse, Layers } from "lucide-react";

const industries = [
  { icon: Building2, title: "Real Estate", story: "Track property leads, schedule viewings, and close deals faster with AI follow-ups" },
  { icon: Plane, title: "Travel & Tourism", story: "Manage trip enquiries, automate itinerary follow-ups, and convert browsers into travelers" },
  { icon: GraduationCap, title: "Education & Coaching", story: "Capture student leads, automate enrollment reminders, and track conversions by course" },
  { icon: Wrench, title: "Service Businesses", story: "From plumbers to consultants — manage client requests, schedule jobs, and get paid faster" },
  { icon: ShoppingCart, title: "E-Commerce", story: "Track customer journeys, abandoned carts, and re-engage buyers with AI-powered campaigns" },
  { icon: Briefcase, title: "B2B Sales", story: "Long sales cycles? AI keeps every deal warm with perfectly timed follow-ups and insights" },
  { icon: HeartPulse, title: "Healthcare & Clinics", story: "Patient appointment management, follow-up reminders, and communication — all automated" },
  { icon: Layers, title: "Your Industry", story: "Don't see yours? We love building CRMs for unique businesses. Let's talk." },
];

const CrmIndustriesSection = () => {
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
          <p className="text-sm text-primary font-medium mb-3">Your industry, your rules...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            We've Built AI CRMs for Businesses <span className="gradient-text">Just Like Yours</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every industry has different sales flows. We don't give you a generic CRM — we build one that <span className="text-foreground font-semibold">fits how YOU sell</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-5 rounded-xl hover:glow-primary transition-shadow group"
            >
              <ind.icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="font-heading font-semibold text-sm mb-2">{ind.title}</h3>
              <p className="text-xs text-muted-foreground">{ind.story}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrmIndustriesSection;
