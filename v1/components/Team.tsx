"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "./Shared";

export default function Team() {
  const { t } = useLocale();
  const members = t("team.members") as { name: string; role: string; bio: string; img: string }[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge={t("team.badge")}
          title={t("team.title")}
          subtitle={t("team.subtitle")}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 premium-shadow">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-display font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-semibold text-sm mb-3 uppercase tracking-wider">{member.role}</p>
                <p className="text-text-muted text-sm px-4">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
