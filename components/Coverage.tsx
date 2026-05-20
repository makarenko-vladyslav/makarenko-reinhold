
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { MapPin } from "@phosphor-icons/react";

export default function Coverage() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading badge={t("coverage.badge") as string} title={t("coverage.title") as string} />
            <p className="text-text-muted text-lg mb-8">
              {t("coverage.desc") as string}
            </p>
            <ul className="space-y-4">
              {['Notodden Sentrum', 'Heddal', 'Gransherad', 'Sauland', 'Bø i Telemark'].map((area, i) => (
                <li key={i} className="flex items-center gap-3 text-primary font-medium">
                  <MapPin size={20} weight="fill" className="text-accent" /> {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-premium border border-border">
            <iframe 
              src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
