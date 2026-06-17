import React, { useState } from 'react';
import { Home, Check, Trash2, Warehouse, Droplets, Hammer, ClipboardCheck, Fence } from 'lucide-react';

export function Leistungen() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    const container = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (x / container.width) * 100));
    setSliderPosition(percentage);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const container = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (x / container.width) * 100));
    setSliderPosition(percentage);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setIsDragging(false);
  };

  return (
    <section id="leistungen" className="relative z-10 py-16 sm:py-24 px-5 sm:px-8 lg:px-24 bg-[#0a0f14] border-t border-white/5">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-orange-500 text-sm font-extrabold uppercase tracking-widest mb-3 block">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-2xl">
            Alles rund ums Dach <br />
            <span className="text-orange-500">aus einer Hand</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
            Klassische Dachdeckerarbeiten, Sanierung von Garagendächern, Dachrinnen in jedem Material, die fachgerechte Entsorgung alter Asbest-Eindeckung sowie die Entfernung und Anbringung von Gartenzäunen.
          </p>
        </div>

        {/* Grid of 7 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Dachdecken & Neueindeckung */}
          <div className="bg-black/30 border border-white/5 p-8 rounded-2xl hover:border-orange-500/30 transition-all hover:-translate-y-1 duration-300 flex flex-col backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Dachdecken & Neueindeckung</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Klassische Dachdeckerarbeiten – vom Steildach bis zur kompletten Neueindeckung, fachgerecht und langlebig.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Neueindeckung & Umdeckung</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Dämmung & Unterspannbahn</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Dichte Anschlüsse & Details</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Mit Entsorgung</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Asbest-Entfernung & Neueindeckung */}
          <div className="bg-black/30 border border-white/5 p-8 rounded-2xl hover:border-orange-500/30 transition-all hover:-translate-y-1 duration-300 flex flex-col backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Asbest-Entfernung & Neueindeckung</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Alte Asbest-Eindeckung („Eternit“) fachgerecht entfernen und entsorgen – und das Dach gleich fachmännisch neu eindecken.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Alte Eindeckung sicher entfernen</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Fachgerechte Entsorgung</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Neue, dichte Eindeckung</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Garagendach */}
          <div className="bg-black/30 border border-white/5 p-8 rounded-2xl hover:border-orange-500/30 transition-all hover:-translate-y-1 duration-300 flex flex-col backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
              <Warehouse className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Garagendach · Trapezblech & Sandwich</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Sanierung und Neueindeckung von Garagendächern mit robustem Trapezblech oder gedämmten Sandwichelementen.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Trapezblech – robust & günstig</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Sandwichelemente – gedämmt</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Dichte Abschlüsse rundum</span>
              </li>
            </ul>
          </div>

          {/* Card 4: Dachrinnen */}
          <div className="bg-black/30 border border-white/5 p-8 rounded-2xl hover:border-orange-500/30 transition-all hover:-translate-y-1 duration-300 flex flex-col backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Dachrinnen · Kupfer, Alu & Zink</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Erneuerung und Reparatur von Dachrinnen, Fallrohren and Anschlüssen – damit Regenwasser zuverlässig abläuft.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Kupfer, Aluminium & Zink</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Rinnen, Fallrohre, Kessel</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Reparatur oder Kompletttausch</span>
              </li>
            </ul>
          </div>

          {/* Card 5: Dachreparatur */}
          <div className="bg-black/30 border border-white/5 p-8 rounded-2xl hover:border-orange-500/30 transition-all hover:-translate-y-1 duration-300 flex flex-col backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
              <Hammer className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Dachreparatur</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Undichte Stellen, lose Ziegel, Bleche oder Sturmschäden? Wir orten die Ursache und reparieren zuverlässig.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Leckage-Ortung</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Sturmschaden-Behebung</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Abdichtung & Versiegelung</span>
              </li>
            </ul>
          </div>

          {/* Card 6: Wartung & Inspektion */}
          <div className="bg-black/30 border border-white/5 p-8 rounded-2xl hover:border-orange-500/30 transition-all hover:-translate-y-1 duration-300 flex flex-col backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Wartung & Inspektion</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Regelmäßige Kontrolle hält Ihr Dach langfristig dicht und beugt teuren Folgeschäden vor.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Dach- & Rinnenkontrolle</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Reinigung & Pflege</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Wartungsempfehlungen</span>
              </li>
            </ul>
          </div>

          {/* Card 7: Gartenzaun */}
          <div className="bg-black/30 border border-white/5 p-8 rounded-2xl hover:border-orange-500/30 transition-all hover:-translate-y-1 duration-300 flex flex-col backdrop-blur-sm lg:col-span-3 lg:max-w-2xl lg:mx-auto lg:w-full">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
              <Fence className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Gartenzaun · Entfernung & Anbringung</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Auch außerhalb des Dachs für Sie da: Wir entfernen alte Gartenzäune fachgerecht und bringen neue Zäune sauber an – egal ob Holz, Metall oder Doppelstabmatten.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-300 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:space-y-0">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Alten Zaun demontieren</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Neuen Zaun anbringen</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3]" />
                <span>Pfostensetzen & Verankerung</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Subsection: Vorher & Nachher */}
        <div className="border-t border-white/5 pt-16 mb-24">
          {/* Header */}
          <div className="flex flex-col gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-[2px] bg-orange-500"></div>
                <span className="text-orange-500 text-xs font-extrabold uppercase tracking-widest">
                  SEHEN STATT VERSPRECHEN
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Vorher & Nachher
              </h3>
            </div>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Ziehen Sie den Regler – so sieht der Unterschied bei einer fachgerechten Sanierung aus.
            </p>
          </div>

          {/* Slider Container */}
          <div 
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-w-5xl mx-auto overflow-hidden rounded-2xl border border-white/5 shadow-2xl select-none cursor-ew-resize touch-none"
          >
            {/* Nachher Image (Right side underneath) */}
            <img 
              src="/nachher.webp" 
              alt="Nachher" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
            />
            
            {/* Vorher Image (Left side clipped overlay) */}
            <img 
              src="/vorher.png" 
              alt="Vorher" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            />

            {/* Labels */}
            <span className="absolute top-6 left-6 z-20 px-3.5 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/5 pointer-events-none">
              VORHER
            </span>
            <span className="absolute top-6 right-6 z-20 px-3.5 py-1.5 bg-black/60 backdrop-blur-sm text-yellow-500 text-xs font-bold uppercase tracking-wider rounded-full border border-white/5 pointer-events-none">
              NACHHER
            </span>

            {/* Slider Divider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-yellow-500 z-10 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Drag Handle Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-500 rounded-full shadow-2xl flex items-center justify-center pointer-events-none transition-all duration-150">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-black">
                  <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Subsection: Dachrinnen Materialien */}
        <div className="border-t border-white/5 pt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">
            Dachrinnen Materialien
          </h3>
          <p className="text-sm text-gray-400 text-center mb-10 max-w-xl mx-auto">
            Für jede Anforderung das passende Metall – professionell verarbeitet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Material Kupfer */}
            <div className="bg-[#121820] border-l-4 border-[#c3643b] p-6 rounded-r-2xl shadow-xl flex flex-col animate-in fade-in duration-300">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
                <span>Kupfer</span>
                <span className="text-xs text-[#c3643b] bg-[#c3643b]/10 px-2.5 py-1 rounded-full font-bold">Premium</span>
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Edel, extrem langlebig, edle Patina über die Jahre.
              </p>
            </div>

            {/* Material Aluminium */}
            <div className="bg-[#121820] border-l-4 border-gray-400 p-6 rounded-r-2xl shadow-xl flex flex-col animate-in fade-in duration-300">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
                <span>Aluminium</span>
                <span className="text-xs text-gray-400 bg-gray-400/10 px-2.5 py-1 rounded-full font-bold">Modern</span>
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leicht, rostfrei, wartungsarm – ideal für moderne Dächer.
              </p>
            </div>

            {/* Material Zink */}
            <div className="bg-[#121820] border-l-4 border-slate-500 p-6 rounded-r-2xl shadow-xl flex flex-col animate-in fade-in duration-300">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
                <span>Zink (Titanzink)</span>
                <span className="text-xs text-slate-400 bg-slate-400/10 px-2.5 py-1 rounded-full font-bold">Klassiker</span>
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bewährter Klassiker mit hervorragender Lebensdauer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
