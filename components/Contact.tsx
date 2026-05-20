"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { Phone, EnvelopeSimple, MapPin, Clock } from '@phosphor-icons/react';

export default function Contact() {
  const { t } = useLocale();
  const contact = t('contact') as any;
  
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">{contact.badge}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">{contact.title}</h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-10" />
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bg-light rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} weight="duotone" className="text-accent" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Telefon</div>
                  <a href={`tel:${contact.info.phone.replace(/\s/g, '')}`} className="text-xl font-bold text-primary hover:text-accent transition-colors">{contact.info.phone}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bg-light rounded-xl flex items-center justify-center shrink-0">
                  <EnvelopeSimple size={24} weight="duotone" className="text-accent" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">E-post</div>
                  <a href={`mailto:${contact.info.email}`} className="text-lg font-medium text-primary hover:text-accent transition-colors">{contact.info.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bg-light rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} weight="duotone" className="text-accent" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Adresse</div>
                  <div className="text-lg font-medium text-primary">{contact.info.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bg-light rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={24} weight="duotone" className="text-accent" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Åpningstider</div>
                  <div className="text-lg font-medium text-primary">{contact.info.hours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg-light p-8 md:p-10 rounded-3xl shadow-crisp border border-border"
          >
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-accent text-4xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{contact.form.success}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{contact.form.name}</label>
                  <input required type="text" className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{contact.form.phone}</label>
                    <input required type="tel" className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{contact.form.email}</label>
                    <input required type="email" className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{contact.form.service}</label>
                  <select className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none">
                    <option>Flyttevask</option>
                    <option>Regelmessig Vask</option>
                    <option>Bedriftsrenhold</option>
                    <option>Annet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{contact.form.message}</label>
                  <textarea rows={4} className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formState === 'loading'}
                  className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl transition-colors flex justify-center items-center gap-2"
                >
                  {formState === 'loading' ? 'Sender...' : contact.form.submit}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}