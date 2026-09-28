"use client";
import { useLocale } from "@/lib/i18n";

export default function BottomNav() {
  const { t } = useLocale();
  const phone = t("brand.phone") as string;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[hsl(204_40%_16%/0.96)] backdrop-blur-md border-t border-[hsl(0_0%_100%/0.15)] py-2.5 px-4 flex items-center justify-between gap-3 shadow-lg">
      <a
        href="#calculator"
        className="flex-1 py-2.5 px-3 rounded-lg bg-[hsl(158_64%_38%)] text-[hsl(0_0%_100%)] text-center font-display font-bold text-xs uppercase tracking-wider"
      >
        Калькулятор
      </a>
      <a
        href={`tel:${phone}`}
        className="flex-1 py-2.5 px-3 rounded-lg border border-[hsl(0_0%_100%/0.3)] text-[hsl(0_0%_100%)] text-center font-display font-bold text-xs uppercase tracking-wider bg-[hsl(0_0%_100%/0.08)]"
      >
        Зателефонувати
      </a>
      <a
        href="#contact"
        className="py-2.5 px-3 rounded-lg bg-[hsl(204_30%_24%)] text-[hsl(0_0%_100%)] text-center font-display font-semibold text-xs uppercase tracking-wider"
      >
        Заявка
      </a>
    </div>
  );
}
