
"use client";
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;
    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">{t('beforeAfter.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">{t('beforeAfter.title')}</h2>
          <p className="text-text-muted text-lg">{t('beforeAfter.subtitle')}</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
          ref={containerRef}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image (Background) */}
          <img 
            src="https://picsum.photos/seed/clean-room-after/1200/600" 
            alt="After cleaning" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur text-white px-3 py-1 rounded text-sm font-bold pointer-events-none">
            {t('beforeAfter.after')}
          </div>

          {/* Before Image (Foreground with clip-path) */}
          <div 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img 
              src="https://picsum.photos/seed/dirty-room-before/1200/600" 
              alt="Before cleaning" 
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'grayscale(30%) contrast(80%)' }} // Make 'before' look slightly worse
            />
            <div className="absolute top-4 left-4 bg-surface/80 backdrop-blur text-primary px-3 py-1 rounded text-sm font-bold">
              {t('beforeAfter.before')}
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3"/></svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
