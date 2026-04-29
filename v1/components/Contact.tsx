"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { SectionHeading, Button } from "./Shared";

export default function Contact() {
  const { t } = useLocale();
  const formText = t("contact.form") as Record<string, string>;
  const infoText = t("contact.info") as Record<string, string>;
  
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge={t("contact.badge")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 premium-shadow border border-gray-100"
          >
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Takk for din henvendelse!</h3>
                <p className="text-text-muted">Vi tar kontakt med deg så snart som mulig.</p>
                <Button variant="outline" className="mt-8" onClick={() => setStatus("idle")}>
                  Send ny melding
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">{formText.name}</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">{formText.phone}</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">{formText.service}</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                    <option>Flyttevask</option>
                    <option>Regelmessig Vask</option>
                    <option>Kontorvask</option>
                    <option>Annet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">{formText.message}</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"></textarea>
                </div>
                <Button variant="primary" className="w-full" disabled={status === "loading"}>
                  {status === "loading" ? "Sender..." : formText.submit}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-bg-light p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-primary mb-1">Telefon</h4>
                <a href={`tel:${infoText.phone.replace(/\s/g, '')}`} className="text-accent hover:underline">{infoText.phone}</a>
              </div>
              <div className="bg-bg-light p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-primary mb-1">E-post</h4>
                <a href={`mailto:${infoText.email}`} className="text-accent hover:underline">{infoText.email}</a>
              </div>
              <div className="bg-bg-light p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-primary mb-1">Adresse</h4>
                <p className="text-text-muted">{infoText.address}</p>
              </div>
              <div className="bg-bg-light p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-primary mb-1">Åpningstider</h4>
                <p className="text-text-muted">{infoText.hours}</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden relative border border-gray-100 premium-shadow">
              <iframe 
                src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
