import React from 'react';
import { ShieldCheck, Award, Clock, CalendarDays, Phone } from 'lucide-react';

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
