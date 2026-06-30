import { EyeOff, ImageOff, LinkIcon, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/marketing/section-heading";

const points = [
  {
    icon: ShieldCheck,
    title: "Private by default",
    description:
      "Events aren't public listings. Only people with an invite link can see your event.",
  },
  {
    icon: LinkIcon,
    title: "Personal invite links",
    description:
      "Each guest gets their own link. You control who's in and can revoke access anytime.",
  },
  {
    icon: ImageOff,
    title: "Photos stay private",
    description:
      "Event photos are stored securely and only visible to people in your event.",
  },
  {
    icon: EyeOff,
    title: "No data selling",
    description:
      "We don't sell your personal data. Payment tracking is for organising — not payments processing.",
  },
] as const;

export function PrivacySection() {
  return (
    <section className="section-pad">
      <div className="section-container">
        <div className="buxmate-card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <SectionHeading
                eyebrow="Privacy-first"
                title="Built for private group events"
                description="Buxmate is designed around the idea that your bucks, hens or weekend away is nobody else's business."
              />
            </div>
            <div className="grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {points.map((point) => (
                <div
                  key={point.title}
                  className="bg-card p-6 sm:p-8"
                >
                  <point.icon
                    className="mb-3 size-5 text-primary"
                    aria-hidden
                  />
                  <p className="font-medium text-foreground">{point.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
