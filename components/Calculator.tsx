"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";

export default function Calculator() {
  const { t } = useLocale();

  const [serviceType, setServiceType] = useState<keyof typeof pricingData.services>("fast_renhold");
  const [area, setArea] = useState<number>(75);
  const [frequency, setFrequency] = useState<keyof typeof pricingData.frequencies>("biweekly");

  const serviceConfig = pricingData.services[serviceType];
  const freqConfig = pricingData.frequencies[frequency];

  const rawPrice = Math.max(serviceConfig.minPrice, area * serviceConfig.basePricePerSqM);
  const discountedPrice = Math.round(rawPrice * (1 - freqConfig.discount));
  const estimatedHours = Math.max(2, Math.round((area * 0.035) * 10) / 10);

  const includedItems = t("calculator.includedItems") as string[];

  return (
    <section id="kalkulator" className="py-24 bg-surface text-text-main relative overflow-hidden border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
            {String(t("calculator.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-primary mt-2 leading-tight">
            {String(t("calculator.heading"))}
          </h2>
          <p className="text-base sm:text-lg text-text-muted mt-3">
            {String(t("calculator.subheading"))}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Controls Column (Light Surface Card Container) */}
          <div className="lg:col-span-7 bg-bg-light p-6 sm:p-10 rounded-3xl border border-border-light shadow-sm">
            
            {/* 1. Service Selection */}
            <div className="mb-8">
              <label className="block text-xs uppercase font-mono font-bold text-accent tracking-wider mb-3">
                1. {String(t("calculator.serviceTypeLabel"))}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setServiceType("fast_renhold")}
                  className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all text-left uppercase tracking-wider ${
                    serviceType === "fast_renhold"
                      ? "bg-primary border-primary text-white shadow-md"
                      : "bg-surface border-border-light text-text-main hover:border-accent/60"
                  }`}
                >
                  Fast renhold
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType("flyttevask")}
                  className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all text-left uppercase tracking-wider ${
                    serviceType === "flyttevask"
                      ? "bg-primary border-primary text-white shadow-md"
                      : "bg-surface border-border-light text-text-main hover:border-accent/60"
                  }`}
                >
                  Flyttevask (Garanti)
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType("hyttevask")}
                  className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all text-left uppercase tracking-wider ${
                    serviceType === "hyttevask"
                      ? "bg-primary border-primary text-white shadow-md"
                      : "bg-surface border-border-light text-text-main hover:border-accent/60"
                  }`}
                >
                  Hyttevask Telemark
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType("storvask")}
                  className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all text-left uppercase tracking-wider ${
                    serviceType === "storvask"
                      ? "bg-primary border-primary text-white shadow-md"
                      : "bg-surface border-border-light text-text-main hover:border-accent/60"
                  }`}
                >
                  Hovedrengjøring
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType("kontorrenhold")}
                  className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all text-left uppercase tracking-wider ${
                    serviceType === "kontorrenhold"
                      ? "bg-primary border-primary text-white shadow-md"
                      : "bg-surface border-border-light text-text-main hover:border-accent/60"
                  }`}
                >
                  Kontor & Næring
                </button>
              </div>
            </div>

            {/* 2. Interactive Range Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs uppercase font-mono font-bold text-accent tracking-wider">
                  2. {String(t("calculator.areaLabel"))}
                </label>
                <span className="text-2xl font-display font-extrabold text-primary bg-accent-soft px-4 py-1 rounded-xl border border-accent/20">
                  {area} m²
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="300"
                step="5"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-3 bg-border-light rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-[11px] text-text-muted font-mono mt-2">
                <span>20 m² (Leilighet)</span>
                <span>150 m² (Enebolig)</span>
                <span>300 m² (Stor eiendom)</span>
              </div>
            </div>

            {/* 3. Frequency Discount */}
            {serviceType === "fast_renhold" && (
              <div className="mb-6">
                <label className="block text-xs uppercase font-mono font-bold text-accent tracking-wider mb-3">
                  3. {String(t("calculator.frequencyLabel"))}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(Object.keys(pricingData.frequencies) as Array<keyof typeof pricingData.frequencies>).map((freqKey) => (
                    <button
                      key={freqKey}
                      type="button"
                      onClick={() => setFrequency(freqKey)}
                      className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all text-center ${
                        frequency === freqKey
                          ? "bg-primary border-primary text-white shadow-sm"
                          : "bg-surface border-border-light text-text-main hover:bg-bg-light"
                      }`}
                    >
                      {pricingData.frequencies[freqKey].label}
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* High-Contrast Results Summary Box */}
          <div className="lg:col-span-5">
            <motion.div
              key={`${serviceType}-${area}-${frequency}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-primary text-white p-8 rounded-3xl shadow-2xl border border-primary-light relative"
            >
              <div className="text-xs uppercase tracking-widest font-mono font-bold text-accent mb-2">
                Beregnet Fastpris inkl. MVA
              </div>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-display font-extrabold text-white">
                  {discountedPrice.toLocaleString()} kr
                </span>
                <span className="text-xs font-bold text-white/70">NOK</span>
              </div>

              <div className="py-3 px-4 rounded-xl bg-bg-card-dark border border-white/10 flex justify-between items-center mb-6">
                <span className="text-xs text-white/70 font-medium">Estimert arbeidstid:</span>
                <span className="text-sm font-display font-bold text-white">ca. {estimatedHours} timer</span>
              </div>

              <div className="border-t border-white/10 pt-6 mb-8">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                  {String(t("calculator.includedTitle"))}
                </h4>
                <ul className="space-y-2.5">
                  {includedItems && includedItems.map((inc, i) => (
                    <li key={i} className="text-xs font-medium text-white/85 flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#kontakt"
                className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-display font-bold text-center text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all block"
              >
                {String(t("calculator.ctaBook"))} →
              </a>

              <p className="text-[11px] text-center text-white/60 mt-3">
                Endelig fastpris bekreftes skriftlig før oppstart. Ingen skjulte avgifter.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}