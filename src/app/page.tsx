import { profile } from "@/data/profile";
import { createPageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { FeaturedSkills } from "@/components/sections/featured-skills";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { ContactCTA } from "@/components/sections/contact-cta";
import { RevealSection } from "@/components/sections/reveal-section";
import { staggerDelay } from "@/lib/animations";

export const metadata = createPageMetadata({
  title: "Ahmad Andika Khoirul Amin | Backend & Full-Stack Developer",
  description: profile.subheadline,
  path: "/",
  keywords: [
    "backend developer",
    "full-stack developer",
    "Laravel",
    "NestJS",
    "payment systems",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <RevealSection delay={staggerDelay(0)}>
        <ExperiencePreview />
      </RevealSection>
      <RevealSection delay={staggerDelay(1)}>
        <FeaturedSkills />
      </RevealSection>
      <RevealSection delay={staggerDelay(2)}>
        <FeaturedProjects />
      </RevealSection>
      <RevealSection delay={staggerDelay(3)}>
        <ContactCTA />
      </RevealSection>
    </>
  );
}
