/** Thumbnail cards — sharp on retina without oversized payloads */
export const PROJECT_IMAGE_THUMBNAIL_QUALITY = 90;

/** Lightbox serves originals from /public for full screenshot fidelity */
export const PROJECT_IMAGE_LIGHTBOX_UNOPTIMIZED = true;
export const PROJECT_IMAGE_THUMBNAIL_SIZES =
  "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 960px";
export const PROJECT_IMAGE_LIGHTBOX_SIZES = "100vw";
export const PROJECT_IMAGE_GALLERY_SIZES = "(max-width: 768px) 100vw, 800px";

export function isPlaceholderImage(path: string) {
  return path.includes("placeholder");
}

export function getProjectImages(thumbnailPath: string, galleryPaths: string[] = []) {
  const images: string[] = [];

  if (!isPlaceholderImage(thumbnailPath)) {
    images.push(thumbnailPath);
  }

  for (const path of galleryPaths) {
    if (!isPlaceholderImage(path) && !images.includes(path)) {
      images.push(path);
    }
  }

  return images;
}
