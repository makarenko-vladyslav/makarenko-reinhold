"use client";
import { useLocale } from "@/lib/i18n";

export default function Guarantee() {
  const { t } = useLocale();

  return (
    <section id="guarantee" className="scroll-mt-20 py-20 bg-[hsl(204_40%_16%)] text-[hsl(0_0%_100%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text block */}
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_48%)] mb-2">
              {t("guaranteeSection.kicker") as string}
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[hsl(0_0%_100%)] tracking-tight mb-6">
              {t("guaranteeSection.title") as string}
            </h2>
            <p className="text-base text-[hsl(0_0%_100%/0.85)] leading-relaxed mb-4 font-light">
              {t("guaranteeSection.p1") as string}
            </p>
            <p className="text-base text-[hsl(0_0%_100%/0.85)] leading-relaxed mb-8 font-light">
              {t("guaranteeSection.p2") as string}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[hsl(0_0%_100%/0.15)]">
              {[
                t("guaranteeSection.badge1") as string,
                t("guaranteeSection.badge2") as string,
                t("guaranteeSection.badge3") as string,
                t("guaranteeSection.badge4") as string,
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className="bg-[hsl(0_0%_100%/0.06)] border border-[hsl(0_0%_100%/0.15)] rounded-lg p-3 text-center"
                >
                  <div className="text-xs font-sans font-semibold text-[hsl(158_64%_48%)]">
                    {badge}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Card */}
          <div className="lg:col-span-5 bg-[hsl(0_0%_100%)] text-[hsl(204_35%_15%)] p-8 rounded-2xl shadow-2xl border-4 border-[hsl(158_64%_38%)]">
            <div className="text-center pb-6 border-b border-[hsl(204_20%_90%)]">
              <span className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_38%)] block mb-1">
                Офіційний сертифікат
              </span>
              <h3 className="font-display font-extrabold text-2xl text-[hsl(204_35%_15%)]">
                100% Flyttegaranti
              </h3>
            </div>

            <div className="py-6 space-y-4 text-xs text-[hsl(204_15%_42%)] font-light leading-relaxed">
              <div className="flex items-start gap-2">
                <span className="text-[hsl(158_64%_38%)] font-bold">●</span>
                <span>Беззастережне право клієнта на безкоштовний повторний виїзд бригади протягом 48 годин у разі виявлення зауважень орендодавцем.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[hsl(158_64%_38%)] font-bold">●</span>
                <span>Відповідність регламенту передачі житла Husleieloven та стандартам Arbeidstilsynet.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[hsl(158_64%_38%)] font-bold">●</span>
                <span>Повне страхування відповідальності виконавця через поліс Tryg Forsikring.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[hsl(204_20%_90%)] text-center">
              <div className="font-display font-bold text-sm text-[hsl(204_35%_15%)]">
                {t("brand.contactPerson") as string}
              </div>
              <div className="text-xs text-[hsl(204_15%_42%)]">
                Керівник клінінгової служби Makarenko Reinhold
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
