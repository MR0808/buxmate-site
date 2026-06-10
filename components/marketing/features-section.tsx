import {
  Bell,
  CalendarRange,
  Camera,
  CreditCard,
  Link2,
  Lock,
  Smartphone,
  Vote,
} from "lucide-react";
import { SectionHeading } from "@/components/marketing/section-heading";

const features = [
  {
    icon: Lock,
    title: "Private event hub",
    description: "Your event stays private. Only invited guests can access it.",
  },
  {
    icon: Link2,
    title: "Guest invite links",
    description: "Share a personal link — guests join without creating an account.",
  },
  {
    icon: CalendarRange,
    title: "Activity timeline",
    description: "Lay out the weekend with times, locations and notes.",
  },
  {
    icon: Vote,
    title: "RSVP tracking",
    description: "Going, maybe, or not going — see responses at a glance.",
  },
  {
    icon: CreditCard,
    title: "Payment tracking",
    description: "Track who owes what for accommodation, activities and shared costs.",
  },
  {
    icon: Bell,
    title: "Announcements",
    description: "Post updates to the group or email guests directly from Buxmate.",
  },
  {
    icon: Camera,
    title: "Photo sharing",
    description: "Collect photos in one private gallery — not a public feed.",
  },
  {
    icon: Smartphone,
    title: "Mobile-friendly guests",
    description: "Guests can RSVP, view the itinerary and upload photos from their phone.",
  },
] as const;

export function FeaturesSection() {
  return (
    <section className="section-pad bg-muted/40">
      <div className="section-container space-y-12">
        <SectionHeading
          eyebrow="Features"
          title="Everything organisers need, nothing they don't"
          description="Buxmate is not another social network. It's a private event operating system for people who actually have to run the weekend."
          align="center"
          className="mx-auto"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="buxmate-card p-5">
              <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-brand-muted text-primary">
                <feature.icon className="size-5" aria-hidden />
              </div>
              <h3 className="font-medium text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
