
"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Calculator() {
  const { t } = useLocale();
  const [service, setService] = useState("flyttevask");
  const [sqm, setSqm] = useState(70);
  const [price, setPrice] = useState(0);

  const services = Object.entries(pricing.services).map(([key, val]) => ({
    id: key,
    name: val.name,
    base: val.basePrice,
    perSqm: val.perSqm
  }));

  useEffect(() => {
    const selectedService = pricing.services[service as keyof typeof pricing.services];
    if (selectedService) {
      const calculated = selectedService.basePrice + (sqm * selectedService.perSqm);
      setPrice(calculated);
    }
  }, [service, sqm]);

  return (
    <section id="calculator" className="py-24 bg-bg-tint relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 rounded-l-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading 
              badge={t("calculator.badge")}
              title={t("calculator.title")}
              subtitle={t("calculator.subtitle")}
            />
            
            <div className="space-y-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-bold text-text-main mb-4 uppercase tracking-wide">
                  {t("calculator.serviceLabel")}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setService(s.id)}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all border-2 ${
                        service === s.id 
                          ? "border-accent bg-accent/5 text-accent" 
                          : "border-gray-100 bg-white text-text-muted hover:border-accent/30"
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="block text-sm font-bold text-text-main uppercase tracking-wide">
                    {t("calculator.sizeLabel")}
                  </label>
                  <span className="text-2xl font-display font-bold text-primary">{sqm} m²</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="300" 
                  step="5"
                  value={sqm}
                  onChange={(e) => setSqm(Number(e.target.value))}
                  className="w-full"
                  style={{
                    background: `linear-gradient(to right, var(--color-accent) ${((sqm - 20) / 280) * 100}%, var(--color-bg-tint) ${((sqm - 20) / 280) * 100}%)`
                  }}
                />
                <div className="flex justify-between text-xs text-text-muted mt-2 font-medium">
                  <span>20 m²</span>
                  <span>300 m²</span>
                </div>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/40 rounded-full blur-[80px]" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <p className="text-accent-light font-semibold mb-2 uppercase tracking-wider text-sm">
                  {t("calculator.resultLabel")}
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-6xl md:text-7xl font-display font-bold tabular-nums tracking-tight">
                    {price.toLocaleString('no-NO')}
                  </span>
                  <span className="text-xl text-white/60 font-medium">NOK</span>
                </div>
                <p className="text-white/70 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t("calculator.mvaNote")}
                </p>
              </div>

              <div className="mt-12">
                <a 
                  href="#contact"
                  className="block w-full text-center bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-accent/20"
                >
                  {t("calculator.cta")}
                </a>
                <p className="text-center text-white/50 text-xs mt-4">
                  *Dette er et estimat. Endelig pris bekreftes ved befaring.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
