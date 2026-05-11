"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { ShieldIcon } from './Icons';

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-[100svh] min-h-[700px] flex items-center overflow-hidden bg-primary">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <img 
          src="https://picsum.photos/seed/cleaning-hero-pro/1920/1080" 
          alt="Professional cleaning" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient Overlay: Multi-stop for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <ShieldIcon className="w-4 h-4 text-accent" />
              <span className="text-white text-xs font-bold tracking-wide uppercase">{t('hero.badge')}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 text-balance">
              {t('hero.title').split('.').map((part: string, i: number, arr: string[]) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-accent">.</span>}
                </React.Fragment>
              ))}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed text-balance">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#pricing"
                className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-full font-semibold transition-all shadow-[0_0_30px_hsl(185_80%_40%/0.4)] hover:shadow-[0_0_40px_hsl(185_80%_40%/0.6)] hover:-translate-y-1"
              >
                {t('hero.ctaPrimary')}
              </a>
              <a 
                href="#services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-1"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Trust Card (Desktop) */}
        <div className="hidden lg:block lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            style={{ perspective: 1000 }}
            className="relative z-20"
          >
            <div className="glass-panel-dark p-8 rounded-3xl animate-float">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
                <ShieldIcon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-2">{t('hero.trustCard.title')}</h3>
              <p className="text-xl text-accent font-medium mb-4">{t('hero.trustCard.subtitle')}</p>
              <div className="h-px bg-white/10 w-full mb-4" />
              <p className="text-white/70">{t('hero.trustCard.text')}</p>
              
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-accent/20 blur-3xl -z-10 rounded-full opacity-50" />
            </div>
          </motion.div>
        </div>

      </div>
      
      {/* Bottom angled edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V120h1200z" fill="hsl(210, 20%, 98%)"></path>
        </svg>
      </div>
    </section>
  );
}