
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { StarIcon } from "./Icons";

export default function Testimonials() {
  const { t } = useLocale();
  const items = t('testimonials.items') as Array<{name: string, role: string, text: string, rating: number}>;

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('testimonials.badge') as string}
          title={t('testimonials.title') as string}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-light p-8 rounded-3xl border border-gray-100"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} className="w-5 h-5" filled={j < item.rating} />
                ))}
              </div>
              
              <p className="text-text-main text-lg italic mb-8 leading-relaxed">"{item.text}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={`https://picsum.photos/seed/${item.name}/100/100`} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-primary">{item.name}</div>
                  <div className="text-sm text-text-muted">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
