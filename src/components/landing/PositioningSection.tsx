"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// const BENEFITS = [
//   "Clarifier leur vision",
//   "Structurer leur croissance",
//   "Optimiser leur énergie et leur impact",
//   "Accéder aux bonnes opportunités au bon moment"
// ];
const BENEFITS = [
  "Support complet pour implémenter des changements efficaces",
  "Accès à vie aux programmes de coaching sur mesure",
  "Stratégies personnalisées qui alignent votre vision avec la réalité",
  "Une vie équilibrée axée sur l'innovation et la rentabilité"
];

import { useTranslations } from 'next-intl';

export default function PositioningSection() {
  const t = useTranslations('Positioning');
  const container = useRef<HTMLDivElement>(null);
  
  const benefits = t.raw('benefits') as string[];

  useGSAP(() => {
    // Force a refresh to account for layout shifts from previous sections (like Hero images)
    ScrollTrigger.refresh();

    // Initial states
    gsap.set(".pos-text, .pos-card", { opacity: 0 });
    gsap.set(".pos-text", { x: -30 });
    gsap.set(".pos-card", { y: 30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.to(".pos-text", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out"
    })
      .to(".pos-card", {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6");
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-white relative overflow-hidden" id="positioning">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="pos-text">
            <h4 className="text-accent font-bold text-sm tracking-[0.2em] uppercase mb-6">{t('label')}</h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              {t('title')}
            </h2>
            <div className="space-y-6 max-w-xl">
              <p className="text-xl text-muted font-medium">
                {t('p1')} {t('p2')}
              </p>
              <p className="text-lg text-muted">
                {t('p3')}
              </p>
            </div>
          </div>

          <div className="pos-grid grid grid-cols-1 gap-4 -mt-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="pos-card p-6 border-ink/5 bg-canvas/50 backdrop-blur hover:border-accent/20 transition-all group cursor-default">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors px-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-bold text-ink">{benefit}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
