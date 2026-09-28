"use client";
import { useLocale } from "@/lib/i18n";

export default function BeforeAfter() {
  const { t } = useLocale();

  const cases = [
    {
      title: t("beforeAfter.case1Title") as string,
      before: t("beforeAfter.case1Before") as string,
      after: t("beforeAfter.case1After") as string,
      image: "https://images.pexels.com/photos/5591854/pexels-photo-5591854.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
    {
      title: t("beforeAfter.case2Title") as string,
      before: t("beforeAfter.case2Before") as string,
      after: t("beforeAfter.case2After") as string,
      image: "https://images.pexels.com/photos/3177257/pexels-photo-3177257.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
    {
      title: t("beforeAfter.case3Title") as string,
      before: t("beforeAfter.case3Before") as string,
      after: t("beforeAfter.case3After") as string,
      image: "https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
  ];

  return (
    <section className="py-20 bg-[hsl(0_0%_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_38%)] mb-2">
            {t("beforeAfter.kicker") as string}
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[hsl(204_35%_15%)] tracking-tight mb-4">
            {t("beforeAfter.title") as string}
          </h2>
          <p className="text-base text-[hsl(204_15%_42%)] leading-relaxed font-light">
            {t("beforeAfter.subtitle") as string}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className="bg-[hsl(195_25%_98%)] rounded-2xl border border-[hsl(204_20%_88%)] overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="font-display font-bold text-xl text-[hsl(204_35%_15%)] mb-4">
                  {c.title}
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-lg bg-[hsl(0_0%_100%)] border border-[hsl(204_20%_88%)]">
                    <span className="font-bold text-[hsl(204_15%_42%)] block mb-1 uppercase font-sans tracking-wider">
                      До прибуття:
                    </span>
                    <span className="text-[hsl(204_35%_25%)]">{c.before}</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[hsl(158_50%_96%)] border border-[hsl(158_64%_38%/0.3)]">
                    <span className="font-bold text-[hsl(158_64%_38%)] block mb-1 uppercase font-sans tracking-wider">
                      Після обробки:
                    </span>
                    <span className="text-[hsl(204_35%_15%)] font-medium">{c.after}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
