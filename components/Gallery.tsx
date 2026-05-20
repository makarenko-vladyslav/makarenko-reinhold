"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

export default function Gallery() {
  const { t } = useLocale();
  
  // Using high-quality cleaning/interior seeds
  const images = [
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop", // Clean living room
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop", // Clean bathroom
    "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=800&auto=format&fit=crop", // Clean kitchen
    "https://images.unsplash.com/photo-1527515637-695d7f763f96?q=80&w=800&auto=format&fit=crop", // Window/light
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop", // House exterior
    "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop"  // Detail shot
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge="Galleri" title="Resultater som Taler for Seg Selv" centered />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square rounded-xl overflow-hidden group bg-bg-muted"
            >
              <img 
                src={src} 
                alt="Cleaning result" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
