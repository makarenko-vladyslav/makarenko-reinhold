
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { ShieldCheck, Star } from "@phosphor-icons/react";

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-bg-dark">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/cleaningscandi/1920/1080" 
          alt="Clean Scandinavian Home" 
          className="w-full h-full object-cover opacity-60"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent mix-blend-multiply" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-surface/10 backdrop-blur-md border border-surface/20 text-surface px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <ShieldCheck size={18} weight="duotone" className="text-accent" />
            {t("hero.badge") as string}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-surface leading-tight mb-6 text-balance"
          >
            {t("hero.title") as string}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-surface/80 mb-10 leading-relaxed max-w-xl"
          >
            {t("hero.subtitle") as string}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#calculator" className="bg-accent text-surface px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-hover transition-all hover:scale-105 shadow-[0_0_20px_rgba(22,163,74,0.4)]">
              {t("hero.ctaPrimary") as string}
            </a>
            <a href="#services" className="bg-surface/10 backdrop-blur-md text-surface border border-surface/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-surface/20 transition-all">
              {t("hero.ctaSecondary") as string}
            </a>
          </motion.div>
        </div>

        {/* Floating Stats Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="hidden lg:block justify-self-end relative"
        >
          <div className="bg-surface p-8 rounded-3xl shadow-premium max-w-sm relative z-10">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                <ShieldCheck size={32} weight="duotone" />
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">{t("hero.stat1") as string}</div>
                <div className="text-sm text-text-muted font-medium">{t("hero.stat1Label") as string}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                <Star size={32} weight="fill" />
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">{t("hero.stat2") as string}</div>
                <div className="text-sm text-text-muted font-medium">{t("hero.stat2Label") as string}</div>
              </div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -inset-4 border border-surface/20 rounded-[2.5rem] -z-10" />
        </motion.div>

      </div>
    </section>
  );
}
