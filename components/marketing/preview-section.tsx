import { ProductScreenshot } from "@/components/marketing/product-screenshot";
import { SectionHeading } from "@/components/marketing/section-heading";
import {
  SCREENSHOT_GUEST_MOBILE_DIMENSIONS,
  SCREENSHOT_GUEST_MOBILE_PATH,
} from "@/lib/brand";

export function PreviewSection() {
  return (
    <section className="section-pad bg-muted/40">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <ProductScreenshot
            src={SCREENSHOT_GUEST_MOBILE_PATH}
            alt="Buxmate guest view on mobile showing activities, RSVP options and payment share for a group weekend"
            width={SCREENSHOT_GUEST_MOBILE_DIMENSIONS.width}
            height={SCREENSHOT_GUEST_MOBILE_DIMENSIONS.height}
            variant="mobile"
          />
        </div>
        <div className="order-1 max-w-lg lg:order-2">
          <SectionHeading
            eyebrow="Product preview"
            title="One hub for the whole weekend"
            description="Guests see a clean timeline of activities, RSVPs and updates. You see who's paid, who's coming, and what still needs chasing — without another spreadsheet."
          />
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary" aria-hidden>
                •
              </span>
              Organiser dashboard on desktop, guest experience on mobile
            </li>
            <li className="flex gap-2">
              <span className="text-primary" aria-hidden>
                •
              </span>
              Activity timeline with RSVP status per guest
            </li>
            <li className="flex gap-2">
              <span className="text-primary" aria-hidden>
                •
              </span>
              Payment tracking for shared accommodation and activities
            </li>
            <li className="flex gap-2">
              <span className="text-primary" aria-hidden>
                •
              </span>
              Announcements and photos in your private event feed
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
