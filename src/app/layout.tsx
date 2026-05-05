import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Primices International",
  description: "Primices International Website",
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = 'en';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Primices International",
    "url": "https://primices-international.com",
    "logo": "https://primices-international.com/images/logo/logo-bg.png",
    "description": "Holding stratégique globale dédiée à l'excellence, l'innovation et l'impact durable.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ottawa",
      "addressCountry": "Canada"
    },
    "sameAs": [
      "https://www.linkedin.com/company/primices-international",
      "https://twitter.com/primices_int",
      "https://www.instagram.com/primices_international"
    ]
  };

  return (
    <html lang={locale} className={cn("font-sans", inter.variable)} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
