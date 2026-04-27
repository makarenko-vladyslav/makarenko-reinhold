"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';
import SectionHeading from '@/components/SectionHeading';

export default function Calculator() {
  const { t } = useLocale();
  const [area, setArea] = useState(pricing.defaultArea);
  const [type, setType] = useState<keyof typeof pricing.basePrices>('moving');
  const [extras, setExtras] = useState<Record<string, boolean>>({
    windows: false,
    deepClean: false,
    weekend: false
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let base = area * pricing.basePrices[type];
    
    if (extras.windows) base *= pricing.multipliers.windows;
    if (extras.deepClean) base *= pricing.multipliers.deepClean;
    if (extras.weekend) base *= pricing.multipliers.weekend;
    
    setTotal(Math.round(base));
  }, [area, type, extras]);

  return (
    <section id="calculator" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('calculator.badge')}
          title={t('calculator.title')}
          subtitle={t('calculator.subtitle')}
          centered
        />

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-5">
            {/* Controls */}
            <div className="md:col-span-3 p-8 md:p-12">
              {/* Area Slider */}
              <div className="mb-10">
                <div className="flex justify-between items-end mb-4">
                  <label className="font-bold text-primary text-lg">{t('calculator.areaLabel')}</label>
                  <span className="text-3xl font-display font-bold text-accent">{area} m²</span>
                </div>
                <input 
                  type="range" 
                  min={pricing.minArea} 
                  max={pricing.maxArea} 
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                  <span>{pricing.minArea} m²</span>
                  <span>{pricing.maxArea} m²</span>
                </div>
              </div>

              {/* Type Selection */}
              <div className="mb-10">
                <label className="font-bold text-primary text-lg block mb-4">{t('calculator.typeLabel')}</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(Object.keys(pricing.basePrices) as Array<keyof typeof pricing.basePrices>).map((tKey) => (
                    <button
                      key={tKey}
                      onClick={() => setType(tKey)}
                      className={`py-3 px-4 rounded-xl font-medium text-sm transition-all border ${
                        type === tKey 
                          ? 'bg-primary border-primary text-white shadow-md' 
                          : 'bg-white border-gray-200 text-text-main hover:border-accent hover:text-accent'
                      }`}
                    >
                      {t(`calculator.types.${tKey}`)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extras */}
              <div>
                <label className="font-bold text-primary text-lg block mb-4">{t('calculator.extrasLabel')}</label>
                <div className="space-y-3">
                  {Object.keys(pricing.multipliers).map((eKey) => (
                    <label key={eKey} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className={`w-6 h-6 rounded flex items-center justify-center border transition-colors ${
                        extras[eKey] ? 'bg-accent border-accent' : 'bg-white border-gray-300'
                      }`}>
                        {extras[eKey] && <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden"
                        checked={extras[eKey]}
                        onChange={() => setExtras(prev => ({ ...prev, [eKey]: !prev[eKey] }))}
                      />
                      <span className="font-medium text-primary">{t(`calculator.extras.${eKey}`)}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Panel */}
            <div className="md:col-span-2 bg-primary p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10">
                <p className="text-accent font-bold uppercase tracking-wider text-sm mb-2">{t('calculator.totalText')}</p>
                <div className="flex items-baseline gap-2 mb-8">
                  <motion.span 
                    key={total}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-display font-bold text-white"
                  >
                    {total.toLocaleString('no-NO')}
                  </motion.span>
                  <span className="text-xl text-gray-400 font-medium">{pricing.currency}</span>
                </div>
                
                <a 
                  href="#contact"
                  className="block w-full text-center bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold text-lg transition-all hover:shadow-[0_0_20px_hsl(185_80%_40%_/_0.3)] hover:-translate-y-1 mb-4"
                >
                  {t('calculator.cta')}
                </a>
                
                <p className="text-xs text-gray-400 text-center">
                  {t('calculator.disclaimer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}