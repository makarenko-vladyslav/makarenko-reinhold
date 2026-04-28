
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { IconCheckCircle } from "./Icons";

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <img 
          src={t("hero.imageUrl")} 
          alt="Clean Room" 
          className="w-full h-full object-cover"
        />
        {/* Single Gradient Overlay - Dark to Right for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/20 mix-blend-multiply" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="max-w-2xl"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wide uppercase mb-6 border border-accent/30"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {t("hero.badge")}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6 text-balance"
          >
            {t("hero.title").split('\n').map((line: string, i: number) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-gray-300 mb-10 text-balance leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#pricing" 
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center shadow-[0_0_30px_hsl(185_75%_45%/0.4)] hover:shadow-[0_0_40px_hsl(185_75%_45%/0.6)] hover:-translate-y-1"
            >
              {t("hero.ctaPrimary")}
            </a>
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all text-center hover:-translate-y-1"
            >
              {t("hero.ctaSecondary")}
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Trust Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="hidden lg:block justify-self-end animate-float"
        >
          <div className="glass-panel-dark p-6 rounded-2xl shadow-2xl max-w-xs border border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <IconCheckCircle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">{t("hero.trustBadge")}</h3>
                <p className="text-gray-400 text-sm">Vi garanterer at boligen blir godkjent ved overtakelse.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Angled Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white clip-diagonal z-20" />
    </section>
  );
}
