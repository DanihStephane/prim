"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ASSETS } from "@/constants/landing";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect possibility */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 animate-in fade-in duration-1000"
        style={{ backgroundImage: `url('${ASSETS.hero_bg}')`, opacity: 1 }}
      />
      <div className="absolute inset-0 hero-gradient z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1 mb-8 border border-white/20 bg-white/10 rounded-full"
        >
          <span className="text-primary-container font-bold text-xs tracking-widest uppercase">Global Strategic Holding</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight max-w-5xl mx-auto"
        >
          Transform Overwhelm into Balance for Your Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl font-light mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed"
        >
          Global leadership coaching and strategic ecosystem management focused on excellence, sustainable growth, and institutional authority.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Button size="lg" className="bg-primary-container text-on-primary-container hover:bg-primary-container/90 px-10 py-7 text-base font-bold group">
            DISCOVER OUR VISION
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10 py-7 text-base font-bold">
            INVESTOR RELATIONS
          </Button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
      >
        <ChevronDown className="w-10 h-10" />
      </motion.div>
    </section>
  );
}
