
"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./UI/SectionHeading";
import pricing from "@/lib/pricing.json";
import { motion } from "framer-motion";

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(70);
  const [price, setPrice] = useState(0);
  const [hours, setHours] = useState(0);

  const calcData = t("calculator") as any;

  useEffect(() => {
    // Logic: Base price + (sqm * rate)
    const calculatedPrice = pricing.flyttevask.basePrice + (sqm * pricing.flyttevask.pricePerSqm);
    setPrice(calculatedPrice);
    
    const calculatedHours = (sqm / 10) * pricing.flyttevask.estimatedHoursPer10Sqm;
    setHours(Math.max(2, Math.round(calculatedHours * 10) / 10)); // Min 2 hours
  }, [sqm]);

  return (
    <section id="calculator" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,hsl(199_89%_48%_/_0.1),transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={calcData.badge}
          title={calcData.title}
          subtitle={calcData.subtitle}
          light={true}
        />

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left: Interactive Area */}
          <div className="p-8 md:p-12 flex-1">
            <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-6">
              {calcData.sqmLabel}: <span className="text-primary text-2xl ml-2">{sqm} m²</span>
            </label>
            
            <input 
              type="range" 
              min={pricing.flyttevask.minSqm} 
              max={pricing.flyttevask.maxSqm} 
              value={sqm} 
              onChange={(e) => setSqm(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent mb-12"
            />
            
            <div className="space-y-4">
              {calcData.includes.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Result Area */}
          <div className="bg-bg-light p-8 md:p-12 md:w-1/3 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200">
            <div className="mb-8">
              <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">{calcData.priceLabel}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-display font-bold text-primary transition-all duration-300">
                  {price.toLocaleString('no-NO')}
                </span>
                <span className="text-xl text-text-muted font-medium">kr</span>
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">{calcData.timeLabel}</p>
              <p className="text-2xl font-bold text-primary">~{hours} timer</p>
            </div>

            <a href="#contact" className="w-full bg-accent hover:bg-accent-dark text-white text-center py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-accent/20">
              {calcData.cta}
            </a>
            <p className="text-xs text-center text-text-muted mt-4">Inkl. MVA. Endelig pris kan variere ved ekstrem tilsmussing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
