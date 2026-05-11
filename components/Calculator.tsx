
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./ui/SectionHeading";

export default function Calculator() {
  const { t } = useLocale();
  const [area, setArea] = useState(80);
  const [type, setType] = useState<"flyttevask" | "regelmessig" | "visning">("flyttevask");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const config = pricing.services[type];
    const calc = config.basePrice + (area * config.perSqmRate);
    setTotal(calc);
  }, [area, type]);

  return (
    <section id="calculator" className="py-24 bg-white relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bg-light rounded-bl-[100px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('calculator.badge')}
          title={t('calculator.title')}
          subtitle={t('calculator.subtitle')}
          align="center"
        />

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_hsl(222,47%,11%,0.08)] border border-border p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Controls */}
            <div className="space-y-10">
              {/* Service Type */}
              <div>
                <label className="block text-sm font-bold text-primary uppercase tracking-wider mb-4">
                  {t('calculator.typeLabel')}
                </label>
                <div className="space-y-3">
                  {(["flyttevask", "regelmessig", "visning"] as const).map((tOption) => (
                    <button
                      key={tOption}
                      onClick={() => setType(tOption)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                        type === tOption 
                          ? "border-accent bg-accent/5 text-primary" 
                          : "border-border hover:border-accent/30 text-text-muted"
                      }`}
                    >
                      <span className="font-semibold">{t(`calculator.type${tOption.charAt(0).toUpperCase() + tOption.slice(1)}`)}</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${type === tOption ? "border-accent" : "border-border"}`}>
                        {type === tOption && <div className="w-2.5 h-2.5 bg-accent rounded-full" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="block text-sm font-bold text-primary uppercase tracking-wider">
                    {t('calculator.areaLabel')}
                  </label>
                  <span className="text-2xl font-display font-bold text-accent">{area} m²</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="300" 
                  step="5"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-text-muted mt-2 font-medium">
                  <span>20 m²</span>
                  <span>300 m²</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="bg-primary rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-10 -mt-10" />
              
              <div>
                <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-2">
                  {t('calculator.totalLabel')}
                </p>
                <div className="flex items-baseline gap-2">
                  <motion.span 
                    key={total}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-display font-bold text-white"
                  >
                    {total.toLocaleString('no-NO')}
                  </motion.span>
                  <span className="text-xl text-accent-light font-bold">NOK</span>
                </div>
                {type === "regelmessig" && <p className="text-white/60 mt-2 text-sm">per gang</p>}
              </div>

              <div className="mt-10 space-y-4">
                <a 
                  href="#contact"
                  className="block w-full py-4 rounded-xl bg-accent text-white font-bold text-center transition-all hover:bg-accent-light hover:shadow-[0_0_20px_hsl(158,64%,42%,0.4)] active:scale-95"
                >
                  {t('calculator.cta')}
                </a>
                <p className="text-xs text-white/40 text-center">
                  {t('calculator.disclaimer')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
