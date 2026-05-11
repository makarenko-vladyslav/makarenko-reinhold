
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={t('hero.image')} 
          alt="Cleaning Service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-bold tracking-wide uppercase text-white/90">
                {t('hero.badge')}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
              {t('hero.title').split('. ')[0]}. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white">
                {t('hero.title').split('. ')[1]}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed font-light">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#calculator"
                className="px-8 py-4 rounded-full bg-accent text-white font-bold text-lg text-center transition-all hover:bg-accent-light hover:shadow-[0_0_30px_hsl(158,64%,42%,0.4)] active:scale-95"
              >
                {t('hero.ctaPrimary')}
              </a>
              <a 
                href="#services"
                className="px-8 py-4 rounded-full bg-white/10 text-white font-bold text-lg text-center backdrop-blur-md border border-white/20 transition-all hover:bg-white/20 active:scale-95"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats Card */}
        <div className="lg:col-span-5 hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            style={{ perspective: 1000 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-accent to-primary rounded-3xl blur-2xl opacity-30 animate-pulse-slow" />
            
            <div className="glass-panel-dark rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-10 -mt-10" />
              
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center text-accent-light">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-white">{t('hero.stat1')}</div>
                    <div className="text-sm text-white/60 uppercase tracking-wider">{t('hero.stat1Label')}</div>
                  </div>
                </div>

                <div className="w-full h-px bg-white/10" />

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-white">{t('hero.stat2')}</div>
                    <div className="text-sm text-white/60 uppercase tracking-wider">{t('hero.stat2Label')}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Bottom curved edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-bg-light" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }} />
    </section>
  );
}
