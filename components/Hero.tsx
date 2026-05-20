"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-primary">
      {/* Parallax Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/norway-home-clean/1920/1080" 
          alt="Clean home interior" 
          className="w-full h-full object-cover"
        />
        {/* Single elegant gradient overlay - NO muddy stacking */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-dark mb-6 border-white/20"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase">{t('hero.badge')}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight"
          >
            {t('hero.title').split('Garantert.').map((part: string, i: number, arr: any[]) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-accent italic">Garantert.</span>}
              </span>
            ))}
            {/* Fallback if split doesn't match translated string perfectly */}
            {!t('hero.title').includes('Garantert.') && t('hero.title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#calculator" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-accent/30 text-center flex items-center justify-center gap-2">
              {t('hero.ctaPrimary')}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#services" className="glass-panel-dark hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center">
              {t('hero.ctaSecondary')}
            </a>
          </motion.div>
        </div>

        {/* Floating Trust/Calculator Entry Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          style={{ perspective: 1000 }}
          className="lg:col-span-5 hidden md:block"
        >
          <div className="glass-panel rounded-3xl p-8 transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-500 shadow-2xl">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-primary text-lg">100% Trygghet</h3>
                <p className="text-sm text-text-muted">{t('hero.trust')}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-main font-medium">Fast pris på Flyttevask</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-main font-medium">Overtakelsesgaranti</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-main font-medium">Svanemerkede produkter</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-text-muted mb-2">Priser fra</p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-display font-bold text-primary">550</span>
                <span className="text-lg text-text-muted mb-1">NOK/time</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
