import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/content/site";

const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
});

const sora = localFont({
  src: "../../node_modules/@fontsource-variable/sora/files/sora-latin-wght-normal.woff2",
  variable: "--font-display",
  weight: "100 800",
  display: "swap",
});

const siteUrl = "https://zanichtraders.com"; // PLACEHOLDER — set real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Printing, Branding & Promotional Products in Nairobi`,
    template: `%s · ${site.name}`,
  },
  description:
    "Zanich General Traders is a Nairobi-based printing and branding firm. Digital & large-format printing, sublimation, signage, apparel and promotional merchandise — quality branding without breaking the bank.",
  keywords: [
    "printing Nairobi",
    "branding Kenya",
    "promotional products Nairobi",
    "large format printing",
    "corporate branding",
    "signage Kenya",
    "custom merchandise",
    "Zanich General Traders",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — Printing, Branding & Promotional Products`,
    description:
      "We empower businesses to get noticed in a busy and competitive world. Printing, branding & promotional products in Nairobi, Kenya.",
    images: [{ url: "/images/hero-merch.jpg", width: 1408, height: 768, alt: "Branded promotional merchandise by Zanich General Traders" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Printing & Branding, Nairobi`,
    description: "We empower businesses to get noticed. Printing, branding & promotional products in Nairobi.",
    images: ["/images/hero-merch.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    image: `${siteUrl}/images/hero-merch.jpg`,
    "@id": siteUrl,
    url: siteUrl,
    telephone: site.contact.phone,
    email: site.contact.email,
    slogan: site.tagline,
    description:
      "Nairobi-based printing and branding firm offering digital & large-format printing, sublimation, signage, apparel and promotional merchandise.",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.contact.address.line1}, ${site.contact.address.line2}`,
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    areaServed: "KE",
  };

  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
