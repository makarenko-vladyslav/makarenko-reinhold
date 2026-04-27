"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from '@/components/SectionHeading';

export default function Team() {
  const { t } = useLocale();
  const items = t('team.items') as any[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('team.badge')}
          title={t('team.title')}
          centered
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mt-16">
          {items.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-bg-light shadow-lg">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
              <p className="text-accent font-medium mb-4">{member.role}</p>
              <p className="text-text-muted">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}