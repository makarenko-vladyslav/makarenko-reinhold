
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  const { t } = useLocale();
  const content = t('gallery') as any;

  // Using seeded picsum images for high-quality cleaning results
  const images = [
    "https://picsum.photos/seed/clean-living/800/600",
    "https://picsum.photos/seed/clean-bathroom/600/800",
    "https://picsum.photos/seed/clean-kitchen-2/800/800",
    "https://picsum.photos/seed/clean-window/600/600",
    "https://picsum.photos/seed/clean-floor/800/600",
    "https://picsum.photos/seed/clean-office/600/800"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={content.badge} title={content.title} centered />
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 mt-12 space-y-4">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden"
            >
              <img 
                src={src} 
                alt="Cleaning result" 
                className="w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-wider uppercase text-sm border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">Se Resultat</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
