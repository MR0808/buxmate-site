const isDev = process.env.NODE_ENV === "development";

/**
 * Permissive CSP — tighten over time as third-party usage stabilises.
 * `unsafe-inline` / `unsafe-eval` are required for Next.js and GTM today.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  [
    "script-src 'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
  ].join(" "),
  ["style-src 'self'", "'unsafe-inline'", "https://fonts.googleapis.com"].join(
    " ",
  ),
  ["font-src 'self'", "data:", "https://fonts.gstatic.com"].join(" "),
  [
    "img-src 'self'",
    "data:",
    "blob:",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
  ].join(" "),
  [
    "connect-src 'self'",
    "https://www.google-analytics.com",
    "https://www.googletagmanager.com",
    "https://www.google.com",
    "https://region1.google-analytics.com",
    isDev ? "ws://localhost:*" : "",
    isDev ? "http://localhost:*" : "",
  ]
    .filter(Boolean)
    .join(" "),
  "frame-src https://www.googletagmanager.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

export const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
];
