import { LegalPage } from "@/components/legal/legal-page";
import {
  LEGAL_CONTACT_EMAIL,
  LEGAL_JURISDICTION,
  LEGAL_OPERATOR,
} from "@/lib/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms of Service | Buxmate",
  description:
    "Terms of service for Buxmate — the private event hub for bucks, hens and group weekends.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of service"
      intro={`These terms govern your use of ${LEGAL_OPERATOR} websites and the Buxmate organiser app. By creating an account or using the service you agree to these terms.`}
      sections={[
        {
          title: "The service",
          body: "Buxmate provides tools for organisers to plan private group events — guest lists, invite links, RSVPs, shared cost tracking, announcements and photo sharing. Buxmate does not process payments between guests and organisers.",
        },
        {
          title: "Accounts",
          body: "Organisers must provide accurate account information and keep login credentials secure. You are responsible for activity under your account. You must be at least 18 years old to create an organiser account.",
        },
        {
          title: "Acceptable use",
          body: "You must not use Buxmate for unlawful purposes, harassment, spam, distributing malware, or uploading content you do not have rights to share. You must not attempt to access events or data you are not invited to.",
        },
        {
          title: "Your content",
          body: "You retain ownership of content you upload. You grant Buxmate a limited licence to host, store and display that content solely to provide the service to you and your invited guests.",
        },
        {
          title: "Guest data",
          body: "If you add guest contact details, you confirm you have a lawful basis to do so (for example, organising an event they are attending). Guests access events via private links you share.",
        },
        {
          title: "Availability",
          body: "We aim to keep Buxmate available but do not guarantee uninterrupted access. We may modify, suspend or discontinue features with reasonable notice where practical.",
        },
        {
          title: "Disclaimer",
          body: "Buxmate is provided \"as is\" to the extent permitted by law. We are not liable for disputes between organisers and guests, payment arrangements between parties, or losses arising from your use of the service beyond what Australian consumer law requires.",
        },
        {
          title: "Limitation of liability",
          body: `To the maximum extent permitted by law in ${LEGAL_JURISDICTION}, ${LEGAL_OPERATOR} is not liable for indirect or consequential loss. Our total liability for any claim relating to the service is limited to the greater of AUD $100 or the amount you paid us in the 12 months before the claim (currently zero for the free service).`,
        },
        {
          title: "Termination",
          body: "You may delete your account at any time in app settings. We may suspend or terminate accounts that breach these terms. On termination, your right to use the service ends and we may delete your data in line with our privacy policy.",
        },
        {
          title: "Governing law",
          body: `These terms are governed by the laws of ${LEGAL_JURISDICTION}. Courts in ${LEGAL_JURISDICTION} have non-exclusive jurisdiction over disputes.`,
        },
        {
          title: "Contact",
          body: `Questions about these terms? Email ${LEGAL_CONTACT_EMAIL}.`,
        },
      ]}
    />
  );
}
