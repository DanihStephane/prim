"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STEPS = [
  {
    title: "Analyse & positionnement",
    description: "Comprendre vos enjeux, vos objectifs et votre potentiel pour définir la meilleure trajectoire."
  },
  {
    title: "Stratégie personnalisée",
    description: "Activation des bons écosystèmes selon vos besoins spécifiques de croissance et d'impact."
  },
  {
    title: "Déploiement & connexion",
    description: "Mise en relation avec notre réseau, accès aux outils et participation aux événements stratégiques."
  },
  {
    title: "Optimisation continue",
    description: "Amélioration constante de votre performance via nos solutions technologiques intelligentes."
  }
];

export default function JourneySection() {
  const container = useRef<HTMLDivElement>(null);
  const progressLine = useRef<HTMLDivElement>(null);

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
    <section ref={container} className="py-32 bg-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h4 className="text-accent font-bold text-sm tracking-[0.2em] uppercase mb-6">Expérience / Parcours</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Un accompagnement structuré, pensé pour performer</h2>
        </div>

        <div className="journey-content relative pl-12 md:pl-24 max-w-4xl">
          {/* Vertical Progress Line */}
          <div className="absolute left-4 md:left-10 top-0 w-px h-full bg-white/10">
            <div ref={progressLine} className="w-full h-0 bg-accent origin-top" />
          </div>

          <div className="space-y-32">
            {STEPS.map((step, index) => (
              <div key={index} className="journey-step relative">
                {/* Dot */}
                <div className="absolute -left-[37px] md:-left-[61px] top-2 w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_rgba(0,107,95,0.8)]" />
                
                <div className="space-y-4">
                  <span className="text-accent font-black text-xs uppercase tracking-widest">Étape 0{index + 1}</span>
                  <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none">{step.title}</h3>
                  <p className="text-lg md:text-2xl text-white/40 font-medium max-w-2xl leading-relaxed">
                    {step.description}
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
