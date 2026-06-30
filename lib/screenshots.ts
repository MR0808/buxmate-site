export type ScreenshotVariant = "desktop" | "mobile";

export type ScreenshotAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  variant: ScreenshotVariant;
};

export const SCREENSHOTS = {
  heroDashboard: {
    src: "/screenshots/hero-organiser-dashboard.png",
    alt: "Buxmate organiser event dashboard with activities, guests and payment summary",
    width: 1280,
    height: 900,
    variant: "desktop",
  },
  guestHub: {
    src: "/screenshots/preview-guest-mobile.png",
    alt: "Buxmate guest hub on mobile showing activities, RSVPs and payment share",
    width: 390,
    height: 844,
    variant: "mobile",
  },
  organiserHome: {
    src: "/screenshots/11-organiser-home.png",
    alt: "Buxmate organiser home screen listing active events",
    width: 1280,
    height: 900,
    variant: "desktop",
  },
  activities: {
    src: "/screenshots/03-organiser-activities.png",
    alt: "Buxmate activity timeline with times, locations and RSVP counts",
    width: 1280,
    height: 900,
    variant: "desktop",
  },
  guests: {
    src: "/screenshots/04-organiser-guests.png",
    alt: "Buxmate guest list with invite status, search and guest of honour badge",
    width: 1280,
    height: 900,
    variant: "desktop",
  },
  payments: {
    src: "/screenshots/05-organiser-payments.png",
    alt: "Buxmate payments overview showing shared costs and paid status per guest",
    width: 1280,
    height: 900,
    variant: "desktop",
  },
  paymentPreview: {
    src: "/screenshots/06-create-payment-preview.png",
    alt: "Buxmate create payment form with live split preview across guests",
    width: 1280,
    height: 900,
    variant: "desktop",
  },
  paymentDetail: {
    src: "/screenshots/07-payment-detail-group-gift.png",
    alt: "Buxmate payment detail for a group gift excluding the guest of honour",
    width: 1280,
    height: 900,
    variant: "desktop",
  },
  feed: {
    src: "/screenshots/08-organiser-feed.png",
    alt: "Buxmate event feed with pinned announcement for guests",
    width: 1280,
    height: 900,
    variant: "desktop",
  },
  photos: {
    src: "/screenshots/09-organiser-photos.png",
    alt: "Buxmate private photo gallery for an event weekend",
    width: 1280,
    height: 900,
    variant: "desktop",
  },
  guestInvite: {
    src: "/screenshots/10-guest-invite-landing.png",
    alt: "Buxmate guest invite landing page on mobile with event details",
    width: 390,
    height: 844,
    variant: "mobile",
  },
  guestPayments: {
    src: "/screenshots/12-guest-payments-mobile.png",
    alt: "Buxmate guest payment share on mobile with activity and shared costs",
    width: 390,
    height: 844,
    variant: "mobile",
  },
  guestRsvp: {
    src: "/screenshots/13-guest-rsvp-mobile.png",
    alt: "Buxmate guest RSVP controls on mobile for weekend activities",
    width: 390,
    height: 844,
    variant: "mobile",
  },
} as const satisfies Record<string, ScreenshotAsset>;

/** @deprecated Use SCREENSHOTS.heroDashboard */
export const SCREENSHOT_HERO_PATH = SCREENSHOTS.heroDashboard.src;
/** @deprecated Use SCREENSHOTS.guestHub */
export const SCREENSHOT_GUEST_MOBILE_PATH = SCREENSHOTS.guestHub.src;
export const SCREENSHOT_HERO_DIMENSIONS = {
  width: SCREENSHOTS.heroDashboard.width,
  height: SCREENSHOTS.heroDashboard.height,
} as const;
export const SCREENSHOT_GUEST_MOBILE_DIMENSIONS = {
  width: SCREENSHOTS.guestHub.width,
  height: SCREENSHOTS.guestHub.height,
} as const;
