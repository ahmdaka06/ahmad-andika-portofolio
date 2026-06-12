import { profile } from "@/data/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactCTAProps {
  condensed?: boolean;
}

export function ContactCTA({ condensed = false }: ContactCTAProps) {
  return (
    <section className={condensed ? "py-16" : "bg-[var(--surface-raised)] py-24"}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div
          className="relative overflow-hidden rounded-xl border border-[var(--border-accent)] bg-[var(--surface-raised)] px-8 py-16 text-center md:py-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 500px 300px at 50% 0%, var(--glow-copper), transparent)",
          }}
        >
          <h2 className="font-heading text-3xl font-semibold tracking-tight">
            Let&apos;s Build Something Great Together
          </h2>
          {!condensed && (
            <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
              Available for full-time, contract, and consulting opportunities.
            </p>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${profile.email}`} className={cn(buttonVariants({ size: "lg" }))}>
              Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              LinkedIn
            </a>
            <a
              href={profile.cvPath}
              download
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
