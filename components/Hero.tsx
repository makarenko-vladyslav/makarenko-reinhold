
"use client";
import { useLocale } from '@/lib/i18n';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, CheckCircle } from '@phosphor-icons/react';
import { useRef } from 'react';

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Image with Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/scandiclean/1920/1080" 
          alt="Clean interior" 
          className="w-full h-full object-cover object-center opacity-40"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent mix-blend-multiply" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <ShieldCheck size={20} weight="duotone" className="text-accent" />
              <span className="text-white text-sm font-semibold tracking-wide">{t('hero.badge') as string}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6 text-balance">
              {t('hero.title') as string}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
              {t('hero.subtitle') as string}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#calculator" className="bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-accent-hover transition-all hover:-translate-y-1 shadow-lg shadow-accent/30">
                {t('hero.ctaPrimary') as string}
              </a>
              <a href="#services" className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-white/20 transition-all">
                {t('hero.ctaSecondary') as string}
              </a>
            </div>
          </motion.div>

          {/* Floating Trust Card (L-Shape pattern element) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="hidden lg:block justify-self-end w-full max-w-md"
          >
            <div className="bg-surface rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10" />
              
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle size={28} weight="duotone" className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-primary mb-1">Flyttevask Garanti</h3>
                  <p className="text-text-muted text-sm">Godkjent av megler eller vi vasker på nytt gratis.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-bg-light pt-6">
                <div>
                  <div className="text-3xl font-display font-bold text-primary mb-1">{t('hero.stat1') as string}</div>
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider">{t('hero.stat1Label') as string}</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary mb-1">{t('hero.stat2') as string}</div>
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider">{t('hero.stat2Label') as string}</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
