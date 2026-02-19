import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Home, Car, GraduationCap, HeartPulse, ShoppingBag, Building2, Plane } from "lucide-react";

const domains = [
  { icon: Wrench, title: "Home Services", example: '"My AC is leaking and not cooling since morning"', desc: "AI diagnoses, books the right technician, tracks live — no forms needed" },
  { icon: HeartPulse, title: "Healthcare", example: '"I need a dermatologist near me, available this evening"', desc: "AI checks availability, books appointment, sends reminders, follows up" },
  { icon: Home, title: "Real Estate", example: '"Show me 2BHK apartments near metro under 60L with parking"', desc: "AI matches properties, schedules viewings, handles documentation" },
  { icon: ShoppingBag, title: "E-Commerce", example: '"I need a red dress for a wedding, size M, under $100"', desc: "AI understands style, occasion, budget — shows perfect matches instantly" },
  { icon: Car, title: "Automotive", example: '"My car is making a grinding noise when I brake"', desc: "AI diagnoses potential issue, finds nearest service center, books slot" },
  { icon: GraduationCap, title: "Education", example: '"Best MBA programs under $30K with online options"', desc: "AI compares programs, deadlines, scholarships — guides enrollment" },
  { icon: Building2, title: "Facility Management", example: '"Schedule deep cleaning for all 5 branches next week"', desc: "AI coordinates across locations, assigns teams, tracks completion" },
  { icon: Plane, title: "Travel & Hospitality", example: '"Plan a 5-day trip to Bali for 2, budget $3000"', desc: "AI builds itinerary, books flights & hotels, handles visa guidance" },
];

const AiUseCasesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">One AI platform, infinite domains...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            We Build This for <span className="gradient-text">Any Industry You're In</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The conversational AI model works across <span className="text-foreground font-semibold">every domain where users need services</span>. Your industry, your rules — AI adapts.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {domains.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-5 rounded-2xl hover:glow-primary transition-shadow group"
            >
              <d.icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={26} />
              <h3 className="font-heading font-semibold text-sm mb-2">{d.title}</h3>
              <p className="text-xs text-accent italic mb-2">{d.example}</p>
              <p className="text-xs text-muted-foreground">{d.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-base font-heading text-muted-foreground"
        >
          Don't see your industry? <span className="gradient-text font-semibold">We love new challenges. The AI adapts to any domain.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default AiUseCasesSection;
