"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

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
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("contact.badge")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
          centered
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{formText.success}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{formText.name}</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-bg-light" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{formText.phone}</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-bg-light" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{formText.email}</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-bg-light" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{formText.service}</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-bg-light appearance-none">
                    <option>Fast vaskehjelp</option>
                    <option>Flyttevask</option>
                    <option>Hytte-Klar</option>
                    <option>Annet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{formText.message}</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-bg-light resize-none"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-bold text-lg transition-all disabled:opacity-70 flex justify-center items-center"
                >
                  {status === "loading" ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : formText.submit}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-bg-light p-6 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div className="text-sm text-text-muted mb-1">Telefon</div>
                  <a href={`tel:${infoText.phone}`} className="font-bold text-primary hover:text-accent transition-colors">{infoText.phone}</a>
                </div>
              </div>
              <div className="bg-bg-light p-6 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-sm text-text-muted mb-1">E-post</div>
                  <a href={`mailto:${infoText.email}`} className="font-bold text-primary hover:text-accent transition-colors break-all">{infoText.email}</a>
                </div>
              </div>
            </div>

            <div className="bg-bg-light p-6 rounded-2xl mb-8 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="text-sm text-text-muted mb-1">Åpningstider</div>
                <div className="font-bold text-primary">{infoText.hours}</div>
              </div>
            </div>

            <div className="flex-1 rounded-2xl overflow-hidden bg-gray-200 min-h-[250px]">
              <iframe 
                src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
