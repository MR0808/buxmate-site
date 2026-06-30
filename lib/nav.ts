export const headerNavLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
] as const;

/** Distinct anchor text for footer — avoids duplicate link text warnings in SEO audits. */
export const footerNavLinks = [
  { href: "/how-it-works", label: "How Buxmate works" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of service" },
  { href: "/cookies", label: "Cookie policy" },
  { href: "/contact", label: "Contact us" },
] as const;

export const legalNavLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
] as const;
