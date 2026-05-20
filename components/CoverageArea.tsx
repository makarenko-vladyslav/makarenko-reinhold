"use client";
import { motion } from 'framer-motion';
import { MapPin } from '@phosphor-icons/react';

export default function CoverageArea() {
  const areas = ["Notodden (Hovedbase)", "Sauherad", "Bø i Telemark", "Kongsberg (Etter avtale)", "Hjartdal", "Gransherad"];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
          {/* Decorative Map BG */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Vi Dekker Telemark</h2>
            <p className="text-white/80 mb-8 text-lg">Med base i Notodden kan vi rykke ut raskt og presist til store deler av regionen uten fordyrende reisekostnader.</p>
            
            <div className="flex flex-wrap gap-3">
              {areas.map((area, i) => (
                <div key={i} className="bg-white/10 backdrop-blur border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                  <MapPin size={16} className="text-accent" weight="fill" />
                  {area}
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-10 w-full md:w-auto"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 bg-accent/20 rounded-full flex items-center justify-center relative animate-pulse-soft">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-accent/40 rounded-full flex items-center justify-center">
                <MapPin size={48} weight="fill" className="text-accent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}