"use client";

import { Globe, Share2, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const FOOTER_LINKS = {
  ecosystem: [
    "Primices MICE",
    "Fair-Brand",
    "Ingredients",
    "Investments",
    "Institute",
    "Intelligence"
  ],
  corporate: [
    "Vision",
    "Leadership",
    "Investisseurs",
    "Carrières",
    "Contact"
  ]
};

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navbar');
  const tCTA = useTranslations('CTA');

  const FOOTER_LINKS = {
    ecosystem: [
      "Primices MICE",
      "Fair-Brand",
      "Ingredients",
      "Investments",
      "Institute",
      "Intelligence"
    ],
    corporate: [
      tNav('vision'),
      "Leadership",
      "Investisseurs",
      "Carrières",
      tNav('contact')
    ]
  };

  return (
    <footer className="bg-ink text-white pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Globe className="text-accent w-8 h-8" />
              <h2 className="text-xl font-black tracking-tighter uppercase">{tNav('title')}</h2>
            </div>
            <p className="text-white/40 leading-relaxed font-medium">
              {t('description')}
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="outline" className="rounded-full border-white/10 hover:bg-white hover:text-ink transition-all">
                <Share2 className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-white/10 hover:bg-white hover:text-ink transition-all">
                <Languages className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-black tracking-[0.2em] uppercase text-accent mb-8">{t('ecosystems')}</h5>
            <ul className="space-y-4">
              {FOOTER_LINKS.ecosystem.map((link, i) => (
                <li key={i}>
                  <a className="text-white/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider" href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-black tracking-[0.2em] uppercase text-accent mb-8">{t('corporate')}</h5>
            <ul className="space-y-4">
              {FOOTER_LINKS.corporate.map((link, i) => (
                <li key={i}>
                  <Link 
                    className="text-white/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider" 
                    href={link === tNav('contact') ? "/contact" : "/"}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h5 className="text-xs font-black tracking-[0.2em] uppercase text-accent mb-8">{t('inquiries')}</h5>
            <p className="text-white/40 text-sm font-medium">{t('inquiries_p')}</p>
            <a className="text-white font-black text-2xl block hover:text-accent transition-colors tracking-tighter" href="mailto:contact@primices-intl.com">
              contact@primices-intl.com
            </a>
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-14 rounded-full">
              <Link href="/contact">{tCTA('consultation').toUpperCase()}</Link>
            </Button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-bold uppercase tracking-widest">{t('copyright')}</p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Legal"].map((link) => (
              <a key={link} className="text-white/20 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors" href="#">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
