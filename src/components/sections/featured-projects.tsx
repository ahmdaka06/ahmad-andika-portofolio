import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { ProjectThumbnail } from "@/components/sections/project-thumbnail";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="bg-[var(--surface-raised)] py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <SectionHeading
          overline="FEATURED PROJECTS"
          title="Selected Work"
          href="/projects"
          linkLabel="View all projects"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <Card
              key={project.slug}
              className="group overflow-hidden border-[var(--border-subtle)] bg-[var(--surface-raised)] transition-all duration-250 hover:-translate-y-0.5 hover:border-[var(--border-accent)]"
            >
              <ProjectThumbnail
                thumbnailPath={project.thumbnailPath}
                name={project.name}
                galleryPaths={project.galleryPaths}
              />
              <Link href={`/projects/${project.slug}`} className="block">
                <CardContent className="p-6">
                  <Badge
                    variant="secondary"
                    className="mb-3 rounded-sm bg-[var(--accent-copper-muted)] text-xs text-primary"
                  >
                    {project.category}
                  </Badge>
                  <h3 className="font-heading text-xl font-semibold group-hover:text-accent-phosphor">
                    {project.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-[var(--accent-steel)]">
                    {project.country}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-4 font-mono text-xs text-[var(--accent-steel)]">
                    {project.techStack.slice(0, 4).join(" · ")}
                  </p>
                  <p className="mt-3 font-mono text-sm text-accent-phosphor opacity-0 transition-opacity group-hover:opacity-100 md:opacity-100">
                    View case study →
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
