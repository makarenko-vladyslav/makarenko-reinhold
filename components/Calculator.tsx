"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import pricingData from '@/lib/pricing.json';
import { Calculator as CalcIcon, Info } from '@phosphor-icons/react';

export default function Calculator() {
  const { t } = useLocale();
  const calcData = t('calculator') as any;
  
  const [service, setService] = useState<'flyttevask' | 'regelmessig'>('flyttevask');
  const [sqm, setSqm] = useState(pricingData.services.flyttevask.defaultSqm);
  const [extras, setExtras] = useState<Record<string, boolean>>({
    windows: false, balcony: false, appliances: false, carpet: false
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const srv = pricingData.services[service];
    let price = srv.basePrice + (sqm * srv.perSqmRate);

    Object.entries(extras).forEach(([key, isSelected]) => {
      if (isSelected) {
        const extra = pricingData.extras[key as keyof typeof pricingData.extras];
        if (extra.type === 'fixed') price += extra.price;
        if (extra.type === 'perSqm') price += (sqm * extra.price);
      }
    });

    setTotal(price);
  }, [service, sqm, extras]);

  const toggleExtra = (key: string) => {
    setExtras(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="calculator" className="py-24 bg-bg-light scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">{calcData.badge}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">{calcData.title}</h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface rounded-3xl shadow-crisp-hover p-6 md:p-10 border border-border"
        >
          {/* Service Tabs */}
          <div className="flex p-1 bg-bg-light rounded-xl mb-10">
            {(['flyttevask', 'regelmessig'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setService(type)}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm md:text-base transition-all ${
                  service === type 
                    ? 'bg-surface text-primary shadow-sm' 
                    : 'text-text-muted hover:text-primary'
                }`}
              >
                {calcData.tabs[type]}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Inputs */}
            <div className="space-y-10">
              {/* SQM Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-bold text-primary">{calcData.sqmLabel}</label>
                  <span className="text-xl font-display font-bold text-accent">{sqm} m²</span>
                </div>
                <input 
                  type="range" 
                  min={pricingData.services[service].minSqm} 
                  max={pricingData.services[service].maxSqm} 
                  value={sqm}
                  onChange={(e) => setSqm(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-text-muted mt-2">
                  <span>{pricingData.services[service].minSqm} m²</span>
                  <span>{pricingData.services[service].maxSqm} m²</span>
                </div>
              </div>

              {/* Extras */}
              <div>
                <label className="font-bold text-primary block mb-4">{calcData.extrasLabel}</label>
                <div className="space-y-3">
                  {Object.entries(calcData.extras).map(([key, label]) => (
                    <label key={key} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                        extras[key] ? 'bg-accent border-accent' : 'border-text-muted group-hover:border-accent'
                      }`}>
                        {extras[key] && <span className="text-white text-xs font-bold">✓</span>}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={extras[key]} 
                        onChange={() => toggleExtra(key)} 
                      />
                      <span className="text-text-main group-hover:text-primary transition-colors">{label as string}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Panel */}
            <div className="bg-primary rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-2 text-white/80 mb-2">
                  <CalcIcon size={20} weight="duotone" />
                  <span className="font-medium uppercase tracking-wider text-sm">{calcData.totalLabel}</span>
                </div>
                <div className="text-5xl font-display font-bold mb-2 flex items-baseline gap-2">
                  {total.toLocaleString('no-NO')} <span className="text-2xl text-accent font-semibold">NOK</span>
                </div>
                {service === 'regelmessig' && <div className="text-white/60 text-sm">per gang</div>}
              </div>

              <div className="mt-8">
                <a href="#contact" className="block w-full bg-accent hover:bg-accent-hover text-white text-center py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-accent/20">
                  {calcData.cta}
                </a>
                <div className="flex items-start gap-2 mt-4 text-white/50 text-xs">
                  <Info size={16} className="shrink-0 mt-0.5" />
                  <p>{calcData.disclaimer}</p>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}