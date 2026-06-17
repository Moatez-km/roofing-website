import React, { useState } from 'react';
import { X } from 'lucide-react';

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
