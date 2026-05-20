
"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';
import pricingData from '@/lib/pricing.json';
import { Calculator, House, Sparkle, Plus } from '@phosphor-icons/react';

export default function CalculatorSection() {
  const { t, locale } = useLocale();
  const [sqm, setSqm] = useState(80);
  const [selectedService, setSelectedService] = useState(pricingData.services[0].id);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const service = pricingData.services.find(s => s.id === selectedService);
    if (!service) return;

    let calcTotal = sqm * service.perSqm;
    
    selectedExtras.forEach(extraId => {
      const extra = pricingData.extras.find(e => e.id === extraId);
      if (extra) calcTotal += extra.price;
    });

    setTotal(Math.round(calcTotal));
  }, [sqm, selectedService, selectedExtras]);

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);
  };

  return (
    <section id="calculator" className="py-24 bg-bg-light scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">{t('calculator.badge') as string}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">{t('calculator.title') as string}</h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
        </div>

        <div className="bg-surface rounded-3xl shadow-card p-8 md:p-12 max-w-4xl mx-auto border border-bg-light">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Inputs */}
            <div className="space-y-10">
              
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-bold text-primary mb-4 uppercase tracking-wide">{t('calculator.serviceLabel') as string}</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pricingData.services.map(service => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${selectedService === service.id ? 'border-accent bg-accent/5' : 'border-bg-light hover:border-accent/30'}`}
                    >
                      <div className="font-semibold text-primary">{locale === 'en' ? service.nameEn : service.nameNo}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="block text-sm font-bold text-primary uppercase tracking-wide">{t('calculator.sizeLabel') as string}</label>
                  <span className="text-2xl font-display font-bold text-accent">{sqm} m²</span>
                </div>
                <input 
                  type="range" 
                  min="20" max="300" step="5"
                  value={sqm}
                  onChange={(e) => setSqm(Number(e.target.value))}
                  className="w-full h-2 bg-bg-light rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-text-muted mt-2 font-medium">
                  <span>20 m²</span>
                  <span>300 m²</span>
                </div>
              </div>

              {/* Extras */}
              <div>
                <label className="block text-sm font-bold text-primary mb-4 uppercase tracking-wide">{t('calculator.extrasLabel') as string}</label>
                <div className="space-y-3">
                  {pricingData.extras.map(extra => (
                    <label key={extra.id} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedExtras.includes(extra.id) ? 'border-accent bg-accent/5' : 'border-bg-light hover:border-accent/30'}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded flex items-center justify-center ${selectedExtras.includes(extra.id) ? 'bg-accent text-white' : 'border-2 border-text-muted'}`}>
                          {selectedExtras.includes(extra.id) && <Plus size={12} weight="bold" />}
                        </div>
                        <span className="font-medium text-primary">{locale === 'en' ? extra.nameEn : extra.nameNo}</span>
                      </div>
                      <span className="text-sm font-bold text-text-muted">+{extra.price} kr</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* Result Panel */}
            <div className="bg-primary rounded-2xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
              
              <div className="mb-8">
                <div className="text-sm font-bold text-white/70 uppercase tracking-wider mb-2">{t('calculator.totalLabel') as string}</div>
                <div className="text-5xl md:text-6xl font-display font-bold tabular-nums">
                  {total.toLocaleString('no-NO')} <span className="text-2xl text-white/70">NOK</span>
                </div>
              </div>

              <p className="text-sm text-white/60 mb-8 leading-relaxed">
                {t('calculator.disclaimer') as string}
              </p>

              <button className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20 flex items-center justify-center gap-2">
                <Sparkle size={20} weight="fill" />
                {t('calculator.bookBtn') as string}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
