"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "./Shared";
import { HomeIcon, BuildingIcon, WindowIcon, CabinIcon, ToolIcon, RugIcon, ArrowRightIcon } from "./Icons";

const iconMap: Record<string, React.ElementType> = {
  home: HomeIcon,
  building: BuildingIcon,
  window: WindowIcon,
  cabin: CabinIcon,
  tool: ToolIcon,
  rug: RugIcon,
};

export default function Services() {
  const { t } = useLocale();
  const categories = t("services.categories") as string[];
  const items = t("services.items") as { id: string; cat: string; title: string; desc: string; icon: string }[];
  
  const [activeCat, setActiveCat] = useState(categories[0]);

  const filteredItems = activeCat === categories[0] 
    ? items 
    : items.filter(item => item.cat === activeCat);

  return (
    <section id="services" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge={t("services.badge")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCat === cat 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-white text-text-muted hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const Icon = iconMap[item.icon] || HomeIcon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-bg-light flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-primary">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <a href="#contact" className="inline-flex items-center text-sm font-bold text-accent group-hover:text-accent-hover">
                    Bestill <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
