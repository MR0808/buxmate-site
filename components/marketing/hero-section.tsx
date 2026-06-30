import { CtaButtons } from "@/components/marketing/cta-buttons";
import { ProductScreenshot } from "@/components/marketing/product-screenshot";
import {
  SCREENSHOT_HERO_DIMENSIONS,
  SCREENSHOT_HERO_PATH,
} from "@/lib/brand";

export function HeroSection() {
  return (
    <section className="section-pad overflow-hidden">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Private event planning
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            Plan the chaos.
            <br />
            Split the cost.
            <br />
            Keep it private.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Buxmate is a private event hub for bucks parties, hens parties and
            group weekends — with RSVPs, shared costs, updates and photos in one
            place.
          </p>
          <CtaButtons className="mt-8" size="lg" secondaryHref="/how-it-works" />
        </div>

        <div className="lg:justify-self-end">
          <ProductScreenshot
            src={SCREENSHOT_HERO_PATH}
            alt="Buxmate organiser dashboard showing event overview, activities, guests and payment tracking for a bucks weekend"
            width={SCREENSHOT_HERO_DIMENSIONS.width}
            height={SCREENSHOT_HERO_DIMENSIONS.height}
            priority
            variant="desktop"
          />
        </div>
      </div>
    </section>
  );
}
