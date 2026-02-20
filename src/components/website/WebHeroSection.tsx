import { motion } from "framer-motion";
import { Globe, Zap, TrendingUp, CheckCircle } from "lucide-react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { sendLead } from "@/lib/lead";
import {
  isLeadAllowed,
  markLeadSubmitted,
} from "@/lib/leadRateLimit";

const promises = [
  { icon: Globe, title: "Custom Built", desc: "Not a template. Your brand, your identity." },
  { icon: Zap, title: "SEO-Optimized", desc: "Google-ready from day one." },
  { icon: TrendingUp, title: "Growth-Focused", desc: "Built to bring leads, not just look pretty." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const WebHeroSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(null);
    if (!isLeadAllowed("sgd:web")) {
      setError(null);
      setSubmitted(true);
      return;
    }
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    if (siteKey && !captchaToken) {
      setError("Please verify reCAPTCHA to submit.");
      return;
    }

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      subject: String(fd.get("subject") || "Website Development Inquiry"),
      page: typeof window !== "undefined" ? window.location.pathname : "",
    };

    try {
      setSubmitting(true);
      await sendLead(payload);
      markLeadSubmitted("sgd:web");
      setSubmitted(true);
      formEl.reset();
      setCaptchaToken(null);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-block glass-card px-4 py-1.5 text-xs font-medium text-primary mb-6">
            🚀 We Don't Just Build Websites — We Build Growth Machines
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            Your Competitor's Website Is{" "}
            <span className="gradient-text">Stealing Your Customers</span> Right Now 🌐
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-muted-foreground mb-4 max-w-xl">
            Let's be honest — if your business doesn't have a website, or has a bad one, you're invisible. People Google before they buy. If they can't find you, they find someone else.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-base text-foreground font-medium mb-8 max-w-xl">
            We don't build websites that just "exist." We build websites that <span className="text-primary">rank, convert, and grow your business.</span> That's the Scalify difference.
          </motion.p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {promises.map((p, i) => (
              <motion.div key={p.title} custom={i} initial="hidden" animate="visible" variants={fadeUp} className="glass-card p-4 rounded-xl">
                <p.icon className="text-primary mb-2" size={22} />
                <h3 className="text-sm font-semibold mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-col gap-6">
          <div id="contact">
            <h3 className="text-xl font-heading font-bold mb-1 text-center">
              Let's Build Your <span className="gradient-text">Growth Website</span>
            </h3>
            <p className="text-xs text-muted-foreground text-center mb-4">📌 We respond within 30–60 minutes (Business Hours)</p>

            {submitted ? (
              <div className="glass-card p-8 rounded-2xl text-center glow-primary">
                <CheckCircle className="text-primary mx-auto mb-3" size={40} />
                <h4 className="text-lg font-heading font-bold mb-2">Thank you!</h4>
                <p className="text-sm text-muted-foreground">
                  You have already submitted the query. Our team member will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-6 rounded-2xl space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input name="name" required type="text" placeholder="Full Name" className="w-full px-3 py-2.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <input
                    name="phone"
                    required
                    type="tel"
                    placeholder="Phone Number"
                    inputMode="tel"
                    autoComplete="tel"
                    pattern="^[+]?[0-9]{10,15}$"
                    title="Enter a valid phone number (10 digits, or include country code)"
                    maxLength={16}
                    onInput={(e) => {
                      const t = e.currentTarget;
                      const trimmed = t.value.trim();
                      const plus = trimmed.startsWith("+");
                      const digits = trimmed.replace(/\D/g, "").slice(0, 15);
                      t.value = `${plus ? "+" : ""}${digits}`;
                    }}
                    className="w-full px-3 py-2.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input name="email" required type="email" placeholder="Email Address" className="w-full px-3 py-2.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <input name="subject" required type="text" defaultValue="Website Development Inquiry" placeholder="Subject" className="w-full px-3 py-2.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                {import.meta.env.VITE_RECAPTCHA_SITE_KEY ? (
                  <div className="w-full flex justify-start">
                    <ReCAPTCHA
                      sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                      onChange={(token) => setCaptchaToken(token)}
                    />
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground text-center">
                    reCAPTCHA not configured (set <span className="text-foreground">VITE_RECAPTCHA_SITE_KEY</span>).
                  </p>
                )}

                {error ? (
                  <p className="text-xs text-red-400 text-center">{error}</p>
                ) : null}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-heading font-bold glow-primary hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting..." : "🚀 Get My Growth Website"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebHeroSection;
