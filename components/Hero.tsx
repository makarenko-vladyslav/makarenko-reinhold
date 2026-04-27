"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-primary">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={t('hero.image')} 
          alt="Cleaning Service" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              {t('hero.badge')}
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              {t('hero.title').split('.')[0]}.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                {t('hero.title').split('.')[1]}.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#calculator"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_hsl(185_80%_40%_/_0.4)] hover:-translate-y-1 flex items-center gap-2"
              >
                {t('hero.ctaPrimary')}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a 
                href="#services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="hidden lg:block perspective-1000"
        >
          <div className="glass-card-dark rounded-3xl p-8 transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-500">
            <div className="grid grid-cols-1 gap-8">
              {(t('hero.stats') as any[]).map((stat, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center border border-accent/30 text-accent font-display font-bold text-2xl">
                    {stat.value}
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">{stat.label}</div>
                    <div className="text-gray-400 text-sm mt-1">Makarenko Reinhold</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-primary object-cover" alt="User" />
                ))}
              </div>
              <div className="text-sm text-gray-300">
                <span className="text-white font-bold">4.9/5</span> fra Notodden
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-sm text-bg-light">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 60C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
}
