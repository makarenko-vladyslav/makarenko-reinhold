"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./SectionHeading";

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(60);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const base = sqm * pricing.basePrices.flyttevask_per_sqm;
    setPrice(Math.max(base, pricing.basePrices.min_price));
  }, [sqm]);

  return (
    <section id="calculator" className="py-24 bg-bg-tint relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -top-40 -right-40 w-96 h-96 border-[1px] border-accent/20 rounded-full opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading 
              badge={t('calculator.badge')}
              title={t('calculator.title')}
              subtitle={t('calculator.subtitle')}
            />
            
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="mb-8">
                <div className="flex justify-between items-end mb-4">
                  <label className="font-semibold text-primary">{t('calculator.sizeLabel')}</label>
                  <span className="text-2xl font-display font-bold text-accent">{sqm} m²</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="250" 
                  step="5"
                  value={sqm}
                  onChange={(e) => setSqm(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-text-muted mt-2 font-medium">
                  <span>20 m²</span>
                  <span>250 m²</span>
                </div>
              </div>

              <div className="bg-bg-tint rounded-2xl p-6 mb-6 text-center border border-gray-100">
                <div className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">{t('calculator.priceLabel')}</div>
                <div className="text-5xl font-display font-bold text-primary flex items-center justify-center gap-2">
                  <span>{price.toLocaleString('no-NO')}</span>
                  <span className="text-xl text-text-muted font-medium">NOK</span>
                </div>
              </div>

              <p className="text-xs text-text-muted text-center mb-6">{t('calculator.disclaimer')}</p>

              <a href="#contact" className="block w-full bg-accent hover:bg-accent-light text-white text-center py-4 rounded-xl font-bold transition-colors shadow-lg shadow-accent/20">
                {t('calculator.cta')}
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/clean-apartment-norway/800/1200" 
              alt="Clean apartment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white">
                <h4 className="font-display font-bold text-xl mb-2">100% Fornøydgaranti</h4>
                <p className="text-white/80 text-sm">Vi garanterer at vasken blir godkjent av utleier. Hvis ikke, retter vi det opp gratis.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
