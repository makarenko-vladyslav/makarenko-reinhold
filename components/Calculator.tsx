"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import pricingData from '@/lib/pricing.json';

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(100);
  const [freq, setFreq] = useState('once');
  const [extras, setExtras] = useState<Record<string, boolean>>({
    windows: false, oven: false, fridge: false
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let price = pricingData.basePrice + (sqm * pricingData.perSqm);
    price = price * pricingData.multipliers[freq as keyof typeof pricingData.multipliers];
    
    if (extras.windows) price += pricingData.extras.windows;
    if (extras.oven) price += pricingData.extras.oven;
    if (extras.fridge) price += pricingData.extras.fridge;
    
    setTotal(Math.round(price));
  }, [sqm, freq, extras]);

  const freqOptions = t('calculator.freqOptions') as Record<string, string>;
  const extrasOptions = t('calculator.extras') as Record<string, string>;

  return (
    <section id="pricing" className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50"></div>
      <div className="noise-overlay"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">
            {t('calculator.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {t('calculator.title')}
          </h2>
          <p className="text-text-light/70 text-lg">
            {t('calculator.subtitle')}
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-2xl">
          
          {/* Size Slider */}
          <div className="mb-10">
            <div className="flex justify-between items-end mb-6">
              <label className="text-white font-medium text-lg">{t('calculator.sizeLabel')}</label>
              <span className="text-3xl font-display font-bold text-accent">{sqm} m²</span>
            </div>
            <input 
              type="range" 
              min="30" 
              max="300" 
              step="5"
              value={sqm} 
              onChange={(e) => setSqm(Number(e.target.value))}
            />
            <div className="flex justify-between text-text-light/50 text-sm mt-2">
              <span>30 m²</span>
              <span>300 m²</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            {/* Frequency */}
            <div>
              <label className="text-white font-medium text-lg mb-4 block">{t('calculator.frequencyLabel')}</label>
              <div className="space-y-3">
                {Object.entries(freqOptions).map(([key, label]) => (
                  <label key={key} className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${freq === key ? 'border-accent bg-accent/10' : 'border-white/10 hover:bg-white/5'}`}>
                    <input 
                      type="radio" 
                      name="frequency" 
                      value={key}
                      checked={freq === key}
                      onChange={() => setFreq(key)}
                      className="hidden"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${freq === key ? 'border-accent' : 'border-white/30'}`}>
                      {freq === key && <div className="w-2.5 h-2.5 rounded-full bg-accent" />}
                    </div>
                    <span className="text-white">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div>
              <label className="text-white font-medium text-lg mb-4 block">{t('calculator.extrasLabel')}</label>
              <div className="space-y-3">
                {Object.entries(extrasOptions).map(([key, label]) => (
                  <label key={key} className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${extras[key] ? 'border-accent bg-accent/10' : 'border-white/10 hover:bg-white/5'}`}>
                    <input 
                      type="checkbox" 
                      checked={extras[key]}
                      onChange={() => setExtras({...extras, [key]: !extras[key]})}
                      className="hidden"
                    />
                    <div className={`w-5 h-5 rounded border-2 mr-4 flex items-center justify-center ${extras[key] ? 'border-accent bg-accent' : 'border-white/30'}`}>
                      {extras[key] && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className="text-white">{label}</span>
                    <span className="ml-auto text-text-light/50 text-sm">+{pricingData.extras[key as keyof typeof pricingData.extras]} kr</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Total & CTA */}
          <div className="mt-10 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-text-light/70 mb-1">{t('calculator.totalLabel')}</p>
              <div className="text-5xl font-display font-bold text-white flex items-baseline gap-2">
                {total} <span className="text-2xl text-accent">NOK</span>
              </div>
            </div>
            <a 
              href={`https://wa.me/4796684393?text=Hei! Jeg brukte kalkulatoren på nettsiden. Bolig: ${sqm}kvm, Frekvens: ${freq}. Estimert pris: ${total} NOK. Kan vi avtale en befaring?`}
              target="_blank"
              className="w-full md:w-auto px-8 py-4 rounded-full bg-accent text-white font-bold text-lg hover:bg-accent-dark transition-all hover:scale-105 text-center shadow-[0_0_20px_hsl(185_80%_45%/0.3)]"
            >
              {t('calculator.cta')}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}