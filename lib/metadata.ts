import type { Metadata } from "next";
import {
  OG_IMAGE_DIMENSIONS,
  OG_IMAGE_PATH,
} from "@/lib/brand";
import { getSiteUrl } from "@/lib/env";

export const SITE_TITLE =
  "Buxmate | Private Event Planning for Bucks, Hens & Group Weekends";

export const SITE_DESCRIPTION =
  "Plan private group events with RSVPs, shared costs, updates and photos in one place.";

export const HOME_TITLE =
  "Buxmate — Plan Bucks, Hens & Group Weekends in One Private Hub";

export const HOME_DESCRIPTION =
  "Buxmate is a private event hub for bucks parties, hens parties and group weekends. Track RSVPs, split shared costs, post updates and collect photos — without spreadsheets or messy group chats.";

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
  path = "",
  keywords = SITE_KEYWORDS,
  ogImageAlt = "Buxmate — private event planning for bucks, hens and group weekends",
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: readonly string[];
  ogImageAlt?: string;
}): Metadata {
  const siteUrl = getSiteUrl();
  const url = path ? `${siteUrl}${path}` : siteUrl;
  const pageTitle = title ?? SITE_TITLE;
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
      description,
      locale: "en_AU",
      url,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ogImages.map((image) => image.url),
    },
  };
}
