"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export default function CTASection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Subtle float for the whole CTA block
    gsap.to(".cta-content", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-canvas px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="cta-content relative bg-ink rounded-[3rem] p-12 md:p-24 text-center overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto">
              Prêt à passer au niveau supérieur ?
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
              Accédez à un écosystème conçu pour accélérer votre croissance, élargir votre réseau et structurer votre succès sur le long terme.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="h-16 px-10 text-lg font-bold rounded-full bg-accent hover:bg-accent/90 text-white group shadow-[0_20px_40px_rgba(0,107,95,0.3)]">
                <Link href="/contact">
                  Rejoindre Primices
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-10 text-lg font-bold rounded-full border-accent text-white hover:bg-white/10 hover:text-white/80 group bg-transparent">
                <Link href="/contact">
                  <MessageSquare className="mr-2 w-6 h-6 opacity-60" />
                  Demander une consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
