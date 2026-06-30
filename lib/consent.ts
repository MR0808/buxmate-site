export const CONSENT_COOKIE_NAME = "buxmate_cookie_consent";
export const CONSENT_ANALYTICS = "analytics";
export const CONSENT_ESSENTIAL = "essential";

export type CookieConsentValue =
  | typeof CONSENT_ANALYTICS
  | typeof CONSENT_ESSENTIAL;

export const CONSENT_CHANGED_EVENT = "buxmate:cookie-consent-changed";
