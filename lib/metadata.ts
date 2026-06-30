import type { Metadata } from "next";
import {
  OG_IMAGE_DIMENSIONS,
  OG_IMAGE_PATH,
} from "@/lib/brand";
import { getSiteUrl } from "@/lib/env";

export const SITE_TITLE =
  "Buxmate | Private Event Planning for Bucks & Hens";

export const SITE_DESCRIPTION =
  "Plan private group events with RSVPs, shared costs, updates and photos in one place.";

/** Homepage `<title>` and `og:title` — keep at or under 60 characters. */
export const HOME_TITLE = "Buxmate | Plan Bucks, Hens & Group Weekends";

/** Homepage meta description — keep at or under ~155 characters for Google. */
export const HOME_META_DESCRIPTION =
  "Private hub for bucks, hens and group weekends. RSVPs, shared costs, updates and photos — no spreadsheets or messy group chats.";

/** Homepage social preview copy — keep at or under ~125 characters for X/LinkedIn. */
export const HOME_OG_DESCRIPTION =
  "Plan bucks, hens and group weekends in one private hub. RSVPs, shared costs, updates and photos.";

/** @deprecated Use HOME_META_DESCRIPTION */
export const HOME_DESCRIPTION = HOME_META_DESCRIPTION;

export const SITE_KEYWORDS = [
  "bucks party planning",
  "hens party planning",
  "group weekend organiser",
  "private event hub",
  "RSVP tracking",
  "split event costs",
  "payment tracking",
  "group trip planner",
  "event guest list",
  "Australia",
] as const;

function buildOgImages(alt: string) {
  return [
    {
      url: OG_IMAGE_PATH,
      width: OG_IMAGE_DIMENSIONS.width,
      height: OG_IMAGE_DIMENSIONS.height,
      alt,
    },
  ];
}

export function createPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  socialDescription,
  path = "",
  keywords = SITE_KEYWORDS,
  ogImageAlt = "Buxmate — private event planning for bucks, hens and group weekends",
}: {
  title?: string;
  description?: string;
  /** Shorter copy for Open Graph / Twitter when meta description is too long. */
  socialDescription?: string;
  path?: string;
  keywords?: readonly string[];
  ogImageAlt?: string;
}): Metadata {
  const siteUrl = getSiteUrl();
  const url = path ? `${siteUrl}${path}` : siteUrl;
  const pageTitle = title ?? SITE_TITLE;
  const socialDesc = socialDescription ?? description;
  const ogImages = buildOgImages(ogImageAlt);

  return {
    title: title ? { absolute: title } : SITE_TITLE,
    description,
    keywords: [...keywords],
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Buxmate",
      title: pageTitle,
      description: socialDesc,
      locale: "en_AU",
      url,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: socialDesc,
      images: ogImages.map((image) => image.url),
    },
  };
}
