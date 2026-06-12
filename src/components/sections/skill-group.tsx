"use client";

import type { SkillCategory } from "@/types";
import { useEffect, useState } from "react";
import { getSkillIconSlug } from "@/lib/skill-icons";

interface SkillGroupProps {
  category: SkillCategory;
}

interface IconResult {
  svg: string;
  hex: string;
}

function SkillIcon({ name }: { name: string }) {
  const [result, setResult] = useState<IconResult | null>(null);

  useEffect(() => {
    let cancelled = false;
    const slug = getSkillIconSlug(name);

    if (!slug) return;

    import("simple-icons").then((mod: typeof import("simple-icons")) => {
      if (cancelled) return;
      const icons = mod as unknown as Record<string, { svg: string; hex: string }>;
      const icon = icons[`si${slug.charAt(0).toUpperCase() + slug.slice(1)}`];

      if (icon) {
        let svg = icon.svg;
        svg = svg.replace(/<svg /, `<svg width="24" height="24" fill="#${icon.hex}" `);
        setResult({ svg, hex: icon.hex });
      }
    }).catch(() => {});

    return () => { cancelled = true; };
  }, [name]);

  if (!result) {
    return (
      <span className="flex size-8 shrink-0 items-center justify-center rounded-sm border border-[var(--border-subtle)] bg-[var(--surface-inset)] font-mono text-[10px] font-bold text-muted-foreground">
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <span
      className="flex size-8 shrink-0 items-center justify-center [&>svg]:size-6"
      dangerouslySetInnerHTML={{ __html: result.svg }}
    />
  );
}

export function SkillGroup({ category }: SkillGroupProps) {
  return (
    <section>
      <div className="mb-6 flex items-center gap-4">
        <h2 className="font-heading text-2xl font-semibold">{category.name}</h2>
        <div className="h-px flex-1 bg-[var(--border-subtle)]" />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="group/skill relative flex items-center gap-3 overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-4 transition-colors hover:border-[var(--border-accent)]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03] transition-opacity group-hover/skill:opacity-[0.06]"
              aria-hidden="true"
            />
            <div className="shrink-0">
              <SkillIcon name={skill.name} />
            </div>
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}