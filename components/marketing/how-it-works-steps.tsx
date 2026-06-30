import type { LucideIcon } from "lucide-react";
import {
  CalendarPlus,
  Camera,
  CreditCard,
  Mail,
  PartyPopper,
  UserPlus,
  Vote,
} from "lucide-react";
import { ProductScreenshot } from "@/components/marketing/product-screenshot";
import { SCREENSHOTS, type ScreenshotAsset } from "@/lib/screenshots";
import { cn } from "@/lib/utils";

type Step = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  screenshot: ScreenshotAsset;
  screenshotSecondary?: ScreenshotAsset;
};

const detailedSteps: Step[] = [
  {
    id: "create-event",
    icon: PartyPopper,
    title: "Create your event",
    description:
      "Sign up as an organiser and create your bucks, hens or group weekend. Add the dates, location and a cover image so guests know what they're joining.",
    screenshot: SCREENSHOTS.organiserHome,
  },
  {
    id: "add-activities",
    icon: CalendarPlus,
    title: "Add activities",
    description:
      "Build out the itinerary — golf, boat day, dinner, recovery brunch. Set times, locations, optional notes and costs so everyone knows the plan.",
    screenshot: SCREENSHOTS.activities,
  },
  {
    id: "invite-guests",
    icon: UserPlus,
    title: "Invite guests",
    description:
      "Add guests to your list and send private invite links. Guests don't need a full account — they open their link on their phone and they're in.",
    screenshot: SCREENSHOTS.guests,
    screenshotSecondary: SCREENSHOTS.guestInvite,
  },
  {
    id: "collect-rsvps",
    icon: Vote,
    title: "Collect RSVPs",
    description:
      "Guests RSVP to each activity — going, maybe, or not going. You see who's responded on the organiser side; they tap through on mobile.",
    screenshot: SCREENSHOTS.guestRsvp,
  },
  {
    id: "track-payments",
    icon: CreditCard,
    title: "Track payments",
    description:
      "Add shared costs like accommodation or transport. Preview the split, exclude the guest of honour from group gifts, and mark who's paid.",
    screenshot: SCREENSHOTS.payments,
    screenshotSecondary: SCREENSHOTS.paymentPreview,
  },
  {
    id: "share-updates",
    icon: Mail,
    title: "Share updates and photos",
    description:
      "Post announcements to the event feed or email guests directly. Everyone can upload photos to a private gallery for the weekend.",
    screenshot: SCREENSHOTS.feed,
    screenshotSecondary: SCREENSHOTS.photos,
  },
  {
    id: "run-the-weekend",
    icon: Camera,
    title: "Run the weekend from one hub",
    description:
      "On the day, guests check the timeline and their share of costs on their phone. You focus on the event — not on coordinating twelve different tools.",
    screenshot: SCREENSHOTS.guestHub,
    screenshotSecondary: SCREENSHOTS.guestPayments,
  },
];

export function HowItWorksSteps() {
  return (
    <ol className="space-y-16 sm:space-y-24">
      {detailedSteps.map((step, index) => {
        const imageOnRight = index % 2 === 0;

        return (
          <li
            key={step.id}
            id={step.id}
            className="scroll-mt-24"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-brand-muted text-primary">
                <step.icon className="size-5" aria-hidden />
              </div>
            </div>

            <div
              className={cn(
                "grid items-center gap-10 lg:grid-cols-2 lg:gap-14",
              )}
            >
              <div className={cn(imageOnRight ? "order-1" : "order-1 lg:order-2")}>
                <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                  {step.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {step.description}
                </p>
              </div>

              <div
                className={cn(
                  "flex flex-col items-center gap-4 sm:flex-row lg:justify-center",
                  imageOnRight ? "order-2" : "order-2 lg:order-1",
                )}
              >
                <ProductScreenshot
                  src={step.screenshot.src}
                  alt={step.screenshot.alt}
                  width={step.screenshot.width}
                  height={step.screenshot.height}
                  variant={step.screenshot.variant}
                />
                {step.screenshotSecondary ? (
                  <ProductScreenshot
                    src={step.screenshotSecondary.src}
                    alt={step.screenshotSecondary.alt}
                    width={step.screenshotSecondary.width}
                    height={step.screenshotSecondary.height}
                    variant={step.screenshotSecondary.variant}
                  />
                ) : null}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
