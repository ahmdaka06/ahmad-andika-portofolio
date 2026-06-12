import { ProjectImagePreview } from "@/components/sections/project-image-lightbox";
import { getProjectImages } from "@/lib/project-images";
import { cn } from "@/lib/utils";

interface ProjectThumbnailProps {
  thumbnailPath: string;
  name: string;
  galleryPaths?: string[];
  className?: string;
  aspectClassName?: string;
}

export function ProjectThumbnail({
  thumbnailPath,
  name,
  galleryPaths = [],
  className,
  aspectClassName = "aspect-video",
}: ProjectThumbnailProps) {
  const images = getProjectImages(thumbnailPath, galleryPaths);

  return (
    <ProjectImagePreview
      images={images}
      name={name}
      className={cn("w-full", className)}
      aspectClassName={aspectClassName}
    />
  );
}
