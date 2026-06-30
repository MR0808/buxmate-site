import { SectionHeading } from "@/components/marketing/section-heading";
import { ShowcaseRow } from "@/components/marketing/showcase-row";
import { SCREENSHOTS } from "@/lib/screenshots";

const showcases = [
  {
    title: "Your command centre for every event",
    description:
      "See all your bucks, hens and group weekends in one place. Jump straight into the event that needs attention.",
    bullets: [
      "Active, draft and archived events at a glance",
      "Quick access to create a new weekend hub",
      "One login for everything you organise",
    ],
    screenshot: SCREENSHOTS.organiserHome,
    imagePosition: "right" as const,
  },
  {
    title: "Lay out the weekend itinerary",
    description:
      "Build a timeline of activities with times, locations and notes. Set costs per activity so payments stay in sync.",
    bullets: [
      "Friday drinks through to Sunday recovery brunch",
      "RSVP counts visible per activity",
      "Free, per-person or split-by-attendance pricing",
    ],
    screenshot: SCREENSHOTS.activities,
    imagePosition: "left" as const,
  },
  {
    title: "Guests, invites and honour badges",
    description:
      "Add guests, track who's joined, and send private invite links. Mark the guest of honour so shared costs split fairly.",
    bullets: [
      "Search and filter your guest list",
      "Joined vs invited status at a glance",
      "Guest of honour excluded from group gifts",
    ],
    screenshot: SCREENSHOTS.guests,
    imagePosition: "right" as const,
  },
  {
    title: "Track who owes what — without awkward chasing",
    description:
      "Add accommodation, transport and activity costs. See paid vs pending per guest and nudge the ones who haven't transferred yet.",
    bullets: [
      "Overview of every payment item in one table",
      "Per-guest paid and pending amounts",
      "Bank transfer instructions for your group",
    ],
    screenshot: SCREENSHOTS.payments,
    imagePosition: "left" as const,
  },
  {
    title: "Smart cost splitting before you save",
    description:
      "Create a payment item and preview exactly how it splits across guests — including rules that exclude the guest of honour.",
    bullets: [
      "Live allocation preview as you type",
      "Activity-linked or event-wide costs",
      "Group gifts that skip the person being celebrated",
    ],
    screenshot: SCREENSHOTS.paymentPreview,
    screenshotSecondary: SCREENSHOTS.paymentDetail,
    imagePosition: "right" as const,
  },
  {
    title: "Announcements and photos in one private feed",
    description:
      "Post pinned updates for the group and collect photos in a gallery only your guests can see — not a public social feed.",
    bullets: [
      "Pin the important stuff to the top",
      "Email guests directly when you need to",
      "Upload and browse weekend photos together",
    ],
    screenshot: SCREENSHOTS.feed,
    screenshotSecondary: SCREENSHOTS.photos,
    imagePosition: "left" as const,
  },
] as const;

export function FeaturesSection() {
  return (
    <section className="section-pad">
      <div className="section-container space-y-16 sm:space-y-24">
        <SectionHeading
          eyebrow="Features"
          title="Everything organisers need, nothing they don't"
          description="Buxmate is not another social network. It's a private event operating system for people who actually have to run the weekend."
          align="center"
          className="mx-auto"
        />

        <div className="space-y-20 sm:space-y-28">
          {showcases.map((item) => (
            <ShowcaseRow
              key={item.title}
              title={item.title}
              description={item.description}
              bullets={item.bullets}
              screenshot={item.screenshot}
              screenshotSecondary={
                "screenshotSecondary" in item ? item.screenshotSecondary : undefined
              }
              imagePosition={item.imagePosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
