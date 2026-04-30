import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: {
    default: "Primices International",
    template: "%s | Primices International"
  },
  description: "Global strategic holding dedicated to excellence, innovation, and sustainable impact through interconnected ecosystems.",
  metadataBase: new URL("https://primices-international.com"),
  alternates: {
    languages: {
      'en': '/en',
      'fr': '/fr',
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  }
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

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
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
