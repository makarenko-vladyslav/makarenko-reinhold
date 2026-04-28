"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(70);
  const [extras, setExtras] = useState<Record<string, boolean>>({
    windows_out: false,
    balcony: false,
    white_goods: false
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let price = pricing.flyttevask.basePrice;
    if (sqm > pricing.flyttevask.minSqm) {
      price += (sqm - pricing.flyttevask.minSqm) * pricing.flyttevask.perSqm;
    }
    
    pricing.flyttevask.extras.forEach(extra => {
      if (extras[extra.id]) price += extra.price;
    });
    
    setTotal(price);
  }, [sqm, extras]);

  const handleExtraToggle = (id: string) => {
    setExtras(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="calculator" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <SectionHeading 
            badge={t("calculator.badge")}
            title={t("calculator.title")}
            subtitle={t("calculator.subtitle")}
            light
          />
          
          <div className="hidden lg:block mt-12 space-y-6">
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p>Overtakelsesgaranti inkludert</p>
            </div>
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <p>Rask utrykning i Telemark</p>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative"
        >
          {/* Slider */}
          <div className="mb-10">
            <div className="flex justify-between items-end mb-4">
              <label className="font-bold text-primary">{t("calculator.sizeLabel")}</label>
              <span className="text-3xl font-display font-bold text-accent">{sqm} m²</span>
            </div>
            <input 
              type="range" 
              min={pricing.flyttevask.minSqm} 
              max={pricing.flyttevask.maxSqm} 
              value={sqm}
              onChange={(e) => setSqm(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>{pricing.flyttevask.minSqm} m²</span>
              <span>{pricing.flyttevask.maxSqm} m²</span>
            </div>
          </div>

          {/* Extras */}
          <div className="mb-10">
            <label className="font-bold text-primary block mb-4">{t("calculator.extrasLabel")}</label>
            <div className="space-y-3">
              {[
                { id: "windows_out", label: t("calculator.extraWindows") },
                { id: "balcony", label: t("calculator.extraBalcony") },
                { id: "white_goods", label: t("calculator.extraWhiteGoods") }
              ].map((extra) => (
                <label key={extra.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl cursor-pointer hover:border-accent/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${extras[extra.id] ? 'bg-accent border-accent' : 'border-gray-300'}`}>
                      {extras[extra.id] && <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className="font-medium text-primary">{extra.label}</span>
                  </div>
                  <span className="text-sm text-gray-500">+{pricing.flyttevask.extras.find(e => e.id === extra.id)?.price} kr</span>
                </label>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="bg-bg-light rounded-2xl p-6 mb-6 text-center border border-gray-100">
            <p className="text-sm text-text-muted font-medium uppercase tracking-wider mb-2">{t("calculator.totalLabel")}</p>
            <div className="text-5xl font-display font-bold text-primary">
              {total.toLocaleString('no-NO')} <span className="text-2xl text-gray-400">kr</span>
            </div>
          </div>

          <Button href="#contact" variant="primary" className="w-full">
            {t("calculator.cta")}
          </Button>
          
          <p className="text-center text-xs text-gray-400 mt-4">{t("calculator.disclaimer")}</p>
        </motion.div>

      </div>
    </section>
  );
}
