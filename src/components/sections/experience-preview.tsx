import Link from "next/link";
import { featuredExperienceIds, getExperienceById } from "@/data/experience";
import { SectionHeading } from "@/components/sections/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ExperiencePreview() {
  const featured = featuredExperienceIds
    .map((id) => getExperienceById(id))
    .filter((exp) => exp !== undefined);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <SectionHeading
          overline="EXPERIENCE"
          title="Recent Roles"
          href="/experience"
          linkLabel="View full experience"
        />
        <div className="space-y-4">
          {featured.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col gap-4 rounded-lg border-l-2 border-primary bg-[var(--surface-raised)] p-6 sm:flex-row sm:items-start sm:justify-between"
            >
              <div>
                <h3 className="font-heading text-xl font-semibold">{exp.company}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{exp.position}</p>
                <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                  {exp.achievements[0]}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.techStack.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="rounded-sm font-mono text-xs text-[var(--accent-steel)]"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {exp.techStack.length > 4 && (
                    <Badge variant="outline" className="rounded-sm font-mono text-xs">
                      +{exp.techStack.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
              <p className="shrink-0 font-mono text-sm text-muted-foreground">{exp.period}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/experience"
            className={cn(buttonVariants({ variant: "outline" }), "w-full sm:w-auto")}
          >
            View Full Experience
          </Link>
        </div>
      </div>
    </section>
  );
}
