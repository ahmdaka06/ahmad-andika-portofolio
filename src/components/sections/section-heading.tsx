import Link from "next/link";

interface SectionHeadingProps {
  overline: string;
  title: string;
  href?: string;
  linkLabel?: string;
}

export function SectionHeading({
  overline,
  title,
  href,
  linkLabel = "View all",
}: SectionHeadingProps) {
  return (
    <div className="mb-12 flex items-end justify-between">
      <div>
        <p className="text-overline text-foreground-subtle mb-2">
          <span className="text-accent-phosphor">{"// "}</span>
          {overline}
        </p>
        <h2 className="font-heading text-3xl font-semibold tracking-tight">{title}</h2>
      </div>
      {href && (
        <Link
          href={href}
          className="hidden font-mono text-sm text-accent-phosphor transition-colors hover:text-foreground sm:block"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}
