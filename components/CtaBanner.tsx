"use client";
import { useLocale } from "@/lib/i18n";

interface HoursRow {
  days: string;
  time: string;
}

export default function CtaBanner() {
  const { t } = useLocale();

  const hours = (t("ctaBanner.hoursTable") as HoursRow[]) || [];

  return (
    <section className="py-16 bg-[hsl(0_0%_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[hsl(204_40%_16%)] text-[hsl(0_0%_100%)] rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl border-2 border-[hsl(158_64%_45%/0.4)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_48%)] mb-3">
                {t("ctaBanner.kicker") as string}
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[hsl(0_0%_100%)] tracking-tight mb-5 leading-tight">
                {t("ctaBanner.title") as string}
              </h2>
              <p className="text-base text-[hsl(0_0%_100%/0.85)] leading-relaxed mb-6 font-light">
                {t("ctaBanner.subtitle") as string}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[hsl(158_64%_38%)] text-[hsl(0_0%_100%)] font-display font-bold text-lg hover:bg-[hsl(158_70%_32%)] transition-colors shadow-lg shadow-[hsl(158_64%_38%/0.3)] text-center"
                >
                  {t("ctaBanner.primaryBtn") as string}
                </a>
                <a
                  href={`tel:${t("brand.phone") as string}`}
                  className="inline-flex items-center justify-center px-6 py-4 rounded-xl border border-[hsl(0_0%_100%/0.25)] text-[hsl(0_0%_100%)] font-display font-semibold text-lg hover:bg-[hsl(0_0%_100%/0.1)] transition-colors text-center"
                >
                  {t("brand.phone") as string}
                </a>
              </div>

              <div className="text-xs text-[hsl(158_64%_55%)] font-sans">
                {t("ctaBanner.trustMicro") as string}
              </div>
            </div>

            {/* Structured Hours & Location Mini-Card */}
            <div className="lg:col-span-5 bg-[hsl(204_45%_12%)] p-6 rounded-2xl border border-[hsl(0_0%_100%/0.15)] space-y-4">
              <div className="text-xs uppercase tracking-wider font-sans font-bold text-[hsl(158_64%_48%)]">
                Графік координації замовлень
              </div>
              <div className="space-y-2 text-xs">
                {hours.map((row, idx) => (
                  <div key={idx} className="flex justify-between py-1.5 border-b border-[hsl(0_0%_100%/0.08)]">
                    <span className="text-[hsl(0_0%_100%/0.7)]">{row.days}</span>
                    <span className="font-mono text-[hsl(0_0%_100%)]">{row.time}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 text-xs text-[hsl(0_0%_100%/0.7)]">
                <span className="block font-bold text-[hsl(0_0%_100%)] mb-1">Зона обслуговування:</span>
                {t("ctaBanner.addressLine") as string}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
