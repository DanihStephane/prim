"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function VisionSection() {
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
    <section ref={container} className="py-48 bg-white flex items-center justify-center text-center px-6">
      <div className="max-w-5xl">
        <h4 className="text-accent font-bold text-sm tracking-[0.2em] uppercase mb-12 vision-line">Notre Vision</h4>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.1] tracking-tighter mb-12 vision-line">
          Créer des leaders, connecter des opportunités, construire l’avenir
        </h2>
        <p className="text-xl md:text-3xl text-muted font-medium max-w-3xl mx-auto leading-relaxed vision-line">
          Nous croyons en un monde où la croissance économique s’aligne avec le développement humain et l’innovation technologique.
        </p>
      </div>
    </section>
  );
}
