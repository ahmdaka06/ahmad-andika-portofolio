import { skillCategories } from "@/data/skills";
import { PageShell } from "@/components/layout/page-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SkillGroup } from "@/components/sections/skill-group";
import { createPageMetadata, createBreadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { RevealSection } from "@/components/sections/reveal-section";
import { staggerDelay } from "@/lib/animations";

export const metadata = createPageMetadata({
  title: "Skills | Ahmad Andika Khoirul Amin",
  description:
    "Technical and soft skills of Ahmad Andika — Laravel, PHP, Node.js, NestJS, React, databases, DevOps, and more.",
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
        <RevealSection as="div">
          <h1 className="font-heading text-4xl font-semibold tracking-tight">Technical Skills</h1>
          <p className="mt-4 max-w-prose text-muted-foreground">
            Backend, frontend, database, DevOps, and soft skills honed across 5+ years of
            production development.
          </p>
        </RevealSection>

        <div className="mt-16 space-y-16">
          {skillCategories.map((category, i) => (
            <RevealSection key={category.id} delay={staggerDelay(i)}>
              <SkillGroup category={category} />
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={staggerDelay(skillCategories.length)} as="div">
          <p className="mt-16 font-mono text-sm italic text-muted-foreground">
            Always learning.
          </p>
        </RevealSection>
      </PageShell>
    </>
  );
}
