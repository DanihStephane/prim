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

  return (
    <html lang={locale} className={cn("font-sans", inter.variable)} suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
