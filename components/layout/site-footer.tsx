import Link from "next/link";
import { getAppUrl } from "@/lib/env";
import { footerNavLinks } from "@/lib/nav";
import { Logo } from "@/components/shared/logo";

export function SiteFooter() {
  const appUrl = getAppUrl();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/50">
      <div className="section-container section-pad !py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              A private event hub for organisers — RSVPs, shared costs, updates
              and photos in one place.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-8 gap-y-3 text-sm"
            aria-label="Footer navigation"
          >
            {footerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={appUrl}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Organiser app
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6 text-sm text-muted-foreground">
          <p>© {year} Buxmate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
