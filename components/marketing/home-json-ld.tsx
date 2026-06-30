import { getAppUrl, getSiteUrl } from "@/lib/env";
import {
  HOME_META_DESCRIPTION,
  HOME_TITLE,
  SITE_DESCRIPTION,
} from "@/lib/metadata";
import { LOGO_PATH } from "@/lib/brand";

export function HomeJsonLd() {
  const siteUrl = getSiteUrl();
  const appUrl = getAppUrl();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Buxmate",
        url: siteUrl,
        logo: `${siteUrl}${LOGO_PATH}`,
        description: SITE_DESCRIPTION,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Buxmate",
        description: HOME_META_DESCRIPTION,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-AU",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: HOME_TITLE,
        description: HOME_META_DESCRIPTION,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-AU",
      },
      {
        "@type": "SoftwareApplication",
        name: "Buxmate",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: appUrl,
        description: HOME_META_DESCRIPTION,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "AUD",
        },
        provider: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
