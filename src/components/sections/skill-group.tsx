import type { SkillCategory } from "@/types";

function ProficiencyDots({ level }: { level: 1 | 2 | 3 | 4 }) {
  return (
    <div className="flex gap-1" aria-label={`Proficiency level ${level} of 4`}>
      {[1, 2, 3, 4].map((dot) => (
        <span
          key={dot}
          className={`size-2 rounded-full ${
            dot <= level ? "bg-primary" : "bg-[var(--border-strong)]"
          }`}
        />
      ))}
    </div>
  );
}

interface SkillGroupProps {
  category: SkillCategory;
}

export function SkillGroup({ category }: SkillGroupProps) {
  return (
    <section>
      <div className="mb-8 flex items-center gap-4">
        <h2 className="font-heading text-2xl font-semibold">{category.name}</h2>
        <div className="h-px flex-1 bg-[var(--border-subtle)]" />
      </div>
      <p className="text-overline text-foreground-subtle mb-6">
        <span className="text-accent-phosphor">{"// "}</span>
        {category.name.toUpperCase()}
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-4"
          >
            <p className="font-medium">{skill.name}</p>
            <div className="mt-3">
              <ProficiencyDots level={skill.proficiency} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
