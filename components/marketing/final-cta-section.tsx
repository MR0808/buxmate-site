import { CtaButtons } from "@/components/marketing/cta-buttons";

export function FinalCtaSection() {
  return (
    <section className="section-pad">
      <div className="section-container">
        <div className="buxmate-card bg-gradient-to-br from-brand-muted/60 via-card to-background px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to plan your next event?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Create your private event hub in minutes. Invite guests, track RSVPs
            and shared costs — all in one place.
          </p>
          <CtaButtons
            className="mt-8 justify-center"
            size="lg"
            secondaryHref="/how-it-works"
          />
        </div>
      </div>
    </section>
  );
}
