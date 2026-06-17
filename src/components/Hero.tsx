import React from 'react';
import { ShieldCheck, Award, Clock, CalendarDays, Phone } from 'lucide-react';

interface HeroProps {
  onCallClick: () => void;
}

export function Hero({ onCallClick }: HeroProps) {
  return (
    <main className="relative z-10 flex-1 flex flex-col justify-center px-5 sm:px-8 lg:px-24 pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-2xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black leading-[1.05] tracking-tight mb-5 sm:mb-6">
          <span className="block text-white">STARKE DÄCHER.</span>
          <span className="block text-orange-500">SICHERE HÄUSER.</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-xl font-medium">
          Hochwertige Dachlösungen, gebaut um das zu schützen, was am wichtigsten ist.
        </p>

        <div className="flex flex-wrap gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="flex items-center gap-3 sm:gap-4">
            <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 flex-shrink-0" strokeWidth={1.5} />
            <div className="text-xs sm:text-sm font-bold leading-snug">
              Lizenziert<br />& Versichert
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <Award className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 flex-shrink-0" strokeWidth={1.5} />
            <div className="text-xs sm:text-sm font-bold leading-snug">
              Hochwertige<br />Materialien
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 flex-shrink-0" strokeWidth={1.5} />
            <div className="text-xs sm:text-sm font-bold leading-snug">
              Pünktlich<br />& Zuverlässig
            </div>
          </div>
        </div>

        <div className="flex flex-col xs:flex-row gap-4 sm:gap-6">
          <a
            href="#kontakt"
            className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-4 font-bold text-sm tracking-wide transition-colors rounded-sm"
          >
            <CalendarDays className="w-5 h-5" />
            KOSTENLOSES ANGEBOT
          </a>
          <button 
            onClick={onCallClick}
            className="flex items-center justify-center gap-3 bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 sm:px-8 py-4 font-bold text-sm tracking-wide transition-colors rounded-sm cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            SOFORT ANRUFEN
          </button>
        </div>
      </div>
    </main>
  );
}
