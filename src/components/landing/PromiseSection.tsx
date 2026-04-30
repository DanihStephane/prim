"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import { useTranslations } from 'next-intl';

export default function PromiseSection() {
  const t = useTranslations('Promise');
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".promise-text", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".promise-text",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.to(".promise-bg", {
      opacity: 0.05,
      duration: 1,
      scrollTrigger: {
        trigger: ".promise-text",
        start: "top center",
        scrub: true,
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative py-48 bg-ink flex items-center justify-center overflow-hidden">
      <div className="promise-bg absolute inset-0 text-white/5 font-black text-[20vw] leading-none flex items-center justify-center whitespace-nowrap select-none pointer-events-none">
        {t('bg_label')}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="promise-text space-y-12">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
            {t('line1')}<br />
            <span className="text-accent">{t('line2')}</span>
          </h2>

          <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-3xl text-white/60 font-medium leading-relaxed italic">
              "{t('quote')}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
