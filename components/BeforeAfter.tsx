"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading 
          badge={t("beforeAfter.badge")}
          title={t("beforeAfter.title")}
          subtitle={t("beforeAfter.subtitle")}
          centered
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl mt-12 group"
          ref={containerRef}
        >
          {/* After Image (Background) */}
          <img 
            src={t("beforeAfter.afterImg")} 
            alt="Clean" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            {t("beforeAfter.afterLabel")}
          </div>

          {/* Before Image (Foreground, Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img 
              src={t("beforeAfter.beforeImg")} 
              alt="Dirty" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
            />
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full z-10">
              {t("beforeAfter.beforeLabel")}
            </div>
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `calc(${sliderPos}% - 2px)` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
              </svg>
            </div>
          </div>

          {/* Invisible Range Input for accessibility and native touch handling */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderPos} 
            onChange={handleDrag}
            className="comparison-slider"
            aria-label="Compare before and after images"
          />
        </motion.div>
      </div>
    </section>
  );
}
