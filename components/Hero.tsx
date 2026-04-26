
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Image with slow zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://picsum.photos/seed/premium-clean-living/1920/1080')] bg-cover bg-center animate-slow-zoom"
        />
        {/* Complex Gradient Overlay for readability and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-dark mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-white/90">{t('hero.badge')}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-balance"
          >
            {t('hero.title').split('\n').map((line: string, i: number) => (
              <span key={i} className="block">
                {i === 1 ? <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">{line}</span> : line}
              </span>
            ))}
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
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#contact" 
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-center transition-all shadow-[0_0_30px_hsl(185_75%_40%_/_0.4)] hover:shadow-[0_0_40px_hsl(185_75%_40%_/_0.6)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              {t('hero.ctaPrimary')}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a 
              href="#services" 
              className="glass-panel-dark hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-center transition-all flex items-center justify-center"
            >
              {t('hero.ctaSecondary')}
            </a>
          </motion.div>
        </div>

        {/* Floating Stats Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="lg:col-span-4 lg:col-start-9 hidden md:block"
        >
          <div className="glass-panel-dark p-8 rounded-3xl animate-float">
            <div className="flex items-center gap-4 mb-8">
              <img src="https://picsum.photos/seed/anna-portrait/100/100" alt="Owner" className="w-16 h-16 rounded-full border-2 border-accent object-cover" />
              <div>
                <div className="text-white font-bold text-lg">Anna Dizhenko</div>
                <div className="text-white/60 text-sm">Eier / Owner</div>
              </div>
            </div>
            
            <div className="space-y-6">
              {(t('hero.stats') as any[]).map((stat, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <div className="text-white/70">{stat.label}</div>
                  <div className="text-accent font-display font-bold text-xl">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Decorative Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
