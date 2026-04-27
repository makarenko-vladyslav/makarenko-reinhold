
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { ArrowRightIcon, ShieldIcon } from "./Icons";

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-bg-dark">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={t('hero.imageUrl') as string} 
          alt="Premium Cleaning" 
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('img-fallback') }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-bg-dark/95 mix-blend-multiply" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {t('hero.badge') as string}
              </span>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                {t('hero.title') as string}
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
                {t('hero.subtitle') as string}
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="#calculator"
                  className="px-8 py-4 rounded-full bg-accent text-white font-bold text-lg transition-all hover:bg-accent-light hover:scale-105 hover:shadow-[0_0_30px_hsl(175_80%_35%/0.4)] flex items-center gap-2"
                >
                  {t('hero.ctaPrimary') as string}
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
                <a 
                  href="#services"
                  className="px-8 py-4 rounded-full bg-white/10 text-white font-bold text-lg border border-white/20 transition-all hover:bg-white/20 backdrop-blur-sm"
                >
                  {t('hero.ctaSecondary') as string}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Floating Trust Card */}
          <div className="lg:col-span-5 hidden md:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="glass-card-dark p-8 rounded-3xl relative animate-float"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-light/40 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <ShieldIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">{t('hero.stats.value2') as string}</div>
                    <div className="text-white/60 text-sm">{t('hero.stats.label2') as string}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://picsum.photos/seed/face${i}/100/100`} alt="Client" className="w-12 h-12 rounded-full border-2 border-primary object-cover" />
                    ))}
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">{t('hero.stats.value1') as string}</div>
                    <div className="text-white/60 text-sm">{t('hero.stats.label1') as string}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Decorative bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-light to-transparent z-20" />
    </section>
  );
}
