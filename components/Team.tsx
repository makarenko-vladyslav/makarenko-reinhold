"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Team() {
  const { t } = useLocale();
  const items = t('team.items') as {name: string, role: string, bio: string, imageUrl: string}[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('team.badge')}
          title={t('team.title')}
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {items.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/5]">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-1">{member.name}</h3>
              <div className="text-accent font-bold text-sm uppercase tracking-wider mb-4">{member.role}</div>
              <p className="text-text-muted leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
