
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { IconStar } from "./Icons";

export default function Testimonials() {
  const { t } = useLocale();
  const items = t("testimonials.items");

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("testimonials.badge")}
          title={t("testimonials.title")}
          centered
        />

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-light p-8 rounded-3xl shadow-sm border border-gray-100 relative"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-8 text-6xl text-accent/10 font-serif leading-none">"</div>
              
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="w-5 h-5" filled={i < item.rating} />
                ))}
              </div>
              
              <p className="text-text-muted italic mb-8 relative z-10">"{item.text}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={`https://picsum.photos/seed/${item.name.replace(/\s/g, '')}/100/100`} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-primary">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
