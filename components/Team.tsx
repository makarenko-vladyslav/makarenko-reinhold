"use client";
import { useLocale } from "@/lib/i18n";

interface Member {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function Team() {
  const { t } = useLocale();

  const members = (t("teamSection.members") as Member[]) || [];

  return (
    <section className="py-20 bg-[hsl(0_0%_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_38%)] mb-2">
            {t("teamSection.kicker") as string}
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[hsl(204_35%_15%)] tracking-tight mb-4">
            {t("teamSection.title") as string}
          </h2>
          <p className="text-base text-[hsl(204_15%_42%)] leading-relaxed font-light">
            {t("teamSection.subtitle") as string}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="bg-[hsl(195_25%_98%)] rounded-2xl border border-[hsl(204_20%_88%)] overflow-hidden flex flex-col"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-[hsl(204_20%_90%)]">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-2xl text-[hsl(204_35%_15%)] mb-1">
                  {m.name}
                </h3>
                <div className="text-xs font-sans font-semibold text-[hsl(158_64%_38%)] uppercase tracking-wider mb-4">
                  {m.role}
                </div>
                <p className="text-xs text-[hsl(204_15%_42%)] leading-relaxed font-light flex-1">
                  {m.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
