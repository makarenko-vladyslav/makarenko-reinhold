"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

export default function BeforeAfter() {
  const { t } = useLocale();
  const items = t('beforeAfter.items') as { before: string, after: string, label: string }[];
  const [activeIdx, setActiveIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent | any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const pos = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
    setSliderPos(pos);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('beforeAfter.badge')}
          title={t('beforeAfter.title')}
          subtitle={t('beforeAfter.subtitle')}
          centered
        />

        <div className="flex justify-center gap-4 mb-8">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => { setActiveIdx(idx); setSliderPos(50); }}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-colors ${activeIdx === idx ? 'bg-primary text-white' : 'bg-bg-light text-text-muted hover:bg-gray-200'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full max-w-4xl mx-auto aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
          onMouseMove={handleDrag}
          onTouchMove={handleDrag}
        >
          {/* After Image (Bottom) */}
          <img 
            src={items[activeIdx].after} 
            alt="After cleaning" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">Etter</div>

          {/* Before Image (Top, Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img 
              src={items[activeIdx].before} 
              alt="Before cleaning" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">Før</div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3m8-6l3 3-3 3" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
