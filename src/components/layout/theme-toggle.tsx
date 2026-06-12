"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-sm"
      onClick={toggleTheme}
      className={cn(
        "shrink-0 border-[var(--border-subtle)] bg-[var(--surface-raised)] hover:border-[var(--border-accent)]",
        className,
      )}
      aria-label={mounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {mounted ? (
        theme === "dark" ? (
          <Sun className="size-4 text-primary" />
        ) : (
          <Moon className="size-4 text-primary" />
        )
      ) : (
        <Sun className="size-4 opacity-50" />
      )}
    </Button>
  );
}
