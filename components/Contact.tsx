
"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

export default function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <SectionHeading badge={t("contact.badge") as string} title={t("contact.title") as string} />
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-accent shadow-sm border border-border shrink-0">
                  <Phone size={24} weight="duotone" />
                </div>
                <div>
                  <div className="text-sm text-text-muted font-medium mb-1">Telefon</div>
                  <a href={`tel:${t("contact.phoneNumber")}`} className="text-xl font-bold text-primary hover:text-accent transition-colors">
                    {t("contact.phoneNumber") as string}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-accent shadow-sm border border-border shrink-0">
                  <EnvelopeSimple size={24} weight="duotone" />
                </div>
                <div>
                  <div className="text-sm text-text-muted font-medium mb-1">E-post</div>
                  <a href={`mailto:${t("contact.emailAddress")}`} className="text-xl font-bold text-primary hover:text-accent transition-colors">
                    {t("contact.emailAddress") as string}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-accent shadow-sm border border-border shrink-0">
                  <MapPin size={24} weight="duotone" />
                </div>
                <div>
                  <div className="text-sm text-text-muted font-medium mb-1">Adresse</div>
                  <div className="text-xl font-bold text-primary">
                    {t("contact.address") as string}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface p-8 rounded-3xl shadow-premium border border-border">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{t("contact.success") as string}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{t("contact.name") as string}</label>
                  <input required type="text" className="w-full bg-bg-light border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{t("contact.phone") as string}</label>
                    <input required type="tel" className="w-full bg-bg-light border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{t("contact.email") as string}</label>
                    <input required type="email" className="w-full bg-bg-light border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{t("contact.message") as string}</label>
                  <textarea required rows={4} className="w-full bg-bg-light border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"></textarea>
                </div>
                <button 
                  disabled={status === "loading"}
                  type="submit" 
                  className="w-full bg-primary text-surface py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors disabled:opacity-70"
                >
                  {status === "loading" ? "Sender..." : t("contact.submit") as string}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
