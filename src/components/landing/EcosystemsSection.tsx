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

const ECOSYSTEMS = [
  {
    id: "01",
    title: "PRIMICES (MICE)",
    subtitle: "Expériences business & connexions stratégiques",
    description: "Conférences, salons, rencontres d’affaires et voyages immersifs. Nous créons des environnements où les décisions importantes se prennent.",
    icon: Briefcase,
    color: "bg-blue-500/10 text-blue-500",
    image: "/images/ecosystem/mice.png"
  },
  {
    id: "02",
    title: "FAIR-BRAND",
    subtitle: "Révéler et propulser les talents",
    description: "Nous accompagnons les jeunes talents à fort potentiel dans leur développement de carrière via un réseau et des outils concrets.",
    icon: Users,
    color: "bg-purple-500/10 text-purple-500",
    image: "/images/ecosystem/fair.png"
  },
  {
    id: "03",
    title: "INGREDIENTS",
    subtitle: "Trading international & écosystèmes durables",
    description: "Nous connectons producteurs, fournisseurs et investisseurs autour des produits biologiques pour construire des chaînes de valeur performantes.",
    icon: Leaf,
    color: "bg-green-500/10 text-green-500",
    image: "/images/ecosystem/foods.png"
  },
  {
    id: "04",
    title: "INVESTMENTS",
    subtitle: "De la vision au projet structuré",
    description: "Accompagnement du développement de projets d’investissement : structuration, stratégie, mise en relation financière.",
    icon: BarChart3,
    color: "bg-amber-500/10 text-amber-500",
    image: "/images/ecosystem/investment.jpg"
  },
  {
    id: "05",
    title: "INSTITUTE",
    subtitle: "Éducation intelligente & impact durable",
    description: "Création de plateformes EdTech pour préparer aux défis de demain via des contenus éducatifs innovants et interactifs.",
    icon: School,
    color: "bg-red-500/10 text-red-500",
    image: "/images/ecosystem/edtech.png"
  },
  {
    id: "06",
    title: "INTELLIGENCE",
    subtitle: "Le moteur digital de votre performance",
    description: "Automatisation, data, outils sur mesure… toutes nos solutions sont amplifiées par des systèmes digitaux intelligents.",
    icon: Zap,
    color: "bg-cyan-500/10 text-cyan-500",
    image: "/images/ecosystem/prime.jpg"
  }
];

export default function EcosystemsSection() {
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
          <h4 className="text-accent font-bold text-xs tracking-[0.2em] uppercase mb-4">Un système interconnecté</h4>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Nos 6 Écosystèmes</h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Chaque écosystème répond à un levier clé de croissance. <br className="hidden md:block" />
            Ensemble, ils créent un avantage compétitif unique et durable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ECOSYSTEMS.map((eco, index) => (
            <motion.div
              key={eco.id}
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
                {/* Image Header */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={eco.image}
                    alt={eco.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating Icon on Image */}
                  <div className="absolute bottom-4 left-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${eco.color} backdrop-blur-md shadow-lg border border-white/20`}
                    >
                      <eco.icon className="w-6 h-6" />
                    </motion.div>
                  </div>

                  <div className="absolute top-4 right-6 text-white/50 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 -translate-y-1" />
                  </div>
                </div>

                <div className="p-8 pt-6 flex flex-col grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-accent/60 tracking-widest uppercase">{eco.id} — Écosystème</span>
                      <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase group-hover:text-accent transition-colors">{eco.title}</h3>
                    </div>
                  </div>

                  <p className="text-accent font-bold text-[11px] mb-4 uppercase tracking-wider">{eco.subtitle}</p>

                  <p className="text-slate-500 leading-relaxed text-sm font-medium">
                    {eco.description}
                  </p>

                  <div className="mt-auto pt-6 flex items-center gap-2 group/btn cursor-pointer">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider group-hover/btn:text-blue-600 transition-colors">En savoir plus</span>
                    <div className="h-[2px] w-4 bg-slate-200 group-hover/btn:w-8 group-hover/btn:bg-blue-600 transition-all duration-300" />
                  </div>
                </div>

                {/* Subtle bottom accent line on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-blue-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
