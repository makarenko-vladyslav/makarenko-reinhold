
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./UI/SectionHeading";
import { motion } from "framer-motion";

export default function Gallery() {
  const { t } = useLocale();
  const data = t("gallery") as any;

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(222_47%_18%),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={data.badge}
          title={data.title}
          light={true}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {data.items.map((item: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group"
            >
              <img src={item.url} alt={item.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-sm px-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
