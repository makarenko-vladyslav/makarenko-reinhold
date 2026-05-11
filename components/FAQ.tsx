"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { ChevronDownIcon } from './Icons';

export default function FAQ() {
  const { t } = useLocale();
  const items = t('faq.items');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-bg-light">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          badge={t('faq.badge')}
          title={t('faq.title')}
          centered
        />

        <div className="space-y-4">
          {items.map((item: { question: string; answer: string }, idx: number) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_2px_10px_hsl(215_60%_15%/0.02)]"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-primary text-lg pr-4">{item.question}</span>
                <ChevronDownIcon 
                  className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-text-muted leading-relaxed">
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