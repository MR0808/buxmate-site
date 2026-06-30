import {
  CONSENT_ANALYTICS,
  CONSENT_ESSENTIAL,
  type CookieConsentValue,
} from "@/lib/consent";

type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

function getGtag(): GtagWindow["gtag"] {
  if (typeof window === "undefined") return undefined;
  const w = window as GtagWindow;
  w.dataLayer = w.dataLayer || [];
  w.gtag =
    w.gtag ||
    function gtag(...args: unknown[]) {
      w.dataLayer!.push(args);
    };
  return w.gtag;
}

export function updateGoogleConsent(value: CookieConsentValue): void {
  const gtag = getGtag();
  if (!gtag) return;

  if (value === CONSENT_ANALYTICS) {
    gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    return;
  }

  if (value === CONSENT_ESSENTIAL) {
    gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
}

export const CONSENT_MODE_DEFAULTS_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
`.trim();
