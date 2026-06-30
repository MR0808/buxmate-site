"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type MobileNavProps = {
  links: readonly { href: string; label: string }[];
  signupUrl: string;
  appUrl: string;
};

export function MobileNav({ links, signupUrl, appUrl }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={appUrl}
            onClick={() => setOpen(false)}
            className="rounded-xl px-3 py-3 text-base font-medium text-muted-foreground hover:bg-muted"
          >
            Open organiser app
          </a>
          <Button asChild className="mt-4 rounded-full normal-case tracking-normal">
            <a href={signupUrl} onClick={() => setOpen(false)}>
              Sign up free
            </a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
