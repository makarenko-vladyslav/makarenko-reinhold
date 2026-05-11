"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function SocialProof() {
  const { t } = useLocale();
  const items = t('socialProof.items');

  return (
    <section className="py-12 bg-bg-light relative z-10 -mt-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200">
          {items.map((item: { value: string; label: string }, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`text-center ${idx === 0 ? '' : 'pl-8'}`}
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                {item.value}
              </div>
              <div className="text-sm font-medium text-text-muted uppercase tracking-wide">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}