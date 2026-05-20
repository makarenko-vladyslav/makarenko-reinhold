
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';
import { SectionHeading, Button } from './Shared';

export default function Calculator() {
  const { t } = useLocale();
  const [area, setArea] = useState(pricing.defaultArea);
  const [type, setType] = useState<'flyttevask' | 'regelmessig'>('flyttevask');
  const [extras, setExtras] = useState({ vindu: false, teppe: false });
  const [estimate, setEstimate] = useState(0);

  useEffect(() => {
    // Base calculation: (basePrice * area) / standard_factor
    // Simplified for demo: basePrice is per hour, assume 1 hr per 15m2 for flyttevask, 1 hr per 25m2 for regelmessig
    const baseRate = pricing.basePrices[type];
    const efficiency = type === 'flyttevask' ? 15 : 25;
    let hours = Math.max(2, area / efficiency); // Min 2 hours
    
    let price = hours * baseRate;
    
    if (extras.vindu) price *= pricing.multipliers.vindu;
    if (extras.teppe) price *= pricing.multipliers.teppe;

    setEstimate(Math.round(price));
  }, [area, type, extras]);

  return (
    <section id="calculator" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('calculator.badge')}
          title={t('calculator.title')}
          subtitle={t('calculator.subtitle')}
          centered={true}
          light={true}
        />

        <div className="max-w-4xl mx-auto mt-12 bg-bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left: Controls */}
          <div className="p-8 md:p-12 md:w-3/5">
            
            {/* Area Slider */}
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4">
                <label className="font-bold text-primary">{t('calculator.areaLabel')}</label>
                <span className="text-2xl font-display font-bold text-accent">{area} m²</span>
              </div>
              <input 
                type="range" 
                min={pricing.minArea} 
                max={pricing.maxArea} 
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-xs text-text-muted mt-2">
                <span>{pricing.minArea} m²</span>
                <span>{pricing.maxArea} m²</span>
              </div>
            </div>

            {/* Type Selection */}
            <div className="mb-10">
              <label className="font-bold text-primary block mb-4">{t('calculator.typeLabel')}</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setType('flyttevask')}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${type === 'flyttevask' ? 'border-accent bg-accent/5' : 'border-gray-200 hover:border-accent/50'}`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 mb-2 flex items-center justify-center ${type === 'flyttevask' ? 'border-accent' : 'border-gray-300'}`}>
                    {type === 'flyttevask' && <div className="w-2 h-2 bg-accent rounded-full" />}
                  </div>
                  <span className="font-semibold text-primary block">{t('calculator.typeFlyttevask')}</span>
                </button>
                <button
                  onClick={() => setType('regelmessig')}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${type === 'regelmessig' ? 'border-accent bg-accent/5' : 'border-gray-200 hover:border-accent/50'}`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 mb-2 flex items-center justify-center ${type === 'regelmessig' ? 'border-accent' : 'border-gray-300'}`}>
                    {type === 'regelmessig' && <div className="w-2 h-2 bg-accent rounded-full" />}
                  </div>
                  <span className="font-semibold text-primary block">{t('calculator.typeRegelmessig')}</span>
                </button>
              </div>
            </div>

            {/* Extras */}
            <div>
              <label className="font-bold text-primary block mb-4">{t('calculator.extrasLabel')}</label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${extras.vindu ? 'bg-accent border-accent' : 'border-gray-300 group-hover:border-accent'}`}>
                    {extras.vindu && <IconCheck className="w-4 h-4 text-white" />}
                  </div>
                  <input type="checkbox" className="hidden" checked={extras.vindu} onChange={() => setExtras({...extras, vindu: !extras.vindu})} />
                  <span className="text-text-main font-medium">{t('calculator.extraVindu')}</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${extras.teppe ? 'bg-accent border-accent' : 'border-gray-300 group-hover:border-accent'}`}>
                    {extras.teppe && <IconCheck className="w-4 h-4 text-white" />}
                  </div>
                  <input type="checkbox" className="hidden" checked={extras.teppe} onChange={() => setExtras({...extras, teppe: !extras.teppe})} />
                  <span className="text-text-main font-medium">{t('calculator.extraTeppe')}</span>
                </label>
              </div>
            </div>

          </div>

          {/* Right: Result */}
          <div className="bg-bg-light p-8 md:p-12 md:w-2/5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200">
            <p className="text-text-muted font-semibold uppercase tracking-wider text-sm mb-2">{t('calculator.estimatedPrice')}</p>
            <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-4 flex items-baseline gap-2">
              <motion.span 
                key={estimate}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent"
              >
                {estimate}
              </motion.span>
              <span className="text-2xl text-text-muted">{pricing.currency}</span>
            </div>
            <p className="text-sm text-text-muted mb-8">{t('calculator.priceDisclaimer')}</p>
            
            <a href="#contact" className="w-full">
              <Button className="w-full py-4 text-lg">{t('calculator.cta')}</Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
