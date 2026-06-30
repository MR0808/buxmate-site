import Link from "next/link";
import { LegalPage } from "@/components/legal/legal-page";
import {
  LEGAL_CONTACT_EMAIL,
  LEGAL_OPERATOR,
  SUBPROCESSORS,
} from "@/lib/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy | Buxmate",
  description:
    "How Buxmate handles your data — private events, secure guest links, subprocessors, and your privacy rights.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Your event stays yours"
      intro="Buxmate is designed for private group events. This policy explains what we collect, why we use it, and the choices you have."
      sections={[
        {
          title: "Who we are",
          body: (
            <p>
              {LEGAL_OPERATOR} operates the Buxmate marketing site (buxmate.com)
              and organiser app (app.buxmate.com). For privacy questions contact{" "}
              <a
                href={`mailto:${LEGAL_CONTACT_EMAIL}`}
                className="font-medium text-primary hover:underline"
              >
                {LEGAL_CONTACT_EMAIL}
              </a>
              .
            </p>
          ),
        },
        {
          title: "Private events by default",
          body: "Buxmate is built for private group events — bucks parties, hens weekends, golf trips and family getaways. Your event is not a public listing. Only people you invite can access it.",
        },
        {
          title: "What we collect",
          body: "We collect information needed to run the service: organiser account details (name, email), guest contact details you provide, event content (activities, posts, photos), and technical logs from our hosting providers. If you accept analytics cookies on the marketing site, Google Tag Manager may collect usage data according to Google's policies.",
        },
        {
          title: "How we use information",
          body: "We use your information to operate Buxmate, send emails you request (verification, invites, reminders), provide support, keep the service secure, and improve the product. We do not sell personal information.",
        },
        {
          title: "Guest invite links",
          body: "Each guest receives a personal invite link. These links are meant to be shared only with that guest. As the organiser, you can expire or regenerate links if needed.",
        },
        {
          title: "Photos and event content",
          body: "Photos uploaded to an event are stored securely and are only visible to people with access to that event. They are not published to a public feed or searchable gallery.",
        },
        {
          title: "Payment tracking",
          body: "Buxmate helps organisers track who owes what for shared costs. This is an organising tool — Buxmate does not process card payments or hold money on your behalf.",
        },
        {
          title: "Subprocessors",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              {SUBPROCESSORS.map((item) => (
                <li key={item.name}>
                  <span className="font-medium text-foreground">{item.name}</span>
                  {" — "}
                  {item.purpose}
                </li>
              ))}
            </ul>
          ),
        },
        {
          title: "Data retention",
          body: "We keep account and event data while your account is active. If you delete your organiser account, we delete your profile and events subject to our deletion process. Backups and logs may persist for a limited period with our hosting providers.",
        },
        {
          title: "Your rights",
          body: (
            <p>
              Depending on where you live, you may have rights to access, correct,
              or delete personal information we hold about you. Organisers can delete
              their account in app settings. You can also email{" "}
              <a
                href={`mailto:${LEGAL_CONTACT_EMAIL}`}
                className="font-medium text-primary hover:underline"
              >
                {LEGAL_CONTACT_EMAIL}
              </a>{" "}
              to request access, correction, export, or deletion. We will respond
              within a reasonable time.
            </p>
          ),
        },
        {
          title: "Marketing site cookies",
          body: (
            <p>
              We use essential cookies to operate buxmate.com. Analytics cookies are
              optional and only loaded if you accept them. See our{" "}
              <Link href="/cookies" className="font-medium text-primary hover:underline">
                cookie policy
              </Link>
              .
            </p>
          ),
        },
        {
          title: "What we don't do",
          body: "We do not sell your personal data. We do not use your event content to build public profiles. We do not share your guest list with advertisers.",
        },
      ]}
    />
  );
}
