"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { useRef } from "react";

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[700px] flex items-center overflow-hidden bg-primary">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/cleaning-livingroom/1920/1080" 
          alt="Clean living room" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center pt-20">
        
        {/* Text Content */}
        <motion.div 
          style={{ opacity }}
          className="lg:col-span-7 text-white"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-sm font-semibold tracking-wide">{t('hero.badge')}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a 
              href="#calculator" 
              className="px-8 py-4 bg-accent hover:bg-accent-light text-white rounded-full font-bold transition-all shadow-[0_0_30px_hsl(185_75%_35%/0.4)] hover:shadow-[0_0_40px_hsl(185_75%_35%/0.6)] hover:-translate-y-1"
            >
              {t('hero.ctaPrimary')}
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-bold transition-all"
            >
              {t('hero.ctaSecondary')}
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Glass Card (Stats/Trust) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="lg:col-span-5 hidden md:block"
          style={{ perspective: 1000 }}
        >
          <div className="glass-panel-dark p-8 rounded-3xl relative overflow-hidden">
            {/* Decorative orb */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent rounded-full blur-[60px] opacity-30" />
            
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {(t('hero.stats') as {value: string, label: string}[]).map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-display font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-accent/10 border border-accent/20 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold mb-1">Svanemerket Renhold</div>
                <div className="text-sm text-white/60">Miljøvennlig og trygt for alle</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
