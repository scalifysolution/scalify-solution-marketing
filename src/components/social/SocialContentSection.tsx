import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Megaphone, Film, Star, ShoppingBag, Gift, BookOpen, Eye } from "lucide-react";

const contentTypes = [
  { icon: Award, title: "Brand Identity Posts", desc: "People should recognize you instantly" },
  { icon: Megaphone, title: "Promotional Campaigns", desc: "Offers that actually bring customers" },
  { icon: Film, title: "Reels & Short Videos", desc: "The #1 way to go viral right now" },
  { icon: Star, title: "Testimonials & Reviews", desc: "Build trust with social proof" },
  { icon: ShoppingBag, title: "Product Showcases", desc: "Make your products irresistible" },
  { icon: Gift, title: "Festive & Seasonal Content", desc: "Stay relevant, stay top-of-mind" },
  { icon: BookOpen, title: "Educational Content", desc: "Position yourself as the expert" },
  { icon: Eye, title: "Behind-the-Scenes", desc: "Build connection, build loyalty" },
];

const SocialContentSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 ai-glow-bg pointer-events-none" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className="text-sm text-primary font-medium mb-3">What we create for you...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Content That <span className="gradient-text">Actually Works</span> — Not Just Looks Pretty
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every piece of content we create has one job: grow your brand and bring you customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {contentTypes.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08, duration: 0.5 }} className="glass-card p-5 rounded-xl text-center hover:glow-accent transition-shadow gradient-border">
              <c.icon className="text-accent mx-auto mb-3" size={26} />
              <span className="text-sm font-medium block mb-1">{c.title}</span>
              <span className="text-xs text-muted-foreground">{c.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialContentSection;
