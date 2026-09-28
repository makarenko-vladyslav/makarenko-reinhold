"use client";
import { useState, type FormEvent } from "react";
import { useLocale } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLocale();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  const hoursTitle = t("contactSection.info.hoursTitle") as string;
  const hours = t("contactSection.info.hours") as string;
  const notice = t("contactSection.info.notice") as string;

  return (
    <section id="contact" className="scroll-mt-20 py-20 bg-[hsl(195_25%_98%)] border-t border-[hsl(204_20%_88%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_38%)] mb-2">
                {t("contactSection.kicker") as string}
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[hsl(204_35%_15%)] tracking-tight mb-4">
                {t("contactSection.title") as string}
              </h2>
              <p className="text-base text-[hsl(204_15%_42%)] leading-relaxed mb-8 font-light">
                {t("contactSection.subtitle") as string}
              </p>

              <div className="space-y-6 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-wider font-sans font-bold text-[hsl(204_15%_50%)] block mb-1">
                    {t("contactSection.info.phoneTitle") as string}
                  </span>
                  <a
                    href={`tel:${t("brand.phone") as string}`}
                    className="font-display font-extrabold text-2xl text-[hsl(158_64%_38%)] hover:underline"
                  >
                    {t("brand.phone") as string}
                  </a>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider font-sans font-bold text-[hsl(204_15%_50%)] block mb-1">
                    {t("contactSection.info.emailTitle") as string}
                  </span>
                  <a
                    href={`mailto:${t("brand.email") as string}`}
                    className="font-sans font-medium text-base text-[hsl(204_35%_15%)] hover:underline"
                  >
                    {t("brand.email") as string}
                  </a>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider font-sans font-bold text-[hsl(204_15%_50%)] block mb-1">
                    {t("contactSection.info.addressTitle") as string}
                  </span>
                  <div className="font-sans text-base text-[hsl(204_35%_15%)]">
                    {t("contactSection.info.address") as string}
                  </div>
                </div>

                {Boolean(hoursTitle || hours) && (
                  <div>
                    {Boolean(hoursTitle) && (
                      <span className="text-xs uppercase tracking-wider font-sans font-bold text-[hsl(204_15%_50%)] block mb-1">
                        {hoursTitle}
                      </span>
                    )}
                    {Boolean(hours) && (
                      <div className="font-sans text-sm text-[hsl(204_15%_42%)]">
                        {hours}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {Boolean(notice) && (
              <div className="mt-8 p-4 rounded-xl bg-[hsl(158_50%_94%)] border border-[hsl(158_64%_38%/0.3)] text-xs text-[hsl(204_35%_20%)] font-sans">
                {notice}
              </div>
            )}
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-[hsl(0_0%_100%)] p-8 sm:p-10 rounded-2xl border border-[hsl(204_20%_88%)] shadow-sm">
            {status === "success" ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[hsl(158_64%_38%)] text-[hsl(0_0%_100%)] flex items-center justify-center text-xl mx-auto font-bold">
                  ✓
                </div>
                <h3 className="font-display font-bold text-2xl text-[hsl(204_35%_15%)]">
                  Заявку прийнято!
                </h3>
                <p className="text-sm text-[hsl(204_15%_42%)] max-w-md mx-auto">
                  {t("contactSection.form.success") as string}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 rounded-lg bg-[hsl(204_40%_16%)] text-[hsl(0_0%_100%)] text-sm font-display font-bold"
                >
                  Надіслати ще одну
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-bold text-[hsl(204_35%_15%)] mb-1">
                      {t("contactSection.form.nameLabel") as string} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t("contactSection.form.namePlaceholder") as string}
                      className="w-full px-4 py-3 rounded-lg border border-[hsl(204_20%_88%)] text-sm focus:border-[hsl(158_64%_38%)] bg-[hsl(195_25%_98%)] text-[hsl(204_35%_15%)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold text-[hsl(204_35%_15%)] mb-1">
                      {t("contactSection.form.phoneLabel") as string} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t("contactSection.form.phonePlaceholder") as string}
                      className="w-full px-4 py-3 rounded-lg border border-[hsl(204_20%_88%)] text-sm focus:border-[hsl(158_64%_38%)] bg-[hsl(195_25%_98%)] text-[hsl(204_35%_15%)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-sans font-bold text-[hsl(204_35%_15%)] mb-1">
                      {t("contactSection.form.serviceLabel") as string}
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-[hsl(204_20%_88%)] text-sm focus:border-[hsl(158_64%_38%)] bg-[hsl(195_25%_98%)] text-[hsl(204_35%_15%)]"
                    >
                      <option value="">{t("contactSection.form.serviceDefault") as string}</option>
                      <option value="Flyttevask">Flyttevask (виїзне з гарантією)</option>
                      <option value="Ukentlig">Щотижневе підтримувальне</option>
                      <option value="Storvask">Генеральне прибирання</option>
                      <option value="Hyttevask">Дачі Telemark (Hyttevask)</option>
                      <option value="Kontor">Офісні приміщення B2B</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold text-[hsl(204_35%_15%)] mb-1">
                      {t("contactSection.form.areaLabel") as string}
                    </label>
                    <input
                      type="number"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      placeholder={t("contactSection.form.areaPlaceholder") as string}
                      className="w-full px-4 py-3 rounded-lg border border-[hsl(204_20%_88%)] text-sm focus:border-[hsl(158_64%_38%)] bg-[hsl(195_25%_98%)] text-[hsl(204_35%_15%)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-bold text-[hsl(204_35%_15%)] mb-1">
                    {t("contactSection.form.dateLabel") as string}
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(204_20%_88%)] text-sm focus:border-[hsl(158_64%_38%)] bg-[hsl(195_25%_98%)] text-[hsl(204_35%_15%)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-bold text-[hsl(204_35%_15%)] mb-1">
                    {t("contactSection.form.messageLabel") as string}
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("contactSection.form.messagePlaceholder") as string}
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(204_20%_88%)] text-sm focus:border-[hsl(158_64%_38%)] bg-[hsl(195_25%_98%)] text-[hsl(204_35%_15%)]"
                  />
                </div>

                {status === "error" && (
                  <div className="text-xs text-[hsl(0_80%_45%)] font-sans font-semibold">
                    {t("contactSection.form.error") as string}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-xl bg-[hsl(158_64%_38%)] text-[hsl(0_0%_100%)] font-display font-bold text-lg hover:bg-[hsl(158_70%_32%)] transition-colors shadow-md disabled:opacity-50"
                >
                  {status === "sending"
                    ? (t("contactSection.form.sending") as string)
                    : (t("contactSection.form.submitBtn") as string)}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
