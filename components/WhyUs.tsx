"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function WhyUs() {
  const { t } = useLocale();
  const points = t("whyUs.points") as string[];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="w-full lg:w-1/2">
          <SectionHeading badge={t("whyUs.badge")} title={t("whyUs.title")} subtitle={t("whyUs.subtitle")} centered={false} />
          
          <div className="space-y-4">
            {points.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-bg-light transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="font-medium text-text-main">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]"
          >
            <img src={t("whyUs.imageUrl")} alt="Cleaning Checklist" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-display font-bold text-accent mb-2">40+</p>
              <p className="font-semibold text-primary">Sjekkpunkter per vask</p>
              <p className="text-sm text-text-muted mt-1">Garanterer feilfritt resultat hver gang.</p>
            </div>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-border-light rounded-full -z-10" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-border-light rounded-full -z-10" />
        </div>

      </div>
    </section>
  );
}
