
"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { Button } from './Shared';
import { IconCheck, IconShield, IconLeaf } from './Icons';

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] opacity-50 animate-pulse-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-white uppercase">{t('hero.badge')}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight">
              {t('hero.title').split(' ').map((word: string, i: number) => (
                <span key={i} className={word.toLowerCase() === 'notodden.' || word.toLowerCase() === 'notodden' ? 'text-accent' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <p className="text-lg md:text-xl text-text-inverse/80 mb-10 leading-relaxed max-w-xl">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#calculator">
                <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
                  {t('hero.ctaPrimary')}
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10 hover:border-white/40">
                  {t('hero.ctaSecondary')}
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right: Bento Grid Trust Signals */}
          <motion.div 
            style={{ y: y1, opacity }}
            className="relative lg:h-[600px] flex flex-col gap-4"
          >
            {/* Main Image Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img 
                src="https://picsum.photos/seed/clean-hero/800/600" 
                alt="Professional Cleaning" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-panel-dark p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-lg">Makarenko Reinhold</p>
                    <p className="text-accent text-sm">Est. 2024 • Notodden</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <IconCheck className="text-accent w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {/* Trust Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="glass-panel-dark p-6 rounded-2xl border border-white/10 flex flex-col justify-center"
              >
                <IconShield className="text-accent w-8 h-8 mb-3" />
                <h3 className="text-white font-bold text-lg mb-1">{t('hero.trust1')}</h3>
                <p className="text-white/60 text-sm">På flyttevask</p>
              </motion.div>

              {/* Trust Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="glass-panel-dark p-6 rounded-2xl border border-white/10 flex flex-col justify-center"
              >
                <IconLeaf className="text-accent w-8 h-8 mb-3" />
                <h3 className="text-white font-bold text-lg mb-1">{t('hero.trust3')}</h3>
                <p className="text-white/60 text-sm">Miljøvennlig</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
