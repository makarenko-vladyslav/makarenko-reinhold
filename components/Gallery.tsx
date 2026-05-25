
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Gallery() {
  const { t } = useLocale();
  const items = t("gallery.items") as any[];

  return (
    <section className="py-24 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("gallery.badge")}
          title={t("gallery.title")}
          centered
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mt-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm group relative"
            >
              <img 
                src={item.url} 
                alt={item.alt} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform">
                  {item.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
