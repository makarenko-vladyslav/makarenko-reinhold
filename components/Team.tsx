
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Team() {
  const { t } = useLocale();
  const items = t('team.items') as Array<{name: string, role: string, bio: string, imageUrl: string}>;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('team.badge') as string}
          title={t('team.title') as string}
          subtitle={t('team.subtitle') as string}
        />

        <div className="flex justify-center">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-md w-full bg-bg-light rounded-3xl overflow-hidden border border-gray-100 group"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('img-fallback') }}
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-1">{item.name}</h3>
                <div className="text-accent font-medium mb-4">{item.role}</div>
                <p className="text-text-muted leading-relaxed">{item.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
