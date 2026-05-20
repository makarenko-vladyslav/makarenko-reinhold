
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { SectionHeading } from './Shared';

export default function Trust() {
  const { t } = useLocale();
  const items = t('trust.items') as any[];

  return (
    <section className="py-24 bg-bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('trust.badge')}
          title={t('trust.title')}
          subtitle={t('trust.subtitle')}
          centered={true}
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 rounded-3xl bg-bg-light border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-5xl font-display font-bold text-accent mb-4">{item.value}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.label}</h3>
              <p className="text-text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
