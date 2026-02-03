
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Clean phone number for WhatsApp API
  const phoneNumber = "2250585339243";
  // Personal and professional welcome message
  const welcomeMessage = "Bonjour SORO FETEGUE DAVID, je souhaiterais discuter d'un projet digital ou d'une formation avec FETEGUIO DIGIT-CENTER.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(welcomeMessage)}`;

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex items-center gap-4">
      {/* Label that appears on hover */}
      <div 
        className={`bg-white text-slate-900 px-4 py-2 rounded-xl shadow-xl border border-slate-100 font-bold text-sm transition-all duration-300 origin-right ${
          isHovered ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-4 pointer-events-none'
        }`}
      >
        Discuter avec David
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center"
        aria-label="Contactez-nous sur WhatsApp"
      >
        {/* Pulsing Brand Outer Rings */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF6600] opacity-20 animate-ping group-hover:bg-[#0084FF]"></span>
        <span className="absolute inline-flex h-[120%] w-[120%] rounded-full bg-[#0084FF] opacity-10 animate-pulse"></span>
        
        {/* Main Button */}
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_40px_-10px_rgba(37,211,102,0.5)] transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-12 border-4 border-white">
          <MessageCircle size={32} />
          
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white items-center justify-center text-[10px] font-black">1</span>
          </span>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
