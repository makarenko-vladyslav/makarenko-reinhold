"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function Team() {
  const { t } = useLocale();
  const items = t('team.items') as Array<{name: string, role: string, bio: string, imageUrl: string}>;

  return (
    <section id="about" className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">
            {t('team.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            {t('team.title')}
          </h2>
        </div>

        <div className="flex justify-center">
          {items.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-10 items-center"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-bg-light shadow-inner">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-display font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-medium uppercase tracking-wider text-sm mb-6">{member.role}</p>
                <p className="text-text-muted text-lg leading-relaxed italic">
                  "{member.bio}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}