"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Zap, Globe, Users, Construction } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const DIFFERENTIATORS = [
  {
    title: "Approche écosystème",
    description: "Tout est connecté. Nous ne travaillons pas en silos, mais en synergie.",
    icon: Zap
  },
  {
    title: "Vision globale",
    description: "Nous alignons business, humain et technologie pour une performance durable.",
    icon: Globe
  },
  {
    title: "Accès stratégique",
    description: "Ouvrez les portes de réseaux d'opportunités et d'investisseurs exclusifs.",
    icon: Users
  },
  {
    title: "Exécution concrète",
    description: "Au-delà du conseil, nous construisons et déployons vos solutions.",
    icon: Construction
  }
];

export default function DifferentiationSection() {
  const container = useRef<HTMLDivElement>(null);

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
          <h4 className="text-accent font-bold text-sm tracking-[0.2em] uppercase mb-6">Différenciation</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-8">Pourquoi Primices est différent</h2>
        </div>

        <div className="diff-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {DIFFERENTIATORS.map((diff, index) => (
            <div key={index} className="diff-item space-y-6">
              <div className="w-16 h-16 rounded-full border border-ink/5 flex items-center justify-center text-accent bg-canvas shadow-inner">
                <diff.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-ink uppercase tracking-tight">{diff.title}</h3>
              <p className="text-muted leading-relaxed font-medium">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
