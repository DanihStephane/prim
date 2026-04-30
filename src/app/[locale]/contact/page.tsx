import { motion } from "motion/react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ContactForm from "@/components/contact/ContactForm";
import { getTranslations } from 'next-intl/server';
import * as m from "motion/react-client";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });

  return {
    title: t('label'),
    description: t('description'),
    openGraph: {
      title: `Primices International - ${t('label')}`,
      description: t('description'),
    }
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });

  return (
    <div className="flex flex-col min-h-screen bg-canvas selection:bg-accent selection:text-white">
      <Navbar />

      <main className="grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <h4 className="text-accent font-bold text-xs tracking-[0.2em] uppercase mb-4">{t('label')}</h4>
            <h1 className="text-5xl md:text-7xl font-black text-ink tracking-tighter leading-none mb-8">
              {t('line1')} <br />
              {t('line2')} <span className="text-accent">{t('impact')}</span>.
            </h1>
            <p className="text-xl text-muted font-medium max-w-2xl leading-relaxed">
              {t('description')}
            </p>
          </m.div>

          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
