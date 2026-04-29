"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { IconPhone, IconMail, IconMap } from './Icons';

export default function Contact() {
  const { t } = useLocale();
  const info = t('contact.info') as any;

  return (
    <section id="contact" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <SectionHeading 
              badge={t('contact.badge')}
              title={t('contact.title')}
              subtitle={t('contact.subtitle')}
            />

            <div className="space-y-8 mt-12">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <IconPhone />
                </div>
                <div>
                  <div className="font-bold text-primary mb-1">Telefon</div>
                  <a href={`tel:${info.phone.replace(/\s/g, '')}`} className="text-text-muted hover:text-accent transition-colors">{info.phone}</a>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <IconMail />
                </div>
                <div>
                  <div className="font-bold text-primary mb-1">E-post</div>
                  <a href={`mailto:${info.email}`} className="text-text-muted hover:text-accent transition-colors">{info.email}</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <IconMap />
                </div>
                <div>
                  <div className="font-bold text-primary mb-1">Adresse & Åpningstider</div>
                  <p className="text-text-muted">{info.address}</p>
                  <p className="text-text-muted mt-1">{info.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border-light">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{t('contact.name')}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-border-light focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{t('contact.phone')}</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-border-light focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-primary mb-2">{t('contact.email')}</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-border-light focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-2">{t('contact.service')}</label>
                <select className="w-full px-4 py-3 rounded-xl bg-bg-light border border-border-light focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none">
                  <option>Flyttevask</option>
                  <option>Regelmessig vask</option>
                  <option>Kontorvask</option>
                  <option>Annet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-2">{t('contact.message')}</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-bg-light border border-border-light focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"></textarea>
              </div>

              <button className="w-full py-4 bg-primary hover:bg-primary-light text-white rounded-xl font-bold transition-colors">
                {t('contact.submit')}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
