"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./SectionHeading";

export default function Calculator() {
  const { t } = useLocale();
  const [area, setArea] = useState(80);
  const [service, setService] = useState("fast");
  const [extras, setExtras] = useState<string[]>([]);

  // Calculation Logic
  const selectedService = pricing.services[service as keyof typeof pricing.services];
  const baseHours = (area / 10) * selectedService.baseHoursPer10m2;
  const basePrice = baseHours * pricing.baseHourlyRate * selectedService.multiplier;
  
  const extrasPrice = extras.reduce((total, extraId) => {
    const extra = pricing.extras.find(e => e.id === extraId);
    return total + (extra ? extra.price : 0);
  }, 0);

  const totalPrice = Math.round(basePrice + extrasPrice);

  const toggleExtra = (id: string) => {
    setExtras(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);
  };

  return (
    <section id="calculator" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-light rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading badge={t("calculator.badge")} title={t("calculator.title")} subtitle={t("calculator.subtitle")} />

        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-premium border border-border-light">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Controls */}
            <div className="space-y-8">
              {/* Service Select */}
              <div>
                <label className="block text-sm font-bold text-text-main mb-3 uppercase tracking-wider">{t("calculator.serviceLabel")}</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(pricing.services).map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => setService(key)}
                      className={`p-3 rounded-xl border-2 text-sm font-semibold transition-all ${service === key ? "border-accent bg-accent/5 text-primary" : "border-border-light text-text-muted hover:border-accent/30"}`}
                    >
                      {val.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Slider */}
              <div>
                <div className="flex justify-between items-end mb-3">
                  <label className="block text-sm font-bold text-text-main uppercase tracking-wider">{t("calculator.areaLabel")}</label>
                  <span className="text-2xl font-display font-bold text-primary">{area} m²</span>
                </div>
                <input 
                  type="range" 
                  min="20" max="300" step="5" 
                  value={area} 
                  onChange={(e) => setArea(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs text-text-muted mt-2 font-medium">
                  <span>20 m²</span>
                  <span>300 m²</span>
                </div>
              </div>

              {/* Extras */}
              <div>
                <label className="block text-sm font-bold text-text-main mb-3 uppercase tracking-wider">{t("calculator.extrasLabel")}</label>
                <div className="space-y-3">
                  {pricing.extras.map(extra => (
                    <label key={extra.id} className="flex items-center justify-between p-3 rounded-xl border border-border-light cursor-pointer hover:bg-bg-light transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center ${extras.includes(extra.id) ? "bg-accent border-accent" : "border-gray-300"}`}>
                          {extras.includes(extra.id) && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                        </div>
                        <span className="font-medium text-text-main">{extra.name}</span>
                      </div>
                      <span className="text-sm text-text-muted">+{extra.price} {pricing.currency}</span>
                      <input type="checkbox" className="hidden" checked={extras.includes(extra.id)} onChange={() => toggleExtra(extra.id)} />
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Panel */}
            <div className="bg-primary rounded-2xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
              
              <div className="relative z-10 text-center">
                <p className="text-white/70 font-medium uppercase tracking-wider mb-2">{t("calculator.totalLabel")}</p>
                <div className="flex items-end justify-center gap-2 mb-8">
                  <span className="text-6xl font-display font-bold">{totalPrice}</span>
                  <span className="text-xl text-white/70 mb-2">{pricing.currency}</span>
                </div>
                
                <ul className="space-y-3 text-sm text-white/80 mb-8 text-left max-w-xs mx-auto">
                  <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Inkluderer alt utstyr</li>
                  <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Svanemerkede produkter</li>
                  <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> 100% Fornøydgaranti</li>
                </ul>

                <a href="#contact" className="block w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
                  {t("calculator.cta")}
                </a>
                <p className="text-xs text-white/50 mt-4">{t("calculator.disclaimer")}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
