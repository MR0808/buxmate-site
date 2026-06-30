import Link from "next/link";
import { LegalPage } from "@/components/legal/legal-page";
import { LEGAL_OPERATOR } from "@/lib/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Cookie Policy | Buxmate",
  description:
    "How Buxmate uses cookies on the marketing site, including optional analytics via Google Tag Manager.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Cookie policy"
      intro={`This policy explains how ${LEGAL_OPERATOR} uses cookies on buxmate.com. The Buxmate organiser app (app.buxmate.com) uses session cookies required for login and is not covered by marketing analytics below.`}
      sections={[
        {
          title: "What are cookies?",
          body: "Cookies are small text files stored on your device. They help websites remember preferences and understand how pages are used.",
        },
        {
          title: "Essential cookies",
          body: "We set a cookie when you choose your cookie preferences on this marketing site so we remember your choice. These cookies are necessary for that functionality.",
        },
        {
          title: "Analytics cookies (optional)",
          body: "If you click \"Accept analytics\" on our cookie banner, we enable analytics storage via Google Consent Mode and Google Tag Manager may set analytics cookies to help us understand how visitors use buxmate.com. If you choose \"Essential only\", analytics storage stays denied and no analytics cookies are set.",
        },
        {
          title: "Managing cookies",
          body: "You can change your choice by clearing site cookies in your browser and revisiting buxmate.com — the banner will appear again. You can also block cookies in your browser settings, though some features may not work as expected.",
        },
        {
          title: "Third-party cookies",
          body: (
            <p>
              Google may set cookies when analytics is enabled. See{" "}
              <a
                href="https://policies.google.com/privacy"
                className="font-medium text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s privacy policy
              </a>{" "}
              for details. We do not use advertising cookies on the marketing site
              at this time.
            </p>
          ),
        },
        {
          title: "More information",
          body: (
            <p>
              See our{" "}
              <Link href="/privacy" className="font-medium text-primary hover:underline">
                privacy policy
              </Link>{" "}
              for how we handle personal information.
            </p>
          ),
        },
      ]}
    />
  );
}
