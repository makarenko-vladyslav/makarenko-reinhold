"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

export default function Testimonials() {
  const { t } = useLocale();
  const testimonialItems = t('testimonials.items') as TestimonialItem[];
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = testimonialItems[activeIndex] || testimonialItems[0];

  return (
    <section id="testimonials" className="py-12 lg:py-24 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-display block mb-3">
            {t('testimonials.kicker')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black leading-tight text-text-main mb-6 uppercase">
            {t('testimonials.title')}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Elegant Slider / Multi-Layer Review Board */}
        <div className="bg-white rounded-3xl p-8 sm:p-16 border border-primary-light shadow-sm relative overflow-hidden max-w-5xl mx-auto">
          {/* Huge decorative quotation character */}
          <span className="absolute top-6 left-8 sm:left-12 font-display font-black text-primary/[0.04] text-[15rem] leading-none pointer-events-none select-none">
            “
          </span>

          <div className="relative z-10">
            {/* Display Quote in display type */}
            <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold leading-normal text-text-main mb-10">
              {activeItem.quote}
            </p>

            {/* Separation & Metadata Row */}
            <div className="border-t border-primary-light pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              {/* Attribution */}
              <div>
                <span className="font-display font-bold text-base text-text-main block">
                  {activeItem.name}
                </span>
                <span className="text-xs text-text-muted font-medium block uppercase tracking-wider mt-0.5">
                  {activeItem.role}
                </span>
              </div>

              {/* Rating as Plain Text + Named Source */}
              <div className="text-left sm:text-right">
                <span className="text-xs font-extrabold text-accent block tracking-widest uppercase font-display">
                  VURDERING: 4.9 AV 5.0
                </span>
                <span className="text-[10px] text-text-muted/40 font-medium block uppercase tracking-widest mt-1">
                  Google Anmeldelser · 340 referanser
                </span>
              </div>
            </div>

            {/* Slider Navigation Affordance */}
            <div className="flex items-center gap-3 mt-12 pt-6 border-t border-primary-light/30">
              {testimonialItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'w-8 bg-accent' : 'w-2 bg-text-muted/30 hover:bg-text-muted'
                  }`}
                  aria-label={`Vis referanse ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
