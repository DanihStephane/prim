"use client"
import { motion } from "motion/react";
import {
  Briefcase,
  Users,
  Leaf,
  BarChart3,
  School,
  Zap,
  ArrowUpRight
} from "lucide-react";
import { Card } from "../ui/card";

import { useTranslations } from 'next-intl';
import Image from "next/image";

const ECOSYSTEM_ICONS = {
  mice: Briefcase,
  fair: Users,
  ingredients: Leaf,
  investment: BarChart3,
  institute: School,
  intelligence: Zap
};

export default function EcosystemsSection() {
  const t = useTranslations('Ecosystems');

  const ecosystemItems = [
    { id: "01", key: "mice", color: "bg-blue-500/10 text-blue-500", image: "/images/ecosystem/mice.png", logo: "/images/logo/logo-bg.png" },
    { id: "02", key: "fair", color: "bg-purple-500/10 text-purple-500", image: "/images/ecosystem/fair.png", logo: "/images/ecosystem/logo/fair-brand.png" },
    { id: "03", key: "ingredients", color: "bg-green-500/10 text-green-500", image: "/images/ecosystem/foods.png", logo: "/images/logo/logo-bg.png" },
    { id: "04", key: "investment", color: "bg-amber-500/10 text-amber-500", image: "/images/ecosystem/investment.jpg", logo: "/images/logo/logo-bg.png" },
    { id: "05", key: "institute", color: "bg-red-500/10 text-red-500", image: "/images/ecosystem/edtech.png", logo: "/images/logo/logo-bg.png" },
    { id: "06", key: "intelligence", color: "bg-cyan-500/10 text-cyan-500", image: "/images/ecosystem/prime.jpg", logo: "/images/ecosystem/logo/pi.png" }
  ];

  return (
    <section id="ecosystem" className="py-24 bg-[#FCFCFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h4 className="text-accent font-bold text-xs tracking-[0.2em] uppercase mb-4">{t('label')}</h4>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">{t('title')}</h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecosystemItems.map((item, index) => {
            const Icon = ECOSYSTEM_ICONS[item.key as keyof typeof ECOSYSTEM_ICONS];
            const title = t(`items.${item.key}.title`);
            const subtitle = t(`items.${item.key}.subtitle`);
            const description = t(`items.${item.key}.description`);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.21, 0.45, 0.32, 0.9]
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group h-full"
              >
                <Card
                  className="h-full border-slate-100 bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 flex flex-col rounded-4xl overflow-hidden"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* <div className="absolute bottom-4 left-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} backdrop-blur-md shadow-lg border border-white/20`}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                    </div> */}

                    <div className="absolute top-4 right-6 text-white/50 group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 -translate-y-1" />
                    </div>
                  </div>

                  <div className="p-8 pt-6 flex flex-col grow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-accent/60 tracking-widest uppercase">{item.id} — Primices</span>
                        <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase group-hover:text-accent transition-colors">{title}</h3>
                      </div>
                      <div className="bg-white rounded-lg p-2">
                        <Image 
                          src={item.logo} 
                          alt={title} 
                          width={item.id === "02" ? 80 : 40} 
                          height={item.id === "02" ? 80 : 40} 
                          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                        />
                      </div>
                    </div>

                    <p className="text-accent font-bold text-[11px] mb-4 uppercase tracking-wider">{subtitle}</p>

                    <p className="text-slate-500 leading-relaxed text-sm font-medium">
                      {description}
                    </p>

                    <div className="mt-auto pt-6 flex items-center gap-2 group/btn cursor-pointer">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider group-hover/btn:text-accent transition-colors">{t('learn_more')}</span>
                      <div className="h-[2px] w-4 bg-slate-200 group-hover/btn:w-8 group-hover/btn:bg-accent transition-all duration-300" />
                    </div>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-accent"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
