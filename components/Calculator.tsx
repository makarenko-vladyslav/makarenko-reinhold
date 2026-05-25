
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import { SectionHeading, Button } from "./Shared";

export default function Calculator() {
  const { t } = useLocale();
  const [selectedService, setSelectedService] = useState(pricing.services[0].id);
  const [area, setArea] = useState(pricing.defaultSqm);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const service = pricing.services.find(s => s.id === selectedService);
    if (service) {
      setPrice(service.basePrice + (area * service.pricePerSqm));
    }
  }, [selectedService, area]);

  return (
    <section id="calculator" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-accent/5 rounded-tr-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              badge={t('calculator.badge')}
              title={t('calculator.title')}
              subtitle={t('calculator.subtitle')}
            />
            
            <div className="bg-bg-light p-8 rounded-2xl border border-black/5 shadow-sm">
              <div className="mb-8">
                <label className="block text-sm font-bold text-primary mb-4 uppercase tracking-wider">{t('calculator.serviceLabel')}</label>
                <div className="grid grid-cols-2 gap-3">
                  {pricing.services.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${selectedService === s.id ? 'bg-accent text-white shadow-md' : 'bg-white text-text-main border border-black/10 hover:border-accent/50'}`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-end mb-4">
                  <label className="block text-sm font-bold text-primary uppercase tracking-wider">{t('calculator.areaLabel')}</label>
                  <span className="text-2xl font-display font-bold text-accent">{area} м²</span>
                </div>
                <input 
                  type="range" 
                  min={pricing.minSqm} 
                  max={pricing.maxSqm} 
                  step="5"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs text-text-muted mt-2">
                  <span>{pricing.minSqm} м²</span>
                  <span>{pricing.maxSqm} м²</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            <div className="relative z-10 flex flex-col h-full justify-center">
              <h3 className="text-xl font-medium text-white/80 mb-2">{t('calculator.resultLabel')}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-6xl md:text-7xl font-display font-bold tracking-tight">{price}</span>
                <span className="text-2xl text-accent-light">{pricing.currency}</span>
              </div>
              
              <ul className="space-y-4 mb-10 text-white/90">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Еко-засоби включені
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Професійне обладнання
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Офіційний рахунок (faktura)
                </li>
              </ul>

              <Button href="#contact" variant="primary" className="w-full text-lg py-5">{t('calculator.cta')}</Button>
              <p className="text-xs text-white/50 mt-6 text-center">{t('calculator.disclaimer')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
