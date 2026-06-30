import { MessageSquareOff, Sheet, Users } from "lucide-react";
import { SectionHeading } from "@/components/marketing/section-heading";

const pains = [
  {
    icon: MessageSquareOff,
    title: "Scattered group chats",
    description:
      "RSVPs, payments and plans get buried in threads. Half the group misses important updates.",
  },
  {
    icon: Sheet,
    title: "Spreadsheet chaos",
    description:
      "Who paid what? Who's coming Saturday? Manually tracking a messy group weekend is a full-time job.",
  },
  {
    icon: Users,
    title: "People who don't know each other",
    description:
      "Bucks and hens weekends often mix friends from different circles. You need one clear hub, not awkward coordination.",
  },
] as const;

export function ProblemSection() {
  return (
    <section className="section-pad bg-muted/40">
      <div className="section-container space-y-12">
        <SectionHeading
          eyebrow="The problem"
          title="Group events shouldn't feel like herding cats"
          description="One organiser ends up juggling spreadsheets, group chats, RSVPs, payments and updates across multiple tools. Buxmate keeps everything in one private place."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain) => (
            <article key={pain.title} className="buxmate-card p-6">
              <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-brand-muted text-primary">
                <pain.icon className="size-5" aria-hidden />
              </div>
              <p className="font-heading text-lg font-semibold text-foreground">
                {pain.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pain.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
