"use client";
import { useState, useRef, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    let clientX = 0;
    
    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }
    
    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading 
          badge={t('beforeAfter.badge')}
          title={t('beforeAfter.title')}
          subtitle={t('beforeAfter.subtitle')}
          centered
        />

        <div 
          ref={containerRef}
          className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image (Base) */}
          <img 
            src={t('beforeAfter.imageAfter')} 
            alt="After cleaning" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute bottom-6 right-6 bg-primary/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold text-sm pointer-events-none">
            {t('beforeAfter.afterLabel')}
          </div>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img 
              src={t('beforeAfter.imageBefore')} 
              alt="Before cleaning" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale-[30%] sepia-[20%]"
            />
            <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-sm text-primary px-4 py-2 rounded-lg font-bold text-sm">
              {t('beforeAfter.beforeLabel')}
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
