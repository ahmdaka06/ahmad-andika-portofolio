import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
} from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeScript } from "@/components/layout/theme-script";
import { ThemeProvider } from "@/components/providers/theme-provider";
import {
  createPersonJsonLd,
  createWebsiteJsonLd,
  JsonLd,
} from "@/lib/seo";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const ibmSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahmadandika.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ahmad Andika Khoirul Amin | Backend & Full-Stack Developer",
  description:
    "Personal portfolio of Ahmad Andika Khoirul Amin — backend and full-stack developer building scalable digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${ibmSans.variable} ${ibmMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <ThemeProvider>
          <JsonLd data={createPersonJsonLd()} />
          <JsonLd data={createWebsiteJsonLd()} />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
