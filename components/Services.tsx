"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { getIconByName } from './Icons';

interface ServiceItem {
  id: number;
  category: string;
  title: string;
  desc: string;
  icon: string;
}

export default function Services() {
  const { t } = useLocale();
  const categories = t('services.categories') as string[];
  const items = t('services.items') as ServiceItem[];
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredItems = items.filter(item => item.category === activeTab);

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('services.badge')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          centered
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                activeTab === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-bg-light text-text-muted hover:bg-border-light hover:text-text-main'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group p-8 rounded-3xl bg-bg-light border border-border-light hover:border-accent/30 hover:shadow-[0_20px_40px_hsl(215_45%_15%/0.05)] transition-all relative overflow-hidden"
              >
                {/* Decorative hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:text-accent transition-all relative z-10">
                  {getIconByName(item.icon, "w-7 h-7")}
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 relative z-10">{item.title}</h3>
                <p className="text-text-muted leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
