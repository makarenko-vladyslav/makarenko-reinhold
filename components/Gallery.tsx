
"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const images = [
    "https://picsum.photos/seed/clean1/600/800",
    "https://picsum.photos/seed/clean2/800/600",
    "https://picsum.photos/seed/clean3/600/600",
    "https://picsum.photos/seed/clean4/800/800",
    "https://picsum.photos/seed/clean5/600/400",
    "https://picsum.photos/seed/clean6/800/1000",
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge="Galleri" title="Vårt Arbeid" centered />
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 mt-12 space-y-4">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm group relative"
            >
              <img 
                src={src} 
                alt="Cleaning result" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
