"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { Icons } from "@/components/ui/Icons";
import { useRef } from "react";

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const stats = t("hero.stats") as { value: string; label: string }[];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-bg-dark bg-grid-dark">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-light/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content (Left) */}
        <motion.div 
          className="lg:col-span-6 flex flex-col items-start"
          style={{ y, opacity }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-white/90">{t("hero.badge")}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            {t("hero.title")} <br />
            <span className="text-gradient italic pr-2">{t("hero.titleAccent")}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-lg mb-10 leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a href="#calculator" className="bg-accent text-white px-8 py-4 rounded-full font-bold text-center hover:bg-accent-dark transition-all shadow-[0_0_30px_hsl(185_80%_40%_/_0.3)] hover:shadow-[0_0_40px_hsl(185_80%_40%_/_0.5)] hover:-translate-y-1">
              {t("hero.ctaPrimary")}
            </a>
            <a href="#services" className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 transition-all backdrop-blur-sm">
              {t("hero.ctaSecondary")}
            </a>
          </motion.div>
        </motion.div>

        {/* Bento Grid (Right) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="lg:col-span-6 grid grid-cols-2 gap-4"
        >
          {/* Large Card */}
          <div className="col-span-2 glass-panel-dark rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-colors" />
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6">
              <Icons.shield />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">{stats[0].value}</h3>
            <p className="text-white/60 font-medium">{stats[0].label}</p>
          </div>

          {/* Small Card 1 */}
          <div className="col-span-1 glass-panel-dark rounded-3xl p-6 relative overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white mb-4">
              <Icons.check />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stats[1].value}</h3>
            <p className="text-white/60 text-sm">{stats[1].label}</p>
          </div>

          {/* Small Card 2 */}
          <div className="col-span-1 glass-panel-dark rounded-3xl p-6 relative overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white mb-4">
              <Icons.leaf />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stats[2].value}</h3>
            <p className="text-white/60 text-sm">{stats[2].label}</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
