"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

// Custom drawn SVGs for cleaning niche
const icons: Record<string, React.ReactNode> = {
  home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /><circle cx="15" cy="8" r="1" fill="currentColor" /></svg>,
  cabin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12l10-9 10 9" /><path d="M4 10v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10" /><path d="M10 22V14h4v8" /><path d="M18 4v5" /></svg>,
  window: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 12h18" /><path d="M12 3v18" /><path d="M16 8l-4 4" strokeWidth="2" strokeLinecap="round" /></svg>,
  sparkle: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" /><path d="M5 5l1.5 3 3 1.5-3 1.5L5 14l-1.5-3L.5 9.5 3 8z" /></svg>,
  box: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path d="M3.27 6.96L12 12.01l8.73-5.05" /><path d="M12 22.08V12" /><path d="M7.5 4.21l4.5 2.6 4.5-2.6" /></svg>,
  camera: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>,
  tool: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
  office: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M16 10h.01M8 10h.01M8 14h.01M12 14h.01M16 14h.01" strokeWidth="2" strokeLinecap="round" /></svg>,
  rug: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="6" width="18" height="12" rx="1" /><path d="M3 10h18M3 14h18" /><path d="M6 6v-2M10 6v-2M14 6v-2M18 6v-2M6 20v-2M10 20v-2M14 20v-2M18 20v-2" /></svg>,
  oven: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M8 6h.01M12 6h.01M16 6h.01" strokeWidth="2" strokeLinecap="round" /><rect x="6" y="12" width="12" height="6" rx="1" /></svg>,
  fridge: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M5 10h14" /><path d="M9 14v4M9 5v2" strokeWidth="2" strokeLinecap="round" /></svg>,
  shirt: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" /></svg>,
};

export default function Services() {
  const { t } = useLocale();
  const categories = t("services.categories") as string[];
  const items = t("services.items") as { id: string, category: string, title: string, desc: string, icon: string }[];
  
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredItems = items.filter(item => item.category === activeTab);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t("services.badge")} title={t("services.title")} subtitle={t("services.subtitle")} />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${activeTab === cat ? "bg-primary text-white shadow-lg" : "bg-bg-light text-text-muted hover:bg-border-light"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 border border-border-light shadow-sm hover:shadow-premium-hover transition-all group relative overflow-hidden"
              >
                {/* Decorative hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="w-14 h-14 rounded-xl bg-bg-light flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <div className="w-8 h-8">{icons[item.icon]}</div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed mb-6">{item.desc}</p>
                
                <a href="#calculator" className="inline-flex items-center gap-2 text-sm font-bold text-accent group-hover:text-primary transition-colors mt-auto">
                  Beregn pris
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
