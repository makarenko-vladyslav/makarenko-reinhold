
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import * as PhosphorIcons from "@phosphor-icons/react";

export default function Services() {
  const { t } = useLocale();
  const services = t("services.items") as Array<{title: string, desc: string, icon: string}>;

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          
          <div className="lg:sticky lg:top-32 self-start">
            <SectionHeading badge={t("services.badge") as string} title={t("services.title") as string} />
            <p className="text-text-muted text-lg mb-8">
              Vi tilbyr et bredt spekter av renholdstjenester tilpasset dine behov. Alle oppdrag utføres med samme høye standard og kvalitetsgaranti.
            </p>
            <a href="#calculator" className="inline-flex items-center gap-2 text-accent font-bold hover:text-primary transition-colors">
              Gå til priskalkulator <PhosphorIcons.ArrowRight weight="bold" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((srv, i) => {
              const Icon = (PhosphorIcons as any)[srv.icon] || PhosphorIcons.Broom;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 rounded-2xl bg-bg-light border border-border hover:border-accent/30 hover:shadow-premium transition-all group"
                >
                  <Icon size={32} weight="duotone" className="text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-primary mb-2">{srv.title}</h3>
                  <p className="text-text-muted text-sm">{srv.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
