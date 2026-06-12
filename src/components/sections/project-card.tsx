import Link from "next/link";
import type { Project } from "@/types";
import { ProjectThumbnail } from "@/components/sections/project-thumbnail";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
  variant?: "grid" | "list";
}

export function ProjectCard({ project, variant = "list" }: ProjectCardProps) {
  if (variant === "grid") {
    return (
      <Card className="group h-full overflow-hidden border-[var(--border-subtle)] transition-all hover:-translate-y-0.5 hover:border-[var(--border-accent)]">
        <ProjectThumbnail
          thumbnailPath={project.thumbnailPath}
          name={project.name}
          galleryPaths={project.galleryPaths}
        />
        <Link href={`/projects/${project.slug}`} className="block">
          <CardContent className="p-5">
            <Badge className="mb-2 rounded-sm bg-[var(--accent-copper-muted)] text-xs text-primary">
              {project.category}
            </Badge>
            <h3 className="font-heading text-lg font-semibold">{project.name}</h3>
            <p className="mt-1 font-mono text-xs text-[var(--accent-steel)]">{project.country}</p>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
          </CardContent>
        </Link>
      </Card>
    );
  }

  return (
    <Card className="group flex flex-col gap-6 border-[var(--border-subtle)] p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--border-accent)] lg:flex-row lg:items-center">
      <ProjectThumbnail
        thumbnailPath={project.thumbnailPath}
        name={project.name}
        galleryPaths={project.galleryPaths}
        className="w-full shrink-0 rounded-md lg:w-[200px]"
        aspectClassName="h-[120px]"
      />
      <Link href={`/projects/${project.slug}`} className="flex flex-1 flex-col gap-6 lg:flex-row lg:items-center">
        <CardContent className="flex-1 p-0">
          <Badge className="mb-2 rounded-sm bg-[var(--accent-copper-muted)] text-xs text-primary">
            {project.category}
          </Badge>
          <h3 className="font-heading text-xl font-semibold group-hover:text-accent-phosphor">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
          <p className="mt-3 font-mono text-xs text-[var(--accent-steel)]">
            {project.techStack.slice(0, 5).join(" · ")}
          </p>
        </CardContent>
        <div className="shrink-0 text-right font-mono text-sm text-muted-foreground">
          <p>{project.period}</p>
          <p className="mt-1 text-xs text-[var(--accent-steel)]">{project.country}</p>
        </div>
      </Link>
    </Card>
  );
}
