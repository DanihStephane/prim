"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import { useTranslations } from 'next-intl';

export default function JourneySection() {
  const t = useTranslations('Journey');
  const container = useRef<HTMLDivElement>(null);
  const progressLine = useRef<HTMLDivElement>(null);

  const journeySteps = [
    { key: "step1" },
    { key: "step2" },
    { key: "step3" },
    { key: "step4" }
  ];

  useGSAP(() => {
    gsap.to(progressLine.current, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".journey-content",
        start: "top center",
        end: "bottom center",
        scrub: true,
      }
    });

    gsap.utils.toArray<HTMLElement>(".journey-step").forEach((step) => {
      gsap.from(step, {
        opacity: 0,
        x: 30,
        duration: 1,
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-ink relative overflow-hidden" id="journey">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h4 className="text-accent font-bold text-sm tracking-[0.2em] uppercase mb-6">{t('label')}</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{t('title')}</h2>
        </div>

        <div className="journey-content relative pl-12 md:pl-24 max-w-4xl">
          {/* Vertical Progress Line */}
          <div className="absolute left-4 md:left-10 top-0 w-px h-full bg-white/10">
            <div ref={progressLine} className="w-full h-0 bg-accent origin-top" />
          </div>

          <div className="space-y-32">
            {journeySteps.map((step, index) => (
              <div key={index} className="journey-step relative">
                {/* Dot */}
                <div className="absolute -left-[37px] md:-left-[61px] top-2 w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_rgba(0,107,95,0.8)]" />
                
                <div className="space-y-4">
                  <span className="text-accent font-black text-xs uppercase tracking-widest">{t('step_label')} 0{index + 1}</span>
                  <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none">{t(`items.${step.key}.title`)}</h3>
                  <p className="text-lg md:text-2xl text-white/40 font-medium max-w-2xl leading-relaxed">
                    {t(`items.${step.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
