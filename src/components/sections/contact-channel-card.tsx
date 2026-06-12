import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactChannelCardProps {
  href: string;
  label: string;
  value: string;
  icon: LucideIcon;
  primary?: boolean;
  external?: boolean;
  download?: boolean;
}

export function ContactChannelCard({
  href,
  label,
  value,
  icon: Icon,
  primary = false,
  external = false,
  download = false,
}: ContactChannelCardProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download || undefined}
      className={cn(
        "group flex items-center gap-4 rounded-lg border bg-[var(--surface-raised)] p-5 transition-all duration-250",
        "hover:-translate-y-0.5 hover:border-[var(--border-accent)]",
        primary
          ? "col-span-full border-[var(--border-accent)] shadow-[var(--shadow-card)] sm:col-span-2"
          : "border-[var(--border-subtle)]",
      )}
    >
      <div
        className={cn(
          "flex size-11 shrink-0 items-center justify-center rounded-md",
          primary ? "bg-primary text-primary-foreground" : "bg-[var(--accent-copper-muted)]",
        )}
      >
        <Icon className={cn("size-5", !primary && "text-primary")} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-overline text-foreground-subtle">{label}</p>
        <p
          className={cn(
            "mt-1 truncate font-medium",
            primary ? "font-mono text-accent-phosphor" : "text-foreground",
          )}
        >
          {value}
        </p>
      </div>
      <ArrowUpRight className="size-4 shrink-0 text-accent-phosphor opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
}
