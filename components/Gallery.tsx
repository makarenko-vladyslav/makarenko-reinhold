"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";

export default function Gallery() {
  const { t } = useLocale();
  const items = t("gallery.items") as { url: string; alt: string }[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("gallery.badge")}
          title={t("gallery.title")}
          theme="light"
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mt-12">
          {items.map((item, i) => (
            <div key={i} className="break-inside-avoid relative group rounded-2xl overflow-hidden">
              <img 
                src={item.url} 
                alt={item.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
