"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { StarIcon } from "./Icons";

export default function Testimonials() {
  const { t } = useLocale();
  const items: any[] = t("testimonials.items");

  return (
    <section id="reviews" className="section-padding bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("testimonials.badge")}
          title={t("testimonials.title")}
          centered
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-6 right-8 text-8xl font-display text-gray-100 leading-none pointer-events-none">
                "
              </div>
              
              <div className="flex items-center gap-1 text-accent mb-6">
                {[...Array(item.rating)].map((_, i) => <StarIcon key={i} filled />)}
              </div>
              
              <p className="text-text-main leading-relaxed mb-8 relative z-10">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.name}&backgroundColor=008080`} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full bg-gray-100"
                />
                <div>
                  <h4 className="font-bold text-primary">{item.name}</h4>
                  <p className="text-sm text-text-muted">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
