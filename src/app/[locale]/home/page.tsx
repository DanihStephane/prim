"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PositioningSection from "@/components/landing/PositioningSection";
import PromiseSection from "@/components/landing/PromiseSection";
import DifferentiationSection from "@/components/landing/DifferentiationSection";
import JourneySection from "@/components/landing/JourneySection";
import VisionSection from "@/components/landing/VisionSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import EcosystemsSection from "@/components/landing/EcosystemsSection";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <div id="positioning">
          <PositioningSection />
        </div>
        <div id="promise">
          <PromiseSection />
        </div>
        <EcosystemsSection />
        <div id="differentiation">
          <DifferentiationSection />
        </div>
        <div id="journey">
          <JourneySection />
        </div>
        <div id="vision">
          <VisionSection />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}