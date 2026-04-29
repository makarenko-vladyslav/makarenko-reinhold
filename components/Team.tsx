"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";

export default function Team() {
  const { t } = useLocale();
  const items = t("team.items") as { name: string; role: string; bio: string; imageUrl: string }[];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("team.badge")}
          title={t("team.title")}
          theme="light"
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {items.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative h-[400px] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={member.imageUrl} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
              <p className="text-accent font-bold text-sm uppercase tracking-wider mb-3">{member.role}</p>
              <p className="text-text-muted leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
