"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './ui/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const { t } = useLocale();
  const items = t('faq.items') as { q: string; a: string }[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          badge={t('faq.badge')}
          title={t('faq.title')}
          centered
        />

        <div className="mt-16 space-y-4">
          {items.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-bg-tint/50">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-display font-bold text-primary text-lg pr-8">{item.q}</span>
                <span className={`w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 bg-primary text-white border-primary' : 'text-primary'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-text-muted leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
