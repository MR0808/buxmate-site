import { ProductScreenshot } from "@/components/marketing/product-screenshot";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SCREENSHOTS } from "@/lib/screenshots";

const guestMoments = [
  {
    title: "A personal invite link",
    description:
      "Guests open their link, confirm their details, and they're in — no account signup required.",
    screenshot: SCREENSHOTS.guestInvite,
  },
  {
    title: "RSVP from their phone",
    description:
      "Going, maybe, or not going — per activity, so you know who's in for golf vs Saturday night.",
    screenshot: SCREENSHOTS.guestRsvp,
  },
  {
    title: "Their share of the costs",
    description:
      "Activity fees and shared costs in one clear view, with your payment instructions attached.",
    screenshot: SCREENSHOTS.guestPayments,
  },
] as const;

export function GuestExperienceSection() {
  return (
    <section className="section-pad bg-muted/40">
      <div className="section-container space-y-14">
        <SectionHeading
          eyebrow="Guest experience"
          title="Built for mates on their phones"
          description="Most guests won't create an account. They get a private link, see the plan, RSVP and check what they owe — all from mobile."
          align="center"
          className="mx-auto"
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <ProductScreenshot
            src={SCREENSHOTS.guestHub.src}
            alt={SCREENSHOTS.guestHub.alt}
            width={SCREENSHOTS.guestHub.width}
            height={SCREENSHOTS.guestHub.height}
            variant="mobile"
          />

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {guestMoments.map((moment) => (
              <article key={moment.title} className="buxmate-card p-5">
                <div className="mb-4 overflow-hidden rounded-xl border border-border/60">
                  <ProductScreenshot
                    src={moment.screenshot.src}
                    alt={moment.screenshot.alt}
                    width={moment.screenshot.width}
                    height={moment.screenshot.height}
                    variant="mobile"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {moment.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {moment.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
