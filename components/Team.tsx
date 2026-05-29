
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Team() {
  const { t } = useLocale();
  const members = t("team.members") as any[];

  return (
    <section id="team" className="py-24 bg-bg-tint">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading 
          badge={t("team.badge")}
          title={t("team.title")}
          subtitle={t("team.subtitle")}
          centered
        />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col sm:flex-row group"
            >
              <div className="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                <h3 className="text-2xl font-display font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-text-muted leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
