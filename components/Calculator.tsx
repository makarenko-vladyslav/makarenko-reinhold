"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./SectionHeading";

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(pricing.flyttevask.defaultSqm);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const calculated = pricing.flyttevask.basePrice + (sqm * pricing.flyttevask.pricePerSqm);
    setPrice(calculated);
  }, [sqm]);

  return (
    <section id="calculator" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("calculator.badge") as string}
          title={t("calculator.title") as string}
          subtitle={t("calculator.subtitle") as string}
          centered
        />

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 premium-shadow border border-gray-100"
          >
            <div className="mb-12">
              <div className="flex justify-between items-end mb-6">
                <label className="text-lg font-bold text-primary">{t("calculator.sizeLabel") as string}</label>
                <div className="text-3xl font-display font-bold text-accent">{sqm} m²</div>
              </div>
              
              <div className="relative pt-4 pb-8">
                <input 
                  type="range" 
                  min={pricing.flyttevask.minSqm} 
                  max={pricing.flyttevask.maxSqm} 
                  value={sqm} 
                  onChange={(e) => setSqm(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-text-muted mt-2 font-medium">
                  <span>{pricing.flyttevask.minSqm} m²</span>
                  <span>{pricing.flyttevask.maxSqm} m²</span>
                </div>
              </div>
            </div>

            <div className="bg-bg-light rounded-2xl p-8 text-center border border-gray-100">
              <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">{t("calculator.pricePrefix") as string}</p>
              <div className="flex items-baseline justify-center gap-2 mb-6">
                <span className="text-5xl md:text-6xl font-display font-bold text-primary tabular-nums tracking-tight">
                  {price.toLocaleString('no-NO')}
                </span>
                <span className="text-xl font-bold text-text-muted">{t("calculator.priceSuffix") as string}</span>
              </div>
              <a 
                href="#contact" 
                className="inline-block w-full md:w-auto px-10 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-accent/20"
              >
                {t("calculator.cta") as string}
              </a>
              <p className="text-xs text-text-muted mt-6 max-w-md mx-auto">{t("calculator.disclaimer") as string}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
