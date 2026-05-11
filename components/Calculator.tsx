
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./SectionHeading";

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(pricing.flyttevask.defaultSqm);
  const [extras, setExtras] = useState<Record<string, boolean>>({
    windows: false,
    balcony: false,
    appliances: false
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let price = pricing.flyttevask.basePrice + (sqm * pricing.flyttevask.ratePerSqm);
    if (extras.windows) price += pricing.extras.find(e => e.id === 'windows')?.price || 0;
    if (extras.balcony) price += pricing.extras.find(e => e.id === 'balcony')?.price || 0;
    if (extras.appliances) price += pricing.extras.find(e => e.id === 'appliances')?.price || 0;
    setTotal(price);
  }, [sqm, extras]);

  const handleExtraToggle = (id: string) => {
    setExtras(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="calculator" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("calculator.badge")}
          title={t("calculator.title")}
          subtitle={t("calculator.subtitle")}
          centered
        />

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12 relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            {/* Slider Section */}
            <div className="mb-12 relative z-10">
              <div className="flex justify-between items-end mb-6">
                <label className="font-bold text-primary text-lg">{t("calculator.sqmLabel")}</label>
                <div className="text-3xl font-display font-bold text-accent">{sqm} <span className="text-lg text-text-muted">m²</span></div>
              </div>
              <input 
                type="range" 
                min={pricing.flyttevask.minSqm} 
                max={pricing.flyttevask.maxSqm} 
                value={sqm} 
                onChange={(e) => setSqm(Number(e.target.value))}
              />
              <div className="flex justify-between text-xs text-text-muted mt-2 font-medium">
                <span>{pricing.flyttevask.minSqm} m²</span>
                <span>{pricing.flyttevask.maxSqm} m²</span>
              </div>
            </div>

            {/* Extras Section */}
            <div className="mb-12 relative z-10">
              <label className="font-bold text-primary text-lg block mb-4">{t("calculator.extrasLabel")}</label>
              <div className="grid sm:grid-cols-2 gap-4">
                {Object.keys(extras).map((key) => (
                  <button
                    key={key}
                    onClick={() => handleExtraToggle(key)}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                      extras[key] 
                        ? "border-accent bg-accent/5" 
                        : "border-gray-100 hover:border-accent/30"
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                      extras[key] ? "bg-accent text-white" : "bg-gray-100 text-transparent"
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className={`font-medium ${extras[key] ? "text-primary" : "text-text-muted"}`}>
                      {t(`calculator.extras.${key}`)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Total Section */}
            <div className="bg-bg-light rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 border border-gray-100">
              <div>
                <div className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">{t("calculator.totalLabel")}</div>
                <div className="flex items-baseline gap-2">
                  <motion.span 
                    key={total}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-display font-bold text-primary"
                  >
                    {total.toLocaleString('no-NO')}
                  </motion.span>
                  <span className="text-xl font-bold text-text-muted">{pricing.currency}</span>
                </div>
                <p className="text-sm text-text-muted mt-2">{t("calculator.hourlyNote")}</p>
              </div>
              <a 
                href="#contact"
                className="w-full md:w-auto bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all text-center shadow-lg shadow-accent/20 hover:-translate-y-1"
              >
                {t("calculator.cta")}
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
