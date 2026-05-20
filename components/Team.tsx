"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Team() {
  const { t } = useLocale();
  const data = t('team') as any;

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={data.badge}
          title={data.title}
          subtitle={data.subtitle}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {data.members.map((member: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5] bg-bg-light">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-1">{member.name}</h3>
              <div className="text-accent font-medium mb-3">{member.role}</div>
              <p className="text-text-muted">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
