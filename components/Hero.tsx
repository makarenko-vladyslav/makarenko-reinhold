"use client";
import { useLocale } from '@/lib/i18n';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, CheckCircle, ArrowRight } from '@phosphor-icons/react';

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-bg-dark">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1527515637-695d7f763f96?q=80&w=2070&auto=format&fit=crop" 
          alt="Clean Scandinavian Interior" 
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        {/* Single authoritative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-2xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8"
          >
            <ShieldCheck size={20} weight="duotone" className="text-accent" />
            <span className="text-white font-medium text-sm tracking-wide">{t('hero.badge')}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
            dangerouslySetInnerHTML={{ __html: t('hero.title') }}
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#kalkulator" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-premium hover:shadow-premium-hover hover:-translate-y-1">
              {t('hero.ctaPrimary')}
              <ArrowRight size={20} weight="bold" />
            </a>
            <a href="#tjenester" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center transition-all">
              {t('hero.ctaSecondary')}
            </a>
          </motion.div>

          {/* Trust Points */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-8"
          >
            {(t('hero.trust') as string[]).map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <CheckCircle size={20} weight="fill" className="text-accent" />
                {item}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
