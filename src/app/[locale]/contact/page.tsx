"use client";

import { motion } from "motion/react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight
} from "lucide-react";

import { Variants } from "motion/react";

const SOCIAL_ICONS = {
  Linkedin: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Instagram: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  Twitter: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
};

import { useTranslations } from 'next-intl';
import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations('Contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-canvas selection:bg-accent selection:text-white">
      <Navbar />

      <main className="grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <h4 className="text-accent font-bold text-xs tracking-[0.2em] uppercase mb-4">{t('label')}</h4>
            <h1 className="text-5xl md:text-7xl font-black text-ink tracking-tighter leading-none mb-8">
              {t('line1')} <br />
              {t('line2')} <span className="text-accent">{t('impact')}</span>.
            </h1>
            <p className="text-xl text-muted font-medium max-w-2xl leading-relaxed">
              {t('description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Info Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-5 space-y-8"
            >
              {[
                { icon: Mail, label: t('email_label'), value: "welcome-home@primices-international.com", href: "mailto:welcome-home@primices-international.com" },
                { icon: Phone, label: t('phone_label'), value: "+1 (613) 454-5286", href: "tel:+16134545286" },
                { icon: MapPin, label: t('office_label'), value: "Ottawa, Canada", href: "#" }
              ].map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-8 bg-white border border-ink/5 rounded-3xl shadow-sm hover:shadow-md hover:border-accent/20 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">{info.label}</p>
                    <p className="text-md font-bold text-ink whitespace-nowrap">{info.value}</p>
                  </div>
                </motion.a>
              ))}

              <motion.div variants={itemVariants} className="pt-8">
                <p className="text-sm font-bold text-ink uppercase tracking-widest mb-6">{t('follow')}</p>
                <div className="flex gap-4">
                  {[SOCIAL_ICONS.Linkedin, SOCIAL_ICONS.Instagram, SOCIAL_ICONS.Twitter].map((Icon, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:text-accent hover:border-accent transition-colors cursor-pointer"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="lg:col-span-7"
            >
              <Card className="p-10 md:p-16 border-ink/5 bg-white shadow-xl rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16" />

                <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-ink uppercase tracking-widest ml-1">{t('form.name_label')}</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-14 px-6 rounded-2xl bg-canvas border-transparent focus:bg-white focus:border-accent/30 focus:ring-0 transition-all font-medium text-ink outline-none"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-ink uppercase tracking-widest ml-1">{t('form.email_label')}</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-14 px-6 rounded-2xl bg-canvas border-transparent focus:bg-white focus:border-accent/30 focus:ring-0 transition-all font-medium text-ink outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-ink uppercase tracking-widest ml-1">{t('form.subject_label')}</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-14 px-6 rounded-2xl bg-canvas border-transparent focus:bg-white focus:border-accent/30 focus:ring-0 transition-all font-medium text-ink outline-none appearance-none"
                    >
                      <option value="" disabled>{t('form.default')}</option>
                      <option value="Réjoindre l'écosystème">{t('form.subject_option1')}</option>
                      <option value="Coaching et Leadership">{t('form.subject_option2')}</option>
                      <option value="Investissement">{t('form.subject_option3')}</option>
                      <option value="Autre">{t('form.subject_option4')}</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-ink uppercase tracking-widest ml-1">{t('form.message_label')}</label>
                    <textarea
                      required
                      placeholder={t('form.message_placeholder')}
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-6 py-5 rounded-2xl bg-canvas border-transparent focus:bg-white focus:border-accent/30 focus:ring-0 transition-all font-medium text-ink outline-none resize-none"
                    />
                  </div>

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-2xl bg-green-50 border border-green-100 text-green-700 flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <p className="text-sm font-bold">Message envoyé avec succès !</p>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-2xl bg-red-50 border border-red-100 text-red-700 flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <p className="text-sm font-bold">Erreur lors de l'envoi. Veuillez réessayer.</p>
                    </motion.div>
                  )}

                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    size="lg"
                    className="w-full h-16 rounded-2xl bg-accent hover:bg-accent/90 text-white font-bold text-lg group shadow-lg shadow-accent/20 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        {t('form.submit')}
                        <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
