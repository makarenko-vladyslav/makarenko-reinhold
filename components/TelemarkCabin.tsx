"use client";
import { useLocale } from "@/lib/i18n";

export default function TelemarkCabin() {
  const { t } = useLocale();

  const zones = (t("telemarkCabin.zones") as string[]) || [];
  const imageUrl = t("telemarkCabin.image") as string;
  const secondaryImageUrl = t("telemarkCabin.secondaryImage") as string;

  return (
    <section id="hytta" className="scroll-mt-20 py-20 bg-[hsl(195_25%_98%)] border-y border-[hsl(204_20%_88%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 2-Photo Cluster (Overlapped & Framed) */}
          <div className="lg:col-span-6 relative pb-8 pr-8">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[hsl(204_20%_88%)] aspect-[4/3] z-10">
              <img
                src={imageUrl}
                alt="Догляд за дачами та Hytter у Телемарку"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-2 border-[hsl(0_0%_100%)] z-20">
              <img
                src={secondaryImageUrl}
                alt="Професійний догляд за деревом"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 p-3 rounded-lg bg-[hsl(0_0%_100%)] border border-[hsl(204_20%_88%)] text-xs text-[hsl(204_15%_42%)]">
              {t("telemarkCabin.caption") as string}
            </div>
          </div>

          {/* Text & Zones side */}
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_38%)] mb-2">
              {t("telemarkCabin.kicker") as string}
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[hsl(204_35%_15%)] tracking-tight mb-4">
              {t("telemarkCabin.title") as string}
            </h2>
            <p className="text-base text-[hsl(204_15%_42%)] leading-relaxed mb-6 font-light">
              {t("telemarkCabin.subtitle") as string}
            </p>

            {/* Oversized Statement Line */}
            <div className="p-4 rounded-xl bg-[hsl(0_0%_100%)] border-l-4 border-[hsl(158_64%_38%)] mb-6 text-sm italic text-[hsl(204_35%_20%)]">
              <p className="mb-2">{t("telemarkCabin.statement") as string}</p>
              <span className="font-sans text-xs text-[hsl(204_15%_45%)] not-italic block">
                {t("telemarkCabin.author") as string}
              </span>
            </div>

            <h3 className="text-xs font-sans font-bold text-[hsl(204_35%_15%)] uppercase tracking-wider mb-3">
              {t("telemarkCabin.zonesTitle") as string}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {zones.map((zone, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-[hsl(0_0%_100%)] border border-[hsl(204_20%_88%)] text-xs text-[hsl(204_35%_15%)] font-sans font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(158_64%_38%)] shrink-0" />
                  <span>{zone}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[hsl(204_40%_16%)] text-[hsl(0_0%_100%)] font-display font-bold text-base hover:bg-[hsl(204_30%_24%)] transition-colors shadow-sm text-center"
              >
                Замовити для дачі
              </a>
              <a
                href={`tel:${t("brand.phone") as string}`}
                className="text-xs text-[hsl(204_15%_42%)] hover:underline text-center"
              >
                Уточнити маршрут диспетчера
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
