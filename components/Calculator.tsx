"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import pricing from '@/lib/pricing.json';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, CheckCircle } from '@phosphor-icons/react';

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(80);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate Flyttevask base price
    let currentTotal = pricing.flyttevask.basePrice;
    
    // Add sqm price if over minSqm
    if (sqm > pricing.flyttevask.minSqm) {
      currentTotal += (sqm - pricing.flyttevask.minSqm) * pricing.flyttevask.pricePerSqm;
    }

    // Add extras
    selectedExtras.forEach(extraId => {
      const extra = pricing.extras.find(e => e.id === extraId);
      if (extra) currentTotal += extra.price;
    });

    setTotal(currentTotal);
  }, [sqm, selectedExtras]);

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  return (
    <section id="kalkulator" className="py-24 bg-bg-muted relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading badge={t('calculator.badge')} title={t('calculator.title')} />
            <p className="text-text-muted text-lg mb-8 leading-relaxed max-w-md">
              {t('calculator.disclaimer')}
            </p>
            
            <div className="hidden lg:flex items-center gap-4 text-primary font-medium">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <CalcIcon size={24} weight="duotone" className="text-accent" />
              </div>
              <span>Raskt estimat uten forpliktelser</span>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-premium border border-slate-100"
          >
            {/* SQM Slider */}
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4">
                <label className="font-display font-bold text-primary text-lg">{t('calculator.sqmLabel')}</label>
                <span className="text-2xl font-bold text-accent">{sqm} m²</span>
              </div>
              <input 
                type="range" 
                min={pricing.flyttevask.minSqm} 
                max={pricing.flyttevask.maxSqm} 
                value={sqm}
                onChange={(e) => setSqm(Number(e.target.value))}
                className="w-full h-2 bg-bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-xs text-text-muted mt-2 font-medium">
                <span>{pricing.flyttevask.minSqm} m²</span>
                <span>{pricing.flyttevask.maxSqm} m²</span>
              </div>
            </div>

            {/* Extras */}
            <div className="mb-10">
              <label className="font-display font-bold text-primary text-lg mb-4 block">{t('calculator.extrasLabel')}</label>
              <div className="grid sm:grid-cols-2 gap-3">
                {pricing.extras.map(extra => (
                  <button
                    key={extra.id}
                    onClick={() => toggleExtra(extra.id)}
                    className={`flex items-center justify-between p-4 rounded-lg border text-left transition-all ${
                      selectedExtras.includes(extra.id) 
                      ? 'border-accent bg-accent/5 shadow-sm' 
                      : 'border-bg-muted hover:border-accent/30 bg-white'
                    }`}
                  >
                    <span className={`font-medium text-sm ${selectedExtras.includes(extra.id) ? 'text-primary' : 'text-text-main'}`}>
                      {extra.id.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                    <CheckCircle 
                      size={20} 
                      weight={selectedExtras.includes(extra.id) ? "fill" : "regular"} 
                      className={selectedExtras.includes(extra.id) ? "text-accent" : "text-text-muted/30"} 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Total & CTA */}
            <div className="border-t border-bg-muted pt-8">
              <div className="flex justify-between items-end mb-6">
                <span className="font-display font-bold text-text-muted">{t('calculator.totalLabel')}</span>
                <div className="text-right">
                  <span className="text-4xl font-display font-bold text-primary">{total.toLocaleString('no-NO')}</span>
                  <span className="text-lg font-medium text-text-muted ml-1">NOK</span>
                </div>
              </div>
              <button className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-md font-bold text-lg transition-all shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5">
                {t('calculator.bookBtn')}
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
