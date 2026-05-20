"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const { t } = useLocale();
  const items = t("testimonials.items") as Array<{name: string, role: string, text: string, rating: number}>;

  return (
    <section className="py-24 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("testimonials.badge") as string}
          title={t("testimonials.title") as string}
          subtitle={t("testimonials.subtitle") as string}
          centered
        />

        <div className="flex gap-6 overflow-x-auto pb-12 pt-4 px-4 -mx-4 snap-x snap-mandatory no-scrollbar">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-3xl premium-shadow snap-center flex-shrink-0"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(item.rating)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-main text-lg leading-relaxed mb-8 italic">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${item.name.replace(' ', '')}/100/100`} alt={item.name} className="w-full h-full object-cover" />
                </div>
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
