"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { navLinks, profile } from "@/data/profile";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon-sm"
            className="border-[var(--border-subtle)] bg-[var(--surface-raised)] md:hidden"
          />
        }
      >
        <Menu className="size-4" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex h-full w-[min(320px,85vw)] flex-col border-[var(--border-subtle)] bg-[var(--surface-overlay)] p-0"
      >
        <SheetHeader className="border-b border-[var(--border-subtle)] px-6 py-5 text-left">
          <SheetTitle className="font-heading text-lg">Navigation</SheetTitle>
          <SheetDescription className="font-mono text-xs">
            {profile.name.split(" ").slice(0, 2).join(" ")}
          </SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col px-4 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-[var(--accent-copper-muted)] hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-3 border-t border-[var(--border-subtle)] px-6 py-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>
          <a
            href={profile.cvPath}
            download
            onClick={() => setOpen(false)}
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          >
            Download CV
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={cn(buttonVariants(), "w-full")}
          >
            Hire Me
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
