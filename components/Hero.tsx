"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { ShieldIcon, StarIcon } from "./Icons";

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Clean modern home" 
          className="w-full h-full object-cover"
        />
        {/* Single elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/95 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {t("hero.badge")}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6 whitespace-pre-line"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a 
              href="#calculator" 
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-[0_0_30px_hsl(185_80%_40%/0.5)] hover:-translate-y-1"
            >
              {t("hero.ctaPrimary")}
            </a>
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg transition-all"
            >
              {t("hero.ctaSecondary")}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Trust Card */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
        className="hidden lg:flex absolute bottom-12 right-12 glass-panel-dark p-6 rounded-2xl max-w-sm items-start gap-4"
      >
        <div className="p-3 bg-accent/20 rounded-xl text-accent">
          <ShieldIcon className="w-8 h-8" />
        </div>
        <div>
          <div className="flex items-center gap-1 text-accent mb-1">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4" filled />)}
          </div>
          <h3 className="text-white font-bold text-lg mb-1">{t("hero.trustCard.title")}</h3>
          <p className="text-white/70 text-sm leading-relaxed">{t("hero.trustCard.text")}</p>
        </div>
      </motion.div>
    </section>
  );
}
