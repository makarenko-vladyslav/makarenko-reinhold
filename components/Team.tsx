"use client";
import { useLocale } from "@/lib/i18n";

export default function Team() {
  const { t } = useLocale();

  const kicker = String(t("team.kicker"));
  const title = String(t("team.title"));
  const lede = String(t("team.lede"));
  const members = (t("team.members") as Array<{
    name: string;
    role: string;
    desc: string;
    imageUrl: string;
  }>) || [];

  return (
    <section className="py-20 bg-bg-light border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">
            {kicker}
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base text-text-muted leading-relaxed">
            {lede}
          </p>
        </div>

        {/* Team Grid — Photo filling card, clean Norwegian credentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-md border border-gray-200 overflow-hidden flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-primary tracking-tight">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-3">
                    {member.role}
                  </span>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <span className="inline-block text-[11px] text-text-muted border-t border-gray-100 pt-3 w-full">
                  Gyldig renholds-ID fra Arbeidstilsynet
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
