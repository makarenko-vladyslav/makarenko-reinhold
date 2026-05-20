
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { SectionHeading } from './Shared';

export default function ServicesCatalog() {
  const { t } = useLocale();
  const categories = t('servicesCatalog.categories') as any[];

  return (
    <section className="py-24 bg-bg-light border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
            <SectionHeading 
              badge={t('servicesCatalog.badge')}
              title={t('servicesCatalog.title')}
              subtitle={t('servicesCatalog.subtitle')}
            />
          </div>

          <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-lg font-bold text-primary mb-6 pb-2 border-b-2 border-accent/20">
                  {cat.name}
                </h3>
                <ul className="space-y-4">
                  {cat.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 group cursor-default">
                      <span className="text-accent mt-1 transition-transform group-hover:translate-x-1">→</span>
                      <span className="text-text-main font-medium group-hover:text-primary transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
