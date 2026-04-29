"use client";
import { useState, useRef, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section className="py-24 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("beforeAfter.badge")}
          title={t("beforeAfter.title")}
          subtitle={t("beforeAfter.subtitle")}
          theme="dark"
          align="center"
        />

        <div 
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[600px] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
          onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
          onMouseMove={handleMouseMove}
          onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Background) */}
          <img 
            src="https://picsum.photos/seed/after-clean/1200/800" 
            alt="After cleaning" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            loading="lazy"
          />
          <div className="absolute top-6 right-6 glass-panel-dark px-4 py-2 rounded-full text-white font-bold text-sm">
            {t("beforeAfter.after")}
          </div>

          {/* Before Image (Clipped Foreground) */}
          <div 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img 
              src="https://picsum.photos/seed/before-clean/1200/800" 
              alt="Before cleaning" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[50%] contrast-75"
              loading="lazy"
            />
            <div className="absolute top-6 left-6 glass-panel-dark px-4 py-2 rounded-full text-white font-bold text-sm">
              {t("beforeAfter.before")}
            </div>
          </div>

          {/* Slider Line & Thumb */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
