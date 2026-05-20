"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { Button } from './UI';

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <img 
          src={t('hero.image')} 
          alt="Clean interior" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Single gradient overlay for readability while keeping image visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 text-white pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {t('hero.badge')}
            </span>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              {t('hero.title')} <br/>
              <span className="text-gradient block mt-2">{t('hero.titleHighlight')}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-inverse-muted max-w-xl mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#calculator">
                <Button variant="primary" className="w-full sm:w-auto text-lg px-10 py-5">
                  {t('hero.ctaPrimary')}
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" className="w-full sm:w-auto text-lg px-10 py-5">
                  {t('hero.ctaSecondary')}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Guarantee Card */}
        <motion.div 
          className="lg:col-span-5 hidden lg:block"
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          style={{ perspective: 1000 }}
        >
          <div className="glass-panel-dark rounded-3xl p-8 relative overflow-hidden transform-gpu hover:-translate-y-2 transition-transform duration-500">
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/30 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 border border-accent/30">
                <svg className="w-8 h-8 text-accent-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-display font-bold text-white mb-2">
                {t('hero.guaranteeTitle')}
              </h3>
              <p className="text-text-inverse-muted mb-8">
                {t('hero.guaranteeText')}
              </p>
              
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-accent-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5L20 7"/></svg>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full flex-1 overflow-hidden">
                      <motion.div 
                        className="h-full bg-accent"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
