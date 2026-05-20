"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { useRef } from "react";

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-primary">
      {/* Background Image with Parallax & Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src={t("hero.image") as string} 
          alt="Cleaning Service" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {t("hero.badge") as string}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
          >
            {t("hero.title") as string}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl"
          >
            {t("hero.subtitle") as string}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#calculator" className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-bold text-lg text-center transition-all hover:scale-105 shadow-lg shadow-accent/30 flex items-center justify-center gap-2">
              {t("hero.ctaPrimary") as string}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#services" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-lg text-center transition-all backdrop-blur-md border border-white/10">
              {t("hero.ctaSecondary") as string}
            </a>
          </motion.div>
        </div>

        {/* Right: Floating Stats Cards */}
        <div className="hidden lg:block relative h-[500px]">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="absolute top-1/4 right-0 glass-panel p-6 rounded-2xl w-72"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">{t("hero.stat2Value") as string}</div>
                <div className="text-sm font-medium text-text-muted">{t("hero.stat2Label") as string}</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="absolute bottom-1/4 left-10 glass-panel p-6 rounded-2xl w-72"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">{t("hero.stat1Value") as string}</div>
                <div className="text-sm font-medium text-text-muted">{t("hero.stat1Label") as string}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
