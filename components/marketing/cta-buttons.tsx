import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSignupUrl } from "@/lib/env";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaButtonsProps = {
  className?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  size?: "default" | "lg";
};

export function CtaButtons({
  className,
  primaryLabel = "Create Event",
  secondaryHref = "/how-it-works",
  secondaryLabel = "See how it works",
  size = "default",
}: CtaButtonsProps) {
  const signupUrl = getSignupUrl();
  const buttonSize = size === "lg" ? "lg" : "default";

  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-center",
        className,
      )}
    >
      <Button
        asChild
        size={buttonSize}
        className="h-12 rounded-full px-6 text-base normal-case tracking-normal"
      >
        <a href={signupUrl}>
          {primaryLabel}
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </Button>
      <Button
        asChild
        variant="outline"
        size={buttonSize}
        className="h-12 rounded-full px-6 text-base normal-case tracking-normal"
      >
        <Link href={secondaryHref}>{secondaryLabel}</Link>
      </Button>
    </div>
  );
}
