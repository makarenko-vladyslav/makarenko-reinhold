
"use client";
import { useLocale } from "@/lib/i18n";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";
import { useRef } from "react";

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-primary">
      {/* Parallax Background Image */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/norway-clean-home/1920/1080" 
          alt="Clean home interior" 
          className="w-full h-full object-cover"
        />
        {/* Precise geometric overlay instead of muddy gradient */}
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-white/10 border border-bg-white/20 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-bg-white">{t('hero.badge')}</span>
          </div>
          
          <h1 
            className="text-5xl md:text-7xl font-display font-bold text-bg-white leading-[1.1] mb-6"
            dangerouslySetInnerHTML={{ __html: t('hero.title') }}
          />
          
          <p className="text-lg md:text-xl text-bg-white/80 leading-relaxed mb-10 max-w-lg">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => document.getElementById('calculator')?.scrollIntoView()}>
              {t('hero.ctaPrimary')}
            </Button>
            <Button variant="outline" className="border-bg-white/30 text-bg-white hover:bg-bg-white hover:text-primary" onClick={() => document.getElementById('services')?.scrollIntoView()}>
              {t('hero.ctaSecondary')}
            </Button>
          </div>
        </motion.div>

        {/* Floating Trust Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="hidden lg:block relative"
        >
          <div className="glass-panel-dark p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
            
            <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-display font-bold text-bg-white mb-2">{t('hero.floatingCard.title')}</h3>
            <p className="text-bg-white/60 mb-8">{t('hero.floatingCard.desc')}</p>
            
            <div className="flex items-end gap-4 border-t border-bg-white/10 pt-6">
              <span className="text-5xl font-display font-bold text-accent">{t('hero.floatingCard.stat')}</span>
              <span className="text-bg-white/80 font-medium pb-2">{t('hero.floatingCard.statLabel')}</span>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 glass-panel-dark px-6 py-4 rounded-2xl flex items-center gap-3"
          >
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="text-sm font-bold text-bg-white">Ledig kapasitet denne uken</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
