"use client";

import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { ASSETS } from "@/constants/landing";

const IMPACT_POINTS = [
  {
    number: "01",
    title: "Local Rooting",
    description: "Deeply anchored in Madagascan heritage, leveraging local expertise to create authentic global value."
  },
  {
    number: "02",
    title: "International Standards",
    description: "Implementing world-class governance and quality certifications across all ecosystem pôles."
  },
  {
    number: "03",
    title: "Future Talent",
    description: "Investing in the next generation of leadership through EdTech and career acceleration programs."
  }
];

export default function Impact() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Bridging Madagascar & Africa to the World</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {IMPACT_POINTS.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-6xl md:text-8xl font-black text-gray-200 group-hover:text-primary/10 transition-colors mb-4">{item.number}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Hub Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 h-[500px] w-full rounded-2xl bg-surface-container overflow-hidden border border-gray-200 relative shadow-inner shadow-black/5"
        >
          <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: `url('${ASSETS.map}')` }}
          />
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-md p-10 rounded-2xl border border-gray-200 max-w-lg shadow-xl"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-primary w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Global Operations Hub</h4>
              <p className="text-gray-600 leading-relaxed font-medium">
                Connecting the resource-rich markets of Africa with the strategic investment capitals of the world.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
