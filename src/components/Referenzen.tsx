import React from 'react';

export function Referenzen() {
  return (
    <section id="referenzen" className="relative z-10 py-16 sm:py-24 px-5 sm:px-8 lg:px-24 bg-[#0a0f14] border-t border-white/5 overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-orange-500"></div>
              <span className="text-orange-500 text-xs font-extrabold uppercase tracking-widest">
                REFERENZEN
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Unsere Arbeit <br />
              spricht für sich
            </h3>
          </div>
          <p className="text-sm text-gray-400 max-w-md leading-relaxed">
            Ein Auszug aus abgeschlossenen Projekten – fachgerecht ausgeführt in Erfurt und ganz Thüringen.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left large project */}
          <div className="lg:col-span-2 relative group overflow-hidden rounded-2xl border border-white/5 shadow-xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[500px]">
            <img 
              src="/ref_steildach.png" 
              alt="Neueindeckung Steildach" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"></div>
            {/* Overlay label */}
            <span className="absolute bottom-6 left-6 z-10 px-4 py-2 bg-black/75 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-md border border-white/10 select-none">
              NEUEINDECKUNG STEILDACH
            </span>
          </div>

          {/* Right stacked projects */}
          <div className="flex flex-col gap-6 lg:h-[500px]">
            {/* Top right project */}
            <div className="flex-1 relative group overflow-hidden rounded-2xl border border-white/5 shadow-xl min-h-[200px] sm:min-h-[250px]">
              <img 
                src="/ref_detail.png" 
                alt="Detailarbeiten" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"></div>
              <span className="absolute bottom-6 left-6 z-10 px-4 py-2 bg-black/75 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-md border border-white/10 select-none">
                DETAILARBEITEN
              </span>
            </div>

            {/* Bottom right project */}
            <div className="flex-1 relative group overflow-hidden rounded-2xl border border-white/5 shadow-xl min-h-[200px] sm:min-h-[250px]">
              <img 
                src="/ref_sanierung.png" 
                alt="Dachsanierung" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"></div>
              <span className="absolute bottom-6 left-6 z-10 px-4 py-2 bg-black/75 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-md border border-white/10 select-none">
                DACHSANIERUNG
              </span>
            </div>
          </div>
        </div>

        {/* Subsection: Einsatzgebiet */}
        <div className="border-t border-white/5 pt-20 mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Info Left */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-[2px] bg-orange-500"></div>
                <span className="text-orange-500 text-xs font-extrabold uppercase tracking-widest">
                  EINSATZGEBIET
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Erfurt & die ganze <br />
                Region
              </h3>
              <p className="text-base text-gray-400 leading-relaxed mb-8">
                Wir sind in Erfurt zuhause und ständig in ganz Thüringen unterwegs. Ihr Ort nicht dabei? Fragen Sie einfach an.
              </p>

              {/* Cities Grid */}
              <div className="flex flex-wrap gap-3">
                {['Erfurt', 'Weimar', 'Gotha', 'Arnstadt', 'Sömmerda', 'Apolda', 'Jena', 'Mühlhausen'].map((city) => (
                  <span 
                    key={city}
                    className="px-4 py-2 text-sm text-gray-300 font-medium rounded-full bg-black/40 border border-white/10 backdrop-blur-sm shadow-sm select-none"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Map Right */}
            <div className="w-full h-[300px] sm:h-[400px] rounded-2xl border border-white/5 shadow-2xl overflow-hidden relative">
              <iframe 
                src="https://maps.google.com/maps?q=Lothar%20Herrmann%20Dachdeckermeister%20Erfurt&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Einsatzgebiet Karte"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
