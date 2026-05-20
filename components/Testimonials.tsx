"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const { t } = useLocale();
  const items = t("testimonials.items");

  return (
    <section className="py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("testimonials.badge")}
          title={t("testimonials.title")}
          centered={true}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-muted italic mb-8 flex-grow">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={`https://picsum.photos/seed/${item.name.replace(' ', '')}/100/100`} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover"
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
