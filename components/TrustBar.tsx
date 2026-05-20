
"use client";
import { useLocale } from "@/lib/i18n";
import { CheckCircle } from "@phosphor-icons/react";

export default function TrustBar() {
  const { t } = useLocale();
  const items = t("trust.items") as string[];

  return (
    <section className="bg-primary py-6 border-b border-surface/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-surface/80 text-sm md:text-base font-medium">
              <CheckCircle size={20} weight="fill" className="text-accent" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
