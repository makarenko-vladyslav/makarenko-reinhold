
"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';
import SectionHeading from './SectionHeading';

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(80);
  const [service, setService] = useState('flyttevask');
  const [extras, setExtras] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const serviceData = pricing.services[service as keyof typeof pricing.services];
    const estimatedHours = Math.max(serviceData.minHours, sqm / serviceData.sqmPerHour);
    let price = estimatedHours * pricing.baseHourlyRate * serviceData.baseMultiplier;
    
    extras.forEach(extraId => {
      const extraData = pricing.extras.find(e => e.id === extraId);
      if (extraData) price += extraData.price;
    });

    setTotal(Math.round(price));
  }, [sqm, service, extras]);

  const toggleExtra = (id: string) => {
    setExtras(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);
  };

  return (
    <section id="calculator" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('calculator.badge')}
          title={t('calculator.title')}
          subtitle={t('calculator.subtitle')}
          centered
        />

        <div className="max-w-4xl mx-auto bg-bg-light rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            {/* Inputs */}
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-primary mb-4">{t('calculator.serviceLabel')}</label>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(pricing.services).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setService(key)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all ${
                        service === key 
                          ? 'border-accent bg-accent/5 shadow-md' 
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="font-bold text-primary">{data.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="block text-sm font-bold text-primary">{t('calculator.sizeLabel')}</label>
                  <span className="text-2xl font-display font-bold text-accent">{sqm} m²</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="300" 
                  step="5" 
                  value={sqm} 
                  onChange={(e) => setSqm(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs text-text-muted mt-2">
                  <span>20 m²</span>
                  <span>300 m²</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-4">{t('calculator.extrasLabel')}</label>
                <div className="flex flex-wrap gap-3">
                  {pricing.extras.map(extra => (
                    <button
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                        extras.includes(extra.id)
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white text-text-muted border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {extras.includes(extra.id) && '✓ '} {extra.name} (+{extra.price} kr)
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="bg-primary rounded-3xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(183_74%_35%/0.3),transparent_50%)] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="text-accent-light font-bold text-sm uppercase tracking-wider mb-2">{t('calculator.totalLabel')}</div>
                <div className="text-6xl font-display font-bold mb-2 flex items-baseline gap-2">
                  {total.toLocaleString('no-NO')} <span className="text-2xl text-white/60 font-normal">NOK</span>
                </div>
                <p className="text-white/50 text-xs mt-4 mb-8 leading-relaxed">
                  {t('calculator.disclaimer')}
                </p>
                <a href="#contact" className="block w-full text-center py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_hsl(183_74%_35%/0.3)]">
                  {t('calculator.cta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
