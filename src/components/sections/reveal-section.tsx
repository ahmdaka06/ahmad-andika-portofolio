interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "section" | "div";
}

/**
 * Wraps a section with staggered fade-in + slide-up animation.
 * Uses tw-animate-css classes for enter animation.
 */
export function RevealSection({
  children,
  className = "",
  delay = 0,
  as: Tag = "section",
}: RevealSectionProps) {
  return (
    <Tag
      className={`animate-in fade-in slide-in-from-bottom-4 fill-mode-both ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}