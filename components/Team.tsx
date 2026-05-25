
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "./Shared";

export default function Team() {
  const { t } = useLocale();
  const members = t('team.members') as { name: string, role: string, bio: string, imageUrl: string }[];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('team.badge')}
          title={t('team.title')}
          subtitle={t('team.subtitle')}
          centered
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mt-12">
          {members.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-black/5"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-display font-bold text-primary mb-1">{member.name}</h3>
                <div className="text-accent font-medium text-sm uppercase tracking-wider mb-4">{member.role}</div>
                <p className="text-text-muted leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
