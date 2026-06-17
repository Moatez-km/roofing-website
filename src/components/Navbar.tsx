import React from 'react';
import { Phone } from 'lucide-react';

interface NavbarProps {
  onCallClick: () => void;
}

export function Navbar({ onCallClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black/60 backdrop-blur-md border-b border-white/5">
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
