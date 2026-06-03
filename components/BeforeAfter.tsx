"use client";
import { useState, useRef, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('beforeAfter.badge')}
          title={t('beforeAfter.title')}
          subtitle={t('beforeAfter.subtitle')}
          centered
        />

        <div 
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[600px] rounded-3xl overflow-hidden cursor-ew-resize shadow-2xl"
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          {/* After Image (Background) */}
          <img 
            src={t('beforeAfter.afterUrl')} 
            alt="After cleaning" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
            {t('beforeAfter.afterLabel')}
          </div>

          {/* Before Image (Foreground/Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img 
              src={t('beforeAfter.beforeUrl')} 
              alt="Before cleaning" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
              {t('beforeAfter.beforeLabel')}
            </div>
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `calc(${sliderPos}% - 2px)` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
