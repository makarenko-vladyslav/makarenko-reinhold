"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";

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

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("beforeAfter.badge")}
          title={t("beforeAfter.title")}
          subtitle={t("beforeAfter.subtitle")}
          centered
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div 
            ref={containerRef}
            className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-ew-resize shadow-2xl select-none"
            onMouseMove={onMouseMove}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={onTouchMove}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* After Image (Background) */}
            <img 
              src={t("beforeAfter.imageAfter")} 
              alt="After cleaning" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            
            <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md px-4 py-1 rounded-full text-white text-sm font-medium">
              {t("beforeAfter.afterLabel")}
            </div>

            {/* Before Image (Clipped) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img 
                src={t("beforeAfter.imageBefore")} 
                alt="Before cleaning" 
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'grayscale(30%) contrast(120%)' }} // Exaggerate dirt slightly
              />
              <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-1 rounded-full text-white text-sm font-medium">
                {t("beforeAfter.beforeLabel")}
              </div>
            </div>

            {/* Slider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" /></svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
