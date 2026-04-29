"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";
import { Icons } from "./ui/Icons";

export default function WhyUs() {
  const { t } = useLocale();
  const items = t("whyus.items") as { title: string; description: string; icon: keyof typeof Icons }[];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="sticky top-32">
            <SectionHeading 
              badge={t("whyus.badge")}
              title={t("whyus.title")}
              theme="light"
            />
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/cleaning-pro/800/800" 
                alt="Professional cleaning" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 glass-panel rounded-2xl p-6">
                <p className="text-primary font-bold text-lg mb-1">Offentlig Godkjent</p>
                <p className="text-text-muted text-sm">Organisasjonsnummer registrert og validert.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {items.map((item, i) => {
              const Icon = Icons[item.icon] || Icons.check;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex gap-6"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <div className="w-6 h-6"><Icon /></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-text-muted leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
