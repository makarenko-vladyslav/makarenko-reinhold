"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-bg-light border-t border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <SectionHeading badge={t("contact.badge")} title={t("contact.title")} subtitle={t("contact.subtitle")} centered={false} />
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-border-light flex items-center justify-center text-accent shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Telefon</p>
                  <a href={`tel:${t("contact.phone")}`} className="text-xl font-bold text-primary hover:text-accent transition-colors">{t("contact.phone")}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-border-light flex items-center justify-center text-accent shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">E-post</p>
                  <a href={`mailto:${t("contact.email")}`} className="text-xl font-bold text-primary hover:text-accent transition-colors">{t("contact.email")}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-border-light flex items-center justify-center text-accent shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Åpningstider</p>
                  <p className="text-xl font-bold text-primary">{t("contact.hours")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-premium border border-border-light">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{t("contact.success")}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-text-main mb-2">{t("contact.nameLabel")}</label>
                  <input required type="text" className="w-full px-5 py-4 rounded-xl border border-border-light bg-bg-light focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text-main mb-2">{t("contact.phoneLabel")}</label>
                    <input required type="tel" className="w-full px-5 py-4 rounded-xl border border-border-light bg-bg-light focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-main mb-2">{t("contact.emailLabel")}</label>
                    <input required type="email" className="w-full px-5 py-4 rounded-xl border border-border-light bg-bg-light focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-text-main mb-2">{t("contact.messageLabel")}</label>
                  <textarea required rows={4} className="w-full px-5 py-4 rounded-xl border border-border-light bg-bg-light focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"></textarea>
                </div>
                <button disabled={status === "loading"} type="submit" className="w-full bg-primary hover:bg-primary-light text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                  {status === "loading" ? (
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : t("contact.submit")}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
