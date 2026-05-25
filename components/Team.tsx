"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Team() {
  const { t } = useLocale();
  const items = t("team.items") as { name: string, role: string, bio: string, imageUrl: string }[];

  return (
    <section className="py-24 bg-bg-light border-y border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t("team.badge")} title={t("team.title")} subtitle={t("team.subtitle")} />

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border-light group"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-accent flex items-center gap-1 shadow-sm">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  HMS-Kort
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-display font-bold text-primary mb-1">{item.name}</h3>
                <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">{item.role}</p>
                <p className="text-text-muted text-sm">{item.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
