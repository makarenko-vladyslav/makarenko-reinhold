"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "./Shared";

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge={t("beforeAfter.badge")}
          title={t("beforeAfter.title")}
          subtitle={t("beforeAfter.subtitle")}
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden premium-shadow cursor-ew-resize select-none group"
          ref={containerRef}
          onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
          onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
        >
          {/* After Image (Base) */}
          <img 
            src={t("beforeAfter.imgAfter")} 
            alt="After cleaning" 
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
            {t("beforeAfter.after")}
          </div>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img 
              src={t("beforeAfter.imgBefore")} 
              alt="Before cleaning" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
              draggable={false}
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
              {t("beforeAfter.before")}
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
                <polyline points="9 18 15 12 9 6" className="rotate-180 origin-center" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
