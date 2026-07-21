"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (x / container.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (x / container.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section className="py-12 lg:py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-display block mb-3">
            {t('beforeAfter.kicker')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black leading-tight text-text-main mb-6 uppercase">
            {t('beforeAfter.title')}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
            {t('beforeAfter.subtitle')}
          </p>
        </div>

        {/* Interactive Image Compare Slider Container - FULL container width match */}
        <div 
          className="relative w-full aspect-[16/9] max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-primary-light select-none cursor-ew-resize"
          onMouseMove={handleSliderMove}
          onTouchMove={handleTouchMove}
        >
          {/* Before Image (Background) */}
          <img 
            src="https://images.pexels.com/photos/4239128/pexels-photo-4239128.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=675&w=1200" 
            alt="Før dyp rengjøring" 
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 bg-red-800 text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded backdrop-blur-md">
            FØR / BEFORE
          </div>

          {/* After Image (Overlaid, width regulated by slider) */}
          <div 
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src="https://images.pexels.com/photos/4239145/pexels-photo-4239145.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=675&w=1200" 
              alt="Etter dyp rengjøring" 
              className="absolute inset-y-0 left-0 w-full max-w-none h-full object-cover"
              style={{ width: '100%' }}
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-accent text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded backdrop-blur-md whitespace-nowrap">
              ETTER / AFTER
            </div>
          </div>

          {/* Custom Slider Bar & Handle */}
          <div 
            className="absolute inset-y-0 w-[2px] bg-white cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shadow-lg border border-white font-display text-xs tracking-tighter select-none">
              ↔
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
