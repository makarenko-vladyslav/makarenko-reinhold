
"use client";
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : (e as React.MouseEvent).clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Profesjonell Damprens</h2>
          <p className="text-text-muted">Fjerner 99% av bakterier og inngrodd smuss uten sterke kjemikalier.</p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-ew-resize shadow-2xl select-none"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image (Base) */}
          <img 
            src="https://picsum.photos/seed/afterclean/1200/675" 
            alt="After cleaning" 
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          
          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img 
              src="https://picsum.photos/seed/beforeclean/1200/675" 
              alt="Before cleaning" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale sepia-[0.3]"
              draggable={false}
            />
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `calc(${sliderPos}% - 2px)` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-0.5 h-3 bg-primary/30 rounded-full" />
                <div className="w-0.5 h-3 bg-primary/30 rounded-full" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-bold">Før</div>
          <div className="absolute top-6 right-6 bg-accent/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-bold">Etter</div>
        </div>
      </div>
    </section>
  );
}
