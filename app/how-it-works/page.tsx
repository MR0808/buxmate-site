import { CtaButtons } from "@/components/marketing/cta-buttons";
import { HowItWorksSteps } from "@/components/marketing/how-it-works-steps";
import { SectionHeading } from "@/components/marketing/section-heading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "How It Works | Buxmate",
  description:
    "Create your event, add activities, invite guests, collect RSVPs, track payments and share updates — all in one private hub.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <div className="section-pad">
      <div className="section-container space-y-12">
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="How it works"
            title="From blank page to organised weekend"
            description="Buxmate is built around a simple flow that matches how real group events actually get planned — by one tired organiser with a lot to coordinate."
          />
          <CtaButtons className="mt-8" />
        </div>

        <HowItWorksSteps />

        <div className="buxmate-card bg-gradient-to-br from-brand-muted/50 via-card to-background px-6 py-10 text-center sm:px-10">
          <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            Sounds like what you need?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Create your event hub and start inviting guests in minutes.
          </p>
          <CtaButtons className="mt-6 justify-center" />
        </div>
      </div>
    </div>
  );
}
