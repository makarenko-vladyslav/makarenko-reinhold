
"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./UI/SectionHeading";

export default function Contact() {
  const { t } = useLocale();
  const data = t("contact") as any;
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={data.badge}
          title={data.title}
          subtitle={data.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Vellykket!</h3>
                <p className="text-text-muted">{data.form.success}</p>
                <button onClick={() => setStatus("idle")} className="mt-8 text-accent font-bold">Send ny melding</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{data.form.name}</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{data.form.phone}</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{data.form.email}</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{data.form.service}</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none">
                    <option>Flyttevask</option>
                    <option>Regelmessig Renhold</option>
                    <option>Kontorvask</option>
                    <option>Annet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{data.form.message}</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"></textarea>
                </div>
                <button disabled={status === "loading"} type="submit" className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl transition-colors flex justify-center items-center">
                  {status === "loading" ? <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : data.form.submit}
                </button>
              </form>
            )}
          </div>

          {/* Info & Map */}
          <div className="space-y-8">
            <div className="bg-primary p-8 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-6">Kontaktinformasjon</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Telefon</p>
                    <a href={`tel:${data.info.phone.replace(/\s/g, '')}`} className="font-bold hover:text-accent transition-colors">{data.info.phone}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">E-post</p>
                    <a href={`mailto:${data.info.email}`} className="font-bold hover:text-accent transition-colors">{data.info.email}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Adresse</p>
                    <p className="font-bold">{data.info.address}</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Map Embed */}
            <div className="h-64 rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-gray-200">
              <iframe 
                src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
