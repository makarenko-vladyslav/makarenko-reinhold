
"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

export default function Team() {
  const { t } = useLocale();
  const items = t('team.items') as Array<{name: string, role: string, bio: string, imageUrl: string}>;

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('team.badge')}
          title={t('team.title')}
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-primary mb-1">{item.name}</h3>
                <div className="text-accent font-bold text-sm mb-4">{item.role}</div>
                <p className="text-text-muted text-sm leading-relaxed">{item.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
