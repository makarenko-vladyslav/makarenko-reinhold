
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";

export default function Testimonials() {
  const { t } = useLocale();
  const items = t('testimonials.items') as Array<{name: string, role: string, text: string, rating: number}>;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('testimonials.badge')}
          title={t('testimonials.title')}
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-light p-8 rounded-3xl border border-border relative"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(item.rating)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-text-main text-lg leading-relaxed mb-8 italic">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={`https://picsum.photos/seed/${item.name.replace(' ', '')}/100/100`} 
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
