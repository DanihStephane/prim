"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Globe, Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";

import Link from "next/link";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".nav-anim", {
      y: -20,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <header ref={container} className="fixed top-6 left-0 w-full z-50 flex justify-center px-6">
      <nav className="max-w-7xl w-full h-16 bg-white/70 backdrop-blur-xl border border-ink/5 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full flex items-center justify-between px-8 nav-anim">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/images/logo/logo-bg.png" alt="Logo" width={40} height={40} />
          <h2 className="text-ink text-sm font-black tracking-tighter uppercase">PRIMICES INTERNATIONAL</h2>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Vision", "Ecosystem", "Journey"].map((item) => (
            <a
              key={item}
              className="text-muted hover:text-ink font-bold text-xs tracking-widest uppercase transition-colors"
              href={`/home#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
          <Button asChild variant="default" className="bg-ink text-white hover:bg-ink/90 px-6 h-10 rounded-full font-bold text-xs tracking-widest group">
            <Link href="/contact">
              Nous contacter
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="w-6 h-6" />
                </Button>
              }
            />
            <SheetContent side="right" className="rounded-l-3xl border-l-ink/5">
              <div className="flex flex-col gap-8 mt-20">
                {["Vision", "Ecosystem", "Journey"].map((item) => (
                  <a key={item} className="text-2xl font-black text-ink uppercase tracking-tighter" href={`/home#${item.toLowerCase()}`}>{item}</a>
                ))}
                <Button asChild className="w-full h-14 rounded-full bg-accent font-bold">
                  <Link href="/contact">NOUS CONTACTER</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
