"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ECOSYSTEM_POLES } from "@/constants/landing";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <motion.h4 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4"
          >
            Our Ecosystem
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Nos Pôles d'Excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            A diversified portfolio of specialized industry leaders, unified under a singular vision of purity, innovation, and global standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECOSYSTEM_POLES.map((pole, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group p-8 border-gray-200 transition-all hover:border-primary/40 hover:shadow-xl h-full cursor-pointer overflow-hidden">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <pole.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{pole.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{pole.description}</p>
                <div className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                  {pole.cta} <ChevronRight className="w-4 h-4" />
                </div>
              </Card>
            </motion.div>
          ))}
          
          <div className="flex flex-col justify-center p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Strategic Integration</h4>
            <p className="text-gray-600 mb-6 italic font-medium">"Our strength lies not in the independence of our pôles, but in their synergy."</p>
            <button className="w-fit text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary/70 transition-colors uppercase text-sm tracking-wider">
              DOWNLOAD ECOSYSTEM REPORT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
