import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

interface FloatingButtonsProps {
  onCallClick: () => void;
}

export function FloatingButtons({ onCallClick }: FloatingButtonsProps) {
  return (
    <div className="fixed bottom-6 sm:bottom-24 right-4 sm:right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/4917616239375" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-11 h-11 sm:w-12 sm:h-12 bg-[#25D366] hover:bg-[#20ba5a] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 duration-200"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366] stroke-[1.5]" />
      </a>

      {/* Call Button */}
      <button 
        onClick={onCallClick}
        className="w-11 h-11 sm:w-12 sm:h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 duration-200 cursor-pointer"
        aria-label="Telefonanruf"
      >
        <Phone className="w-5 h-5 stroke-[2.5]" />
      </button>
    </div>
  );
}
