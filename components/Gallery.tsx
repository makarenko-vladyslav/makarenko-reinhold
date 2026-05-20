"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const { t } = useLocale();
  const items = t('gallery.items') as {url: string, alt: string}[];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('gallery.badge')}
          title={t('gallery.title')}
          light={true}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${i === 0 || i === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className="aspect-[4/3] md:aspect-auto md:h-full w-full">
                <img 
                  src={item.url} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold">{item.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
