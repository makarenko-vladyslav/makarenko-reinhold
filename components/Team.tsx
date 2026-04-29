"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function Team() {
  const { t } = useLocale();
  const items = t('team.items') as {name: string, role: string, bio: string, imageUrl: string}[];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('team.badge')}
          title={t('team.title')}
          subtitle={t('team.subtitle')}
          centered
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {items.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl relative">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-1">{member.name}</h3>
              <div className="text-accent font-bold text-sm uppercase tracking-wider mb-4">{member.role}</div>
              <p className="text-text-muted">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
