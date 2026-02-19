import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    emoji: "😤",
    title: "You paid a freelancer… and got a template",
    desc: "No SEO, no mobile optimization, no backend control. Just a pretty page that does nothing.",
  },
  {
    emoji: "👻",
    title: "Your website is invisible on Google",
    desc: "You search your own business name and can't find it. Your competitors show up instead.",
  },
  {
    emoji: "📉",
    title: "You have a website but zero leads from it",
    desc: "People visit, but nobody calls, nobody fills a form. It's a digital brochure collecting dust.",
  },
  {
    emoji: "🔒",
    title: "You can't even update your own website",
    desc: "Want to change a phone number? You have to call the developer and wait 3 days. That's not your website — that's his.",
  },
];

const WebProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <p className="text-sm text-primary font-medium mb-3">Sound familiar?</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            The <span className="text-destructive">Real Problem</span> With Most Websites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            You didn't get a website. You got a liability. Here's what's probably happening right now...
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass-card p-6 rounded-2xl"
            >
              <span className="text-3xl mb-3 block">{p.emoji}</span>
              <h3 className="font-heading font-bold text-base mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10 text-lg font-heading font-bold gradient-text"
        >
          If any of this is true — you don't need another website. You need Scalify.
        </motion.p>
      </div>
    </section>
  );
};

export default WebProblemSection;
