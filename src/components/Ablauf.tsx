import React from 'react';

export function Ablauf() {
  return (
    <section id="ablauf" className="relative z-10 py-16 sm:py-24 px-5 sm:px-8 lg:px-24 bg-[#0d131a] border-t border-white/5 overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <span className="text-orange-500 text-sm font-extrabold uppercase tracking-widest mb-3 block">
            Der Ablauf
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Wie es funktioniert
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            In 4 einfachen und transparenten Schritten zu Ihrem sicheren und dichten Dach – unkompliziert und zuverlässig.
          </p>
        </div>

        {/* Desktop Timeline Flow */}
        <div className="hidden md:block mb-16 relative">
          {/* Connecting Glow Line */}
          <div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-[2px] -translate-y-1/2 bg-gradient-to-r from-orange-500/10 via-orange-500/50 to-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)] z-0"></div>
          
          {/* Glowing Dots */}
          <div className="grid grid-cols-4 relative z-10">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex justify-center">
                <div className="relative flex items-center justify-center w-12 h-12">
                  {/* Ring outer glow */}
                  <div className="absolute inset-0 rounded-full bg-orange-500/10 animate-ping duration-[2000ms] opacity-60"></div>
                  <div className="absolute w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                    {/* Core dot */}
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_#f97316]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Description Grid (Desktop) */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center flex flex-col items-center">
            <span className="border border-orange-500/20 bg-orange-500/5 text-orange-500 text-xs font-bold px-3 py-1.5 rounded-md inline-block mb-4 tracking-wider uppercase shadow-[inset_0_0_8px_rgba(249,115,22,0.05)]">
              Schritt 1
            </span>
            <h3 className="text-xl font-bold text-white mb-2">Erstkontakt</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">
              Kontaktieren Sie uns telefonisch, per WhatsApp oder über das Formular für ein Erstgespräch.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center flex flex-col items-center">
            <span className="border border-orange-500/20 bg-orange-500/5 text-orange-500 text-xs font-bold px-3 py-1.5 rounded-md inline-block mb-4 tracking-wider uppercase shadow-[inset_0_0_8px_rgba(249,115,22,0.05)]">
              Schritt 2
            </span>
            <h3 className="text-xl font-bold text-white mb-2">Vor-Ort-Besichtigung</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">
              Wir begutachten Ihr Dach direkt vor Ort kostenlos, um den genauen Zustand zu bewerten.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center flex flex-col items-center">
            <span className="border border-orange-500/20 bg-orange-500/5 text-orange-500 text-xs font-bold px-3 py-1.5 rounded-md inline-block mb-4 tracking-wider uppercase shadow-[inset_0_0_8px_rgba(249,115,22,0.05)]">
              Schritt 3
            </span>
            <h3 className="text-xl font-bold text-white mb-2">Festpreisangebot</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">
              Sie erhalten ein verbindliches, transparentes Angebot mit allen Kosten im Überblick.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center flex flex-col items-center">
            <span className="border border-orange-500/20 bg-orange-500/5 text-orange-500 text-xs font-bold px-3 py-1.5 rounded-md inline-block mb-4 tracking-wider uppercase shadow-[inset_0_0_8px_rgba(249,115,22,0.05)]">
              Schritt 4
            </span>
            <h3 className="text-xl font-bold text-white mb-2">Fachgerechter Bau</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">
              Unser qualifiziertes Team realisiert Ihr Vorhaben sauber, zügig und nach höchsten Standards.
            </p>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden relative pl-8 border-l border-orange-500/20 ml-4 space-y-12">
          {/* Step 1 */}
          <div className="relative">
            {/* Dot */}
            <div className="absolute -left-[41px] top-1.5 flex items-center justify-center w-6 h-6 bg-[#0d131a]">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_#f97316]"></div>
            </div>
            <div>
              <span className="border border-orange-500/20 bg-orange-500/5 text-orange-500 text-[0.7rem] font-bold px-2.5 py-1.5 rounded-md inline-block mb-3 tracking-wider uppercase shadow-[inset_0_0_8px_rgba(249,115,22,0.05)]">
                Schritt 1
              </span>
              <h3 className="text-lg font-bold text-white mb-1.5">Erstkontakt</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kontaktieren Sie uns telefonisch, per WhatsApp oder über das Formular für ein Erstgespräch.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            {/* Dot */}
            <div className="absolute -left-[41px] top-1.5 flex items-center justify-center w-6 h-6 bg-[#0d131a]">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_#f97316]"></div>
            </div>
            <div>
              <span className="border border-orange-500/20 bg-orange-500/5 text-orange-500 text-[0.7rem] font-bold px-2.5 py-1.5 rounded-md inline-block mb-3 tracking-wider uppercase shadow-[inset_0_0_8px_rgba(249,115,22,0.05)]">
                Schritt 2
              </span>
              <h3 className="text-lg font-bold text-white mb-1.5">Vor-Ort-Besichtigung</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Wir begutachten Ihr Dach direkt vor Ort kostenlos, um den genauen Zustand zu bewerten.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            {/* Dot */}
            <div className="absolute -left-[41px] top-1.5 flex items-center justify-center w-6 h-6 bg-[#0d131a]">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_#f97316]"></div>
            </div>
            <div>
              <span className="border border-orange-500/20 bg-orange-500/5 text-orange-500 text-[0.7rem] font-bold px-2.5 py-1.5 rounded-md inline-block mb-3 tracking-wider uppercase shadow-[inset_0_0_8px_rgba(249,115,22,0.05)]">
                Schritt 3
              </span>
              <h3 className="text-lg font-bold text-white mb-1.5">Festpreisangebot</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sie erhalten ein verbindliches, transparentes Angebot mit allen Kosten im Überblick.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative">
            {/* Dot */}
            <div className="absolute -left-[41px] top-1.5 flex items-center justify-center w-6 h-6 bg-[#0d131a]">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_#f97316]"></div>
            </div>
            <div>
              <span className="border border-orange-500/20 bg-orange-500/5 text-orange-500 text-[0.7rem] font-bold px-2.5 py-1.5 rounded-md inline-block mb-3 tracking-wider uppercase shadow-[inset_0_0_8px_rgba(249,115,22,0.05)]">
                Schritt 4
              </span>
              <h3 className="text-lg font-bold text-white mb-1.5">Fachgerechter Bau</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Unser qualifiziertes Team realisiert Ihr Vorhaben sauber, zügig und nach höchsten Standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
