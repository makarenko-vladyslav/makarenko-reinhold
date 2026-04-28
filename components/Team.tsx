"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";

export default function Team() {
  const { t } = useLocale();
  const members = t("team.members") as any[];

  if (!members || members.length === 0) return null;

  return (
    <section className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("team.badge")}
          title={t("team.title")}
          subtitle={t("team.subtitle")}
          centered
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {members.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8 text-center relative bg-white">
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-medium text-sm mb-4">{member.role}</p>
                <p className="text-text-muted text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
