"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { IdentificationCard } from '@phosphor-icons/react';

export default function Team() {
  const { t } = useLocale();
  const teamData = t('team') as { badge: string, title: string, members: any[] };

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">{teamData.badge}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">{teamData.title}</h2>
          <div className="w-16 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {teamData.members.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex gap-6 items-start"
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-crisp">
                <img 
                  src={`https://picsum.photos/seed/${member.name.replace(/\s/g, '')}-portrait/200/200`} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                <div className="text-accent font-medium text-sm mb-3 flex items-center gap-1">
                  {i === 1 && <IdentificationCard size={16} weight="duotone" />}
                  {member.role}
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}