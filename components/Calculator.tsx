"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./SectionHeading";

export default function Calculator() {
  const { t } = useLocale();
  const [area, setArea] = useState(80);
  const [serviceType, setServiceType] = useState<keyof typeof pricing.services>("regular");
  const [extras, setExtras] = useState<string[]>([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const service = pricing.services[serviceType];
    const hours = area * service.timePerSqm;
    let total = hours * pricing.baseHourlyRate * service.multiplier;
    
    extras.forEach(extra => {
      total += pricing.extras[extra as keyof typeof pricing.extras].price;
    });
    
    setPrice(Math.round(total));
  }, [area, serviceType, extras]);

  return (
    <section id="calculator" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Aurora Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light rounded-full mix-blend-screen filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t("calculator.badge")}
          title={t("calculator.title")}
          subtitle={t("calculator.subtitle")}
          light
          centered
        />

        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-5">
          {/* Controls */}
          <div className="md:col-span-3 p-8 md:p-10 bg-white">
            <div className="space-y-8">
              {/* Area Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="font-bold text-primary">{t("calculator.areaLabel")}</label>
                  <span className="text-2xl font-display font-bold text-accent">{area} m²</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="300" 
                  step="5"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>20 m²</span>
                  <span>300 m²</span>
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="font-bold text-primary block mb-4">{t("calculator.typeLabel")}</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {Object.entries(pricing.services).map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => setServiceType(key as keyof typeof pricing.services)}
                      className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                        serviceType === key 
                          ? "border-accent bg-accent/10 text-accent" 
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {val.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extras */}
              <div>
                <label className="font-bold text-primary block mb-4">{t("calculator.extrasLabel")}</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(pricing.extras).map(([key, val]) => (
                    <label key={key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                      <input 
                        type="checkbox"
                        checked={extras.includes(key)}
                        onChange={(e) => {
                          if (e.target.checked) setExtras([...extras, key]);
                          else setExtras(extras.filter(x => x !== key));
                        }}
                        className="w-5 h-5 text-accent rounded border-gray-300 focus:ring-accent"
                      />
                      <span className="text-sm font-medium text-gray-700">{val.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Result Panel */}
          <div className="md:col-span-2 bg-bg-light p-8 md:p-10 flex flex-col justify-center border-l border-gray-100">
            <div className="text-center">
              <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">{t("calculator.resultLabel")}</p>
              <div className="text-5xl font-display font-bold text-primary mb-2 flex items-baseline justify-center gap-2">
                <motion.span
                  key={price}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block"
                >
                  {price.toLocaleString('no-NO')}
                </motion.span>
                <span className="text-xl text-text-muted font-medium">NOK</span>
              </div>
              <p className="text-xs text-gray-500 mb-8">{t("calculator.disclaimer")}</p>
              
              <a href="#contact" className="block w-full py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                {t("calculator.cta")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
