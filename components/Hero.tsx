"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-primary">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src={t("hero.imageUrl")} 
          alt="Cleaning Service" 
          className="w-full h-full object-cover"
        />
        {/* Single Gradient Overlay as per rules */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12">
        <div className="max-w-2xl pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-white">{t("hero.badge")}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
            dangerouslySetInnerHTML={{ __html: t("hero.title") }}
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#calculator" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_hsl(185_80%_40%_/_0.4)] hover:shadow-[0_0_40px_hsl(185_80%_40%_/_0.6)] hover:-translate-y-1">
              {t("hero.ctaPrimary")}
            </a>
            <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              {t("hero.ctaSecondary")}
            </a>
          </motion.div>
        </div>

        {/* Floating Stats Card */}
        <div className="hidden lg:flex items-center justify-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="glass-card-dark p-8 rounded-3xl w-full max-w-sm relative animate-float"
            style={{ perspective: 1000 }}
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-light/50 rounded-full blur-2xl" />
            
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white">{t("hero.stat1.value")}</div>
                  <div className="text-sm text-white/70">{t("hero.stat1.label")}</div>
                </div>
              </div>
              
              <div className="h-px w-full bg-white/10" />
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white">{t("hero.stat2.value")}</div>
                  <div className="text-sm text-white/70">{t("hero.stat2.label")}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom fade transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-light to-transparent z-10" />
    </section>
  );
}
