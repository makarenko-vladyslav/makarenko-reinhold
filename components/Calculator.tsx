"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';
import { SectionHeading, Button } from './UI';

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(pricing.flyttevask.defaultSqm);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // Calculate price: Base + (sqm * rate)
    const calculated = pricing.flyttevask.basePrice + (sqm * pricing.flyttevask.pricePerSqm);
    setPrice(calculated);
  }, [sqm]);

  return (
    <section id="calculator" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('calculator.badge')}
          title={t('calculator.title')}
          subtitle={t('calculator.subtitle')}
        />

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left: Interactive Slider */}
          <div className="flex-1 p-10 md:p-12">
            <div className="mb-12">
              <div className="flex justify-between items-end mb-6">
                <label className="text-lg font-semibold text-primary">{t('calculator.sizeLabel')}</label>
                <span className="text-4xl font-display font-bold text-accent">{sqm} <span className="text-xl text-text-muted">m²</span></span>
              </div>
              
              <div className="relative pt-4 pb-8">
                <input 
                  type="range" 
                  min={pricing.flyttevask.minSqm} 
                  max={pricing.flyttevask.maxSqm} 
                  value={sqm} 
                  onChange={(e) => setSqm(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-text-muted mt-4 font-medium">
                  <span>{pricing.flyttevask.minSqm} m²</span>
                  <span>{pricing.flyttevask.maxSqm} m²</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {(t('calculator.features') as string[]).map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7"/></svg>
                  </div>
                  <span className="text-text-muted font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Price Display */}
          <div className="w-full md:w-2/5 bg-primary p-10 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
            
            <div className="relative z-10">
              <span className="text-accent-light font-semibold tracking-wider uppercase text-sm mb-4 block">
                {t('calculator.priceLabel')}
              </span>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl md:text-6xl font-display font-bold tabular-nums">
                  {price.toLocaleString('no-NO')}
                </span>
                <span className="text-xl text-white/70 font-medium">NOK</span>
              </div>
              
              <Button variant="primary" className="w-full mb-6 py-4 text-lg">
                {t('calculator.cta')}
              </Button>
              
              <p className="text-xs text-white/50 leading-relaxed text-center">
                {t('calculator.disclaimer')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
