import Link from "next/link";
import { navLinks, profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-sm font-semibold">{profile.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Building scalable systems since 2019.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Connect
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-accent-phosphor"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-accent-phosphor"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-muted-foreground transition-colors hover:text-accent-phosphor"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium">Open to opportunities</p>
            <Link
              href="/contact"
              className="mt-4 inline-block text-sm text-primary hover:underline"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>&copy; {year} Ahmad Andika Khoirul Amin</p>
          <p>Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
