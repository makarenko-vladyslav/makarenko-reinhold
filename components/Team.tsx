"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './ui/SectionHeading';
import { motion } from 'framer-motion';

export default function Team() {
  const { t } = useLocale();
  const items = t('team.items') as { name: string; role: string; bio: string; imageUrl: string }[];

  return (
    <section className="py-24 bg-bg-tint border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('team.badge')}
          title={t('team.title')}
          subtitle={t('team.subtitle')}
          centered
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {items.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-4">{member.role}</p>
                <p className="text-text-muted leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
