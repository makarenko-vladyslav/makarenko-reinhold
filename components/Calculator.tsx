"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./ui/SectionHeading";
import { Icons } from "./ui/Icons";

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(80);
  const [price, setPrice] = useState(0);

  const { basePrice, perSqmRate, minSqm, maxSqm, step } = pricing.flyttevask;

  useEffect(() => {
    // Formula: Base price covers up to 40m2, then add perSqmRate
    const calculated = sqm <= 40 ? basePrice : basePrice + ((sqm - 40) * perSqmRate);
    setPrice(calculated);
  }, [sqm, basePrice, perSqmRate]);

  const includes = t("calculator.includes") as string[];

  return (
    <section id="calculator" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-grid-white pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading 
              badge={t("calculator.badge")}
              title={t("calculator.title")}
              subtitle={t("calculator.subtitle")}
              theme="light"
            />

            <div className="space-y-4 mt-8">
              {includes.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Icons.check />
                  </div>
                  <span className="text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg-dark rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-white mb-8">{t("calculator.sqmLabel")}</h3>
            
            <div className="mb-12">
              <div className="flex justify-between text-white/60 text-sm font-medium mb-4">
                <span>{minSqm} m²</span>
                <span className="text-2xl text-white font-bold">{sqm} m²</span>
                <span>{maxSqm}+ m²</span>
              </div>
              
              <input 
                type="range" 
                min={minSqm} 
                max={maxSqm} 
                step={step}
                value={sqm}
                onChange={(e) => setSqm(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <p className="text-white/60 text-sm font-medium mb-2 uppercase tracking-wider">{t("calculator.estimatedPrice")}</p>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-display font-bold text-white tabular-nums tracking-tight">
                  {price.toLocaleString('no-NO')}
                </span>
                <span className="text-xl text-accent font-bold mb-1">{pricing.currency}</span>
              </div>
              <p className="text-white/40 text-sm mt-2">Inkl. MVA og alt utstyr</p>
            </div>

            <a href="#contact" className="block w-full bg-accent text-white text-center py-4 rounded-xl font-bold hover:bg-accent-dark transition-colors">
              {t("calculator.cta")}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
