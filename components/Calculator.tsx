"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';
import SectionHeading from './ui/SectionHeading';
import { motion, animate } from 'framer-motion';

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(70);
  const [displayPrice, setDisplayPrice] = useState(0);

  const calculatePrice = (sqmValue: number) => {
    const base = pricing.flyttevask.basePrice;
    const extraSqm = Math.max(0, sqmValue - pricing.flyttevask.minSqm);
    return base + (extraSqm * pricing.flyttevask.perSqm);
  };

  const targetPrice = calculatePrice(sqm);

  useEffect(() => {
    const controls = animate(displayPrice, targetPrice, {
      duration: 0.5,
      onUpdate: (val) => setDisplayPrice(Math.round(val)),
    });
    return controls.stop;
  }, [targetPrice]);

  const includes = t('calculator.includes') as string[];

  return (
    <section id="calculator" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading 
              badge={t('calculator.badge')}
              title={t('calculator.title')}
              subtitle={t('calculator.subtitle')}
            />
            
            <div className="space-y-4 mt-8">
              {includes.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-bg-tint rounded-3xl p-8 md:p-12 border border-gray-100 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative bg */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-between items-end mb-4">
                <label className="font-display font-bold text-primary text-xl">{t('calculator.sqmLabel')}</label>
                <span className="text-3xl font-display font-bold text-accent">{sqm} m²</span>
              </div>
              
              <input 
                type="range" 
                min={pricing.flyttevask.minSqm} 
                max={pricing.flyttevask.maxSqm} 
                value={sqm}
                onChange={(e) => setSqm(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent mb-12"
              />

              <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-8 text-center shadow-sm">
                <p className="text-text-muted font-medium mb-2 uppercase tracking-wider text-sm">{t('calculator.estimatedPrice')}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-display font-bold text-primary">{displayPrice.toLocaleString('no-NO')}</span>
                  <span className="text-xl font-medium text-text-muted">{pricing.currency}</span>
                </div>
                <p className="text-xs text-text-muted mt-3">{t('calculator.disclaimer')}</p>
              </div>

              <a href="#contact" className="block w-full bg-primary hover:bg-primary-light text-white text-center py-4 rounded-xl font-bold text-lg transition-colors">
                {t('calculator.cta')}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
