"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Globe, Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";

import { Link } from "@/i18n/navigation";

gsap.registerPlugin(useGSAP);

import { useTranslations } from 'next-intl';
import LanguageSwitcher from "../LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations('Navbar');
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

  const navItems = [
    { name: t('vision'), href: "/#vision" },
    { name: t('ecosystem'), href: "/#ecosystem" },
    { name: t('journey'), href: "/#journey" },
  ];

  return (
    <header ref={container} className="fixed top-6 left-0 w-full z-50 flex justify-center px-6">
      <nav className="max-w-7xl w-full h-16 bg-white/70 backdrop-blur-xl border border-ink/5 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full flex items-center justify-between px-8 nav-anim">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity shrink-0">
          <Image src="/images/logo/logo-bg.png" alt="Logo" width={40} height={40} />
          <h2 className="text-ink text-[10px] sm:text-sm font-black tracking-tighter uppercase hidden sm:block">{t('title')}</h2>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              className="text-muted hover:text-ink font-bold text-[10px] tracking-widest uppercase transition-colors"
              href={item.href}
            >
              {item.name}
            </Link>
          ))}

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button asChild variant="default" className="bg-ink text-white hover:bg-ink/90 px-6 h-10 rounded-full font-bold text-[10px] tracking-widest group">
              <Link href="/contact">
                {t('contact')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
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
                {navItems.map((item) => (
                  <Link key={item.name} className="text-2xl font-black text-ink uppercase tracking-tighter" href={item.href}>{item.name}</Link>
                ))}
                <Button asChild className="w-full h-14 rounded-full bg-accent font-bold">
                  <Link href="/contact">{t('contact').toUpperCase()}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
