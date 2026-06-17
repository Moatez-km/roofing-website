import React, { useState } from 'react';
import {
  Award,
  CalendarDays,
  Check,
  ClipboardCheck,
  Clock,
  Droplets,
  Fence,
  Hammer,
  Home,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Play,
  ShieldCheck,
  Trash2,
  Warehouse,
  X,
} from 'lucide-react';

interface NavbarProps {
  onCallClick: () => void;
}

export function Navbar({ onCallClick }: NavbarProps) {
  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-4 bg-black/40 backdrop-blur-sm border-b border-white/5">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M20 5L2 20H8V35H16V25H24V35H32V20H38L20 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
          <path d="M20 5L2 20" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
          <path d="M26 10L26 5H30V13.5" stroke="#f97316" strokeWidth="2" />
        </svg>
        <div className="flex flex-col">
          <span className="text-2xl font-bold leading-tight tracking-wider">
            PEAK <span className="text-orange-500">ROOFING</span>
          </span>
          <span className="text-[0.6rem] tracking-[0.2em] text-gray-300 font-medium">
            HÖCHSTE QUALITÄT
          </span>
        </div>
      </div>

      {/* Links */}
      <div className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
        <a href="#leistungen" className="text-gray-300 hover:text-white transition-colors">
          LEISTUNGEN
        </a>
        <a href="#ablauf" className="text-gray-300 hover:text-white transition-colors">
          ABLAUF
        </a>
        <a href="#referenzen" className="text-gray-300 hover:text-white transition-colors">
          REFERENZEN
        </a>
        <a href="#kontakt" className="text-gray-300 hover:text-white transition-colors">
          KONTAKT
        </a>
      </div>

      {/* Right CTA */}
      <div className="flex items-center gap-6">
        <div 
          onClick={onCallClick}
          className="hidden md:flex items-center gap-2 font-bold text-lg cursor-pointer hover:text-orange-500 transition-colors"
        >
          <Phone className="w-5 h-5 text-orange-500" />
          <span>0176 16239375</span>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-bold text-sm tracking-wide transition-colors">
          KOSTENLOSES ANGEBOT
        </button>
      </div>
    </nav>
  );
}

interface HeroProps {
  onCallClick: () => void;
}

export function Hero({ onCallClick }: HeroProps) {
  return (
    <main className="relative z-10 flex-1 flex flex-col justify-center px-8 lg:px-24 py-16">
      <div className="max-w-2xl">
        <h1 className="text-6xl md:text-7xl lg:text-[5rem] font-black leading-[1.05] tracking-tight mb-6">
          <span className="block text-white">STARKE DÄCHER.</span>
          <span className="block text-orange-500">SICHERE HÄUSER.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-xl font-medium">
          Hochwertige Dachlösungen, gebaut um das zu schützen, was am wichtigsten ist.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 mb-12">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
            <div className="text-sm font-bold leading-snug">
              Lizenziert<br />& Versichert
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Award className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
            <div className="text-sm font-bold leading-snug">
              Hochwertige<br />Materialien
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
            <div className="text-sm font-bold leading-snug">
              Pünktlich<br />& Zuverlässig
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <button className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-bold text-sm tracking-wide transition-colors rounded-sm">
            <CalendarDays className="w-5 h-5" />
            KOSTENLOSES ANGEBOT
          </button>
          <button 
            onClick={onCallClick}
            className="flex items-center justify-center gap-3 bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 font-bold text-sm tracking-wide transition-colors rounded-sm cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            SOFORT ANRUFEN
          </button>
        </div>
      </div>
    </main>
  );
}

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
    <section id="leistungen" className="relative z-10 py-24 px-8 lg:px-24 bg-[#0a0f14] border-t border-white/5">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-orange-500 text-sm font-extrabold uppercase tracking-widest mb-3 block">
            Unsere Leistungen
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-2xl">
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
              Erneuerung und Reparatur von Dachrinnen, Fallrohren und Anschlüssen – damit Regenwasser zuverlässig abläuft.
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
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-[2px] bg-orange-500"></div>
                <span className="text-orange-500 text-xs font-extrabold uppercase tracking-widest">
                  SEHEN STATT VERSPRECHEN
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
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
            className="relative w-full aspect-[16/10] md:aspect-[16/9] max-w-5xl mx-auto overflow-hidden rounded-2xl border border-white/5 shadow-2xl select-none cursor-ew-resize touch-none"
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
          <h3 className="text-2xl font-bold text-white mb-2 text-center">
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

export function Ablauf() {
  return (
    <section id="ablauf" className="relative z-10 py-24 px-8 lg:px-24 bg-[#0d131a] border-t border-white/5 overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-orange-500 text-sm font-extrabold uppercase tracking-widest mb-3 block">
            Der Ablauf
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
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

export function Referenzen() {
  return (
    <section id="referenzen" className="relative z-10 py-24 px-8 lg:px-24 bg-[#0a0f14] border-t border-white/5 overflow-hidden">
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
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
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
          <div className="lg:col-span-2 relative group overflow-hidden rounded-2xl border border-white/5 shadow-xl aspect-[16/10] lg:aspect-auto lg:h-[600px]">
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
          <div className="flex flex-col gap-6 lg:h-[600px]">
            {/* Top right project */}
            <div className="flex-1 relative group overflow-hidden rounded-2xl border border-white/5 shadow-xl min-h-[250px]">
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
            <div className="flex-1 relative group overflow-hidden rounded-2xl border border-white/5 shadow-xl min-h-[250px]">
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
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
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
            <div className="w-full h-[400px] rounded-2xl border border-white/5 shadow-2xl overflow-hidden relative">
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

export function Kontakt() {
  return (
    <section id="kontakt" className="relative z-10 py-24 px-8 lg:px-24 bg-[#0d131a] border-t border-white/5 overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Left */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-orange-500"></div>
              <span className="text-orange-500 text-xs font-extrabold uppercase tracking-widest">
                KONTAKT
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
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
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              {/* Name & Telefon side-by-side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-medium text-gray-300 mb-2 block">Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ihr Name"
                    className="w-full bg-[#0d131a] border border-white/10 rounded-xl px-4 py-4 text-sm text-white placeholder-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-300 mb-2 block">Telefon</label>
                  <input 
                    type="tel" 
                    placeholder="Für schnellen Rückruf"
                    className="w-full bg-[#0d131a] border border-white/10 rounded-xl px-4 py-4 text-sm text-white placeholder-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all outline-none"
                  />
                </div>
              </div>

              {/* E-Mail */}
              <div>
                <label className="text-xs font-medium text-gray-300 mb-2 block">E-Mail *</label>
                <input 
                  type="email" 
                  required
                  placeholder="ihre@email.de"
                  className="w-full bg-[#0d131a] border border-white/10 rounded-xl px-4 py-4 text-sm text-white placeholder-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all outline-none"
                />
              </div>

              {/* Gewünschte Leistung */}
              <div>
                <label className="text-xs font-medium text-gray-300 mb-2 block">Gewünschte Leistung</label>
                <div className="relative">
                  <select className="w-full bg-[#0d131a] border border-white/10 rounded-xl px-4 py-4 text-sm text-white focus:border-orange-500 outline-none cursor-pointer appearance-none">
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
                  rows={4} 
                  placeholder="Beschreiben Sie kurz Ihr Anliegen - Adresse des Objekts, Größe, was gemacht werden soll..."
                  className="w-full bg-[#0d131a] border border-white/10 rounded-xl px-4 py-4 text-sm text-white placeholder-gray-600 focus:border-orange-500 outline-none resize-none"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  required
                  id="privacy-checkbox"
                  className="w-4 h-4 mt-0.5 rounded border-white/10 bg-[#0d131a] text-orange-500 focus:ring-0 cursor-pointer"
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
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-extrabold py-4 rounded-xl shadow-[0_4px_25px_rgba(249,115,22,0.3)] hover:shadow-[0_4px_30px_rgba(249,115,22,0.5)] transition-all duration-200 active:scale-[0.99] cursor-pointer text-center text-sm tracking-wide"
              >
                Kostenloses Angebot anfragen
              </button>

              <p className="text-center text-[10px] text-gray-500 mt-4">
                Wir melden uns schnellstmöglich – 7 Tage die Woche.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 w-full bg-[#0a0f14] border-t border-white/5 pt-16 pb-8 px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Left Column: Brand & Logo */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M20 5L2 20H8V35H16V25H24V35H32V20H38L20 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
                <path d="M20 5L2 20" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
                <path d="M26 10L26 5H30V13.5" stroke="#f97316" strokeWidth="2" />
              </svg>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight tracking-wider">
                  PEAK <span className="text-orange-500">ROOFING</span>
                </span>
                <span className="text-[0.5rem] tracking-[0.2em] text-gray-400 font-medium">
                  HÖCHSTE QUALITÄT
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Ihr Dachdecker in Erfurt und Umgebung. Dachdecken, Garagendach, Dachrinnen, Asbest-Entsorgung und Gartenzaun-Service – persönlich, sauber und zuverlässig.
            </p>
          </div>

          {/* Column 2: Leistungen */}
          <div>
            <h3 className="text-orange-500 text-xs font-extrabold uppercase tracking-widest mb-6">
              LEISTUNGEN
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li>
                <a href="#leistungen" className="hover:text-orange-500 transition-colors">Dachdecken & Neueindeckung</a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-orange-500 transition-colors">Asbest-Entfernung</a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-orange-500 transition-colors">Garagendach</a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-orange-500 transition-colors">Dachrinnen</a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-orange-500 transition-colors">Dachreparatur</a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-orange-500 transition-colors">Gartenzaun</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h3 className="text-orange-500 text-xs font-extrabold uppercase tracking-widest mb-6">
              NAVIGATION
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li>
                <a href="#ablauf" className="hover:text-orange-500 transition-colors">Ablauf</a>
              </li>
              <li>
                <a href="#referenzen" className="hover:text-orange-500 transition-colors">Referenzen</a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-orange-500 transition-colors">Kontakt</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontakt */}
          <div>
            <h3 className="text-orange-500 text-xs font-extrabold uppercase tracking-widest mb-6">
              KONTAKT
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li className="font-bold text-white">
                <a href="tel:017616239375" className="hover:text-orange-500 transition-colors">0176 16239375</a>
              </li>
              <li>
                <a href="mailto:info@peakroofing.de" className="hover:text-orange-500 transition-colors">info@peakroofing.de</a>
              </li>
              <li>
                <span>Mo–So · 7:00–20:00 Uhr</span>
              </li>
              <li className="pt-2 leading-relaxed">
                <span>Am Johannestor 16</span><br />
                <span>99084 Erfurt</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2026 Peak Roofing. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-orange-500 transition-colors">Impressum</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FloatingButtonsProps {
  onCallClick: () => void;
}

export function FloatingButtons({ onCallClick }: FloatingButtonsProps) {
  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-3.5">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/4917616239375" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#25D366] hover:bg-[#20ba5a] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 duration-200"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366] stroke-[1.5]" />
      </a>

      {/* Call Button */}
      <button 
        onClick={onCallClick}
        className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 duration-200 cursor-pointer"
        aria-label="Telefonanruf"
      >
        <Phone className="w-5 h-5 stroke-[2.5]" />
      </button>
    </div>
  );
}

interface PhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PhoneModal({ isOpen, onClose }: PhoneModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('0176 16239375');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1c1d22] w-full max-w-sm rounded-2xl border border-white/5 p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h3 className="text-xl font-bold text-center text-white mb-2">
          Rufen Sie uns an
        </h3>

        {/* Subtitle */}
        <p className="text-xs text-gray-400 text-center mb-8 px-4 leading-relaxed">
          Wir sind 7 Tage die Woche von 7 bis 20 Uhr für Sie da.
        </p>

        {/* Big Orange Phone Number */}
        <div className="text-4xl font-extrabold text-center text-orange-500 mb-8 tracking-wide">
          0176 16239375
        </div>

        {/* Explanatory text */}
        <p className="text-[0.7rem] text-gray-500 text-center mb-8">
          Tippen Sie die Nummer ab oder kopieren Sie sie.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button 
            onClick={handleCopy}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg active:scale-[0.98] cursor-pointer"
          >
            {copied ? 'Kopiert!' : 'Nummer kopieren'}
          </button>
          <a 
            href="https://wa.me/4917616239375"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-transparent border border-white/10 hover:bg-white/5 text-white text-xs font-bold py-3.5 px-4 rounded-xl text-center no-underline transition-all active:scale-[0.98]"
          >
            Per WhatsApp schreiben
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-white bg-[#0d131a] flex flex-col relative">
      {/* Hero & Navigation Wrapper */}
      <div className="relative min-h-screen flex flex-col">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat opacity-70"
            style={{
              backgroundImage: 'url("/roof-bg.png")',
              backgroundPosition: '90% 60%',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d131a] via-[#0d131a]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d131a] via-[#0d131a]/30 to-transparent"></div>
        </div>

        {/* Navigation */}
        <Navbar onCallClick={() => setIsModalOpen(true)} />

        {/* Hero Content */}
        <Hero onCallClick={() => setIsModalOpen(true)} />
      </div>

      <Leistungen />
      <Ablauf />
      <Referenzen />
      <Kontakt />
      <Footer />
      <FloatingButtons onCallClick={() => setIsModalOpen(true)} />
      <PhoneModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
