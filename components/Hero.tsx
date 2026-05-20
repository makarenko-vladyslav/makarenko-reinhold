"use client";
import { useLocale } from '@/lib/i18n';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const stats = t('hero.stats') as { value: string; label: string }[];

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-primary">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src={t('hero.imageUrl')} 
          alt="Cleaning Service" 
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('img-fallback') }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-white text-sm font-medium tracking-wide">{t('hero.badge')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6 text-balance">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#calculator" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_hsl(150_75%_38%_/_0.4)] hover:-translate-y-1 text-center flex items-center justify-center gap-2">
                {t('hero.ctaPrimary')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center">
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Trust Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="lg:col-span-5 hidden lg:block perspective-1000"
        >
          <div className="glass-panel rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-10 -mt-10" />
            
            <h3 className="text-2xl font-display font-bold text-primary mb-8">{t('trust.title')}</h3>
            
            <div className="space-y-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-bg-tint flex items-center justify-center text-accent font-bold text-xl border border-gray-100">
                    {stat.value}
                  </div>
                  <div>
                    <p className="font-bold text-primary">{stat.label}</p>
                    <p className="text-sm text-text-muted">Garantert av Makarenko</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" alt="Client" />
                ))}
              </div>
              <div className="text-right">
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <p className="text-xs font-bold text-primary mt-1">5.0 / 5.0 Rating</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
