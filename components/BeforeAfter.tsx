"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => { if (isDragging) handleMove(e.clientX); };
    const handleTouchMove = (e: TouchEvent) => { if (isDragging) handleMove(e.touches[0].clientX); };

    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchend', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("beforeAfter.badge") as string}
          title={t("beforeAfter.title") as string}
          subtitle={t("beforeAfter.subtitle") as string}
          centered
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden premium-shadow aspect-[4/3] md:aspect-[16/9] cursor-ew-resize select-none"
          ref={containerRef}
          onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
          onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
        >
          {/* After Image (Background) */}
          <img 
            src={t("beforeAfter.afterImage") as string} 
            alt="After" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary z-10">
            {t("beforeAfter.afterLabel") as string}
          </div>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPos}%` }}
          >
            <img 
              src={t("beforeAfter.beforeImage") as string} 
              alt="Before" 
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: containerRef.current?.offsetWidth || '100vw' }}
            />
            <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white z-10">
              {t("beforeAfter.beforeLabel") as string}
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{ left: `calc(${sliderPos}% - 2px)` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
