import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'dachdecken',
    message: '',
    agree: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage('Konfigurationsfehler: Bitte tragen Sie den gültigen Web3Forms Access Key in Ihrer .env Datei ein.');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          subject: `Neue Kontaktanfrage von ${formData.name} - Peak Roofing`
        })
      });

      const result = await response.json();
      if (response.status === 200 && result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'dachdecken',
          message: '',
          agree: false
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Fehler beim Senden der Anfrage. Bitte versuchen Sie es später erneut.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="relative z-10 py-16 sm:py-24 px-5 sm:px-8 lg:px-24 bg-[#0d131a] border-t border-white/5 overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Info Left */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-orange-500"></div>
              <span className="text-orange-500 text-xs font-extrabold uppercase tracking-widest">
                KONTAKT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Kostenloses Angebot <br />
              anfordern
            </h2>
            <p className="text-base text-gray-400 leading-relaxed mb-12 max-w-lg">
              Schreiben Sie uns oder rufen Sie direkt an – wir sind 7 Tage die Woche von 7 bis 20 Uhr für Sie da und melden uns schnellstmöglich.
            </p>

            {/* Contact Information List */}
            <div className="space-y-8">
              {/* Telefon */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-orange-500/5 border border-orange-500/20 text-orange-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-[0.65rem] uppercase tracking-wider text-orange-500 font-extrabold mb-1">
                    TELEFON
                  </span>
                  <a href="tel:017616239375" className="text-lg text-white font-bold hover:text-orange-500 transition-colors">
                    0176 16239375
                  </a>
                </div>
              </div>

              {/* E-Mail */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-orange-500/5 border border-orange-500/20 text-orange-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-[0.65rem] uppercase tracking-wider text-orange-500 font-extrabold mb-1">
                    E-MAIL
                  </span>
                  <a href="mailto:info@peakroofing.de" className="text-lg text-white font-bold hover:text-orange-500 transition-colors">
                    info@peakroofing.de
                  </a>
                </div>
              </div>

              {/* Adresse */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-orange-500/5 border border-orange-500/20 text-orange-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-[0.65rem] uppercase tracking-wider text-orange-500 font-extrabold mb-1">
                    ADRESSE
                  </span>
                  <span className="text-lg text-white font-bold block leading-snug">
                    Am Johannestor 16 <br />
                    99084 Erfurt
                  </span>
                </div>
              </div>

              {/* Erreichbarkeit */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-orange-500/5 border border-orange-500/20 text-orange-500 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-[0.65rem] uppercase tracking-wider text-orange-500 font-extrabold mb-1">
                    ERREICHBARKEIT
                  </span>
                  <span className="text-lg text-white font-bold">
                    Mo–So · 7:00 – 20:00 Uhr
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Right */}
          <div className="bg-[#121820]/40 border border-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-sm shadow-2xl relative">
            {submitStatus === 'success' ? (
              <div className="text-center py-12 px-4 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 mb-2">
                  <CheckCircle2 className="w-8 h-8 stroke-[2]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Anfrage gesendet!</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                  Vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-4 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Neues Formular senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'error' && (
                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500" />
                    <div>
                      <span className="font-bold block mb-1">Übertragungsfehler</span>
                      {errorMessage}
                    </div>
                  </div>
                )}

                {/* Name & Telefon side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-medium text-gray-300 mb-2 block">Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Ihr Name"
                      className="w-full bg-[#0d131a] border border-white/10 rounded-xl px-4 py-4 text-sm text-white placeholder-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all outline-none disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-300 mb-2 block">Telefon</label>
                    <input 
                      type="text" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Für schnellen Rückruf"
                      className="w-full bg-[#0d131a] border border-white/10 rounded-xl px-4 py-4 text-sm text-white placeholder-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all outline-none disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* E-Mail */}
                <div>
                  <label className="text-xs font-medium text-gray-300 mb-2 block">E-Mail *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="ihre@email.de"
                    className="w-full bg-[#0d131a] border border-white/10 rounded-xl px-4 py-4 text-sm text-white placeholder-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all outline-none disabled:opacity-50"
                  />
                </div>

                {/* Gewünschte Leistung */}
                <div>
                  <label className="text-xs font-medium text-gray-300 mb-2 block">Gewünschte Leistung</label>
                  <div className="relative">
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-[#0d131a] border border-white/10 rounded-xl px-4 py-4 text-sm text-white focus:border-orange-500 outline-none cursor-pointer appearance-none disabled:opacity-50"
                    >
                      <option value="dachdecken">Dachdecken / Neueindeckung</option>
                      <option value="asbest">Asbest-Entfernung / Neueindeckung</option>
                      <option value="garagendach">Garagendach · Trapezblech & Sandwich</option>
                      <option value="dachrinnen">Dachrinnen · Kupfer, Alu & Zink</option>
                      <option value="dachreparatur">Dachreparatur</option>
                      <option value="wartung">Wartung & Inspektion</option>
                      <option value="gartenzaun">Gartenzaun · Entfernung & Anbringung</option>
                      <option value="sonstiges">Sonstiges Anliegen</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Ihre Nachricht */}
                <div>
                  <label className="text-xs font-medium text-gray-300 mb-2 block">Ihre Nachricht</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Beschreiben Sie kurz Ihr Anliegen - Adresse des Objekts, Größe, was gemacht werden soll..."
                    className="w-full bg-[#0d131a] border border-white/10 rounded-xl px-4 py-4 text-sm text-white placeholder-gray-600 focus:border-orange-500 outline-none resize-none disabled:opacity-50"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    name="agree"
                    required
                    checked={formData.agree}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    id="privacy-checkbox"
                    className="w-4 h-4 mt-0.5 rounded border-white/10 bg-[#0d131a] text-orange-500 focus:ring-0 cursor-pointer disabled:opacity-50"
                  />
                  <label htmlFor="privacy-checkbox" className="grid grid-cols-[55px_1fr] gap-x-2 text-[11px] leading-snug text-gray-400 cursor-pointer select-none">
                    <span className="flex flex-col text-gray-400 font-medium">
                      <span>Ich</span>
                      <span>habe</span>
                      <span>die</span>
                    </span>
                    <span>
                      <a href="#" className="text-orange-500 hover:underline">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung der Anfrage zu.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-black font-extrabold py-4 rounded-xl shadow-[0_4px_25px_rgba(249,115,22,0.3)] hover:shadow-[0_4px_30px_rgba(249,115,22,0.5)] transition-all duration-200 active:scale-[0.99] cursor-pointer text-center text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    'Kostenloses Angebot anfragen'
                  )}
                </button>

                <p className="text-center text-[10px] text-gray-500 mt-4">
                  Wir melden uns schnellstmöglich – 7 Tage die Woche.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
