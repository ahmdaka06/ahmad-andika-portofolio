import Image from "next/image";
import { profile } from "@/data/profile";
import { PageShell } from "@/components/layout/page-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { createPageMetadata, createBreadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { RevealSection } from "@/components/sections/reveal-section";
import { staggerDelay } from "@/lib/animations";

export const metadata = createPageMetadata({
  title: "About | Ahmad Andika Khoirul Amin",
  description:
    "Learn about Ahmad Andika Khoirul Amin — backend and full-stack developer with 5+ years building scalable digital solutions.",
  path: "/about",
  keywords: ["about", "backend developer", "full-stack developer"],
});

export default function AboutPage() {
  const breadcrumbs = createBreadcrumbJsonLd([{ name: "About", path: "/about" }]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Breadcrumbs items={[{ label: "About" }]} />
      <PageShell>
        <RevealSection as="div">
          <h1 className="font-heading text-4xl font-semibold tracking-tight">About Me</h1>
        </RevealSection>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <RevealSection as="div" delay={staggerDelay(0)} className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="mx-auto w-fit rounded-xl border border-[var(--border-accent)] p-1 lg:mx-0">
                <Image
                  src={profile.photoPath}
                  alt={profile.name}
                  width={280}
                  height={320}
                  className="rounded-[14px] object-cover"
                />
              </div>
              <Card className="mt-6 border-[var(--border-subtle)]">
                <CardContent className="space-y-3 p-5 font-mono text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p>{profile.location}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Experience</p>
                    <p>{profile.yearsExperience}+ years</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Focus</p>
                    <p>Backend & Full-Stack</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </RevealSection>

          <div className="space-y-10 lg:col-span-8">
            <RevealSection delay={staggerDelay(1)}>
              <h2 className="font-heading text-2xl font-semibold">Introduction</h2>
              <p className="mt-4 max-w-prose leading-relaxed text-muted-foreground">
                {profile.summary}
              </p>
            </RevealSection>

            <RevealSection delay={staggerDelay(2)}>
              <h2 className="font-heading text-2xl font-semibold">Professional Summary</h2>
              <p className="mt-4 max-w-prose leading-relaxed text-muted-foreground">
                Strong in problem-solving, system optimization, API security, and delivering
                reliable backend solutions that support business operations. Proficient in PHP,
                Laravel, Node.js, MySQL, PostgreSQL, and architecture patterns including MVC,
                modular design, and clean architecture.
              </p>
            </RevealSection>

            <RevealSection delay={staggerDelay(3)}>
              <h2 className="font-heading text-2xl font-semibold">Education</h2>
              {profile.education.map((edu) => (
                <div
                  key={edu.institution}
                  className="mt-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-5"
                >
                  <h3 className="font-heading font-semibold">{edu.institution}</h3>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{edu.period}</p>
                  {edu.description && (
                    <p className="mt-3 text-sm text-muted-foreground">{edu.description}</p>
                  )}
                </div>
              ))}
            </RevealSection>

            <RevealSection delay={staggerDelay(5)}>
              <h2 className="font-heading text-2xl font-semibold">Career Journey</h2>
              <p className="mt-4 max-w-prose leading-relaxed text-muted-foreground">
                {profile.careerJourney}
              </p>
            </RevealSection>
          </div>
        </div>
      </PageShell>
    </>
  );
}
