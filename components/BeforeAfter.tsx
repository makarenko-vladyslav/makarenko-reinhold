"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const pos = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
    setSliderPos(pos);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t("beforeAfter.badge")} title={t("beforeAfter.title")} subtitle={t("beforeAfter.subtitle")} />

        <div 
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image (Base) */}
          <img src={t("beforeAfter.afterUrl")} alt="After cleaning" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          
          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img src={t("beforeAfter.beforeUrl")} alt="Before cleaning" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.3)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" /></svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-bold pointer-events-none">
            {t("beforeAfter.beforeLabel")}
          </div>
          <div className="absolute top-6 right-6 bg-accent/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-bold pointer-events-none">
            {t("beforeAfter.afterLabel")}
          </div>
        </div>
      </div>
    </section>
  );
}
