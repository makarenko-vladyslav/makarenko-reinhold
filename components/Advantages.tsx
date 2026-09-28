"use client";
import { useLocale } from "@/lib/i18n";

interface AdvantageItem {
  number: string;
  title: string;
  desc: string;
}

export default function Advantages() {
  const { t } = useLocale();

  const items = (t("advantages.items") as AdvantageItem[]) || [];

  return (
    <section className="py-20 bg-[hsl(195_25%_98%)] border-t border-[hsl(204_20%_88%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_38%)] mb-2">
            {t("advantages.kicker") as string}
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[hsl(204_35%_15%)] tracking-tight mb-4">
            {t("advantages.title") as string}
          </h2>
          <p className="text-base text-[hsl(204_15%_42%)] leading-relaxed font-light">
            {t("advantages.subtitle") as string}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[hsl(0_0%_100%)] border border-[hsl(204_20%_88%)] shadow-sm flex gap-6"
            >
              <span className="font-display font-black text-3xl sm:text-4xl text-[hsl(158_64%_38%)] shrink-0">
                {item.number}
              </span>
              <div>
                <h3 className="font-display font-bold text-xl text-[hsl(204_35%_15%)] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[hsl(204_15%_42%)] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
