
"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { useRef } from 'react';

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Image with Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src={t('hero.imageUrl')} 
          alt="Clean interior" 
          className="w-full h-full object-cover object-center"
          onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('img-fallback') }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply" />
      </motion.div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 text-white pt-12 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-semibold tracking-wide uppercase">{t('hero.badge')}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6"
            dangerouslySetInnerHTML={{ __html: t('hero.title') }}
          />
          
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
            className="flex flex-wrap gap-4"
          >
            <a href="#calculator" className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_hsl(183_74%_35%/0.4)] hover:shadow-[0_0_40px_hsl(183_74%_35%/0.6)] hover:-translate-y-1">
              {t('hero.ctaPrimary')}
            </a>
            <a href="#services" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg transition-all hover:-translate-y-1">
              {t('hero.ctaSecondary')}
            </a>
          </motion.div>
        </div>

        {/* Bento/Floating Cards (Right Side) */}
        <div className="lg:col-span-5 relative hidden md:block h-[500px]">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="absolute top-10 right-0 w-80 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-white">{t('hero.stat2Value')}</div>
                <div className="text-sm text-white/70">{t('hero.stat2Label')}</div>
              </div>
            </div>
            <div className="space-y-3">
              {[1,2,3].map(i => (
                <div key={i} className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8 + (i*0.2), duration: 1 }}
                    className="h-full bg-accent"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="absolute bottom-10 left-0 w-72 bg-primary/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl font-display font-bold text-white">{t('hero.stat1Value')}</div>
              <div className="text-sm text-white/70 leading-tight">{t('hero.stat1Label')}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
