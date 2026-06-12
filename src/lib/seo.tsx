import type { Metadata } from "next";
import { profile } from "@/data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahmadandika.dev";
const siteName = "Ahmad Andika Khoirul Amin";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/images/og-default.jpg",
}: PageMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function createPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    url: siteUrl,
    jobTitle: "Backend & Full-Stack Developer",
    sameAs: [profile.linkedin, profile.github].filter(Boolean),
  };
}

export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
  };
}

export function createBreadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
