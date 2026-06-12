import type { Experience } from "@/types";
import { Badge } from "@/components/ui/badge";

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative space-y-8">
      <div
        className="absolute top-0 bottom-0 left-3 w-0.5 bg-[var(--border-subtle)]"
        aria-hidden="true"
      />
      {experiences.map((exp) => (
        <article key={exp.id} className="relative ml-12">
          <div
            className="absolute -left-[2.55rem] top-6 size-3 rounded-full bg-primary ring-2 ring-background"
            aria-hidden="true"
          />
          <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-6 shadow-[var(--shadow-card)]">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-heading text-xl font-semibold">{exp.company}</h3>
                <p className="text-sm font-medium text-muted-foreground">{exp.position}</p>
              </div>
              <p className="shrink-0 font-mono text-sm text-muted-foreground">{exp.period}</p>
            </div>

            <ul className="mt-4 space-y-2">
              {exp.responsibilities.map((item) => (
                <li key={item} className="text-sm text-muted-foreground before:mr-2 before:content-['•']">
                  {item}
                </li>
              ))}
            </ul>

            {exp.achievements.length > 0 && (
              <div className="mt-4 border-l-2 border-primary pl-4">
                {exp.achievements.map((achievement) => (
                  <p key={achievement} className="text-sm text-foreground">
                    {achievement}
                  </p>
                ))}
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--border-subtle)] pt-4">
              {exp.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="rounded-sm font-mono text-xs text-[var(--accent-steel)]"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
