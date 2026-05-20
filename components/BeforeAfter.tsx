"use client";
import { useState, useRef, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './ui/SectionHeading';
import { motion } from 'framer-motion';

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleMouseMove = (e: React.MouseEvent) => { if (isDragging) handleMove(e.clientX); };
  const handleTouchMove = (e: React.TouchEvent) => { if (isDragging) handleMove(e.touches[0].clientX); };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('beforeAfter.badge')}
          title={t('beforeAfter.title')}
          subtitle={t('beforeAfter.subtitle')}
          centered
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-12 rounded-3xl overflow-hidden shadow-2xl relative select-none cursor-ew-resize"
          ref={containerRef}
          onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
          onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Base) */}
          <img 
            src={t('beforeAfter.imageAfter')} 
            alt="After cleaning" 
            className="w-full aspect-[4/3] md:aspect-[16/9] object-cover pointer-events-none"
            draggable={false}
          />
          <div className="absolute top-6 right-6 bg-accent text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-lg backdrop-blur-sm">
            {t('beforeAfter.afterLabel')}
          </div>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img 
              src={t('beforeAfter.imageBefore')} 
              alt="Before cleaning" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none filter grayscale-[30%]"
              draggable={false}
            />
            <div className="absolute top-6 left-6 bg-primary text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-lg backdrop-blur-sm">
              {t('beforeAfter.beforeLabel')}
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.3)]"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
