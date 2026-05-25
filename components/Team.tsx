"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

export default function Team() {
  const { t } = useLocale();
  const teamData = t('team') as { badge: string, title: string, subtitle: string, items: any[] };

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={teamData.badge}
          title={teamData.title}
          subtitle={teamData.subtitle}
          centered
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {teamData.items.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm font-medium">{member.bio}</p>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-semibold text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
