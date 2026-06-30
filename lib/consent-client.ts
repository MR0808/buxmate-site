import {
  CONSENT_ANALYTICS,
  CONSENT_CHANGED_EVENT,
  CONSENT_COOKIE_NAME,
  CONSENT_ESSENTIAL,
  type CookieConsentValue,
} from "@/lib/consent";
import { updateGoogleConsent } from "@/lib/consent-mode";

export function readConsent(): CookieConsentValue | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CONSENT_COOKIE_NAME}=`));
  if (!match) return null;
  const value = match.split("=")[1];
  return value === CONSENT_ANALYTICS || value === CONSENT_ESSENTIAL
    ? value
    : null;
}

export function writeConsent(value: CookieConsentValue): void {
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${CONSENT_COOKIE_NAME}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
  updateGoogleConsent(value);
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: value }));
}
