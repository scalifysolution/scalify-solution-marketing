import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { sendLead } from "@/lib/lead";
import {
  isLeadAllowed,
  markLeadSubmitted,
} from "@/lib/leadRateLimit";

interface BottomLeadFormProps {
  title?: string;
  highlight?: string;
  ctaText?: string;
}

const BottomLeadForm = ({
  title = "Ready to Build",
  highlight = "Something Amazing?",
  ctaText = "Let's Start Your Project 🚀",
}: BottomLeadFormProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(null);
    if (!isLeadAllowed("sgd:bottom")) {
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
      subject: String(fd.get("subject") || "Project Inquiry"),
      page: typeof window !== "undefined" ? window.location.pathname : "",
    };

    try {
      setSubmitting(true);
      await sendLead(payload);
      markLeadSubmitted("sgd:bottom");
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
    <section className="section-padding" ref={ref} id="bottom-form">
      <div className="container mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-2">
            {title} <span className="gradient-text">{highlight}</span>
          </h2>
          <p className="text-xs text-muted-foreground text-center mb-6">
            📌 No commitment. Just a real conversation about your idea.
          </p>

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
                <input name="subject" required type="text" defaultValue="Project Inquiry" placeholder="Subject" className="w-full px-3 py-2.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
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
                {submitting ? "Submitting..." : ctaText}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BottomLeadForm;
