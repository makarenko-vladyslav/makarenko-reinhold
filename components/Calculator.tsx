"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./SectionHeading";

export default function Calculator() {
  const { t } = useLocale();
  const [size, setSize] = useState(pricing.defaultSize);
  const [service, setService] = useState("standard");
  const [frequency, setFrequency] = useState("once");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const baseRate = pricing.basePrices[service as keyof typeof pricing.basePrices];
    const multiplier = pricing.multipliers[frequency as keyof typeof pricing.multipliers];
    const calculated = Math.round(size * baseRate * multiplier);
    setPrice(calculated);
  }, [size, service, frequency]);

  const services = [
    { id: "standard", label: t("services.items.0.title") },
    { id: "deep", label: t("services.items.1.title") },
    { id: "moveout", label: t("services.items.2.title") },
  ];

  const frequencies = [
    { id: "once", label: t("calculator.frequencies.once") },
    { id: "monthly", label: t("calculator.frequencies.monthly") },
    { id: "biweekly", label: t("calculator.frequencies.biweekly") },
    { id: "weekly", label: t("calculator.frequencies.weekly") },
  ];

  return (
    <section id="pricing" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t("calculator.badge")}
          title={t("calculator.title")}
          subtitle={t("calculator.subtitle")}
          light
        />

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Controls */}
          <div className="flex-1 p-8 md:p-12">
            
            {/* Size Slider */}
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4">
                <label className="font-bold text-primary">{t("calculator.sizeLabel")}</label>
                <span className="text-2xl font-display font-bold text-accent">{size} m²</span>
              </div>
              <input 
                type="range" 
                min={pricing.minSize} 
                max={pricing.maxSize} 
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-xs text-text-muted mt-2">
                <span>{pricing.minSize} m²</span>
                <span>{pricing.maxSize} m²</span>
              </div>
            </div>

            {/* Service Type */}
            <div className="mb-8">
              <label className="font-bold text-primary block mb-4">{t("calculator.serviceLabel")}</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {services.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setService(s.id)}
                    className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                      service === s.id 
                        ? "border-accent bg-accent/10 text-accent" 
                        : "border-gray-200 text-text-muted hover:border-accent/50"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Frequency */}
            <div>
              <label className="font-bold text-primary block mb-4">{t("calculator.frequencyLabel")}</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {frequencies.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setFrequency(f.id)}
                    className={`py-2 px-3 rounded-lg border text-xs font-medium transition-all ${
                      frequency === f.id 
                        ? "border-primary bg-primary text-white" 
                        : "border-gray-200 text-text-muted hover:border-primary/50"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Panel */}
          <div className="md:w-80 bg-bg-light p-8 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100">
            <p className="text-text-muted font-medium mb-2">{t("calculator.estimatedPrice")}</p>
            <div className="flex items-baseline gap-2 mb-6">
              <motion.span 
                key={price}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-display font-bold text-primary"
              >
                {price.toLocaleString('no-NO')}
              </motion.span>
              <span className="text-xl font-medium text-text-muted">kr</span>
            </div>
            
            <p className="text-xs text-text-muted mb-8 leading-relaxed">
              {t("calculator.disclaimer")}
            </p>
            
            <a 
              href="#contact"
              className="w-full py-4 rounded-xl bg-accent hover:bg-accent-hover text-white font-bold text-center transition-colors shadow-lg shadow-accent/20"
            >
              {t("calculator.cta")}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}