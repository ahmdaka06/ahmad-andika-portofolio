import Link from "next/link";
import { featuredSkillNames } from "@/data/skills";
import { SectionHeading } from "@/components/sections/section-heading";

export function FeaturedSkills() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <SectionHeading
          overline="CORE STACK"
          title="Featured Skills"
          href="/skills"
          linkLabel="View all skills"
        />
        <div className="flex gap-3 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible">
          {featuredSkillNames.map((skill) => (
            <span
              key={skill}
              className="inline-flex h-10 shrink-0 items-center rounded-md border border-[var(--border-subtle)] bg-[var(--surface-overlay)] px-4 font-mono text-sm transition-colors hover:border-[var(--border-accent)] hover:bg-[var(--accent-copper-muted)]"
            >
              {skill}
            </span>
          ))}
        </div>
        <Link
          href="/skills"
          className="mt-6 inline-block font-mono text-sm text-accent-phosphor sm:hidden"
        >
          View all skills →
        </Link>
      </div>
    </section>
  );
}
