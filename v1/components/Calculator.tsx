"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";
import { SectionHeading, Button } from "./Shared";

export default function Calculator() {
  const { t } = useLocale();
  
  const [serviceType, setServiceType] = useState<"flyttevask" | "regelmessig" | "visning">("flyttevask");
  const [sqm, setSqm] = useState<number>(80);
  const [frequency, setFrequency] = useState<"engangs" | "ukentlig" | "biukentlig">("engangs");
  const [price, setPrice] = useState<number>(0);

  const types = t("calculator.types") as Record<string, string>;
  const frequencies = t("calculator.frequencies") as Record<string, string>;

  useEffect(() => {
    const serviceConfig = pricingData.services[serviceType];
    const base = serviceConfig.basePrice;
    
    // Calculate extra sqm above minimum
    const extraSqm = Math.max(0, sqm - serviceConfig.minSqm);
    const sqmPrice = extraSqm * serviceConfig.perSqm;
    
    let total = base + sqmPrice;
    
    // Apply frequency multiplier
    if (serviceType === "regelmessig") {
      total = total * pricingData.multipliers[frequency];
    }

    setPrice(Math.round(total));
  }, [serviceType, sqm, frequency]);

  return (
    <section id="calculator" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          badge={t("calculator.badge")}
          title={t("calculator.title")}
          subtitle={t("calculator.subtitle")}
          light={true}
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel-dark rounded-3xl p-6 sm:p-10"
        >
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Controls */}
            <div className="space-y-8">
              {/* Service Type */}
              <div>
                <label className="block text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
                  {t("calculator.typeLabel")}
                </label>
                <div className="flex flex-col gap-2">
                  {(Object.keys(types) as Array<keyof typeof types>).map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setServiceType(type as any);
                        if (type !== "regelmessig") setFrequency("engangs");
                      }}
                      className={`px-4 py-3 rounded-xl text-left font-medium transition-all ${
                        serviceType === type 
                          ? "bg-accent text-white shadow-lg shadow-accent/20" 
                          : "bg-white/5 text-white/70 hover:bg-white/10"
                      }`}
                    >
                      {types[type]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                    {t("calculator.sizeLabel")}
                  </label>
                  <span className="text-accent font-bold">{sqm} m²</span>
                </div>
                <input 
                  type="range" 
                  min={pricingData.services[serviceType].minSqm} 
                  max={pricingData.services[serviceType].maxSqm} 
                  step="5"
                  value={sqm}
                  onChange={(e) => setSqm(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-white/40 mt-2">
                  <span>{pricingData.services[serviceType].minSqm} m²</span>
                  <span>{pricingData.services[serviceType].maxSqm} m²</span>
                </div>
              </div>

              {/* Frequency (Only for regular) */}
              {serviceType === "regelmessig" && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                  <label className="block text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
                    {t("calculator.frequencyLabel")}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(Object.keys(frequencies) as Array<keyof typeof frequencies>).map((freq) => (
                      <button
                        key={freq}
                        onClick={() => setFrequency(freq as any)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          frequency === freq 
                            ? "bg-white/20 text-white border border-white/30" 
                            : "bg-white/5 text-white/60 border border-transparent hover:bg-white/10"
                        }`}
                      >
                        {frequencies[freq]}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Result */}
            <div className="flex flex-col justify-center items-center p-8 bg-black/40 rounded-2xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[50px]" />
              
              <span className="text-white/60 font-medium mb-2">{t("calculator.totalLabel")}</span>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl sm:text-6xl font-display font-bold text-white tracking-tight">
                  {price.toLocaleString('no-NO')}
                </span>
                <span className="text-xl text-accent font-semibold">{pricingData.currency}</span>
              </div>
              
              <p className="text-sm text-white/50 text-center mb-8 max-w-[250px]">
                *Prisen er et estimat inkl. MVA. Eksakt pris bekreftes ved befaring.
              </p>
              
              <a href={`#contact?service=${serviceType}&sqm=${sqm}`} className="w-full">
                <Button variant="primary" className="w-full text-lg py-4">
                  {t("calculator.cta")}
                </Button>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
