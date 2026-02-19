import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShoppingCart,
  CalendarCheck,
  Store,
  Building2,
  CreditCard,
  Briefcase,
} from "lucide-react";

const apps = [
  { icon: ShoppingCart, label: "E-Commerce Apps", story: "Because your customers should buy from YOU, not competitors" },
  { icon: CalendarCheck, label: "Service Booking Apps", story: "So clients book 24/7 — even when you're sleeping" },
  { icon: Store, label: "Marketplace Apps", story: "Connect buyers & sellers and earn from every transaction" },
  { icon: Building2, label: "Real Estate Apps", story: "Let properties sell themselves with smart search & AR tours" },
  { icon: CreditCard, label: "Subscription Apps", story: "Build recurring revenue that grows while you sleep" },
  { icon: Briefcase, label: "Business / CRM Apps", story: "Run your entire operation from one powerful app" },
];

const WhatWeBuildSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">Whatever your domain...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            We've Built Apps for People <span className="gradient-text">Just Like You</span>
          </h2>
          <p className="text-muted-foreground">Your industry. Your challenges. Our expertise.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:bg-secondary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <a.icon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm mb-1">{a.label}</h3>
                <p className="text-xs text-muted-foreground">{a.story}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 text-base font-heading text-muted-foreground"
        >
          Don't see your industry? <span className="gradient-text font-semibold">We love new challenges. Let's talk.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default WhatWeBuildSection;
