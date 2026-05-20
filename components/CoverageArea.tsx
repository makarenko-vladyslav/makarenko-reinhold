"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { MapPinLine, CheckCircle } from '@phosphor-icons/react';

export default function CoverageArea() {
  const { t } = useLocale();
  const data = t('coverage') as any;

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Abstract Map Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#FFFFFF" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,97.5,-2.2C98.2,13.6,93.6,29.7,84.1,43.2C74.6,56.7,60.2,67.6,44.5,74.5C28.8,81.4,11.8,84.3,-4.2,81.8C-20.2,79.3,-35.3,71.4,-49.2,61.2C-63.1,51,-75.8,38.5,-83.1,23.3C-90.4,8.1,-92.3,-9.8,-86.6,-25.4C-80.9,-41,-67.6,-54.3,-52.7,-61.6C-37.8,-68.9,-21.3,-70.2,-5.3,-61.1C10.7,-52,21.4,-32.5,30.6,-83.6Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
              {data.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {data.title}
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-8" />
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              {data.desc}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {data.areas.map((area: string, i: number) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <MapPinLine size={24} className="text-accent" weight="duotone" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-2xl text-primary"
          >
            <h3 className="text-2xl font-display font-bold mb-6">Hvorfor velge lokalt?</h3>
            <ul className="space-y-6">
              {[
                { title: "Ingen forsinkelser", desc: "Vi kjenner veiene og ankommer alltid presis." },
                { title: "Lokal verdiskapning", desc: "Støtt en bedrift som skatter og ansetter lokalt i Notodden." },
                { title: "Rask utrykning", desc: "Ved akutte behov er vi aldri langt unna." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle size={24} weight="fill" className="text-success" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-text-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
