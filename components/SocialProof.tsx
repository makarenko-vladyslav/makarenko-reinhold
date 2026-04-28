"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();
  const items = t("socialProof.items") as Array<{name: string, desc: string}>;

  return (
    <section className="py-12 bg-bg-light relative z-20 -mt-8 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold text-text-muted uppercase tracking-widest mb-8">
          {t("socialProof.title")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center group"
            >
              <div className="h-16 flex items-center justify-center mb-3 text-primary/40 group-hover:text-accent transition-colors">
                {/* Abstract SVG representations of the certificates */}
                {i === 0 && <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>}
                {i === 1 && <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 15h4M7 9h10M7 12h10" /></svg>}
                {i === 2 && <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>}
                {i === 3 && <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="3" strokeLinecap="round" /></svg>}
              </div>
              <h3 className="font-display font-bold text-primary text-lg">{item.name}</h3>
              <p className="text-xs text-text-muted mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
