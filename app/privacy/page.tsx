import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy | Buxmate",
  description:
    "How Buxmate handles your data — private events, secure guest links, and no selling of personal information.",
  path: "/privacy",
});

const sections = [
  {
    title: "Private events by default",
    body: "Buxmate is built for private group events — bucks parties, hens weekends, golf trips and family getaways. Your event is not a public listing. Only people you invite can access it.",
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
    title: "What we collect",
    body: "We collect information needed to run the service — account details for organisers, guest contact details you provide, and event content you create. We use this to operate Buxmate, send emails you request, and improve the product.",
  },
  {
    title: "What we don't do",
    body: "We do not sell your personal data. We do not use your event content to build public profiles. We do not share your guest list with advertisers or third-party marketers.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <div className="section-pad">
      <div className="section-container max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Privacy
        </p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground">
          Your event stays yours
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Buxmate is designed for private group events. This page explains our
          approach in plain English — not legal jargon.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                {section.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Contact
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Questions about privacy? Get in touch via our{" "}
            <Link
              href="/contact"
              className="font-medium text-primary hover:underline"
            >
              contact page
            </Link>{" "}
            and we&apos;ll help.
          </p>
        </section>

        <p className="mt-12 text-sm text-muted-foreground">
          Last updated: June 2026
        </p>
      </div>
    </div>
  );
}
