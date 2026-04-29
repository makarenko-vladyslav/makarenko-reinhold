"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "./Shared";
import { StarIcon } from "./Icons";

export default function Testimonials() {
  const { t } = useLocale();
  const items = t("testimonials.items") as { name: string; role: string; text: string; rating: number }[];

  return (
    <section id="reviews" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge={t("testimonials.badge")}
          title={t("testimonials.title")}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 premium-shadow relative"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-8 text-6xl text-accent/10 font-display leading-none">"</div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" filled={i < item.rating} />
                ))}
              </div>
              
              <p className="text-text-main italic mb-8 relative z-10 leading-relaxed text-lg">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={`https://picsum.photos/seed/${item.name.replace(' ', '')}/100/100`} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover bg-gray-100"
                  loading="lazy"
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
