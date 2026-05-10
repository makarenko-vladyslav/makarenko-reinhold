"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { IconChevronDown } from './Icons';

export default function FAQ() {
  const { t } = useLocale();
  const items = t('faq.items') as {q: string, a: string}[];
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading 
          badge={t('faq.badge')}
          title={t('faq.title')}
          centered
        />

        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="border border-border-light rounded-2xl overflow-hidden bg-bg-light">
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-bold text-primary pr-8">{item.q}</span>
                <IconChevronDown className={`w-5 h-5 text-accent transition-transform duration-300 shrink-0 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-text-muted">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
