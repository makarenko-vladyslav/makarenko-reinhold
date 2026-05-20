"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./SectionHeading";

export default function Calculator() {
  const { t } = useLocale();
  const config = pricing.flyttevask;
  const [sqm, setSqm] = useState(config.defaultSqm);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // Calculate price: base + (sqm * rate)
    const calculated = config.basePrice + (sqm * config.pricePerSqm);
    setPrice(calculated);
  }, [sqm]);

  return (
    <section id="calculator" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('calculator.badge')}
          title={t('calculator.title')}
          subtitle={t('calculator.subtitle')}
          light={true}
        />

        <div className="max-w-4xl mx-auto">
          <div className="glass-panel-dark rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left: Interactive Slider */}
              <div>
                <div className="flex justify-between items-end mb-6">
                  <label className="text-white font-bold text-lg">{t('calculator.sizeLabel')}</label>
                  <span className="text-3xl font-display font-bold text-accent">{sqm} m²</span>
                </div>
                
                <input 
                  type="range" 
                  min={config.minSqm} 
                  max={config.maxSqm} 
                  value={sqm} 
                  onChange={(e) => setSqm(Number(e.target.value))}
                  className="w-full mb-8"
                />

                <div className="space-y-4">
                  {(t('calculator.features') as string[]).map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/80">
                      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" className="w-5 h-5 shrink-0">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Price Display & CTA */}
              <div className="bg-white rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-accent" />
                <p className="text-text-muted font-bold uppercase tracking-wider text-sm mb-4">Estimert Pris</p>
                <div className="flex justify-center items-baseline gap-2 mb-2">
                  <span className="text-5xl md:text-6xl font-display font-bold text-primary tracking-tight">
                    {price.toLocaleString('no-NO')}
                  </span>
                  <span className="text-xl font-bold text-text-muted">{pricing.currency}</span>
                </div>
                <p className="text-xs text-text-muted mb-8">{t('calculator.disclaimer')}</p>
                
                <a 
                  href="#contact" 
                  className="block w-full py-4 bg-primary hover:bg-primary-light text-white rounded-xl font-bold transition-colors shadow-lg"
                >
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
