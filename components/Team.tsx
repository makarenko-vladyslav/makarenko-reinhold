
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function Team() {
  const { t } = useLocale();
  const items = t('team.items') as any[];

  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">{t('team.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">{t('team.title')}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface rounded-3xl overflow-hidden shadow-sm border border-border group"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-display font-bold text-primary mb-1">{member.name}</h3>
                <div className="text-accent font-medium text-sm mb-4">{member.role}</div>
                <p className="text-text-muted text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
