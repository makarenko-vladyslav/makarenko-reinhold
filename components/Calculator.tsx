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
    // Formula: Base price + (sqm * pricePerSqm)
    const calculated = pricing.flyttevask.basePrice + (sqm * pricing.flyttevask.pricePerSqm);
    setPrice(calculated);
  }, [sqm]);

  return (
    <section id="calculator" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading 
            badge={t("calculator.badge")}
            title={t("calculator.title")}
            subtitle={t("calculator.subtitle")}
            light
          />
          <ul className="space-y-4 mb-8">
            {["100% Godkjenningsgaranti", "Alt utstyr inkludert", "Svanemerkede produkter", "Fastpris uten overraskelser"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white/90">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Calculator Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative"
        >
          <div className="mb-8">
            <div className="flex justify-between items-end mb-4">
              <label className="text-lg font-bold text-primary">{t("calculator.sqmLabel")}</label>
              <div className="text-3xl font-display font-bold text-accent">{sqm} m²</div>
            </div>
            
            <input 
              type="range" 
              min={pricing.flyttevask.minSqm} 
              max={pricing.flyttevask.maxSqm} 
              value={sqm}
              onChange={(e) => setSqm(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
              style={{
                background: `linear-gradient(to right, hsl(175 75% 35%) ${(sqm - pricing.flyttevask.minSqm) / (pricing.flyttevask.maxSqm - pricing.flyttevask.minSqm) * 100}%, #e5e7eb ${(sqm - pricing.flyttevask.minSqm) / (pricing.flyttevask.maxSqm - pricing.flyttevask.minSqm) * 100}%)`
              }}
            />
            <div className="flex justify-between text-sm text-text-muted mt-2">
              <span>{pricing.flyttevask.minSqm} m²</span>
              <span>{pricing.flyttevask.maxSqm} m²</span>
            </div>
          </div>

          <div className="bg-bg-light rounded-2xl p-6 mb-8 border border-gray-100">
            <div className="text-sm text-text-muted font-medium mb-1">{t("calculator.priceLabel")}</div>
            <div className="text-5xl font-display font-bold text-primary tracking-tight">
              {price.toLocaleString('no-NO')} <span className="text-2xl text-text-muted font-medium">NOK</span>
            </div>
          </div>

          <p className="text-xs text-text-muted mb-6 text-center">{t("calculator.disclaimer")}</p>

          <a 
            href="#contact"
            className="block w-full bg-primary hover:bg-primary-light text-white text-center py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
          >
            {t("calculator.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}