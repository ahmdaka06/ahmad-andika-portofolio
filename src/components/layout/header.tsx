"use client";

import Link from "next/link";
import { navLinks, profile } from "@/data/profile";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-3 px-6 md:h-16 lg:px-12">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-sm border border-primary font-mono text-xs font-medium">
            AA
          </span>
          <span className="hidden truncate font-heading text-sm font-semibold sm:inline">
            {profile.name.split(" ").slice(0, 2).join(" ")}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <a
              href={profile.cvPath}
              download
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              Download CV
            </a>
            <Link href="/contact" className={cn(buttonVariants({ size: "sm" }))}>
              Hire Me
            </Link>
          </div>

          <ThemeToggle className="hidden md:inline-flex" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
