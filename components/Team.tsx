
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Team() {
  const { t } = useLocale();
  const members = t("team.members") as Array<{name: string, role: string, bio: string}>;

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
          
          <div>
            <SectionHeading badge={t("team.badge") as string} title={t("team.title") as string} />
            <p className="text-text-muted text-lg mb-8">
              {t("team.desc") as string}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {members.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface rounded-2xl overflow-hidden shadow-sm border border-border group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${member.name.replace(/\s/g, '')}/600/600`} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <div className="text-accent font-medium text-sm mb-3">{member.role}</div>
                  <p className="text-text-muted text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
