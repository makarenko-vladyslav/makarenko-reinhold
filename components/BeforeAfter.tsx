
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ArrowsLeftRight } from "@phosphor-icons/react";

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading badge="Resultater" title="Før & Etter" centered />
        
        <div className="mt-12 relative w-full aspect-video rounded-3xl overflow-hidden shadow-premium select-none">
          {/* After Image (Base) */}
          <img 
            src="https://picsum.photos/seed/afterclean/1200/675" 
            alt="Etter renhold" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">Etter</div>
          
          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img 
              src="https://picsum.photos/seed/beforeclean/1200/675" 
              alt="Før renhold" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none filter grayscale sepia-[0.3]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute top-4 left-4 bg-surface/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">Før</div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-surface cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.3)]"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-10 h-10 bg-surface rounded-full shadow-lg flex items-center justify-center text-primary">
              <ArrowsLeftRight size={20} weight="bold" />
            </div>
          </div>

          <input 
            type="range" 
            min="0" max="100" 
            value={sliderPos} 
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          />
        </div>
      </div>
    </section>
  );
}
