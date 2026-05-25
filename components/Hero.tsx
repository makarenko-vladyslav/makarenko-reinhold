"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { useRef } from "react";

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src={t("hero.imageUrl")} 
          alt="Cleaning Service Notodden" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Single clean gradient overlay as per rules */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/90 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12 pt-20">
        
        {/* Text Content */}
        <div className="max-w-2xl text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium tracking-wide">{t("hero.badge")}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-balance"
          >
            {t("hero.title")}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-xl text-balance"
          >
            {t("hero.subtitle")}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#calculator" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_hsl(195_85%_45%/0.4)] hover:shadow-[0_0_40px_hsl(195_85%_45%/0.6)] hover:-translate-y-1">
              {t("hero.ctaPrimary")}
            </a>
            <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              {t("hero.ctaSecondary")}
            </a>
          </motion.div>
        </div>

        {/* Floating Trust Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="hidden lg:block w-80 glass-card rounded-3xl p-6 shadow-2xl relative animate-float"
        >
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          </div>
          <p className="text-sm text-text-muted font-bold uppercase tracking-wider mb-1">Startpris</p>
          <p className="text-4xl font-display font-bold text-primary mb-6">{t("hero.priceTag").replace('Fra ', '').replace('Від ', '')}</p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-bg-light flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <p className="text-sm font-medium text-text-main leading-tight">Arbeidstilsynet Godkjent</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-bg-light flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
              </div>
              <p className="text-sm font-medium text-text-main leading-tight">Personlige HMS-kort</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
