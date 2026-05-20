"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { IconMap } from "./Icons";

export default function ServicesFeatured() {
  const { t } = useLocale();
  const items = t("servicesFeatured.items") as Array<{id: string, title: string, description: string, icon: string}>;

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("servicesFeatured.badge") as string}
          title={t("servicesFeatured.title") as string}
          subtitle={t("servicesFeatured.subtitle") as string}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-bg-light border border-gray-100 hover:border-accent/30 transition-all duration-300 premium-shadow-hover"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {IconMap[item.icon]}
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-text-muted leading-relaxed mb-6">{item.description}</p>
              <a href="#calculator" className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent transition-colors">
                {t("nav.cta") as string}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
