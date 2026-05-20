
"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import pricing from '@/lib/pricing.json';
import { CheckCircle, Calculator as CalcIcon } from '@phosphor-icons/react';

export default function Calculator() {
  const { t } = useLocale();
  const content = t('calculator') as any;
  
  const [sqm, setSqm] = useState(70);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const calculated = pricing.flyttevask.basePrice + (sqm * pricing.flyttevask.perSqm);
    setPrice(calculated);
  }, [sqm]);

  return (
    <section id="calculator" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/50 rounded-l-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading badge={content.badge} title={content.title} light />
            <p className="text-gray-300 text-lg mb-8">{content.subtitle}</p>
            
            <ul className="space-y-4 mb-8">
              {content.includes.map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <CheckCircle size={24} weight="fill" className="text-accent" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative"
          >
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
              <CalcIcon size={32} weight="duotone" className="text-white -rotate-12" />
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <label className="font-bold text-primary text-lg">{content.sqmLabel}</label>
                <span className="text-2xl font-display font-bold text-accent">{sqm} m²</span>
              </div>
              
              <input 
                type="range" 
                min={pricing.flyttevask.minSqm} 
                max={pricing.flyttevask.maxSqm} 
                value={sqm} 
                onChange={(e) => setSqm(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-xs text-text-muted mt-2">
                <span>{pricing.flyttevask.minSqm} m²</span>
                <span>{pricing.flyttevask.maxSqm} m²</span>
              </div>
            </div>

            <div className="bg-bg-light rounded-2xl p-6 mb-8 border border-gray-100 text-center">
              <p className="text-text-muted text-sm font-medium mb-2 uppercase tracking-wider">{content.estimatedPrice}</p>
              <div className="text-5xl font-display font-bold text-primary">
                {price.toLocaleString('no-NO')} <span className="text-2xl text-text-muted font-medium">NOK</span>
              </div>
              <p className="text-xs text-text-muted mt-2">*Eksakt pris kan variere basert på boligens tilstand.</p>
            </div>

            <a href="#contact" className="block w-full bg-primary hover:bg-primary/90 text-white text-center py-4 rounded-xl font-bold text-lg transition-colors shadow-lg hover:shadow-xl">
              {content.cta}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
