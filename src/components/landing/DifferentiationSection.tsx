"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Zap, Globe, Users, Construction } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import { useTranslations } from 'next-intl';

const DIFFERENTIATOR_ICONS = {
  ecosystem: Zap,
  vision: Globe,
  access: Users,
  execution: Construction
};

export default function DifferentiationSection() {
  const t = useTranslations('Differentiation');
  const container = useRef<HTMLDivElement>(null);
  
  const differentiatorItems = [
    { key: "ecosystem" },
    { key: "vision" },
    { key: "access" },
    { key: "execution" }
  ];

  useGSAP(() => {
    gsap.from(".diff-item", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".diff-grid",
        start: "top 75%",
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h4 className="text-accent font-bold text-sm tracking-[0.2em] uppercase mb-6">{t('label')}</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-8">{t('title')}</h2>
        </div>

        <div className="diff-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {differentiatorItems.map((item, index) => {
            const Icon = DIFFERENTIATOR_ICONS[item.key as keyof typeof DIFFERENTIATOR_ICONS];
            return (
              <div key={index} className="diff-item space-y-6">
                <div className="w-16 h-16 rounded-full border border-ink/5 flex items-center justify-center text-accent bg-canvas shadow-inner">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-ink uppercase tracking-tight">{t(`items.${item.key}.title`)}</h3>
                <p className="text-muted leading-relaxed font-medium">
                  {t(`items.${item.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
