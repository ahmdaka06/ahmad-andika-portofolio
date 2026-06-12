import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { PageShell } from "@/components/layout/page-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Timeline } from "@/components/sections/timeline";
import { ContactCTA } from "@/components/sections/contact-cta";
import { createPageMetadata, createBreadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";

export const metadata = createPageMetadata({
  title: "Experience | Ahmad Andika Khoirul Amin",
  description:
    "Work history and professional experience of Ahmad Andika Khoirul Amin across payment platforms, ticketing systems, and business applications.",
  path: "/experience",
  keywords: ["experience", "work history", "backend developer"],
});

export default function ExperiencePage() {
  const breadcrumbs = createBreadcrumbJsonLd([
    { name: "Experience", path: "/experience" },
  ]);

  const sorted = [...experiences].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  );

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Breadcrumbs items={[{ label: "Experience" }]} />
      <PageShell>
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="font-heading text-4xl font-semibold tracking-tight">Work Experience</h1>
          <Badge className="rounded-sm bg-[var(--accent-copper-muted)] text-primary">
            {profile.yearsExperience}+ years
          </Badge>
        </div>
        <p className="mt-4 max-w-prose text-muted-foreground">
          Backend and full-stack roles across payment platforms, ticketing systems, and business
          applications.
        </p>
        <div className="mx-auto mt-12 max-w-3xl">
          <Timeline experiences={sorted} />
        </div>
      </PageShell>
      <ContactCTA condensed />
    </>
  );
}
