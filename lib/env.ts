const PRODUCTION_APP_URL = "https://app.buxmate.com";
const PRODUCTION_SITE_URL = "https://buxmate.com";

function trimUrl(url: string): string {
  return url.replace(/\/$/, "");
}

export function getAppUrl(): string {
  const configured = process.env.NEXT_PUBLIC_APP_URL;
  if (configured) return trimUrl(configured);
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  return PRODUCTION_APP_URL;
}

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return trimUrl(configured);
  if (process.env.NODE_ENV === "development") return "http://localhost:3001";
  return PRODUCTION_SITE_URL;
}

export function getSignupUrl(): string {
  return `${getAppUrl()}/signup`;
}

export function getGtmId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GTM_ID?.trim();
  return id || undefined;
}
