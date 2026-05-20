"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./SectionHeading";

export default function Calculator() {
  const { t } = useLocale();
  const [service, setService] = useState<'flyttevask' | 'regelmessig'>('flyttevask');
  const [area, setArea] = useState<number>(80);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const config = pricing.services[service];
    let calculated = config.basePrice + (area * config.perSqmRate);
    setPrice(calculated);
  }, [service, area]);

  return (
    <section id="calculator" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('calculator.badge')}
          title={t('calculator.title')}
          subtitle={t('calculator.subtitle')}
          centered
          light
        />

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel-dark rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10"
          >
            {/* Service Toggle */}
            <div className="mb-10">
              <label className="block text-sm font-bold text-white/60 uppercase tracking-wider mb-4">{t('calculator.serviceType')}</label>
              <div className="flex bg-black/30 p-1 rounded-xl">
                <button 
                  onClick={() => setService('flyttevask')}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all ${service === 'flyttevask' ? 'bg-accent text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
                >
                  {t('calculator.flyttevask')}
                </button>
                <button 
                  onClick={() => setService('regelmessig')}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all ${service === 'regelmessig' ? 'bg-accent text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
                >
                  {t('calculator.regelmessig')}
                </button>
              </div>
            </div>

            {/* Area Slider */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <label className="block text-sm font-bold text-white/60 uppercase tracking-wider">{t('calculator.area')}</label>
                <div className="text-3xl font-display font-bold text-white">{area} <span className="text-xl text-white/50">m²</span></div>
              </div>
              <input 
                type="range" 
                min="30" 
                max="300" 
                step="5"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full dark-range"
              />
              <div className="flex justify-between text-xs text-white/40 mt-2 font-medium">
                <span>30 m²</span>
                <span>300 m²</span>
              </div>
            </div>

            {/* Price Display & CTA */}
            <div className="bg-black/40 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5">
              <div>
                <p className="text-sm font-bold text-white/60 uppercase tracking-wider mb-2">{t('calculator.estimatedPrice')}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight">
                    {price.toLocaleString('no-NO')}
                  </span>
                  <span className="text-xl text-accent font-medium">NOK</span>
                </div>
                {service === 'regelmessig' && <p className="text-sm text-white/50 mt-1">per måned (estimat)</p>}
              </div>
              
              <a 
                href="#contact"
                className="w-full md:w-auto bg-accent hover:bg-accent-hover text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-accent/20 text-center whitespace-nowrap"
              >
                {t('calculator.cta')}
              </a>
            </div>
            
            <p className="text-center text-xs text-white/40 mt-6 max-w-lg mx-auto">
              {t('calculator.disclaimer')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
