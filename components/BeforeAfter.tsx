"use client";
import { useState, useRef, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <section className="py-24 bg-bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('beforeAfter.badge')}
          title={t('beforeAfter.title')}
          subtitle={t('beforeAfter.subtitle')}
          light
          centered
        />

        <div 
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          {/* After Image (Background) */}
          <img 
            src={t('beforeAfter.afterUrl')} 
            alt="After cleaning" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute top-6 right-6 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">Etter</div>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img 
              src={t('beforeAfter.beforeUrl')} 
              alt="Before cleaning" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-bold">Før</div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 9L5 12L8 15M16 9L19 12L16 15" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
