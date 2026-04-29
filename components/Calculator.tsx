"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';
import SectionHeading from './SectionHeading';
import { IconCheck } from './Icons';

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(80);
  const [price, setPrice] = useState(0);

  const { basePricePerSqm, minPrice, minSqm, maxSqm } = pricing.services.flyttevask;

  useEffect(() => {
    const calculated = Math.max(minPrice, sqm * basePricePerSqm);
    setPrice(calculated);
  }, [sqm]);

  return (
    <section id="calculator" className="py-24 bg-bg-light relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading 
              badge={t('calculator.badge')}
              title={t('calculator.title')}
              subtitle={t('calculator.subtitle')}
            />
            
            <div className="space-y-4 mt-8">
              {(t('calculator.includes') as string[]).map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <IconCheck className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-text-main font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-3xl relative">
            {/* Glow effect behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl opacity-50 -z-10" />
            
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <label className="font-bold text-text-main">{t('calculator.sqmLabel')}</label>
                <span className="text-3xl font-display font-bold text-primary">{sqm} m²</span>
              </div>
              <input 
                type="range" 
                min={minSqm} 
                max={maxSqm} 
                step="5"
                value={sqm}
                onChange={(e) => setSqm(Number(e.target.value))}
              />
              <div className="flex justify-between text-xs text-text-muted mt-2 font-medium">
                <span>{minSqm} m²</span>
                <span>{maxSqm} m²</span>
              </div>
            </div>

            <div className="p-6 bg-bg-light rounded-2xl border border-border-light mb-8">
              <div className="text-sm text-text-muted font-medium mb-1">{t('calculator.priceLabel')}</div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-display font-bold text-primary transition-all duration-300">
                  {price.toLocaleString('no-NO')}
                </span>
                <span className="text-xl font-bold text-text-muted">{pricing.currency}</span>
              </div>
              <p className="text-xs text-text-muted mt-2">*Inkludert MVA og alt utstyr.</p>
            </div>

            <a href="#contact" className="block w-full py-4 bg-primary hover:bg-primary-light text-white text-center rounded-xl font-bold transition-colors shadow-lg">
              {t('calculator.cta')}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
