"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Team() {
  const { t } = useLocale();
  const items = t("team.items") as Array<{name: string, role: string, bio: string, image: string}>;

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("team.badge") as string}
          title={t("team.title") as string}
          subtitle={t("team.subtitle") as string}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-6 premium-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-1">{member.name}</h3>
              <p className="text-accent font-bold text-sm uppercase tracking-wider mb-3">{member.role}</p>
              <p className="text-text-muted leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
