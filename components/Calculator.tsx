
"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(80);
  const [frequency, setFrequency] = useState('engang');
  const [price, setPrice] = useState(0);

  const frequencies = t('calculator.frequencies') as any[];

  useEffect(() => {
    const base = sqm * pricing.basePrices.perSqm;
    const multiplier = pricing.multipliers[frequency as keyof typeof pricing.multipliers] || 1;
    const calculated = Math.max(base * multiplier, pricing.minPrice);
    setPrice(Math.round(calculated));
  }, [sqm, frequency]);

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent rounded-full blur-[100px] opacity-20" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">{t('calculator.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{t('calculator.title')}</h2>
          <p className="text-white/70 text-lg">{t('calculator.subtitle')}</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel-dark p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Controls */}
            <div className="space-y-10">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="font-medium text-white/90">{t('calculator.sizeLabel')}</label>
                  <span className="font-display font-bold text-accent text-xl">{sqm} m²</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="300" 
                  step="5" 
                  value={sqm} 
                  onChange={(e) => setSqm(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs text-white/50 mt-2">
                  <span>20 m²</span>
                  <span>300 m²</span>
                </div>
              </div>

              <div>
                <label className="font-medium text-white/90 block mb-4">{t('calculator.frequencyLabel')}</label>
                <div className="space-y-3">
                  {frequencies.map((f) => (
                    <label key={f.value} className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${frequency === f.value ? 'border-accent bg-accent/10' : 'border-white/10 hover:border-white/30'}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${frequency === f.value ? 'border-accent' : 'border-white/30'}`}>
                          {frequency === f.value && <div className="w-2.5 h-2.5 rounded-full bg-accent" />}
                        </div>
                        <span className={frequency === f.value ? 'text-white font-medium' : 'text-white/70'}>{f.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="bg-surface-dark/50 p-8 rounded-2xl border border-white/5 text-center flex flex-col justify-center h-full">
              <div className="text-white/60 mb-2">{t('calculator.estimatedPrice')}</div>
              <div className="text-6xl font-display font-bold text-white mb-2 flex items-baseline justify-center gap-2">
                {price} <span className="text-2xl text-accent">NOK</span>
              </div>
              <div className="text-xs text-white/40 mb-8 max-w-xs mx-auto leading-relaxed">
                {t('calculator.disclaimer')}
              </div>
              <a 
                href="#contact" 
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_hsl(185_75%_40%_/_0.3)] hover:-translate-y-1 w-full block"
              >
                {t('calculator.cta')}
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
