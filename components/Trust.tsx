"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";
import { Icons } from "./ui/Icons";

export default function Trust() {
  const { t } = useLocale();
  const items = t("trust.items") as { title: string; description: string; icon: keyof typeof Icons }[];

  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t("trust.badge")}
          title={t("trust.title")}
          subtitle={t("trust.subtitle")}
          theme="dark"
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {items.map((item, i) => {
            const Icon = Icons[item.icon] || Icons.shield;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel-dark rounded-3xl p-8 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6">
                  <div className="w-8 h-8"><Icon /></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
