import type { Metadata } from "next";
import { LOGO_PATH } from "@/lib/brand";
import { getSiteUrl } from "@/lib/env";

export const SITE_TITLE =
  "Buxmate | Private Event Planning for Bucks, Hens & Group Weekends";

export const SITE_DESCRIPTION =
  "Plan private group events with RSVPs, shared costs, updates and photos in one place.";

export function createPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const siteUrl = getSiteUrl();
  const url = path ? `${siteUrl}${path}` : siteUrl;
  const pageTitle = title ?? SITE_TITLE;

  return {
    title: title ? { absolute: title } : SITE_TITLE,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Buxmate",
      title: pageTitle,
      description,
      locale: "en_AU",
      url,
      images: [{ url: LOGO_PATH, alt: "Buxmate" }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}
