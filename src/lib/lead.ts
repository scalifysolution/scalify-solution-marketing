import emailjs from "@emailjs/browser";

export type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message?: string;
  page?: string;
};

function getEnv(key: string): string {
  // Vite exposes only VITE_* variables.
  return (import.meta as any).env?.[key] ?? "";
}

export async function sendLead(payload: LeadPayload) {
  const serviceId = getEnv("VITE_EMAILJS_SERVICE_ID");
  const templateId = getEnv("VITE_EMAILJS_TEMPLATE_ID");
  const publicKey = getEnv("VITE_EMAILJS_PUBLIC_KEY");

  if (serviceId && templateId && publicKey) {
    await emailjs.send(serviceId, templateId, payload, { publicKey });
    return { ok: true as const, via: "emailjs" as const };
  }

  // Frontend-only fallback if EmailJS isn't configured yet.
  const to = "sales@scalifysolutions.com";
  const subj = encodeURIComponent(payload.subject || "New lead");
  const body = encodeURIComponent(
    [
      "New inquiry (Scale project)",
      "",
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      `Subject: ${payload.subject}`,
      payload.page ? `Page: ${payload.page}` : "",
      "",
      payload.message ? `Message:\n${payload.message}` : "",
    ]
      .filter(Boolean)
      .join("\n")
  );
  window.location.href = `mailto:${to}?subject=${subj}&body=${body}`;
  return { ok: true as const, via: "mailto" as const };
}

