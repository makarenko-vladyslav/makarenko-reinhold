"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";
import { Icons } from "./ui/Icons";

export default function Testimonials() {
  const { t } = useLocale();
  const items = t("testimonials.items") as { name: string; role: string; text: string; rating: number }[];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("testimonials.badge")}
          title={t("testimonials.title")}
          theme="light"
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col"
            >
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(item.rating)].map((_, j) => (
                  <div key={j} className="w-5 h-5"><Icons.star /></div>
                ))}
              </div>
              
              <p className="text-primary text-lg font-medium leading-relaxed mb-8 flex-grow">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={`https://picsum.photos/seed/${item.name.replace(' ', '')}/100/100`} 
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-primary">{item.name}</h4>
                  <p className="text-text-muted text-sm">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
