
"use client";
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { ArrowsLeftRight } from '@phosphor-icons/react';

export default function BeforeAfter() {
  const { t } = useLocale();
  const content = t('beforeAfter') as any;
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading badge={content.badge} title={content.title} centered />
        <p className="text-center text-text-muted mb-12">{content.desc}</p>
        
        <div 
          ref={containerRef}
          className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden cursor-ew-resize shadow-premium"
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          {/* After Image (Background) */}
          <img 
            src="https://picsum.photos/seed/clean-kitchen-after/1200/800" 
            alt="After cleaning" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-primary">Etter</div>

          {/* Before Image (Foreground with clip-path) */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="https://picsum.photos/seed/dirty-kitchen-before/1200/800" 
              alt="Before cleaning" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-75 brightness-75"
            />
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-white">Før</div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.3)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
              <ArrowsLeftRight size={20} weight="bold" className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
