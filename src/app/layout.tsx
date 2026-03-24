import { AppProviders } from "@/components/providers/AppProviders";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rohan Mehindrakar · Developer Portfolio",
    template: "%s · Rohan Mehindrakar",
  },
  description:
    "Computer Science and Business Systems student building modern, AI-driven web experiences with Next.js, cloud, and thoughtful UX. Based in Bangalore, India.",
  applicationName: "Rohan Mehindrakar Portfolio",
  authors: [{ name: "Rohan Mehindrakar", url: siteUrl }],
  creator: "Rohan Mehindrakar",
  keywords: [
    "Rohan Mehindrakar",
    "portfolio",
    "Next.js",
    "React",
    "developer",
    "CSBS",
    "Bangalore",
    "web development",
    "AWS",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Rohan Mehindrakar",
    title: "Rohan Mehindrakar · Developer Portfolio",
    description:
      "CSBS student crafting modern, AI-driven web experiences with scalable technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Mehindrakar · Developer Portfolio",
    description:
      "CSBS student crafting modern, AI-driven web experiences with scalable technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f7" },
    { media: "(prefers-color-scheme: dark)", color: "#050507" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full`}
    >
      <body className="font-sans text-neutral-900 dark:text-neutral-100 relative flex min-h-full flex-col antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
