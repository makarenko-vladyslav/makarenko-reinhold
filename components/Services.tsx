"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Services() {
  const { t } = useLocale();
  const allItems = t("services.items") as Array<{id: string, title: string, desc: string, icon: string}>;
  const [showAll, setShowAll] = useState(false);
  
  const displayItems = showAll ? allItems : allItems.slice(0, 6);

  const getIcon = (type: string) => {
    switch(type) {
      case 'home': return <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />;
      case 'box': return <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />;
      case 'cabin': return <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />;
      case 'window': return <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm0 6h16M12 4v16" />;
      case 'sparkle': return <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />;
      case 'building': return <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />;
      default: return <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-bg-light section-pattern-dots">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("services.badge")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <AnimatePresence>
            {displayItems.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: (i % 6) * 0.05 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group relative"
              >
                <div className="w-12 h-12 rounded-full bg-bg-light flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white text-primary transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    {getIcon(item.icon)}
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">{item.desc}</p>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {allItems.length > 6 && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-accent font-bold hover:text-primary transition-colors"
            >
              {showAll ? "Vis Mindre" : t("services.cta")}
              <svg className={`w-5 h-5 transform transition-transform ${showAll ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
