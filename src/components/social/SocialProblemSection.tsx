import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    emoji: "😤",
    title: "Your 'social media guy' just makes posts and leaves",
    desc: "No strategy. No growth plan. No thinking. Just random posts that nobody sees. You're paying for decoration, not results.",
  },
  {
    emoji: "👻",
    title: "Your page has 500 followers and zero leads",
    desc: "You've been posting for months. Nothing happened. Because posting without strategy is like shouting in an empty room.",
  },
  {
    emoji: "📉",
    title: "Your competitor's brand is everywhere — yours isn't",
    desc: "They're on Google, Instagram, YouTube. People know them. People trust them. And you? You're still 'working on it.'",
  },
  {
    emoji: "🤷",
    title: "Nobody knows your business exists online",
    desc: "You have a great product. Great service. But when someone searches your industry — you're invisible. That's the real problem.",
  },
];

const SocialProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <p className="text-sm text-primary font-medium mb-3">Be honest with yourself...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            This Is Why Your Brand Is{" "}
            <span className="text-destructive">Not Growing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            You don't have a social media problem. You have a "nobody is actually thinking about your growth" problem.
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
          If this sounds like you — stop wasting money. Start scaling with Scalify.
        </motion.p>
      </div>
    </section>
  );
};

export default SocialProblemSection;
