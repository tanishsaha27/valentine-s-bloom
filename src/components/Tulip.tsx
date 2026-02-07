import { useEffect, useState } from 'react';

interface TulipProps {
  delay: number;
  rotation: number;
  height: string;
  color: 'pink' | 'red' | 'light';
  offsetX: number;
}

const Tulip = ({ delay, rotation, height, color, offsetX }: TulipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const petalColors = {
    pink: 'fill-[hsl(340,80%,65%)]',
    red: 'fill-[hsl(350,85%,55%)]',
    light: 'fill-[hsl(350,70%,75%)]',
  };

  const petalHighlight = {
    pink: 'fill-[hsl(340,85%,75%)]',
    red: 'fill-[hsl(350,90%,65%)]',
    light: 'fill-[hsl(350,75%,85%)]',
  };

  return (
    <div
      className={`absolute bottom-0 origin-bottom transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        height,
        left: '50%',
        transform: `translateX(calc(-50% + ${offsetX}px)) rotate(${isVisible ? rotation : 0}deg)`,
        transformOrigin: 'bottom center',
        transition: `opacity 0.5s ease-out ${delay}ms, transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
      }}
    >
      <svg
        viewBox="0 0 40 120"
        className="w-full h-full"
        style={{
          transform: `scaleY(${isVisible ? 1 : 0})`,
          transformOrigin: 'bottom',
          transition: `transform 1s ease-out ${delay}ms`,
        }}
      >
        {/* Stem */}
        <path
          d="M20 120 Q20 80 20 45"
          stroke="hsl(120, 45%, 32%)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Leaves */}
        <path
          d="M20 90 Q35 80 30 65 Q25 75 20 85"
          fill="hsl(120, 50%, 28%)"
        />
        <path
          d="M20 75 Q5 65 10 50 Q15 60 20 70"
          fill="hsl(120, 50%, 28%)"
        />
        
        {/* Tulip petals - back layer */}
        <ellipse
          cx="20"
          cy="32"
          rx="10"
          ry="22"
          className={petalColors[color]}
        />
        
        {/* Side petals */}
        <ellipse
          cx="10"
          cy="36"
          rx="8"
          ry="18"
          className={petalColors[color]}
          transform="rotate(-12, 10, 36)"
        />
        <ellipse
          cx="30"
          cy="36"
          rx="8"
          ry="18"
          className={petalColors[color]}
          transform="rotate(12, 30, 36)"
        />
        
        {/* Front petal */}
        <ellipse
          cx="20"
          cy="35"
          rx="7"
          ry="16"
          className={petalHighlight[color]}
        />
        
        {/* Inner glow */}
        <ellipse
          cx="20"
          cy="38"
          rx="4"
          ry="8"
          fill="hsl(50, 80%, 70%)"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default Tulip;
