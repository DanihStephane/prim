"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import { useTranslations } from 'next-intl';

export default function VisionSection() {
  const t = useTranslations('Vision');
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".vision-line", {
      opacity: 0,
      y: 20,
      duration: 1.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".vision-line",
        start: "top 85%",
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-48 bg-white flex items-center justify-center text-center px-6" id="vision">
      <div className="max-w-5xl">
        <h4 className="text-accent font-bold text-sm tracking-[0.2em] uppercase mb-12 vision-line">{t('label')}</h4>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.1] tracking-tighter mb-12 vision-line">
          {t('title')}
        </h2>
        <p className="text-xl md:text-3xl text-muted font-medium max-w-3xl mx-auto leading-relaxed vision-line">
          {t('description')}
        </p>
      </div>
    </section>
  );
}
