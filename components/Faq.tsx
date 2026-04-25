"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';

export default function Faq() {
  const { t } = useLocale();
  const items = t('faq.items') as Array<{question: string, answer: string}>;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-bg-light relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">
            {t('faq.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            {t('faq.title')}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-2xl border transition-colors ${openIndex === i ? 'border-accent shadow-md' : 'border-gray-200 hover:border-accent/50'}`}
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-display font-bold text-primary text-lg pr-8">{item.question}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${openIndex === i ? 'bg-accent text-white rotate-180' : 'bg-gray-100 text-primary'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-text-muted leading-relaxed border-t border-gray-100 pt-4">
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