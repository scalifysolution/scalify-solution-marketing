import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare, Brain, CalendarCheck, MapPin,
  Stethoscope, DollarSign, Camera, History,
  Users, Wrench, BellRing, CreditCard,
  AlertTriangle, Building2, FileText, Globe,
  Headphones, Mic
} from "lucide-react";

const layers = [
  {
    label: "LAYER 1",
    title: "Core AI Operations",
    subtitle: "Replaces your entire app experience",
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: [
      { icon: MessageSquare, title: "Natural Language Booking", desc: "User types 'My AC is leaking' → AI understands, asks smart follow-ups, picks category, suggests price, books automatically. Zero forms." },
      { icon: Brain, title: "Smart Follow-up Questions", desc: "'Split or central? Indoor or outdoor leak? Urgent?' — AI asks like a human expert, reducing wrong bookings by 80%." },
      { icon: CalendarCheck, title: "One-Message Rescheduling", desc: "'Move today's cleaning to tomorrow evening' — done. 'Cancel the electrician, he fixed it' — done. No buttons, no menus." },
      { icon: MapPin, title: "Live Tracking & Chat", desc: "'Where is my technician?' 'Tell him to bring a ladder' — AI acts as proxy between user and service provider in real-time." },
    ],
  },
  {
    label: "LAYER 2",
    title: "Smart AI Intelligence",
    subtitle: "This is where you beat every competitor",
    color: "text-accent",
    bgColor: "bg-accent/10",
    features: [
      { icon: Stethoscope, title: "Problem Diagnosis BEFORE Booking", desc: "AC not cooling? AI checks: gas vs compressor vs dirty filter. Right diagnosis = right technician = right tools = zero revisits." },
      { icon: DollarSign, title: "Price Intelligence & Transparency", desc: "'This usually costs 8–12 KD. If it's just gas refill, it'll be cheaper.' — builds trust, eliminates disputes." },
      { icon: Camera, title: "Photo & Video Understanding", desc: "User sends a photo of a leaking pipe → AI detects issue, confirms service, notes required spare parts. Next-level UX." },
      { icon: History, title: "Memory & Auto-History", desc: "AI remembers house size, number of ACs, preferred times, past technicians. 'Book the same AC guy as last time' — just works." },
    ],
  },
  {
    label: "LAYER 3",
    title: "Provider Intelligence",
    subtitle: "Massive operations improvement",
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: [
      { icon: Users, title: "AI-Powered Assignment", desc: "AI considers location, skill match, past ratings, job complexity, and required tools — beats rule-based assignment every time." },
      { icon: Wrench, title: "Provider Copilot", desc: "Separate AI for technicians: job summary, diagnosis hints, checklist, safety notes, upsell suggestions. They arrive prepared." },
    ],
  },
  {
    label: "LAYER 4",
    title: "Home & Business Manager",
    subtitle: "This makes your platform sticky",
    color: "text-accent",
    bgColor: "bg-accent/10",
    features: [
      { icon: BellRing, title: "Preventive Maintenance Reminders", desc: "'Your AC hasn't been serviced in 6 months.' 'Water tank cleaning is due.' Not just reminders — 1-tap booking via chat." },
      { icon: CreditCard, title: "Subscription & AMC Management", desc: "'I want yearly AC maintenance' → AI suggests plans, explains savings, auto-schedules visits, auto-renews. Predictable revenue." },
      { icon: AlertTriangle, title: "Emergency Mode 🚨", desc: "'Gas smell in kitchen' → AI gives safety steps, calls nearest technician, escalates priority, notifies support. Can save lives." },
    ],
  },
  {
    label: "LAYER 5",
    title: "B2B & Enterprise Expansion",
    subtitle: "Unlocks enterprise-level revenue",
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: [
      { icon: Building2, title: "Multi-Location Management", desc: "For offices, clinics, buildings: 'Schedule AC service for all branches next week' — with approval flows & budget tracking." },
      { icon: FileText, title: "Invoice & Expense Intelligence", desc: "'Why was this bill higher than last time?' — AI explains, detects overcharging, compares past jobs, exports reports." },
    ],
  },
  {
    label: "LAYER 6",
    title: "Platform Ecosystem",
    subtitle: "Your long-term competitive moat",
    color: "text-accent",
    bgColor: "bg-accent/10",
    features: [
      { icon: Globe, title: "Vendor Onboarding via AI", desc: "Technicians chat with AI: upload docs, training Q&A, skill assessment, policy explanation. Zero manual onboarding." },
      { icon: Mic, title: "Multilingual Voice & WhatsApp", desc: "Arabic, English, Hindi — voice notes, WhatsApp booking, phone-call AI. Massively increases reach." },
      { icon: Headphones, title: "AI Dispute Resolution", desc: "User complains → AI reads chat, checks job notes & photos, proposes refund/revisit. Support team only approves." },
    ],
  },
];

const AiFeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 ai-glow-bg pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent font-medium mb-3">6 layers of intelligence...</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Not Just a Feature List — <span className="gradient-text">An Entire AI Brain</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We build AI platforms in layers — each one makes your business <span className="text-foreground font-semibold">smarter, stickier, and more profitable</span>. 
            Start with the core, expand as you grow.
          </p>
        </motion.div>

        <div className="space-y-16">
          {layers.map((layer, li) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: li * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${layer.bgColor} ${layer.color}`}>
                  {layer.label}
                </span>
                <h3 className="font-heading font-bold text-xl">{layer.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6 ml-1">{layer.subtitle}</p>

              <div className={`grid sm:grid-cols-2 ${layer.features.length > 2 ? "lg:grid-cols-4" : "lg:grid-cols-2"} gap-4`}>
                {layer.features.map((f, fi) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: li * 0.1 + fi * 0.05, duration: 0.5 }}
                    className="glass-card p-5 rounded-xl hover:bg-secondary/30 transition-colors group"
                  >
                    <div className={`w-10 h-10 rounded-xl ${layer.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <f.icon className={layer.color} size={20} />
                    </div>
                    <h4 className="font-heading font-semibold text-sm mb-2">{f.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiFeaturesSection;
