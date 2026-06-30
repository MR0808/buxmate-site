import Image from "next/image";
import Link from "next/link";
import {
  LOGO_DIMENSIONS,
  LOGO_ONLY_DIMENSIONS,
  LOGO_ONLY_PATH,
  LOGO_PATH,
} from "@/lib/brand";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  iconClassName?: string;
  wordmarkClassName?: string;
  /** Deer + bow tie mark — pairs with separate Buxmate wordmark text */
  markOnly?: boolean;
};

export function Logo({
  className,
  showWordmark = true,
  iconClassName,
  wordmarkClassName,
  markOnly = false,
}: LogoProps) {
  const markSrc = markOnly ? LOGO_ONLY_PATH : LOGO_PATH;
  const { width, height } = markOnly ? LOGO_ONLY_DIMENSIONS : LOGO_DIMENSIONS;

  return (
    <Link
      href="/"
      aria-label="Buxmate home"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <Image
        src={markSrc}
        alt="Buxmate logo"
        width={width}
        height={height}
        priority
        className={cn("h-9 w-auto shrink-0", iconClassName)}
        style={{ width: "auto" }}
      />
      {showWordmark ? (
        <span
          className={cn(
            markOnly
              ? "text-xl font-semibold tracking-tight text-foreground"
              : "font-heading text-xl font-semibold tracking-tight text-foreground",
            wordmarkClassName,
          )}
        >
          Buxmate
        </span>
      ) : null}
    </Link>
  );
}
