
"use client";
import { useState, useRef, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => isDragging && handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => isDragging && handleMove(e.touches[0].clientX);

    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchend', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-primary relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading 
          badge={t('beforeAfter.badge')}
          title={t('beforeAfter.title')}
          subtitle={t('beforeAfter.subtitle')}
          centered
          light
        />

        <div 
          ref={containerRef}
          className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl mt-12"
          onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
          onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
        >
          {/* After Image (Base) */}
          <img src={t('beforeAfter.afterImage')} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          <div className="absolute top-6 right-6 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-md pointer-events-none">{t('beforeAfter.afterLabel')}</div>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img src={t('beforeAfter.beforeImage')} alt="Before" className="absolute inset-0 w-full h-full object-cover grayscale-[30%]" />
            <div className="absolute top-6 left-6 bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">{t('beforeAfter.beforeLabel')}</div>
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 9l-4 3 4 3m8-6l4 3-4 3"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
