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
    // Logic: Base price + (m2 * pricePerSqm)
    const calc = pricing.flyttevask.basePrice + (sqm * pricing.flyttevask.pricePerSqm);
    setPrice(calc);
  }, [sqm]);

  return (
    <section id="calculator" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-light rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t("calculator.badge")}
          title={t("calculator.title")}
          subtitle={t("calculator.subtitle")}
          centered={true}
          light={true}
        />

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <div className="mb-12">
              <div className="flex justify-between items-end mb-6">
                <label className="text-lg font-bold text-primary">{t("calculator.sizeLabel")}</label>
                <div className="text-3xl font-display font-bold text-accent">{sqm} m²</div>
              </div>
              
              <div className="relative pt-4 pb-8">
                <input 
                  type="range" 
                  min={pricing.flyttevask.minSqm} 
                  max={pricing.flyttevask.maxSqm} 
                  value={sqm}
                  onChange={(e) => setSqm(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-text-muted mt-2 font-medium">
                  <span>{pricing.flyttevask.minSqm} m²</span>
                  <span>{pricing.flyttevask.maxSqm} m²</span>
                </div>
              </div>
            </div>

            <div className="bg-bg-alt rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">
                  {t("calculator.estimatedPrice")}
                </div>
                <div className="text-5xl font-display font-bold text-primary flex items-baseline gap-2">
                  {price.toLocaleString('no-NO')} <span className="text-2xl text-text-muted font-medium">{pricing.currency}</span>
                </div>
                <p className="text-sm text-text-muted mt-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t("calculator.includes")}
                </p>
              </div>
              
              <a href="#contact" className="w-full md:w-auto text-center bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg shadow-accent/20 shrink-0">
                {t("calculator.cta")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
