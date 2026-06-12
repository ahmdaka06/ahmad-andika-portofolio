import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectBySlug, projects } from "@/data/projects";
import { PageShell } from "@/components/layout/page-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import {
  ProjectImagePreview,
  ProjectScreenshotGallery,
} from "@/components/sections/project-image-lightbox";
import { createPageMetadata, createBreadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { getProjectImages } from "@/lib/project-images";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RevealSection } from "@/components/sections/reveal-section";
import { staggerDelay } from "@/lib/animations";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata({
      title: "Project Not Found",
      description: "The requested project could not be found.",
      path: `/projects/${slug}`,
    });
  }

  return createPageMetadata({
    title: `${project.name} | Ahmad Andika Khoirul Amin`,
    description: project.description,
    path: `/projects/${slug}`,
    keywords: [project.name, project.category, ...project.techStack],
  });
}

function ProjectSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-heading text-2xl font-semibold">{title}</h2>
      <div className="mt-4 text-muted-foreground">{children}</div>
    </section>
  );
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbs = createBreadcrumbJsonLd([
    { name: "Projects", path: "/projects" },
    { name: project.name, path: `/projects/${slug}` },
  ]);

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  const relatedProjects = (project.relatedSlugs ?? [])
    .map((relatedSlug) => getProjectBySlug(relatedSlug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);
  const projectImages = getProjectImages(project.thumbnailPath, project.galleryPaths);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Breadcrumbs
        items={[
          { label: "Projects", href: "/projects" },
          { label: project.name },
        ]}
      />

      <div className="bg-[var(--surface-raised)] py-12">
        <PageShell>
          <RevealSection as="div">
            <Badge className="mb-4 rounded-sm bg-[var(--accent-copper-muted)] text-primary">
              {project.category}
            </Badge>
            <h1 className="font-heading text-4xl font-semibold tracking-tight">{project.name}</h1>
            <p className="mt-2 text-muted-foreground">
              {project.role} · {project.period} · {project.country}
            </p>
          </RevealSection>
        </PageShell>
      </div>

      <PageShell>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-8">
            {([
              ["Overview", project.overview],
              ["Problem", project.problem],
              ["Solution", project.solution],
            ] as const).map(([title], i) => (
              <RevealSection key={title} delay={staggerDelay(i)}>
                <ProjectSection title={title}>
                  <p className="leading-relaxed">
                    {title === "Overview" ? project.overview : title === "Problem" ? project.problem : project.solution}
                  </p>
                </ProjectSection>
              </RevealSection>
            ))}
            <RevealSection delay={staggerDelay(3)}>
              <ProjectSection title="Architecture">
                <p className="leading-relaxed">{project.architecture}</p>
                {projectImages.length > 0 ? (
                  <ProjectImagePreview
                    images={projectImages}
                    name={project.name}
                    className="mt-4 rounded-lg border border-[var(--border-subtle)]"
                    aspectClassName="aspect-[16/10]"
                  />
                ) : (
                  <div className="mt-4 aspect-[16/10] rounded-lg bg-gradient-to-br from-[var(--surface-overlay)] to-[var(--surface-inset)]" />
                )}
              </ProjectSection>
            </RevealSection>
            <RevealSection delay={staggerDelay(4)}>
              <ProjectSection title="Responsibilities">
                <ul className="space-y-2">
                  {project.responsibilities.map((item) => (
                    <li key={item} className="before:mr-2 before:content-['•']">
                      {item}
                    </li>
                  ))}
                </ul>
              </ProjectSection>
            </RevealSection>
            <RevealSection delay={staggerDelay(5)}>
              <ProjectSection title="Results">
                <div className="space-y-3">
                  {project.results.map((result) => (
                    <p
                      key={result}
                      className="border-l-2 border-primary pl-4 text-foreground"
                    >
                      {result}
                    </p>
                  ))}
                </div>
              </ProjectSection>
              {projectImages.length > 1 && (
                <ProjectScreenshotGallery images={projectImages} name={project.name} />
              )}
            </RevealSection>
          </div>

          <aside className="lg:col-span-4">
            <RevealSection as="div" delay={staggerDelay(6)}>
              <div className="sticky top-24 space-y-6 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-6">
                <div>
                  <p className="text-overline text-foreground-subtle mb-3">COUNTRY</p>
                  <p className="font-medium">{project.country}</p>
                </div>
                <div>
                  <p className="text-overline text-foreground-subtle mb-3">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
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
                {project.challenges.length > 0 && (
                  <div>
                    <p className="text-overline text-foreground-subtle mb-3">CHALLENGES</p>
                    <ul className="space-y-2 text-sm">
                      {project.challenges.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {relatedProjects.length > 0 && (
                  <div>
                    <p className="text-overline text-foreground-subtle mb-3">RELATED</p>
                    <ul className="space-y-2">
                      {relatedProjects.map((related) => (
                        <li key={related.slug}>
                          <Link
                            href={`/projects/${related.slug}`}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent-phosphor"
                          >
                            {related.name} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </RevealSection>
          </aside>
        </div>

        <RevealSection as="div" delay={staggerDelay(7)}>
          <Separator className="my-12" />
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="font-mono text-sm text-muted-foreground hover:text-accent-phosphor"
              >
                ← {prev.name}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                href={`/projects/${next.slug}`}
                className="font-mono text-sm text-muted-foreground hover:text-accent-phosphor sm:text-right"
              >
                {next.name} →
              </Link>
            )}
          </div>
        </RevealSection>
      </PageShell>
    </>
  );
}
