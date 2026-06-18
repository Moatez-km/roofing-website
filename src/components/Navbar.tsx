import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  onCallClick: () => void;
}

export function Navbar({ onCallClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#leistungen', label: 'LEISTUNGEN' },
    { href: '#ablauf', label: 'ABLAUF' },
    { href: '#referenzen', label: 'REFERENZEN' },
    { href: '#kontakt', label: 'KONTAKT' },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    // allow menu to close before scrolling
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 py-3 sm:py-4 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10'
            : 'bg-black/60 backdrop-blur-md border-b border-white/5'
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0" onClick={() => setMenuOpen(false)}>
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M20 5L2 20H8V35H16V25H24V35H32V20H38L20 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
            <path d="M20 5L2 20" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
            <path d="M26 10L26 5H30V13.5" stroke="#f97316" strokeWidth="2" />
          </svg>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold leading-tight tracking-wider">
              PEAK <span className="text-orange-500">ROOFING</span>
            </span>
            <span className="text-[0.55rem] tracking-[0.2em] text-gray-300 font-medium hidden xs:block">
              HÖCHSTE QUALITÄT
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: phone + CTA (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Phone – hidden on small */}
          <div
            onClick={onCallClick}
            className="hidden md:flex items-center gap-2 font-bold text-base lg:text-lg cursor-pointer hover:text-orange-500 transition-colors"
          >
            <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-orange-500" />
            <span>0176 16239375</span>
          </div>

          {/* CTA button – hidden on very small, shown from sm */}
          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#kontakt');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden sm:block bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 font-bold text-xs sm:text-sm tracking-wide transition-colors whitespace-nowrap"
          >
            KOSTENLOSES ANGEBOT
          </a>

          {/* Hamburger – only on <lg */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-white hover:text-orange-500 transition-colors"
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden lg:hidden ${
          menuOpen ? 'max-h-screen pt-20 pb-8' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left py-4 text-lg font-bold tracking-wider text-gray-200 hover:text-orange-500 border-b border-white/5 transition-colors"
            >
              {link.label}
            </button>
          ))}

          {/* Phone (mobile menu) */}
          <button
            onClick={() => { setMenuOpen(false); onCallClick(); }}
            className="flex items-center gap-3 py-4 text-lg font-bold text-gray-200 hover:text-orange-500 border-b border-white/5 transition-colors"
          >
            <Phone className="w-5 h-5 text-orange-500" />
            0176 16239375
          </button>

          {/* CTA (mobile menu) */}
          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#kontakt');
            }}
            className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white text-center px-6 py-4 font-bold text-sm tracking-wide transition-colors"
          >
            KOSTENLOSES ANGEBOT
          </a>
        </div>
      </div>
    </>
  );
}
