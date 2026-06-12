"use client";

import * as React from "react";
import Image from "next/image";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { ChevronLeft, ChevronRight, XIcon, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PROJECT_IMAGE_GALLERY_SIZES,
  PROJECT_IMAGE_LIGHTBOX_SIZES,
  PROJECT_IMAGE_LIGHTBOX_UNOPTIMIZED,
  PROJECT_IMAGE_THUMBNAIL_QUALITY,
  PROJECT_IMAGE_THUMBNAIL_SIZES,
} from "@/lib/project-images";
import { cn } from "@/lib/utils";

interface ProjectImageLightboxProps {
  images: string[];
  name: string;
  open: boolean;
  index: number;
  onOpenChange: (open: boolean) => void;
  onIndexChange: (index: number) => void;
}

export function ProjectImageLightbox({
  images,
  name,
  open,
  index,
  onOpenChange,
  onIndexChange,
}: ProjectImageLightboxProps) {
  const hasMultiple = images.length > 1;
  const current = images[index];

  const goPrev = React.useCallback(() => {
    onIndexChange(index === 0 ? images.length - 1 : index - 1);
  }, [images.length, index, onIndexChange]);

  const goNext = React.useCallback(() => {
    onIndexChange(index === images.length - 1 ? 0 : index + 1);
  }, [images.length, index, onIndexChange]);

  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, goPrev, goNext]);

  if (!current) return null;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0"
        />
        <DialogPrimitive.Popup
          className={cn(
            "fixed inset-4 z-50 m-auto flex max-h-[calc(100vh-2rem)] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-raised)] shadow-2xl outline-none sm:inset-8",
            "transition duration-200 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0",
          )}
        >
          <div className="flex items-center justify-between gap-3 border-b border-[var(--border-subtle)] px-4 py-3">
            <div className="min-w-0">
              <DialogPrimitive.Title className="truncate font-heading text-sm font-semibold">
                {name}
              </DialogPrimitive.Title>
              {hasMultiple && (
                <DialogPrimitive.Description className="font-mono text-xs text-muted-foreground">
                  {index + 1} / {images.length}
                </DialogPrimitive.Description>
              )}
            </div>
            <DialogPrimitive.Close
              render={
                <Button variant="outline" size="icon-sm" className="shrink-0" />
              }
            >
              <XIcon className="size-4" />
              <span className="sr-only">Close preview</span>
            </DialogPrimitive.Close>
          </div>

          <div className="relative flex min-h-[60vh] flex-1 items-center justify-center bg-[var(--surface-inset)] p-4 sm:min-h-[70vh]">
            {hasMultiple && (
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="absolute top-1/2 left-2 z-10 -translate-y-1/2"
                onClick={goPrev}
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="size-4" />
              </Button>
            )}

            <div className="relative h-full min-h-[50vh] w-full">
              <Image
                src={current}
                alt={`${name} screenshot ${index + 1}`}
                fill
                unoptimized={PROJECT_IMAGE_LIGHTBOX_UNOPTIMIZED}
                quality={100}
                className="object-contain"
                sizes={PROJECT_IMAGE_LIGHTBOX_SIZES}
                priority
              />
            </div>

            {hasMultiple && (
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="absolute top-1/2 right-2 z-10 -translate-y-1/2"
                onClick={goNext}
                aria-label="Next screenshot"
              >
                <ChevronRight className="size-4" />
              </Button>
            )}
          </div>
        </DialogPrimitive.Popup>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

interface ProjectImagePreviewProps {
  images: string[];
  name: string;
  className?: string;
  aspectClassName?: string;
  imageClassName?: string;
  showHint?: boolean;
  initialIndex?: number;
}

export function ProjectImagePreview({
  images,
  name,
  className,
  aspectClassName = "aspect-video",
  imageClassName,
  showHint = true,
  initialIndex = 0,
}: ProjectImagePreviewProps) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(initialIndex);
  const src = images[initialIndex] ?? images[0];

  if (!src) {
    return (
      <div
        className={cn(
          aspectClassName,
          "bg-gradient-to-br from-[var(--surface-overlay)] to-[var(--surface-inset)]",
          className,
        )}
      />
    );
  }

  const openPreview = (nextIndex = initialIndex) => {
    setIndex(nextIndex);
    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => openPreview(initialIndex)}
        className={cn(
          "group/preview relative block w-full overflow-hidden bg-[var(--surface-inset)] text-left",
          "cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-phosphor)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          aspectClassName,
          className,
        )}
        aria-label={`View ${name} screenshot in detail`}
      >
        <Image
          src={src}
          alt={`${name} screenshot`}
          fill
          quality={PROJECT_IMAGE_THUMBNAIL_QUALITY}
          className={cn(
            "object-cover object-top transition-transform duration-300 group-hover/preview:scale-[1.02]",
            imageClassName,
          )}
          sizes={PROJECT_IMAGE_THUMBNAIL_SIZES}
        />
        {showHint && (
          <span className="absolute right-2 bottom-2 flex items-center gap-1 rounded-md border border-[var(--border-subtle)] bg-background/80 px-2 py-1 font-mono text-[10px] text-muted-foreground backdrop-blur-sm transition-colors group-hover/preview:text-foreground">
            <ZoomIn className="size-3" />
            View detail
          </span>
        )}
      </button>

      <ProjectImageLightbox
        images={images}
        name={name}
        open={open}
        index={index}
        onOpenChange={setOpen}
        onIndexChange={setIndex}
      />
    </>
  );
}

interface ProjectScreenshotGalleryProps {
  images: string[];
  name: string;
}

export function ProjectScreenshotGallery({ images, name }: ProjectScreenshotGalleryProps) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  if (images.length === 0) return null;

  return (
    <section>
      <h2 className="font-heading text-2xl font-semibold">Screenshots</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Click any image to view full detail.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {images.map((src, imageIndex) => (
          <button
            key={src}
            type="button"
            onClick={() => {
              setIndex(imageIndex);
              setOpen(true);
            }}
            className="group/gallery relative aspect-video overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-inset)] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-phosphor)]"
            aria-label={`View ${name} screenshot ${imageIndex + 1}`}
          >
            <Image
              src={src}
              alt={`${name} screenshot ${imageIndex + 1}`}
              fill
              quality={PROJECT_IMAGE_THUMBNAIL_QUALITY}
              className="object-cover object-top transition-transform duration-300 group-hover/gallery:scale-[1.02]"
              sizes={PROJECT_IMAGE_GALLERY_SIZES}
            />
            <span className="absolute right-2 bottom-2 rounded-md border border-[var(--border-subtle)] bg-background/80 px-2 py-1 font-mono text-[10px] text-muted-foreground backdrop-blur-sm">
              <ZoomIn className="inline size-3" />
            </span>
          </button>
        ))}
      </div>

      <ProjectImageLightbox
        images={images}
        name={name}
        open={open}
        index={index}
        onOpenChange={setOpen}
        onIndexChange={setIndex}
      />
    </section>
  );
}
