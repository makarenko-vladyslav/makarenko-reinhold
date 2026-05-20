
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { IdentificationCard } from '@phosphor-icons/react';

export default function Team() {
  const { t } = useLocale();
  const content = t('team') as any;

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={content.badge} title={content.title} centered />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {content.items.map((member: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-premium group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/${member.name.replace(' ', '')}/600/600`} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                {/* HMS Card Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold text-primary shadow-lg">
                  <IdentificationCard size={16} weight="fill" className="text-green-500" />
                  HMS-Kort
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent text-sm font-medium mb-4">{member.role}</p>
                <p className="text-text-muted text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
