import Link from "next/link";
import { getAppUrl, getSignupUrl } from "@/lib/env";
import { headerNavLinks } from "@/lib/nav";
import { Logo } from "@/components/shared/logo";
import { signikaWordmark } from "@/lib/fonts/signika-wordmark";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  const signupUrl = getSignupUrl();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="section-container flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo markOnly wordmarkClassName={signikaWordmark.className} />

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {headerNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden rounded-full normal-case tracking-normal sm:inline-flex"
          >
            <a href={signupUrl}>Sign up</a>
          </Button>
          <MobileNav links={headerNavLinks} signupUrl={signupUrl} appUrl={getAppUrl()} />
        </div>
      </div>
    </header>
  );
}
