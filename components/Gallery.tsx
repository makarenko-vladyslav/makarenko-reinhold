"use client";
import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    "https://picsum.photos/seed/clean-living-1/800/800",
    "https://picsum.photos/seed/clean-kitchen-2/800/600",
    "https://picsum.photos/seed/clean-bathroom-3/600/800",
    "https://picsum.photos/seed/clean-office-4/800/600",
    "https://picsum.photos/seed/clean-window-5/600/800",
    "https://picsum.photos/seed/clean-detail-6/800/800"
  ];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Vårt Arbeid</h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto" />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-crisp group relative"
            >
              <img 
                src={src} 
                alt="Cleaning result" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}