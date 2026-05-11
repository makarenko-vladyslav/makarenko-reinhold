"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { CheckIcon } from './Icons';

export default function Catalog() {
  const { t } = useLocale();
  const categories = t('catalog.categories') as string[];
  const items = t('catalog.items') as { category: string; name: string }[];
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredItems = items.filter(item => item.category === activeTab);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <SectionHeading 
              badge={t('catalog.badge')}
              title={t('catalog.title')}
            />
            
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`text-left px-6 py-4 rounded-xl font-semibold transition-all ${
                    activeTab === cat 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-bg-light text-text-muted hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 lg:pt-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 gap-x-8 gap-y-4"
              >
                {filteredItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-3 border-b border-gray-100">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <CheckIcon className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="font-medium text-text-main">{item.name}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}