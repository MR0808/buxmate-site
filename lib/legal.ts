export const LEGAL_OPERATOR = "Buxmate";
export const LEGAL_CONTACT_EMAIL = "hello@buxmate.com";
export const LEGAL_JURISDICTION = "Australia";
export const LEGAL_LAST_UPDATED = "July 2026";

export const SUBPROCESSORS = [
  { name: "Vercel", purpose: "Website and application hosting" },
  { name: "Supabase", purpose: "Database and file storage for the app" },
  { name: "Resend", purpose: "Transactional and contact email delivery" },
  { name: "Google Tag Manager", purpose: "Analytics tags (only after cookie consent)" },
] as const;
