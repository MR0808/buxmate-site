import {
  CalendarDays,
  Camera,
  CreditCard,
  Megaphone,
  Users,
} from "lucide-react";

export function ProductMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div
        className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-muted/80 via-background to-primary/10 blur-2xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-xl">
        <div className="flex items-center gap-2 border-b border-border/70 bg-muted/40 px-4 py-3">
          <span className="size-2.5 rounded-full bg-primary/70" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-2 text-xs font-medium text-muted-foreground">
            Weekend away · Private event
          </span>
        </div>

        <div className="space-y-4 p-4 sm:p-5">
          <div className="h-28 rounded-2xl bg-gradient-to-br from-primary/25 via-brand-muted to-accent" />

          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: Users, label: "Guests" },
              { icon: CalendarDays, label: "Activities" },
              { icon: CreditCard, label: "Payments" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-border/60 bg-background px-2 py-3 text-center"
              >
                <Icon className="size-4 text-primary" aria-hidden />
                <span className="text-[10px] font-medium text-muted-foreground sm:text-xs">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between rounded-xl border border-border/60 bg-background px-3 py-2.5">
              <div>
                <p className="text-xs font-medium text-foreground">
                  Saturday activity
                </p>
                <p className="text-[10px] text-muted-foreground">
                  9:00 am · 12 going
                </p>
              </div>
              <span className="rounded-full bg-brand-muted px-2 py-0.5 text-[10px] font-medium text-primary">
                RSVP
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-border/60 bg-background px-3 py-2.5">
              <div>
                <p className="text-xs font-medium text-foreground">
                  Accommodation share
                </p>
                <p className="text-[10px] text-muted-foreground">
                  8 of 12 paid
                </p>
              </div>
              <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                Track
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-xl border border-border/60 bg-background p-3">
            <Megaphone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
            <div>
              <p className="text-xs font-medium text-foreground">Update posted</p>
              <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">
                Meet at the car park at 9am. Bring sunscreen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="flex aspect-square items-center justify-center rounded-xl bg-muted/70"
              >
                <Camera className="size-4 text-muted-foreground/60" aria-hidden />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
