"use client";
import { useState, useRef } from "react";
import SectionHeading from "@/components/SectionHeading";

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event 
      ? (event as React.TouchEvent).touches[0].clientX - rect.left 
      : (event as React.MouseEvent).clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  return (
    <section className="section-padding bg-bg-light">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading 
          badge="Resultater"
          title="Før og Etter"
          subtitle="Se forskjellen profesjonelt renhold gjør. Dra i slideren for å sammenligne."
          centered
        />

        <div 
          ref={containerRef}
          className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize shadow-2xl mt-12"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image (Background) */}
          <img 
            src="https://picsum.photos/seed/after-clean/1200/800" 
            alt="After cleaning" 
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute top-4 right-4 bg-bg-white/90 backdrop-blur px-4 py-1 rounded-full text-sm font-bold text-primary shadow-sm">Etter</div>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img 
              src="https://picsum.photos/seed/before-dirty/1200/800" 
              alt="Before cleaning" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale-[30%] contrast-75"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur px-4 py-1 rounded-full text-sm font-bold text-bg-white shadow-sm">Før</div>
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-bg-white rounded-full shadow-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3m8-6l3 3-3 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
