import { skillCategories } from "@/data/skills";
import { PageShell } from "@/components/layout/page-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SkillGroup } from "@/components/sections/skill-group";
import { createPageMetadata, createBreadcrumbJsonLd, JsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Skills | Ahmad Andika Khoirul Amin",
  description:
    "Technical skills of Ahmad Andika — Laravel, PHP, Node.js, NestJS, React, databases, and DevOps tooling.",
  path: "/skills",
  keywords: ["skills", "Laravel", "NestJS", "Node.js", "React"],
});

export default function SkillsPage() {
  const breadcrumbs = createBreadcrumbJsonLd([{ name: "Skills", path: "/skills" }]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Breadcrumbs items={[{ label: "Skills" }]} />
      <PageShell>
        <h1 className="font-heading text-4xl font-semibold tracking-tight">Technical Skills</h1>
        <p className="mt-4 max-w-prose text-muted-foreground">
          Backend, frontend, database, and DevOps skills honed across 5+ years of production
          development.
        </p>

        <div className="mt-6 flex items-center gap-4 font-mono text-xs text-muted-foreground">
          <span>Proficiency:</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map((level) => (
              <span key={level} className="size-2 rounded-full bg-primary" />
            ))}
          </div>
          <span>= Expert</span>
        </div>

        <div className="mt-16 space-y-16">
          {skillCategories.map((category) => (
            <SkillGroup key={category.id} category={category} />
          ))}
        </div>

        <p className="mt-16 font-mono text-sm italic text-muted-foreground">
          Always learning.
        </p>
      </PageShell>
    </>
  );
}
