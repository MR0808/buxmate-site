import Link from "next/link";
import {
  CalendarPlus,
  CreditCard,
  Mail,
  PartyPopper,
  UserPlus,
  Vote,
} from "lucide-react";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: PartyPopper,
    title: "Create your event",
    description: "Set up your bucks, hens or group weekend in minutes.",
  },
  {
    icon: CalendarPlus,
    title: "Add activities",
    description: "Build a timeline — dinners, golf, boat day, whatever's on.",
  },
  {
    icon: UserPlus,
    title: "Invite guests",
    description: "Send private invite links. No account needed for guests to start.",
  },
  {
    icon: Vote,
    title: "Collect RSVPs",
    description: "See who's in, who's out, and who's still deciding.",
  },
  {
    icon: CreditCard,
    title: "Track payments",
    description: "Split accommodation, transport and activities without awkward chasing.",
  },
  {
    icon: Mail,
    title: "Share updates & photos",
    description: "Post announcements and photos in your private event hub.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-pad scroll-mt-20">
      <div className="section-container space-y-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="How it works"
            title="From idea to organised weekend"
            description="A simple flow built for real group events — not enterprise project management."
          />
          <Button
            asChild
            variant="outline"
            className="shrink-0 self-start rounded-full normal-case tracking-normal sm:self-auto"
          >
            <Link href="/how-it-works">Full walkthrough</Link>
          </Button>
        </div>

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="buxmate-card relative p-6">
              <span className="mb-4 flex size-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-brand-muted text-primary">
                <step.icon className="size-5" aria-hidden />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
