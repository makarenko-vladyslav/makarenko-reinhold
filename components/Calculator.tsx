"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';
import SectionHeading from './SectionHeading';

export default function Calculator() {
  const { t } = useLocale();
  const [area, setArea] = useState(80);
  const [service, setService] = useState<'flyttevask' | 'regular'>('flyttevask');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const rate = pricing.services[service].ratePerSqm;
    const min = pricing.services[service].minPrice;
    const calculated = Math.max(area * rate, min);
    setPrice(calculated);
  }, [area, service]);

  return (
    <section id="pricing" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('calculator.badge')}
          title={t('calculator.title')}
          subtitle={t('calculator.subtitle')}
          centered
          light
        />

        <div className="max-w-3xl mx-auto">
          <div className="glass-panel-dark p-8 md:p-12 rounded-3xl">
            
            {/* Service Toggle */}
            <div className="mb-10">
              <label className="block text-white/80 text-sm font-medium mb-4 uppercase tracking-wider">
                {t('calculator.serviceLabel')}
              </label>
              <div className="grid grid-cols-2 gap-4 p-1.5 bg-white/5 rounded-2xl">
                {(['flyttevask', 'regular'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setService(type)}
                    className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                      service === type 
                        ? 'bg-accent text-white shadow-lg' 
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {t(`calculator.services.${type}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Area Slider */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <label className="text-white/80 text-sm font-medium uppercase tracking-wider">
                  {t('calculator.areaLabel')}
                </label>
                <span className="text-3xl font-display font-bold text-white">{area} m²</span>
              </div>
              <input 
                type="range" 
                min="20" 
                max="300" 
                step="5" 
                value={area} 
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-white/40 text-xs mt-2 font-medium">
                <span>20 m²</span>
                <span>300 m²</span>
              </div>
            </div>

            {/* Result */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-2">
                {t('calculator.estimateText')}
              </p>
              <div className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
                {price.toLocaleString('no-NO')} <span className="text-2xl text-accent">NOK</span>
              </div>
              <p className="text-white/40 text-sm mb-8 max-w-md mx-auto">
                {t('calculator.disclaimer')}
              </p>
              <a 
                href="#contact"
                className="inline-block bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-full font-bold transition-all shadow-xl hover:-translate-y-1"
              >
                {t('calculator.cta')}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}