
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./SectionHeading";

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(pricing.defaultSqm);
  const [type, setType] = useState<keyof typeof pricing.basePrices>("regular");
  const [eco, setEco] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let base = pricing.basePrices[type];
    if (sqm > 50) {
      base += (sqm - 50) * pricing.multipliers.perSqm;
    }
    if (eco) {
      base *= pricing.multipliers.ecoChemicals;
    }
    setPrice(Math.round(base));
  }, [sqm, type, eco]);

  const calcT = (key: string) => t(`calculator.${key}`) as string;
  const typesT = t('calculator.types') as Record<string, string>;

  return (
    <section id="calculator" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={calcT('badge')}
          title={calcT('title')}
          subtitle={calcT('subtitle')}
          light
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-dark p-8 md:p-12 rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Controls */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-white mb-4">
                  <label className="font-bold">{calcT('sqmLabel')}</label>
                  <span className="text-accent font-bold">{sqm} m²</span>
                </div>
                <input 
                  type="range" 
                  min={pricing.minSqm} 
                  max={pricing.maxSqm} 
                  value={sqm}
                  onChange={(e) => setSqm(Number(e.target.value))}
                />
              </div>

              <div>
                <label className="block text-white font-bold mb-4">{calcT('typeLabel')}</label>
                <div className="grid grid-cols-1 gap-3">
                  {(Object.keys(pricing.basePrices) as Array<keyof typeof pricing.basePrices>).map((tKey) => (
                    <button
                      key={tKey}
                      onClick={() => setType(tKey)}
                      className={`px-4 py-3 rounded-xl text-left font-medium transition-all border ${
                        type === tKey 
                          ? 'bg-accent/20 border-accent text-white' 
                          : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      {typesT[tKey]}
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${
                  eco ? 'bg-accent border-accent' : 'border-white/30 group-hover:border-white/60'
                }`}>
                  {eco && <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
                </div>
                <input type="checkbox" className="hidden" checked={eco} onChange={(e) => setEco(e.target.checked)} />
                <span className="text-white/90">{calcT('ecoLabel')}</span>
              </label>
            </div>

            {/* Result */}
            <div className="flex flex-col justify-center items-center text-center p-8 bg-bg-dark/50 rounded-2xl border border-white/10">
              <div className="text-white/60 font-medium mb-2">{calcT('estimatedPrice')}</div>
              <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2 flex items-baseline gap-2">
                {price} <span className="text-2xl text-accent">{pricing.currency}</span>
              </div>
              <p className="text-white/40 text-sm mb-8">{calcT('disclaimer')}</p>
              
              <a 
                href="#contact"
                className="w-full py-4 rounded-xl bg-white text-primary font-bold text-lg transition-all hover:bg-gray-100 hover:shadow-lg"
              >
                {calcT('cta')}
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
