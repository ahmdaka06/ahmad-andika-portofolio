import type { ReactNode } from "react";
import { Clock, Download, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { PageShell } from "@/components/layout/page-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContactChannelCard } from "@/components/sections/contact-channel-card";
import { createPageMetadata, createBreadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { RevealSection } from "@/components/sections/reveal-section";
import { staggerDelay } from "@/lib/animations";

export const metadata = createPageMetadata({
  title: "Contact | Ahmad Andika Khoirul Amin",
  description:
    "Contact Ahmad Andika Khoirul Amin for full-time, contract, and consulting opportunities.",
  path: "/contact",
  keywords: ["contact", "hire", "backend developer"],
});

function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-[var(--accent-copper-muted)] font-mono text-sm font-semibold text-primary">
      {children}
    </span>
  );
}

function SocialChannelCard({
  href,
  label,
  value,
  icon,
}: {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-raised)] p-5 transition-all duration-250 hover:-translate-y-0.5 hover:border-[var(--border-accent)]"
    >
      {icon}
      <div className="min-w-0 flex-1">
        <p className="text-overline text-foreground-subtle">{label}</p>
        <p className="mt-1 truncate font-medium text-foreground">{value}</p>
      </div>
      <span className="font-mono text-sm text-accent-phosphor opacity-0 transition-opacity group-hover:opacity-100">
        →
      </span>
    </a>
  );
}

export default function ContactPage() {
  const breadcrumbs = createBreadcrumbJsonLd([{ name: "Contact", path: "/contact" }]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <PageShell>
        <div className="relative">
          <div
            className="pointer-events-none absolute -top-24 right-0 h-[400px] w-[500px] opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 500px 300px at 70% 20%, var(--glow-copper), transparent)",
            }}
            aria-hidden="true"
          />

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <RevealSection as="div" className="lg:col-span-5">
              <p className="text-overline text-foreground-subtle mb-4">
                <span className="text-accent-phosphor">{"// "}</span>
                GET IN TOUCH
              </p>
              <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                Let&apos;s work together
              </h1>
              <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
                Open to full-time roles, contract work, and consulting. Pick a channel below —
                I typically respond within a day.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Badge className="rounded-md bg-[var(--accent-copper-muted)] px-3 py-1 text-primary">
                  Open to opportunities
                </Badge>
                <Badge
                  variant="outline"
                  className="gap-1.5 rounded-md border-[var(--border-subtle)] font-normal text-muted-foreground"
                >
                  <MapPin className="size-3.5" />
                  {profile.location}
                </Badge>
              </div>
            </RevealSection>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { component: <ContactChannelCard key="email" href={`mailto:${profile.email}`} label="Email" value={profile.email} icon={Mail} primary />, delay: 0 },
                  { component: <ContactChannelCard key="phone" href={`tel:${profile.phone.replace(/\s/g, "")}`} label="Phone" value={profile.phone} icon={Phone} />, delay: 1 },
                  { component: <SocialChannelCard key="github" href={profile.github} label="GitHub" value="ahmdaka06" icon={<SocialIcon>GH</SocialIcon>} />, delay: 2 },
                  { component: <SocialChannelCard key="linkedin" href={profile.linkedin} label="LinkedIn" value="ahmadandika" icon={<SocialIcon>in</SocialIcon>} />, delay: 3 },
                  { component: <ContactChannelCard key="cv" href={profile.cvPath} label="Resume" value="Download CV (PDF)" icon={Download} download />, delay: 4 },
                ].map((item) => (
                  <RevealSection key={item.delay} as="div" delay={staggerDelay(item.delay)}>
                    {item.component}
                  </RevealSection>
                ))}
              </div>

              <RevealSection as="div" delay={staggerDelay(5)}>
                <div className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-inset)] px-4 py-3 sm:justify-start">
                  <Clock className="size-4 text-[var(--accent-steel)]" />
                  <p className="font-mono text-xs text-muted-foreground">
                    Typically responds within 24 hours
                  </p>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </PageShell>
    </>
  );
}
