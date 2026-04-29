"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function BeforeAfter() {
  const { t } = useLocale();
  const data = t('beforeAfter') as any;
  const [sliderPos, setSliderPos] = useState(50);

  // Using the first image pair for the slider
  const pair = data.images[0];

  return (
    <section className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={data.badge}
          title={data.title}
          light
          centered
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl">
            {/* After Image (Background) */}
            <img 
              src={pair.after} 
              alt="After cleaning" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            
            {/* Before Image (Foreground, clipped) */}
            <div 
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img 
                src={pair.before} 
                alt="Before cleaning" 
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100vw', maxWidth: '1000px' }} // Hack to keep image size fixed while container shrinks
              />
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-10 h-10 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center pointer-events-none">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
              {data.beforeLabel}
            </div>
            <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
              {data.afterLabel}
            </div>

            {/* Interaction Layer */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos}
              onChange={(e) => setSliderPos(parseInt(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
            />
          </div>
          <p className="text-center text-white/60 mt-6 text-sm">{pair.label}</p>
        </div>
      </div>
    </section>
  );
}
