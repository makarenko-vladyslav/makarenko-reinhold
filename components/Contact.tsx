"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { t } = useLocale();
  const data = t('contact') as any;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
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
          <div className="bg-white rounded-3xl p-8 md:p-10 premium-shadow border border-gray-100">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Sendt!</h3>
                <p className="text-text-muted">{data.form.success}</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-accent font-medium hover:underline">Send ny melding</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{data.form.name}</label>
                  <input required type="text" className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{data.form.phone}</label>
                  <input required type="tel" className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{data.form.service}</label>
                  <select className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all">
                    <option>Flyttevask</option>
                    <option>Regelmessig renhold</option>
                    <option>Kontorvask</option>
                    <option>Annet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{data.form.message}</label>
                  <textarea rows={4} className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl transition-colors flex justify-center items-center gap-2"
                >
                  {status === 'loading' ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : data.form.submit}
                </button>
              </form>
            )}
          </div>

          {/* Info & Map */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-text-muted mb-1">Telefon</div>
                  <a href={`tel:${data.info.phone.replace(/\s/g, '')}`} className="font-bold text-primary hover:text-accent">{data.info.phone}</a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-text-muted mb-1">E-post</div>
                  <a href={`mailto:${data.info.email}`} className="font-bold text-primary hover:text-accent break-all">{data.info.email}</a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 h-[300px] relative">
              <iframe 
                src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-80"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="font-bold text-primary mb-1">{data.info.address}</div>
                <div className="text-sm text-text-muted">{data.info.hours}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
