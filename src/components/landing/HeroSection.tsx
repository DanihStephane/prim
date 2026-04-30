"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "@/i18n/navigation";

gsap.registerPlugin(useGSAP);

import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('Hero');
  const container = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    // Animation d'entrée
    tl.from(".bg-grid", { opacity: 0, duration: 2 })
      .from(".hero-title span", {
        y: 120,
        skewY: 7,
        stagger: 0.1,
        duration: 1.5,
      }, "-=1.5")
      .from(".hero-description", {
        opacity: 0,
        y: 30,
        duration: 1,
      }, "-=1")
      .from(".hero-btns", {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
      }, "-=0.8")
      .from(".floating-media", {
        opacity: 0,
        x: 100,
        stagger: 0.2,
        duration: 1.5,
      }, "-=1.2");

    // Animation de flottement continue
    gsap.to(".hero-float", {
      y: -15,
      rotate: 2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3
    });

    // Effet de parallaxe au mouvement de la souris
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to(".parallax-bg", {
        x: xPos * 0.5,
        y: yPos * 0.5,
        duration: 1,
      });

      gsap.to(".floating-media", {
        x: -xPos,
        y: -yPos,
        duration: 1.5,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-dvh w-full flex flex-col justify-center items-center px-6 overflow-hidden bg-canvas text-ink"
    >
      {/* Background Building Image - Subtle Institutional Depth */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07] grayscale parallax-bg pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Grille futuriste */}
      <div className="absolute inset-0 z-0 opacity-[0.15] bg-grid parallax-bg"
        style={{ 
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, 
          backgroundSize: '40px 40px',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }} 
      />

      {/* Halos lumineux dynamiques */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[100px] rounded-full" />

      {/* --- CONTENT LAYOUT --- */}
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Column: Text */}
        <div className="text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ink/10 bg-ink/5 backdrop-blur-sm text-sm font-medium hero-description">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="opacity-80 uppercase tracking-widest text-[10px]">{t('tagline')}</span>
          </div>

          <h1 className="hero-title text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
            <span className="block overflow-hidden">
              <span className="block">{t('line1')}</span>
            </span>
            <span className="block overflow-hidden text-accent">
              <span className="block italic">{t('line2')}</span>
            </span>
            <span className="block overflow-hidden mt-8">
              <span className="block">{t('line3')}</span>
            </span>
            <span className="block overflow-hidden  text-accent">
              <span className="block italic">{t('line4')}</span>
            </span>
          </h1>

          <p className="hero-description text-lg md:text-xl text-muted max-w-xl font-light leading-relaxed">
            {t('description')}
          </p>

          <div className="flex flex-wrap gap-4 hero-btns">
            <Button size="lg" className="h-16 px-10 text-base font-bold rounded-xl bg-accent hover:bg-accent/90 shadow-[0_0_20px_rgba(var(--accent),0.3)] transition-all" asChild>
              <Link href="/contact">
                {t('cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Column: Floating Visuals */}
        <div className="relative h-[500px] hidden lg:flex items-center justify-center" ref={cardsRef}>
          {/* Main "Glass" Video Container */}
          <div className="relative w-80 h-96 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden floating-media hero-float z-20">
            <div className="absolute inset-0 bg-linear-to-tr from-accent/20 to-transparent" />
            {/* Remplace l'image par une vidéo si disponible */}
            <img
              src="/images/hero/global-ecosystem.png"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Global Ecosystem Primices"
            />
            <div className="absolute bottom-6 left-4 right-4 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
              <p className="text-white text-xs font-bold uppercase tracking-widest">{t('ecosystems_count')}</p>
              <div className="h-1 w-full bg-accent mt-2 origin-left scale-x-50" />
            </div>
          </div>

          {/* Secondary Floating Elements */}
          <div className="absolute top-10 right-10 w-48 h-48 rounded-2xl overflow-hidden floating-media hero-float z-10 border border-white/10 shadow-xl" style={{ animationDelay: '1s' }}>
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Impact" />
          </div>

          <div className="absolute bottom-0 -left-10 w-56 h-32 bg-accent/90 rounded-2xl floating-media hero-float z-30 flex items-center justify-center p-6 shadow-[0_20px_40px_rgba(0,0,0,0.3)]" style={{ animationDelay: '0.5s' }}>
            <span className="text-white font-black text-2xl tracking-tighter italic">{t('impact_label')}</span>
          </div>

          {/* Abstract geometric shapes */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-accent/30 rounded-full animate-[spin_10s_linear_infinite] floating-media" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">{t('scroll')}</span>
        <div className="w-px h-12 bg-linear-to-b from-accent to-transparent" />
      </div>

    </section>
  );
}