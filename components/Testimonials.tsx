"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { Icons } from "./Icons";

export default function Testimonials() {
  const { t } = useLocale();
  const data = t('testimonials') as any;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={data.badge}
          title={data.title}
          centered
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {data.items.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-bg-light rounded-3xl p-8 border border-gray-100 relative"
            >
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Icons.Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-text-main text-lg italic mb-8 leading-relaxed">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={`https://picsum.photos/seed/${item.name}/100/100`} 
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-display font-bold text-primary">{item.name}</h4>
                  <p className="text-text-muted text-sm">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
