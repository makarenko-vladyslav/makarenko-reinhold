"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const position = ((x - containerRect.left) / containerRect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
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

        <div className="max-w-5xl mx-auto">
          <div 
            ref={containerRef}
            className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* After Image (Background) */}
            <img 
              src={t('beforeAfter.imageAfter')} 
              alt="After cleaning" 
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />
            
            {/* Before Image (Foreground, clipped) */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
              <img 
                src={t('beforeAfter.imageBefore')} 
                alt="Before cleaning" 
                className="absolute inset-0 w-full h-full object-cover filter grayscale-[30%]"
                draggable="false"
              />
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(215 60% 15%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18-6-6 6-6" />
                  <path d="m15 18 6-6-6-6" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-semibold">
              {t('beforeAfter.before')}
            </div>
            <div className="absolute top-6 right-6 bg-accent/80 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-semibold">
              {t('beforeAfter.after')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}