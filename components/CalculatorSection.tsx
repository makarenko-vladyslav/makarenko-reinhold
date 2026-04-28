
"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import pricing from "@/lib/pricing.json";

export default function CalculatorSection() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(70);
  const [windows, setWindows] = useState(false);
  const [heavy, setHeavy] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let price = pricing.flyttevask.basePrice;
    if (sqm > pricing.flyttevask.minSqm) {
      price += (sqm - pricing.flyttevask.minSqm) * pricing.flyttevask.sqmRate;
    }
    if (windows) price *= pricing.multipliers.windowsIncluded;
    if (heavy) price *= pricing.multipliers.heavyDuty;
    setTotal(Math.round(price));
  }, [sqm, windows, heavy]);

  return (
    <section id="calculator" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-bg-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading 
            badge={t('calculator.badge')}
            title={t('calculator.title')}
            subtitle={t('calculator.subtitle')}
            light
          />
          
          <div className="hidden lg:flex flex-col gap-6 mt-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <div>
                <h4 className="text-bg-white font-bold mb-1">Fastpris Garanti</h4>
                <p className="text-bg-white/60 text-sm">Prisen du ser er prisen du betaler. Ingen skjulte gebyrer.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <h4 className="text-bg-white font-bold mb-1">100% Godkjenningsgaranti</h4>
                <p className="text-bg-white/60 text-sm">Vi garanterer at megler/huseier godkjenner vasken.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel-dark p-8 md:p-10 rounded-3xl"
        >
          {/* Slider */}
          <div className="mb-10">
            <div className="flex justify-between items-end mb-4">
              <label className="text-bg-white font-medium">{t('calculator.sqmLabel')}</label>
              <span className="text-3xl font-display font-bold text-accent">{sqm} m²</span>
            </div>
            <input 
              type="range" 
              min={pricing.flyttevask.minSqm} 
              max={pricing.flyttevask.maxSqm} 
              value={sqm} 
              onChange={(e) => setSqm(Number(e.target.value))}
              className="w-full h-2 bg-bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-xs text-bg-white/40 mt-2">
              <span>{pricing.flyttevask.minSqm} m²</span>
              <span>{pricing.flyttevask.maxSqm} m²</span>
            </div>
          </div>

          {/* Toggles */}
          <div className="mb-10 space-y-4">
            <p className="text-bg-white/60 text-sm font-medium uppercase tracking-wider mb-2">{t('calculator.extrasLabel')}</p>
            
            <label className="flex items-center justify-between p-4 rounded-xl border border-bg-white/10 bg-bg-white/5 cursor-pointer hover:bg-bg-white/10 transition-colors">
              <span className="text-bg-white">{t('calculator.extraWindows')}</span>
              <div className={`w-12 h-6 rounded-full transition-colors relative ${windows ? 'bg-accent' : 'bg-bg-white/20'}`}>
                <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-bg-white transition-transform ${windows ? 'translate-x-6' : ''}`} />
              </div>
              <input type="checkbox" className="hidden" checked={windows} onChange={() => setWindows(!windows)} />
            </label>

            <label className="flex items-center justify-between p-4 rounded-xl border border-bg-white/10 bg-bg-white/5 cursor-pointer hover:bg-bg-white/10 transition-colors">
              <span className="text-bg-white">{t('calculator.extraHeavy')}</span>
              <div className={`w-12 h-6 rounded-full transition-colors relative ${heavy ? 'bg-accent' : 'bg-bg-white/20'}`}>
                <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-bg-white transition-transform ${heavy ? 'translate-x-6' : ''}`} />
              </div>
              <input type="checkbox" className="hidden" checked={heavy} onChange={() => setHeavy(!heavy)} />
            </label>
          </div>

          {/* Total */}
          <div className="pt-8 border-t border-bg-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-bg-white/60 text-sm mb-1">{t('calculator.totalLabel')}</p>
              <div className="text-4xl font-display font-bold text-bg-white">
                {total.toLocaleString('no-NO')} <span className="text-xl text-bg-white/50">{pricing.currency}</span>
              </div>
            </div>
            <Button className="w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              {t('calculator.cta')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
