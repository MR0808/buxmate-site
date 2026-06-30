import type { ScreenshotAsset } from "@/lib/screenshots";
import { ProductScreenshot } from "@/components/marketing/product-screenshot";
import { cn } from "@/lib/utils";

type ShowcaseRowProps = {
  title: string;
  description: string;
  bullets?: readonly string[];
  screenshot: ScreenshotAsset;
  screenshotSecondary?: ScreenshotAsset;
  imagePosition?: "left" | "right";
  className?: string;
};

export function ShowcaseRow({
  title,
  description,
  bullets,
  screenshot,
  screenshotSecondary,
  imagePosition = "right",
  className,
}: ShowcaseRowProps) {
  const text = (
    <div className="flex max-w-lg flex-col justify-center">
      <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {description}
      </p>
      {bullets && bullets.length > 0 ? (
        <ul className="mt-6 space-y-2 text-sm text-muted-foreground sm:text-base">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="text-primary" aria-hidden>
                •
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );

  const images = (
    <div
      className={cn(
        "grid w-full gap-4",
        screenshotSecondary
          ? "sm:grid-cols-2"
          : "place-items-center",
      )}
    >
      <ProductScreenshot
        src={screenshot.src}
        alt={screenshot.alt}
        width={screenshot.width}
        height={screenshot.height}
        variant={screenshot.variant}
        className={screenshotSecondary ? "max-w-none" : undefined}
      />
      {screenshotSecondary ? (
        <ProductScreenshot
          src={screenshotSecondary.src}
          alt={screenshotSecondary.alt}
          width={screenshotSecondary.width}
          height={screenshotSecondary.height}
          variant={screenshotSecondary.variant}
          className="max-w-none"
        />
      ) : null}
    </div>
  );

  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        className,
      )}
    >
      <div className={cn(imagePosition === "right" ? "order-1" : "order-1 lg:order-2")}>
        {text}
      </div>
      <div className={cn(imagePosition === "right" ? "order-2" : "order-2 lg:order-1")}>
        {images}
      </div>
    </div>
  );
}
