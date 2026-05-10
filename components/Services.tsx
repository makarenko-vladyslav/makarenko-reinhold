"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

const IconMap = ({ name }: { name: string }) => {
  switch (name) {
    case 'sparkle-house':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
          <path d="M19 4l1 1 1-1-1-1-1 1z" fill="currentColor" />
          <path d="M4 4l1 1 1-1-1-1-1 1z" fill="currentColor" />
        </svg>
      );
    case 'calendar-check':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M9 16l2 2 4-4" />
        </svg>
      );
    case 'building':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M16 10h.01M8 10h.01M8 14h.01M12 14h.01M16 14h.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'window':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <path d="M15 6l4 4" />
        </svg>
      );
    default:
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><circle cx="12" cy="12" r="10"/></svg>;
  }
};

export default function Services() {
  const { t } = useLocale();
  const [showAll, setShowAll] = useState(false);

  const mainServices = t("services.main") as any[];
  const allServices = t("services.all") as string[];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("services.badge")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        {/* Pattern 9: L-Shape Layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Left Large Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 h-[600px] rounded-3xl overflow-hidden relative group"
          >
            <img 
              src={t("services.imageUrl")} 
              alt="Cleaning" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <div className="text-white font-display font-bold text-2xl mb-2">Makarenko Standard</div>
                <p className="text-white/80 text-sm">Vi bruker kun industrielt utstyr for perfekt resultat hver gang.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {mainServices.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-bg-light rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-accent/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <IconMap name={service.icon} />
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-text-muted leading-relaxed mb-6">{service.description}</p>
                <a href="#calculator" className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                  Les mer <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Toggle */}
        <div className="text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 text-primary font-semibold hover:border-accent hover:text-accent transition-colors"
          >
            {showAll ? "Skjul liste" : t("services.viewAll")}
            <svg className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7"/></svg>
          </button>
        </div>

        {/* Clean Directory List (Pattern 3) */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mt-12"
            >
              <div className="bg-bg-light rounded-3xl p-8 md:p-12 border border-gray-100">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
                  {allServices.map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-gray-200 group cursor-pointer hover:border-accent">
                      <span className="font-medium text-text-main group-hover:text-accent transition-colors">{item}</span>
                      <svg className="w-4 h-4 text-gray-300 group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}