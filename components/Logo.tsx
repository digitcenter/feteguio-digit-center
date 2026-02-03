
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto">
        {/* Circle Border */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="#0084FF" strokeWidth="2" />
        {/* Flame Element */}
        <path 
          d="M50 15 C 65 35, 45 45, 65 65 C 55 75, 40 70, 35 55 C 40 45, 35 35, 50 15 Z" 
          fill="#FF6600" 
        />
        <path 
          d="M50 30 C 58 45, 48 50, 58 60 C 50 65, 42 62, 40 55 C 43 50, 42 45, 50 30 Z" 
          fill="#FF9E00" 
          opacity="0.6"
        />
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-[#0084FF] font-black tracking-tight text-xl">FETEGUIO</span>
          <span className="text-[#FF6600] font-bold tracking-widest text-[10px] uppercase">DIGIT-CENTER</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
