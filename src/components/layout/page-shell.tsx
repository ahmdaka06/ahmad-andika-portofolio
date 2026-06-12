import type { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-12 ${className ?? ""}`}>
      {children}
    </div>
  );
}
