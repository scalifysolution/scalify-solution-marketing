import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { XCircle, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";

const oldWay = [
  "Open app → Browse categories → Apply filters → Compare options → Fill form → Wait for confirmation",
  "User picks wrong service → Wrong person arrives → Revisit needed → Customer frustrated",
  "No memory of past bookings → Treats every user like a stranger",
  "Manual assignment → Slow response → Missed opportunities",
];

const newWay = [
  '"My AC is leaking and not cooling since morning" → AI diagnoses → Books the right technician → Done',
  "AI asks: 'Split or central? Indoor or outdoor leak? Urgent?' → Perfect match every time",
  "AI remembers your house, your preferences, your favorite technician — just say 'book the same guy'",
  "AI assigns based on location, skill, rating, tools needed — in seconds",
];

const AiConceptSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">This is the shift...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Not a Chatbot. Not an App.{" "}
            <span className="gradient-text">An AI Operations Manager.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not building you a chatbot that says "How can I help?" — we're building an <span className="text-foreground font-semibold">intelligent system that actually runs your business</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card p-8 rounded-2xl border-destructive/20"
          >
            <h3 className="font-heading font-bold text-lg mb-6 text-destructive">❌ The Old Way (Your Competitors)</h3>
            <div className="space-y-4">
              {oldWay.map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle className="text-destructive shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-muted-foreground">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card p-8 rounded-2xl glow-primary"
          >
            <h3 className="font-heading font-bold text-lg mb-6 text-primary">✅ The AI Way (What We Build)</h3>
            <div className="space-y-4">
              {newWay.map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-foreground">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Live conversation example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="glass-card p-6 rounded-2xl max-w-2xl mx-auto glow-accent"
        >
          <h4 className="font-heading font-semibold text-center mb-4 text-accent">💬 See It In Action</h4>
          <div className="space-y-3">
            <div className="flex justify-end">
              <div className="bg-primary/20 px-4 py-2 rounded-2xl rounded-br-sm max-w-xs">
                <p className="text-sm">"My AC is leaking and not cooling since morning"</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-secondary px-4 py-2 rounded-2xl rounded-bl-sm max-w-sm">
                <p className="text-sm text-muted-foreground">Is it a split AC or central? Is water dripping inside or outside? Is this urgent?</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary/20 px-4 py-2 rounded-2xl rounded-br-sm max-w-xs">
                <p className="text-sm">"Split, dripping inside, yes urgent"</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-secondary px-4 py-2 rounded-2xl rounded-bl-sm max-w-sm">
                <p className="text-sm text-muted-foreground">Got it! Likely a blocked drain pipe. Estimated cost: 8–12 KD. I've booked Ahmed (4.9⭐) — arriving in 45 mins. Track live? 📍</p>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">No forms. No categories. No confusion. Just a conversation.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AiConceptSection;
