import Image from "next/image";
import Link from "next/link";
import { keyMetrics, profile } from "@/data/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-blueprint bg-blueprint-fade"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-0 right-0 h-[500px] w-[600px] opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 600px 400px at 85% 15%, var(--glow-copper), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 pt-24 pb-0 lg:px-12">
        <div className="grid min-h-[60vh] items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-overline text-foreground-subtle mb-4">
              <span className="text-accent-phosphor">{"// "}</span>
              BACKEND DEVELOPER
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl lg:text-[clamp(2.75rem,5vw,4.5rem)] lg:leading-[1.05]">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {profile.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/projects" className={cn(buttonVariants({ size: "lg" }))}>
                View Projects
              </Link>
              <a
                href={profile.cvPath}
                download
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="rounded-xl border border-[var(--border-accent)] p-1 shadow-[var(--shadow-glow-copper)]">
              <Image
                src={profile.photoPath}
                alt={profile.name}
                width={280}
                height={320}
                priority
                className="rounded-[14px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 border-y border-[var(--border-subtle)] sm:grid-cols-3">
          {keyMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className={cn(
                "py-6 text-center",
                index < keyMetrics.length - 1 &&
                  "sm:border-r sm:border-[var(--border-subtle)]",
              )}
            >
              <p className="font-mono text-2xl font-medium text-primary tabular-nums">
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
