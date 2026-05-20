"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { ShieldCheck, ArrowRight } from '@phosphor-icons/react';

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-primary">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://picsum.photos/seed/scandinavian-living-room-clean/1920/1080" 
          alt="Clean home" 
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        {/* Gradient Overlay - Darker on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-primary/40" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
            <ShieldCheck size={20} weight="duotone" className="text-accent" />
            <span className="text-sm font-semibold tracking-wide">{t('hero.badge') as string}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 whitespace-pre-line">
            {t('hero.title') as string}
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
            {t('hero.subtitle') as string}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#calculator" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 group">
              {t('hero.ctaPrimary') as string}
              <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all">
              {t('hero.ctaSecondary') as string}
            </a>
          </div>
        </motion.div>

        {/* Floating Stats Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden md:block justify-self-end"
        >
          <div className="glass-panel p-8 rounded-2xl max-w-sm animate-[float_6s_ease-in-out_infinite]">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <ShieldCheck size={28} weight="duotone" className="text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">{t('hero.stat1') as string}</div>
                  <div className="text-sm font-medium text-text-muted">{t('hero.stat1Label') as string}</div>
                </div>
              </div>
              <div className="h-px bg-border w-full" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <span className="text-accent font-bold text-xl">✓</span>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">{t('hero.stat2') as string}</div>
                  <div className="text-sm font-medium text-text-muted">{t('hero.stat2Label') as string}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}