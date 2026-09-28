"use client";
import { useLocale } from "@/lib/i18n";

export default function TrustStrip() {
  const { t } = useLocale();

  const items = [
    t("trustStrip.item1") as string,
    t("trustStrip.item2") as string,
    t("trustStrip.item3") as string,
    t("trustStrip.item4") as string,
    t("trustStrip.item5") as string,
  ];

  return (
    <section className="bg-[hsl(196_45%_94%)] border-y border-[hsl(204_20%_88%)] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-center sm:text-left">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 text-xs text-[hsl(204_35%_20%)] font-sans font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-[hsl(158_64%_38%)] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
