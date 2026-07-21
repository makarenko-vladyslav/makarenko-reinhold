"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const { t } = useLocale();
  const faqItems = t('faq.items') as FaqItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 lg:py-24 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-display block mb-3">
            {t('faq.kicker')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black leading-tight text-text-main mb-6 uppercase">
            {t('faq.title')}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 max-w-4xl">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-primary-light overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-6 px-8 text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-text-main">
                    {item.question}
                  </span>
                  <span className={`text-xl transition-transform duration-300 text-accent font-bold ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 border-t border-primary-light/50' : 'max-h-0'
                  }`}
                >
                  <p className="p-8 text-text-muted text-sm sm:text-base font-light leading-relaxed bg-bg-light/40">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
