import { projects } from "@/data/projects";
import { PageShell } from "@/components/layout/page-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ProjectCard } from "@/components/sections/project-card";
import { createPageMetadata, createBreadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { RevealSection } from "@/components/sections/reveal-section";

export const metadata = createPageMetadata({
  title: "Projects | Ahmad Andika Khoirul Amin",
  description:
    "Featured projects by Ahmad Andika — payment platforms, ticketing systems, WhatsApp gateways, and business applications.",
  path: "/projects",
  keywords: ["projects", "portfolio", "payment platform", "ticketing"],
});

export default function ProjectsPage() {
  const breadcrumbs = createBreadcrumbJsonLd([{ name: "Projects", path: "/projects" }]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Breadcrumbs items={[{ label: "Projects" }]} />
      <PageShell>
        <RevealSection as="div">
          <div className="flex flex-wrap items-baseline gap-4">
            <h1 className="font-heading text-4xl font-semibold tracking-tight">Projects</h1>
            <p className="font-mono text-sm text-muted-foreground">{projects.length} projects</p>
          </div>
          <p className="mt-4 max-w-prose text-muted-foreground">
            Payment platforms, ticketing systems, WhatsApp gateways, POS, and e-commerce applications.
          </p>
        </RevealSection>
        <div className="mt-12 space-y-4">
          {projects.map((project, i) => (
            <RevealSection key={project.slug} as="div" delay={i * 80}>
              <ProjectCard project={project} variant="list" />
            </RevealSection>
          ))}
        </div>
      </PageShell>
    </>
  );
}
