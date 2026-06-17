import React from 'react';

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
