"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { Phone, EnvelopeSimple, MapPin, Clock } from '@phosphor-icons/react';

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
    <section id="contact" className="py-24 bg-bg-light scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading 
              badge={data.badge} 
              title={data.title} 
            />
            
            <div className="space-y-8 mt-12">
              {[
                { icon: Phone, title: "Telefon", value: data.info.phone, href: `tel:${data.info.phone.replace(/\s/g, '')}` },
                { icon: EnvelopeSimple, title: "E-post", value: data.info.email, href: `mailto:${data.info.email}` },
                { icon: MapPin, title: "Adresse", value: data.info.address, href: null },
                { icon: Clock, title: "Åpningstider", value: data.info.hours, href: null }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-accent shrink-0">
                    <item.icon size={28} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-xl font-display font-bold text-primary hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xl font-display font-bold text-primary">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 rounded-2xl overflow-hidden shadow-card h-64 bg-surface-alt relative">
               <iframe 
                src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-card border border-border"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-success/20 text-success rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-2">Sendt!</h3>
                <p className="text-text-muted">{data.form.success}</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-accent font-bold hover:underline">Send ny melding</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">{data.form.name}</label>
                    <input required type="text" className="w-full bg-bg-light border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">{data.form.phone}</label>
                    <input required type="tel" className="w-full bg-bg-light border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">{data.form.email}</label>
                  <input required type="email" className="w-full bg-bg-light border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">{data.form.service}</label>
                  <select required className="w-full bg-bg-light border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none">
                    <option value="">Velg tjeneste...</option>
                    <option value="flyttevask">Flyttevask</option>
                    <option value="regelmessig">Regelmessig vask</option>
                    <option value="bedrift">Bedriftsrenhold</option>
                    <option value="annet">Annet</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">{data.form.message}</label>
                  <textarea required rows={4} className="w-full bg-bg-light border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-primary hover:bg-primary-light text-white py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-70"
                >
                  {status === 'loading' ? 'Sender...' : data.form.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
