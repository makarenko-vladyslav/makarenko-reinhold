"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./SectionHeading";

export default function Calculator() {
  const { t } = useLocale();
  const [service, setService] = useState("flyttevask");
  const [sqm, setSqm] = useState(80);
  const [condition, setCondition] = useState("normal");
  const [total, setTotal] = useState(0);

  const calcData = t('calculator') as any;
  const servicesList = pricing.services as Record<string, any>;

  useEffect(() => {
    const srv = servicesList[service];
    if (!srv) return;

    let base = srv.basePrice;
    let extraSqm = Math.max(0, sqm - srv.minSqm);
    let sqmPrice = extraSqm * srv.perSqm;
    
    let subtotal = base + sqmPrice;
    let multiplier = (pricing.conditionMultipliers as any)[condition] || 1;
    
    setTotal(Math.round(subtotal * multiplier));
  }, [service, sqm, condition]);

  return (
    <section id="calculator" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] -left-[10%] w-[40%] h-[60%] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading 
              badge={calcData.badge}
              title={calcData.title}
              subtitle={calcData.subtitle}
              light
            />
            
            <div className="space-y-6 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Velg tjeneste og størrelse</h4>
                  <p className="text-white/60 text-sm">Prisen tilpasses automatisk basert på dine valg.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Få umiddelbart estimat</h4>
                  <p className="text-white/60 text-sm">Ingen venting på tilbud. Prisen inkluderer MVA.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel-dark rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl"
          >
            <div className="space-y-8">
              {/* Service Select */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-3">{calcData.serviceLabel}</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {Object.keys(servicesList).map(key => (
                    <button
                      key={key}
                      onClick={() => setService(key)}
                      className={`py-3 px-4 rounded-xl text-sm font-medium transition-all border ${
                        service === key 
                          ? 'bg-accent border-accent text-white' 
                          : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      {servicesList[key].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider */}
              <div>
                <div className="flex justify-between items-end mb-3">
                  <label className="block text-white/80 text-sm font-medium">{calcData.sizeLabel}</label>
                  <span className="text-2xl font-display font-bold text-white">{sqm} m²</span>
                </div>
                <input 
                  type="range" 
                  min="30" 
                  max="300" 
                  step="5"
                  value={sqm}
                  onChange={(e) => setSqm(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-white/40 text-xs mt-2">
                  <span>30 m²</span>
                  <span>300 m²</span>
                </div>
              </div>

              {/* Condition */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-3">{calcData.conditionLabel}</label>
                <select 
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 appearance-none focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="normal" className="text-primary">{calcData.conditions.normal}</option>
                  <option value="heavy" className="text-primary">{calcData.conditions.heavy}</option>
                  <option value="post_renovation" className="text-primary">{calcData.conditions.post_renovation}</option>
                </select>
              </div>

              {/* Result */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/80 font-medium">{calcData.totalLabel}</span>
                  <motion.span 
                    key={total}
                    initial={{ scale: 1.1, color: "var(--color-accent)" }}
                    animate={{ scale: 1, color: "var(--color-surface)" }}
                    className="text-4xl font-display font-bold text-white"
                  >
                    {total} <span className="text-xl text-white/60 font-normal">NOK</span>
                  </motion.span>
                </div>
                <p className="text-white/40 text-xs text-right mb-8">{calcData.disclaimer}</p>
                
                <button className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_hsl(173_80%_40%/0.3)] hover:shadow-[0_0_30px_hsl(173_80%_40%/0.5)]">
                  {calcData.cta}
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
