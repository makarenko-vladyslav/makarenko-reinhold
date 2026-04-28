"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Team() {
  const { t } = useLocale();
  const members = t("team.members") as Array<{name: string, role: string, bio: string, imgUrl: string}>;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("team.badge")}
          title={t("team.title")}
          subtitle={t("team.subtitle")}
          centered
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {members.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                <img 
                  src={member.imgUrl} 
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary">{member.name}</h3>
              <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
              <p className="text-text-muted text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
