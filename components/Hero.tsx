"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { IconCheck, IconShield } from './Icons';

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-dark">
      {/* Background Image with Parallax & Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img src={t('hero.imageUrl')} alt="Clean Interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-8">
            <IconShield className="w-4 h-4 text-accent-light" />
            {t('hero.badge')}
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-balance">
            {t('hero.title').split('.')[0]}.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">
              {t('hero.title').split('.')[1]}.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#calculator" className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-bold text-center transition-all shadow-[0_0_30px_hsl(175_70%_35%/0.4)] hover:shadow-[0_0_40px_hsl(175_70%_35%/0.6)] hover:-translate-y-1">
              {t('hero.ctaPrimary')}
            </a>
            <a href="#services" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-bold text-center transition-all border border-white/10">
              {t('hero.ctaSecondary')}
            </a>
          </div>

          <div className="flex items-center gap-3 text-sm text-white/60 font-medium">
            <IconCheck className="w-5 h-5 text-accent" />
            {t('hero.trust')}
          </div>
        </motion.div>

        {/* Right: Floating Glass Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block relative"
        >
          <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
          <div className="glass-panel-dark p-8 rounded-3xl relative animate-float">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <IconShield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">100% Garanti</h3>
                <p className="text-white/60 text-sm">Flyttevask godkjent eller gratis retting</p>
              </div>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <IconCheck className="w-4 h-4 text-accent-light" />
                  </div>
                  <div className="h-2 bg-white/20 rounded-full w-full" />
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
              <span className="text-white/60">Fra 550 NOK/time</span>
              <div className="flex -space-x-2">
                {[1,2,3].map(i => <img key={i} src={`https://picsum.photos/seed/face${i}/40/40`} className="w-8 h-8 rounded-full border-2 border-bg-dark" alt="User" />)}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
