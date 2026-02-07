import { useState, useEffect } from 'react';
import Tulip from './Tulip';

const TulipGarden = () => {
  const [showRibbon, setShowRibbon] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowRibbon(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Bouquet arrangement - tulips fan out from center
  const tulips = [
    // Center tulips (tallest)
    { delay: 800, rotation: 0, height: '180px', color: 'red' as const, offsetX: 0 },
    { delay: 600, rotation: -8, height: '170px', color: 'pink' as const, offsetX: -15 },
    { delay: 700, rotation: 8, height: '170px', color: 'pink' as const, offsetX: 15 },
    
    // Second layer
    { delay: 400, rotation: -18, height: '155px', color: 'light' as const, offsetX: -25 },
    { delay: 500, rotation: 18, height: '155px', color: 'light' as const, offsetX: 25 },
    { delay: 550, rotation: -12, height: '165px', color: 'red' as const, offsetX: -8 },
    { delay: 650, rotation: 12, height: '165px', color: 'red' as const, offsetX: 8 },
    
    // Outer layer
    { delay: 200, rotation: -28, height: '140px', color: 'pink' as const, offsetX: -35 },
    { delay: 300, rotation: 28, height: '140px', color: 'pink' as const, offsetX: 35 },
    { delay: 250, rotation: -35, height: '125px', color: 'light' as const, offsetX: -42 },
    { delay: 350, rotation: 35, height: '125px', color: 'light' as const, offsetX: 42 },
    
    // Extra accent tulips
    { delay: 150, rotation: -42, height: '110px', color: 'red' as const, offsetX: -48 },
    { delay: 180, rotation: 42, height: '110px', color: 'red' as const, offsetX: 48 },
  ];

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-80 h-56 pointer-events-none">
      {/* Ribbon/Wrapper at the bottom */}
      <div 
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-700 ease-out ${
          showRibbon ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{ transitionDelay: '100ms' }}
      >
        <svg viewBox="0 0 120 60" className="w-32 h-16">
          {/* Ribbon wrap */}
          <ellipse cx="60" cy="25" rx="35" ry="20" fill="hsl(350, 70%, 45%)" />
          <ellipse cx="60" cy="25" rx="28" ry="15" fill="hsl(350, 75%, 55%)" />
          
          {/* Ribbon bow - left */}
          <path
            d="M25 25 Q5 10 15 30 Q25 45 35 30 Q30 25 25 25"
            fill="hsl(350, 70%, 50%)"
          />
          {/* Ribbon bow - right */}
          <path
            d="M95 25 Q115 10 105 30 Q95 45 85 30 Q90 25 95 25"
            fill="hsl(350, 70%, 50%)"
          />
          
          {/* Ribbon tails */}
          <path
            d="M40 40 Q35 55 25 55 Q30 50 28 45"
            fill="hsl(350, 65%, 45%)"
            strokeWidth="0"
          />
          <path
            d="M80 40 Q85 55 95 55 Q90 50 92 45"
            fill="hsl(350, 65%, 45%)"
            strokeWidth="0"
          />
          
          {/* Center knot */}
          <circle cx="60" cy="25" r="8" fill="hsl(350, 80%, 60%)" />
          <circle cx="60" cy="25" r="5" fill="hsl(350, 85%, 70%)" />
        </svg>
      </div>

      {/* Tulips */}
      {tulips.map((tulip, index) => (
        <Tulip key={index} {...tulip} />
      ))}

      {/* Decorative sparkles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/60 rounded-full animate-pulse"
          style={{
            left: `${30 + i * 12}%`,
            top: `${10 + (i % 3) * 15}%`,
            animationDelay: `${i * 300 + 1000}ms`,
            opacity: 0,
            animation: `fadeInUp 0.5s ease-out ${1500 + i * 200}ms forwards, pulse 2s ease-in-out ${2000 + i * 200}ms infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default TulipGarden;
