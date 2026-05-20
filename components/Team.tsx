
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./UI/SectionHeading";
import { motion } from "framer-motion";

export default function Team() {
  const { t } = useLocale();
  const data = t("team") as any;

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={data.badge}
          title={data.title}
          subtitle={data.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {data.members.map((member: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8 text-center relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-accent rounded-full" />
                <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-text-muted">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
