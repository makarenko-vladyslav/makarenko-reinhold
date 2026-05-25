"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(70);
  const [service, setService] = useState('flyttevask');
  const [frequency, setFrequency] = useState(t('calculator.frequencies.0'));
  const [price, setPrice] = useState(0);

  const frequencies = t('calculator.frequencies') as string[];

  useEffect(() => {
    // Reset frequency if not regular cleaning
    if (service !== 'regelmessig') {
      setFrequency(frequencies[0]);
    }
  }, [service, frequencies]);

  useEffect(() => {
    const baseRate = pricing.basePrices[service as keyof typeof pricing.basePrices] || 0;
    let calculated = 0;

    if (service === 'flyttevask' || service === 'visning') {
      // Sqm based pricing
      calculated = sqm * baseRate;
    } else if (service === 'regelmessig' || service === 'kontor') {
      // Hourly based, let's estimate hours based on sqm (rough estimate: 1hr per 30sqm, min 2hrs)
      const estHours = Math.max(2, Math.ceil(sqm / 30));
      const mult = pricing.multipliers[frequency as keyof typeof pricing.multipliers] || 1;
      calculated = estHours * baseRate * mult;
    }

    setPrice(calculated);
  }, [sqm, service, frequency]);

  return (
    <section id="calculator" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bg-tint rounded-l-[100px] opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading 
              badge={t('calculator.badge')}
              title={t('calculator.title')}
              subtitle={t('calculator.subtitle')}
            />
            
            <div className="space-y-6 mt-8 hidden lg:block">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Raskt Svar</h4>
                  <p className="text-text-muted">Se prisen umiddelbart uten å vente på tilbud.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Ingen Skjulte Kostnader</h4>
                  <p className="text-text-muted">Prisen inkluderer utstyr, kjøring og MVA.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative"
          >
            {/* Form Elements */}
            <div className="space-y-8">
              
              {/* Service Type */}
              <div>
                <label className="block text-sm font-bold text-primary mb-3 uppercase tracking-wider">{t('calculator.serviceLabel')}</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'flyttevask', label: 'Flyttevask' },
                    { id: 'regelmessig', label: 'Regelmessig' },
                    { id: 'visning', label: 'Visningsvask' },
                    { id: 'kontor', label: 'Kontorvask' }
                  ].map(s => (
                    <button
                      key={s.id}
                      onClick={() => setService(s.id)}
                      className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all border ${service === s.id ? 'bg-primary text-white border-primary shadow-md' : 'bg-white text-text-muted border-gray-200 hover:border-accent hover:text-primary'}`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">{t('calculator.sizeLabel')}</label>
                  <span className="text-xl font-display font-bold text-accent">{sqm} m²</span>
                </div>
                <input 
                  type="range" 
                  min="30" 
                  max="300" 
                  step="5" 
                  value={sqm} 
                  onChange={(e) => setSqm(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs text-text-muted mt-2 font-medium">
                  <span>30 m²</span>
                  <span>300 m²</span>
                </div>
              </div>

              {/* Frequency (Only for Regelmessig/Kontor) */}
              {(service === 'regelmessig' || service === 'kontor') && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                  <label className="block text-sm font-bold text-primary mb-3 uppercase tracking-wider">{t('calculator.frequencyLabel')}</label>
                  <select 
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full p-4 rounded-xl border border-gray-200 bg-white text-primary font-medium focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent appearance-none"
                  >
                    {frequencies.map(f => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </motion.div>
              )}

              {/* Total */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-1">{t('calculator.totalLabel')}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-display font-bold text-primary transition-all">
                      {price.toLocaleString('no-NO')}
                    </span>
                    <span className="text-lg font-bold text-text-muted">NOK</span>
                  </div>
                  <p className="text-xs text-text-muted mt-2">{t('calculator.disclaimer')}</p>
                </div>
                <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-bold text-center transition-all shadow-lg hover:-translate-y-1">
                  {t('calculator.cta')}
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
