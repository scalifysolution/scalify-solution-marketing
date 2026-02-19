import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const points = [
  {
    number: "01",
    title: "We don't start with code. We start with YOU.",
    desc: "Before writing a single line, we sit with you, understand your business model, your customers, your competitors — and THEN we plan the app. Because building the wrong thing fast is still a waste.",
  },
  {
    number: "02",
    title: "We think like your users, not just developers.",
    desc: "Every screen, every button, every flow is designed to keep users coming back. We obsess over UX because a confused user is a lost customer.",
  },
  {
    number: "03",
    title: "We build for growth, not just launch.",
    desc: "Any team can put an app on the Play Store. We build apps that get downloads, retain users, and generate revenue — because that's what actually matters to you.",
  },
  {
    number: "04",
    title: "We don't disappear after delivery.",
    desc: "The app launches. Users come. Things break. Features are needed. We stay with you — improving, optimizing, scaling. That's not a service, that's a partnership.",
  },
];

const DifferentiatorSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">Here's the difference...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            What Makes Scalify <span className="gradient-text">Different From Everyone Else?</span>
          </h2>
          <p className="text-muted-foreground">Other agencies build apps. We build <span className="text-foreground font-semibold">your success story.</span></p>
        </motion.div>

        <div className="space-y-6">
          {points.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card p-6 md:p-8 rounded-2xl flex gap-5 items-start"
            >
              <span className="text-3xl md:text-4xl font-heading font-black gradient-text shrink-0">{p.number}</span>
              <div>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
