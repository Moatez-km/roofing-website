import { useState } from 'react';
import {
  Award,
  CalendarDays,
  Check,
  Clock,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  X,
} from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('0176 16239375');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen font-sans text-white bg-[#0d131a] flex flex-col relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("/roof-bg.png")',
          backgroundPosition: '90% 60%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d131a] via-[#0d131a]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d131a] via-[#0d131a]/30 to-transparent"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-3 bg-black/40 backdrop-blur-sm border-b border-white/5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Custom SVG Logo resembling the one in the image */}
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
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            LEISTUNGEN
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            ABLAUF
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            REFERENZEN
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            KONTAKT
          </a>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-6">
          <div 
            onClick={() => setIsModalOpen(true)}
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

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col justify-center px-8 lg:px-24 py-6 md:py-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.05] tracking-tight mb-4">
            <span className="block text-white">STARKE DÄCHER.</span>
            <span className="block text-orange-500">SICHERE HÄUSER.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl font-medium">
            Hochwertige Dachlösungen, gebaut um das zu schützen, was am wichtigsten ist.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-8">
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
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-3 bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 font-bold text-sm tracking-wide transition-colors rounded-sm cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              SOFORT ANRUFEN
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Features Banner */}
      <footer className="relative z-10 w-full px-8 lg:px-24 py-4 mt-auto border-t border-white/5 bg-black/15 backdrop-blur-[2px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3 max-w-5xl">
          <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-full px-5 py-2.5 text-sm font-medium backdrop-blur-sm">
            <Check className="w-4 h-4 text-orange-500 stroke-[3]" />
            <span>Persönliches Angebot kostenlos</span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-full px-5 py-2.5 text-sm font-medium backdrop-blur-sm">
            <Check className="w-4 h-4 text-orange-500 stroke-[3]" />
            <span>7 Tage die Woche erreichbar</span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-full px-5 py-2.5 text-sm font-medium backdrop-blur-sm">
            <Check className="w-4 h-4 text-orange-500 stroke-[3]" />
            <span>Asbest-Entsorgung</span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-full px-5 py-2.5 text-sm font-medium backdrop-blur-sm">
            <Check className="w-4 h-4 text-orange-500 stroke-[3]" />
            <span>Immer unterwegs für Sie</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex flex-col items-center gap-1.5 self-end">
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce"></div>
          </div>
          <span className="text-[0.6rem] tracking-[0.2em] font-bold text-gray-400">SCROLLEN</span>
        </div>
      </footer>

      {/* Floating Action Buttons */}
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
          onClick={() => setIsModalOpen(true)}
          className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 duration-200 cursor-pointer"
          aria-label="Telefonanruf"
        >
          <Phone className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* Phone Call Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1c1d22] w-full max-w-sm rounded-2xl border border-white/5 p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Close button */}
            <button 
              onClick={() => setIsModalOpen(false)}
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
      )}
    </div>
  );
}
