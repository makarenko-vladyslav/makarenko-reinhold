
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./SectionHeading";

export default function Calculator() {
  const { t } = useLocale();
  const [service, setService] = useState<keyof typeof pricing.services>("flyttevask");
  const [sqm, setSqm] = useState(80);
  const [extras, setExtras] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  const sData = pricing.services[service];

  useEffect(() => {
    let price = sData.basePrice;
    if (sqm > sData.minSqm) {
      price += (sqm - sData.minSqm) * sData.perSqm;
    }
    
    extras.forEach(extId => {
      const ext = pricing.extras.find(e => e.id === extId);
      if (ext) price += ext.price;
    });

    setTotal(price);
  }, [service, sqm, extras, sData]);

  const toggleExtra = (id: string) => {
    setExtras(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);
  };

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("calculator.badge")}
          title={t("calculator.title")}
          subtitle={t("calculator.subtitle")}
          centered
        />

        <div className="max-w-4xl mx-auto bg-bg-light rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Inputs */}
            <div className="space-y-8">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-bold text-primary uppercase tracking-wider mb-4">
                  {t("calculator.serviceLabel")}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(Object.keys(pricing.services) as Array<keyof typeof pricing.services>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setService(key)}
                      className={`py-3 px-4 rounded-xl font-medium text-sm transition-all border ${
                        service === key 
                          ? "bg-primary text-white border-primary shadow-md" 
                          : "bg-white text-text-muted border-gray-200 hover:border-accent"
                      }`}
                    >
                      {pricing.services[key].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">
                    {t("calculator.sqmLabel")}
                  </label>
                  <span className="font-display font-bold text-accent text-xl">{sqm} m²</span>
                </div>
                <input 
                  type="range" 
                  min={sData.minSqm} 
                  max={sData.maxSqm} 
                  step={sData.step}
                  value={sqm}
                  onChange={(e) => setSqm(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>{sData.minSqm} m²</span>
                  <span>{sData.maxSqm} m²</span>
                </div>
              </div>

              {/* Extras */}
              <div>
                <label className="block text-sm font-bold text-primary uppercase tracking-wider mb-4">
                  {t("calculator.extrasLabel")}
                </label>
                <div className="space-y-3">
                  {pricing.extras.map((ext) => (
                    <label key={ext.id} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 cursor-pointer hover:border-accent transition-colors">
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          checked={extras.includes(ext.id)}
                          onChange={() => toggleExtra(ext.id)}
                          className="w-5 h-5 rounded border-gray-300 text-accent focus:ring-accent"
                        />
                        <span className="text-primary font-medium">{ext.name}</span>
                      </div>
                      <span className="text-text-muted text-sm">+{ext.price} kr</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Panel */}
            <div className="bg-primary rounded-3xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <p className="text-accent font-bold tracking-wider uppercase text-sm mb-2">
                  {t("calculator.totalLabel")}
                </p>
                <div className="flex items-baseline gap-2 mb-8">
                  <motion.span 
                    key={total}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl font-display font-bold"
                  >
                    {total}
                  </motion.span>
                  <span className="text-xl text-gray-400">kr</span>
                </div>

                <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Utstyr og midler inkludert
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    100% Fornøydgaranti
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Ingen skjulte gebyrer
                  </li>
                </ul>

                <a 
                  href="#contact" 
                  className="block w-full bg-accent hover:bg-accent-hover text-white text-center py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-accent/50"
                >
                  {t("calculator.cta")}
                </a>
                <p className="text-center text-xs text-gray-400 mt-4">
                  {t("calculator.disclaimer")}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
