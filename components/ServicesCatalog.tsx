"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function ServicesCatalog() {
  const { t } = useLocale();
  const categories = t('servicesCatalog.categories') as string[];
  const items = t('servicesCatalog.items') as {category: string, title: string, desc: string}[];
  
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredItems = items.filter(item => item.category === activeTab);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('servicesCatalog.badge')}
          title={t('servicesCatalog.title')}
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === cat 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-bg-light text-text-muted hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 gap-x-12 gap-y-6"
            >
              {filteredItems.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="mt-1 shrink-0">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
