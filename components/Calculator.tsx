
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import pricing from "@/lib/pricing.json";

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(80);
  const [type, setType] = useState<"flyttevask" | "regular">("flyttevask");

  const calculatePrice = () => {
    if (type === "flyttevask") {
      return pricing.flyttevask.basePrice + (sqm * pricing.flyttevask.perSqmRate);
    }
    return pricing.regularCleaning.basePrice + (sqm * pricing.regularCleaning.perSqmRate);
  };

  return (
    <section id="calculator" className="py-24 bg-primary relative overflow-hidden clip-diagonal">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading badge={t("calculator.badge") as string} title={t("calculator.title") as string} light />
            <p className="text-surface/80 text-lg mb-8 max-w-md">
              {t("calculator.subtitle") as string}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-surface/10 p-4 rounded-xl border border-surface/20">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-surface font-bold text-xl">1</div>
                <p className="text-surface font-medium">Velg tjeneste og størrelse</p>
              </div>
              <div className="flex items-center gap-4 bg-surface/10 p-4 rounded-xl border border-surface/20">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-surface font-bold text-xl">2</div>
                <p className="text-surface font-medium">Få umiddelbar pris</p>
              </div>
              <div className="flex items-center gap-4 bg-surface/10 p-4 rounded-xl border border-surface/20">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-surface font-bold text-xl">3</div>
                <p className="text-surface font-medium">Send forespørsel uforpliktende</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-surface rounded-3xl p-8 shadow-2xl"
          >
            <div className="space-y-8">
              
              {/* Type Selection */}
              <div>
                <label className="block text-sm font-bold text-primary mb-3 uppercase tracking-wide">{t("calculator.typeLabel") as string}</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button 
                    onClick={() => setType("flyttevask")}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${type === "flyttevask" ? "border-accent bg-accent/5" : "border-border hover:border-primary/30"}`}
                  >
                    <div className="font-bold text-primary">{t("calculator.typeFlyttevask") as string}</div>
                  </button>
                  <button 
                    onClick={() => setType("regular")}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${type === "regular" ? "border-accent bg-accent/5" : "border-border hover:border-primary/30"}`}
                  >
                    <div className="font-bold text-primary">{t("calculator.typeRegular") as string}</div>
                  </button>
                </div>
              </div>

              {/* Slider */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-bold text-primary uppercase tracking-wide">{t("calculator.sqmLabel") as string}</label>
                  <span className="font-bold text-accent text-lg">{sqm} m²</span>
                </div>
                <input 
                  type="range" 
                  min="30" 
                  max="300" 
                  step="5"
                  value={sqm}
                  onChange={(e) => setSqm(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-text-muted mt-2">
                  <span>30 m²</span>
                  <span>300 m²</span>
                </div>
              </div>

              {/* Result */}
              <div className="bg-bg-light p-6 rounded-2xl border border-border text-center">
                <div className="text-sm font-medium text-text-muted mb-2">{t("calculator.estimatedPrice") as string}</div>
                <div className="text-5xl font-display font-bold text-primary mb-2">
                  {calculatePrice().toLocaleString("no-NO")} <span className="text-2xl text-text-muted">NOK</span>
                </div>
                <div className="text-xs text-text-muted">{t("calculator.includesMva") as string}</div>
              </div>

              <a href="#contact" className="block w-full bg-accent text-surface text-center py-4 rounded-xl font-bold text-lg hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20">
                {t("calculator.bookNow") as string}
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
