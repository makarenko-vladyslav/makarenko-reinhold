"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const { t } = useLocale();
  const data = t('faq') as any;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          badge={data.badge}
          title={data.title}
          centered
        />

        <div className="mt-12 space-y-4">
          {data.items.map((item: any, idx: number) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl border transition-all duration-300 ${openIdx === idx ? 'border-accent shadow-md' : 'border-gray-100 hover:border-gray-300'}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-bold pr-8 ${openIdx === idx ? 'text-primary' : 'text-text-main'}`}>
                  {item.q}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIdx === idx ? 'bg-accent text-white' : 'bg-bg-light text-text-muted'}`}>
                  <svg className={`w-5 h-5 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-text-muted border-t border-gray-50">
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
