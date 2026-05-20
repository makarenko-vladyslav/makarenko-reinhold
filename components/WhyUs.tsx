
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { SectionHeading } from './Shared';
import { getIconByName } from './Icons';

export default function WhyUs() {
  const { t } = useLocale();
  const items = t('whyUs.items') as any[];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('whyUs.badge')}
          title={t('whyUs.title')}
          subtitle={t('whyUs.subtitle')}
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 bg-bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                {getIconByName(item.icon, "w-6 h-6")}
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
