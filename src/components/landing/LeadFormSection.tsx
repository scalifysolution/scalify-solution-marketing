import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { sendLead } from "@/lib/lead";
import {
  isLeadAllowed,
  markLeadSubmitted,
} from "@/lib/leadRateLimit";

const LeadFormSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(null);
    if (!isLeadAllowed("sgd:lead-section")) {
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
      subject: String(fd.get("subject") || "App Growth Blueprint"),
      page: typeof window !== "undefined" ? window.location.pathname : "",
    };

    try {
      setSubmitting(true);
      await sendLead(payload);
      markLeadSubmitted("sgd:lead-section");
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
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 ai-glow-bg pointer-events-none" />

      <div className="container mx-auto max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Get Your Free{" "}
            <span className="gradient-text">App Growth Blueprint</span>
          </h2>
          <p className="text-muted-foreground">
            📌 We respond within 30–60 minutes (Business Hours)
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-10 rounded-2xl text-center glow-primary"
          >
            <CheckCircle className="text-primary mx-auto mb-4" size={48} />
            <h3 className="text-xl font-heading font-bold mb-2">
              Thank you!
            </h3>
            <p className="text-muted-foreground">
              You have already submitted the query. Our team member will contact you shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 rounded-2xl space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                name="name"
                required
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
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
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                name="email"
                required
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                name="subject"
                required
                type="text"
                defaultValue="App Growth Blueprint"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {import.meta.env.VITE_RECAPTCHA_SITE_KEY ? (
              <div className="flex justify-start">
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
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-heading font-bold text-lg glow-primary hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "✅ Get Free Blueprint"}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default LeadFormSection;
