import {
  CalendarPlus,
  Camera,
  CreditCard,
  Mail,
  PartyPopper,
  UserPlus,
  Vote,
} from "lucide-react";

const detailedSteps = [
  {
    icon: PartyPopper,
    title: "Create your event",
    description:
      "Sign up as an organiser and create your bucks, hens or group weekend. Add the dates, location and a cover image so guests know what they're joining.",
  },
  {
    icon: CalendarPlus,
    title: "Add activities",
    description:
      "Build out the itinerary — golf, boat day, dinner, recovery brunch. Set times, locations and optional notes so everyone knows the plan.",
  },
  {
    icon: UserPlus,
    title: "Invite guests",
    description:
      "Add guests and send private invite links. Guests don't need a full account — they open their link and they're in.",
  },
  {
    icon: Vote,
    title: "Collect RSVPs",
    description:
      "Guests RSVP to each activity — going, maybe, or not going. You see who's responded and who still needs a nudge.",
  },
  {
    icon: CreditCard,
    title: "Track payments",
    description:
      "Add shared costs like accommodation or transport. Mark who's paid and send reminders without awkward group chat chasing.",
  },
  {
    icon: Mail,
    title: "Share updates and photos",
    description:
      "Post announcements to the event feed or email guests directly. Everyone can upload photos to a private gallery for the weekend.",
  },
  {
    icon: Camera,
    title: "Run the weekend from one hub",
    description:
      "On the day, guests check the timeline on their phone. You focus on the event — not on coordinating twelve different tools.",
  },
] as const;

export function HowItWorksSteps() {
  return (
    <ol className="space-y-8">
      {detailedSteps.map((step, index) => (
        <li
          key={step.title}
          className="buxmate-card flex flex-col gap-4 p-6 sm:flex-row sm:gap-6 sm:p-8"
        >
          <div className="flex shrink-0 items-start gap-4">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {index + 1}
            </span>
            <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-muted text-primary sm:hidden">
              <step.icon className="size-6" aria-hidden />
            </div>
          </div>
          <div>
            <div className="mb-3 hidden size-12 items-center justify-center rounded-2xl bg-brand-muted text-primary sm:flex">
              <step.icon className="size-6" aria-hidden />
            </div>
            <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
              {step.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
