"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Calculator() {
  const { t } = useLocale();
  const calcData = t('calculator') as any;
  const { minSqm, maxSqm, defaultSqm, tiers } = pricingData.calculator;
  
  const [sqm, setSqm] = useState(defaultSqm);
  const [type, setType] = useState(calcData.typeOptions[0]);
  const [estimate, setEstimate] = useState(0);

  useEffect(() => {
    // Find applicable tier
    let currentTier = tiers[tiers.length - 1];
    for (const tier of tiers) {
      if (sqm <= tier.upTo) {
        currentTier = tier;
        break;
      }
    }
    
    // Calculate price: base + (sqm * rate)
    const calculatedPrice = currentTier.base + (sqm * currentTier.pricePerSqm);
    setEstimate(calculatedPrice);
  }, [sqm, tiers]);

  return (
    <section id="calculator" className="py-24 bg-bg-light relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-primary" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-accent-light font-bold tracking-wider uppercase text-sm mb-3 block">{calcData.badge}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{calcData.title}</h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto">{calcData.subtitle}</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 premium-shadow border border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Controls */}
            <div className="space-y-8">
              
              {/* Type Selection */}
              <div>
                <label className="block text-sm font-bold text-primary mb-4">{calcData.labelType}</label>
                <div className="flex flex-wrap gap-3">
                  {calcData.typeOptions.map((opt: string) => (
                    <button
                      key={opt}
                      onClick={() => setType(opt)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        type === opt 
                          ? 'bg-primary text-white shadow-md' 
                          : 'bg-bg-light text-text-muted hover:bg-gray-200'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="block text-sm font-bold text-primary">{calcData.labelSqm}</label>
                  <span className="text-2xl font-display font-bold text-accent">{sqm} m²</span>
                </div>
                <input 
                  type="range" 
                  min={minSqm} 
                  max={maxSqm} 
                  value={sqm}
                  onChange={(e) => setSqm(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-text-muted mt-2">
                  <span>{minSqm} m²</span>
                  <span>{maxSqm} m²</span>
                </div>
              </div>

            </div>

            {/* Result */}
            <div className="bg-bg-light rounded-2xl p-8 text-center border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl -mr-8 -mt-8" />
              
              <p className="text-text-muted font-medium mb-2 relative z-10">{calcData.pricePrefix}</p>
              <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-2 relative z-10">
                {estimate.toLocaleString('no-NO')} <span className="text-2xl text-text-muted">{calcData.priceSuffix}</span>
              </div>
              <p className="text-xs text-text-muted mb-8 relative z-10">{calcData.disclaimer}</p>
              
              <a href="#contact" className="block w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold transition-colors relative z-10">
                {calcData.cta}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
