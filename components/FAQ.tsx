
"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const { t } = useLocale();
  const items = t('faq.items') as Array<{question: string, answer: string}>;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          badge={t('faq.badge')}
          title={t('faq.title')}
          centered
        />

        <div className="mt-12 space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-primary pr-8">{item.question}</span>
                <span className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 transition-transform ${openIdx === idx ? 'rotate-180 bg-accent border-accent text-white' : 'text-gray-400'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </span>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-text-muted leading-relaxed border-t border-gray-100 mt-2">
                      {item.answer}
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
