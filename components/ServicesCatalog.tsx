
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./UI/SectionHeading";
import { motion } from "framer-motion";

export default function ServicesCatalog() {
  const { t } = useLocale();
  const categories = t("servicesCatalog.categories") as { name: string, services: string[] }[];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("servicesCatalog.badge")}
          title={t("servicesCatalog.title")}
          subtitle={t("servicesCatalog.subtitle")}
        />

        {/* Pattern 3: Clean Directory List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {categories.map((category, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-bg-light flex items-center justify-center text-accent">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </span>
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.services.map((service, j) => (
                  <li key={j} className="group flex items-center justify-between py-2 border-b border-gray-50 hover:border-accent/30 transition-colors cursor-pointer">
                    <span className="text-text-muted group-hover:text-primary transition-colors">{service}</span>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-accent transition-colors transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
