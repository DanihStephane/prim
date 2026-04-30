"use client";

import { motion } from "motion/react";
import { PHILOSOPHY_PILLARS, ASSETS } from "@/constants/landing";

export default function Vision() {
  return (
    <section id="vision" className="bg-inverse-surface py-24 relative overflow-hidden">
      {/* Decorative SVG background element */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M100,0 L100,100 L0,100 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-primary-container font-bold text-sm tracking-[0.2em] uppercase mb-6">Our Philosophy</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Notre Vision: Excellence, Innovation & Loyalty</h2>
            
            <div className="space-y-10">
              {PHILOSOPHY_PILLARS.map((pillar, index) => (
                <div key={index} className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full border border-primary-container flex items-center justify-center text-primary-container">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white mb-2">{pillar.title}</h5>
                    <p className="text-gray-400 leading-relaxed text-lg font-normal">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl overflow-hidden shadow-2xl group"
          >
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={ASSETS.boardroom}
              alt="Strategic board meeting"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
