import { useState, useEffect } from 'react';
import Tulip from './Tulip';

const TulipGarden = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Plant configurations with staggered delays
  const plants = [
    { delay: 200, stemHeight: 180, offsetX: 300, flowerCount: 2, stemCurve: -15 },
    { delay: 0, stemHeight: 220, offsetX: 400, flowerCount: 3, stemCurve: 0 },
    { delay: 100, stemHeight: 200, offsetX: 500, flowerCount: 2, stemCurve: 15 },
    { delay: 150, stemHeight: 160, offsetX: 250, flowerCount: 2, stemCurve: -20 },
    { delay: 50, stemHeight: 190, offsetX: 550, flowerCount: 2, stemCurve: 25 },
  ];

  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at center, #1a1f2e 0%, #0b0d0f 100%)',
      }}
    >
      {/* SVG Canvas - positioned at bottom center */}
      <svg
        viewBox="0 0 800 600"
        className="w-full absolute bottom-0"
        style={{
          opacity: showAnimation ? 1 : 0,
          transition: 'opacity 0.5s ease-out 200ms',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {/* Define glow filters */}
        <defs>
          <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          <filter id="stemGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Tall grass at base */}
        <g style={{ animation: `grassGrowAnimation 1.2s ease-out 3000ms both` }}>
          {[...Array(30)].map((_, i) => {
            const xPos = 100 + (i * 25);
            const height = 60 + Math.random() * 40;
            const curve = -10 + Math.random() * 20;
            return (
              <path
                key={i}
                d={`M ${xPos} 300 Q ${xPos + curve} 280 ${xPos + curve * 0.5} ${300 - height}`}
                stroke="#1a4d3c"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                opacity={0.6 + Math.random() * 0.4}
                style={{
                  animation: `grassSway 3s ease-in-out ${3200 + i * 50}ms infinite`,
                  transformOrigin: `${xPos}px 300px`,
                }}
              />
            );
          })}
        </g>

        {/* Growing plants */}
        {plants.map((plant, idx) => (
          <Tulip key={idx} {...plant} />
        ))}

        {/* Fireflies - glowing particles */}
        {[...Array(18)].map((_, i) => {
          const startX = 100 + Math.random() * 600;
          const startY = 50 + Math.random() * 250;
          const driftX = -100 + Math.random() * 200;
          const driftY = -80 + Math.random() * 160;
          
          return (
            <g
              key={i}
              style={{
                animation: `fireflyFloat 8s ease-in-out ${1000 + i * 200}ms infinite`,
              }}
            >
              <circle
                cx={startX}
                cy={startY}
                r={1.5 + Math.random() * 1.5}
                fill="#ffeb3b"
                opacity="0"
                style={{
                  filter: 'drop-shadow(0 0 8px #ffeb3b)',
                  animation: `fireflyFade 8s ease-in-out ${1000 + i * 200}ms infinite`,
                  transformBox: 'fill-box',
                  transform: `translate(${driftX}px, ${driftY}px)`,
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default TulipGarden;
