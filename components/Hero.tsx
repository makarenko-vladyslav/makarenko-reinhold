"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-dark">
      {/* Background Parallax Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src={t("hero.imageUrl")} 
          alt="Cleaning Service" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/90 to-transparent" />
      </motion.div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide uppercase">{t("hero.badge")}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6 text-balance">
            {t("hero.title")}
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
            {t("hero.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#calculator"
              className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-all hover:shadow-[0_0_30px_hsl(175_75%_35%/0.5)] hover:-translate-y-1"
            >
              {t("hero.ctaPrimary")}
            </Link>
            <Link 
              href="#services"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg text-center transition-all backdrop-blur-sm"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </motion.div>

        {/* Floating Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[600px]"
        >
          {/* Main Card */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 glass-panel-dark p-8 rounded-3xl animate-[float_6s_ease-in-out_infinite]">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="text-4xl font-display font-bold text-white mb-2">{t("hero.stat1")}</div>
            <div className="text-white/60 font-medium">{t("hero.stat1Label")}</div>
          </div>

          {/* Secondary Card */}
          <div className="absolute left-10 bottom-20 w-64 glass-panel-dark p-6 rounded-3xl animate-[float_8s_ease-in-out_infinite_reverse]">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="text-3xl font-display font-bold text-accent mb-1">{t("hero.stat2")}</div>
            <div className="text-white/60 text-sm">{t("hero.stat2Label")}</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-light to-transparent z-10" />
    </section>
  );
}