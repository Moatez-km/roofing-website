import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Leistungen } from './components/Leistungen';
import { Ablauf } from './components/Ablauf';
import { Referenzen } from './components/Referenzen';
import { Kontakt } from './components/Kontakt';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { PhoneModal } from './components/PhoneModal';

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
