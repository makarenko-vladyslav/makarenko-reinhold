"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

const icons: Record<string, React.ReactNode> = {
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" /></svg>,
  umbrella: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" /></svg>,
  leaf: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
};

export default function Trust() {
  const { t } = useLocale();
  const items = t("trust.items") as { title: string, desc: string, icon: string }[];

  return (
    <section className="py-24 bg-bg-light border-y border-border-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t("trust.badge")} title={t("trust.title")} />

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-border-light text-center"
            >
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                <div className="w-8 h-8">{icons[item.icon]}</div>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
