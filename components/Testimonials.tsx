
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { Star, Quotes } from "@phosphor-icons/react";

export default function Testimonials() {
  const { t } = useLocale();
  const items = t("testimonials.items") as Array<{name: string, role: string, quote: string}>;

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t("testimonials.badge") as string} title={t("testimonials.title") as string} centered />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface p-8 rounded-2xl shadow-sm border border-border relative"
            >
              <Quotes size={40} weight="duotone" className="text-border absolute top-6 right-6" />
              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} weight="fill" />)}
              </div>
              <p className="text-text-main text-sm leading-relaxed mb-6 italic">"{item.quote}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <img 
                  src={`https://picsum.photos/seed/${item.name.replace(/\s/g, '')}/100/100`} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div>
                  <div className="font-bold text-primary text-sm">{item.name}</div>
                  <div className="text-xs text-text-muted">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
