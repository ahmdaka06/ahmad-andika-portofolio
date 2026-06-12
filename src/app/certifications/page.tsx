import { certifications } from "@/data/certifications";
import { PageShell } from "@/components/layout/page-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { createPageMetadata, createBreadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { RevealSection } from "@/components/sections/reveal-section";
import { staggerDelay } from "@/lib/animations";

export const metadata = createPageMetadata({
  title: "Certifications | Ahmad Andika Khoirul Amin",
  description:
    "Professional certifications from Dicoding, SantriKoding, Udemy, HackerRank, SoloLearn, and SMKDEV.",
  path: "/certifications",
  keywords: ["certifications", "Dicoding", "Udemy", "HackerRank"],
});

export default function CertificationsPage() {
  const breadcrumbs = createBreadcrumbJsonLd([
    { name: "Certifications", path: "/certifications" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Breadcrumbs items={[{ label: "Certifications" }]} />
      <PageShell>
        <RevealSection as="div">
          <h1 className="font-heading text-4xl font-semibold tracking-tight">Certifications</h1>
          <p className="mt-4 max-w-prose text-muted-foreground">
            Continuous learning through structured courses, bootcamps, and competitive programming.
          </p>
        </RevealSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <RevealSection key={cert.id} as="div" delay={staggerDelay(i)}>
              <Card className="border-[var(--border-subtle)] bg-[var(--surface-raised)]">
                <CardContent className="p-6">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-md bg-[var(--accent-copper-muted)] font-heading text-lg font-semibold text-primary">
                    {cert.issuer.charAt(0)}
                  </div>
                  <p className="text-overline text-foreground-subtle mb-2">{cert.issuer}</p>
                  <h3 className="font-heading text-lg font-semibold">{cert.title}</h3>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{cert.date}</p>
                  {cert.description && (
                    <p className="mt-3 text-sm text-muted-foreground">{cert.description}</p>
                  )}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block font-mono text-sm text-accent-phosphor hover:underline"
                    >
                      View credential →
                    </a>
                  )}
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>
      </PageShell>
    </>
  );
}
