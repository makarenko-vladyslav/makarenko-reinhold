"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import pricingData from '@/lib/pricing.json';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, ArrowRight } from '@phosphor-icons/react';

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(70);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const { basePrice, perSqmRate, minSqm } = pricingData.flyttevask;
    const billableSqm = Math.max(0, sqm - minSqm);
    const calculated = basePrice + (billableSqm * perSqmRate);
    setPrice(calculated);
  }, [sqm]);

  return (
    <section id="calculator" className="py-24 bg-bg-light scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              badge={t('calculator.badge') as string} 
              title={t('calculator.title') as string} 
            />
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              {t('calculator.subtitle') as string}
            </p>
            <ul className="space-y-4 mb-8">
              {['Svanemerkede produkter inkludert', '100% Overtakelsesgaranti', 'Alt utstyr medbringes', 'MVA inkludert i prisen'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-primary font-medium">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-card border border-border relative overflow-hidden"
          >
            {/* Decorative background icon */}
            <CalcIcon size={200} weight="duotone" className="absolute -top-10 -right-10 text-surface-alt opacity-50 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="mb-10">
                <div className="flex justify-between items-end mb-4">
                  <label className="font-display font-bold text-primary text-lg">{t('calculator.sqmLabel') as string}</label>
                  <span className="text-3xl font-bold text-accent">{sqm} m²</span>
                </div>
                <input 
                  type="range" 
                  min={pricingData.flyttevask.minSqm} 
                  max={pricingData.flyttevask.maxSqm} 
                  value={sqm} 
                  onChange={(e) => setSqm(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-text-muted mt-2 font-medium">
                  <span>{pricingData.flyttevask.minSqm} m²</span>
                  <span>{pricingData.flyttevask.maxSqm} m²</span>
                </div>
              </div>

              <div className="bg-surface-alt p-6 rounded-2xl mb-8 border border-border/50">
                <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">{t('calculator.priceLabel') as string}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-display font-bold text-primary">
                    {price.toLocaleString('no-NO')}
                  </span>
                  <span className="text-xl font-medium text-text-muted">NOK</span>
                </div>
              </div>

              <a href="#contact" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white py-4 rounded-xl font-bold text-lg transition-all group">
                {t('calculator.cta') as string}
                <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <p className="text-xs text-text-muted mt-4 text-center">
                {t('calculator.disclaimer') as string}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
