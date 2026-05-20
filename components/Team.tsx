
"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function Team() {
  const { t } = useLocale();
  const items = t('team.items') as Array<{name: string, role: string, bio: string}>;

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">{t('team.badge') as string}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">{t('team.title') as string}</h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-bg-light rounded-3xl overflow-hidden shadow-card"
            >
              <div className="aspect-square relative">
                <img 
                  src={`https://picsum.photos/seed/${member.name.replace(' ', '')}/600/600`} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-primary mb-1">{member.name}</h3>
                <div className="text-accent font-semibold text-sm mb-4">{member.role}</div>
                <p className="text-text-muted leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
