import React from 'react';

export const VpmLogo: React.FC<{ className?: string, textColor?: string }> = ({ className = "h-16 w-auto", textColor = "#0f172a" }) => {
  return (
    <svg viewBox="0 0 500 420" className={`object-contain ${className}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vGrad" gradientUnits="userSpaceOnUse" x1="65" y1="270" x2="280" y2="20">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="40%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>

        <linearGradient id="pGrad" gradientUnits="userSpaceOnUse" x1="160" y1="110" x2="260" y2="260">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>

        <linearGradient id="mGrad" gradientUnits="userSpaceOnUse" x1="240" y1="110" x2="350" y2="260">
          <stop offset="0%" stopColor="#d946ef" />
          <stop offset="100%" stopColor="#7e22ce" />
        </linearGradient>
      </defs>

      <g transform="translate(43, 10)">
        
        {/* M LAYER */}
        <polygon 
          points="240,110 275,110 295,170 315,110 350,110 350,260 315,260 315,165 295,225 275,165 275,260 240,260" 
          fill="url(#mGrad)" 
        />
        
        <line x1="330" y1="150" x2="300" y2="190" stroke="#ffffff" strokeWidth="2.5" />
        <circle cx="330" cy="150" r="4.5" fill="#ffffff" stroke="url(#mGrad)" strokeWidth="3" />
        
        {/* P LAYER */}
        <path 
          fillRule="evenodd" clipRule="evenodd" 
          d="
            M 185 110 
            L 245 110 
            C 300 110 300 195 245 195 
            L 215 195 
            L 215 260 
            L 185 260 
            Z
            M 225 135 L 225 165 L 245 150 Z
          " 
          fill="url(#pGrad)" 
        />
        
        {/* Purple Network Bottom */}
        <g stroke="url(#pGrad)" strokeWidth="2.5" fill="#ffffff">
          <line x1="200" y1="260" x2="225" y2="285" />
          <line x1="225" y1="285" x2="180" y2="285" />
          <line x1="225" y1="285" x2="265" y2="275" />
          <line x1="265" y1="275" x2="255" y2="260" />

          <circle cx="200" cy="260" r="4" fill="url(#pGrad)" stroke="none" />
          <circle cx="225" cy="285" r="7" /> 
          <circle cx="180" cy="285" r="5" />
          <circle cx="265" cy="275" r="5" />
        </g>

        {/* Purple Top Right Network */}
        <g stroke="url(#mGrad)" strokeWidth="2.5" fill="#ffffff">
          <line x1="285" y1="115" x2="310" y2="115" />
          <line x1="310" y1="115" x2="320" y2="135" />
          
          <circle cx="285" cy="115" r="4" />
          <circle cx="310" cy="115" r="5" />
          <circle cx="320" cy="135" r="4" />
        </g>

        {/* V LAYER */}
        <g fill="url(#vGrad)">
          <polygon points="65,110 105,110 165,250 125,250" />
          <polygon points="125,250 200,90 175,90 240,20 285,70 250,85 165,250" />
        </g>

        {/* Cyan Network */}
        <g stroke="#22d3ee" strokeWidth="2.5" fill="#ffffff">
          <line x1="105" y1="110" x2="140" y2="105" />
          <line x1="140" y1="105" x2="140" y2="160" />
          <line x1="140" y1="160" x2="140" y2="185" />
          <line x1="105" y1="110" x2="65" y2="95" />

          <circle cx="105" cy="110" r="5" />
          <circle cx="140" cy="105" r="5" />
          <circle cx="140" cy="160" r="5" fill="#0ea5e9" stroke="none" /> 
          <circle cx="140" cy="185" r="5" fill="#0ea5e9" stroke="none" /> 
          <circle cx="65" cy="95" r="4" />
        </g>
      </g>

      {/* Enlarged Typography with dynamic fill property */}
      <text x="250" y="360" fontFamily="'Montserrat', 'Arial Black', sans-serif" fontSize="48" fontWeight="900" fill={textColor} textAnchor="middle" letterSpacing="1.5" className="transition-colors duration-300">
        VIRALPOSTMEDIA
      </text>
      <text x="250" y="390" fontFamily="'Montserrat', 'Arial', sans-serif" fontSize="16" fontWeight="600" fill={textColor === "#0f172a" ? "#475569" : "#cbd5e1"} textAnchor="middle" letterSpacing="6" className="transition-colors duration-300">
        DIGITAL MARKETING COMPANY
      </text>
    </svg>
  );
};
