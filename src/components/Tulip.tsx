import { useEffect, useState } from 'react';

interface TulipProps {
  delay: number;
  left: string;
  height: string;
  color: 'pink' | 'red' | 'light';
}

const Tulip = ({ delay, left, height, color }: TulipProps) => {
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

  return (
    <div
      className={`absolute bottom-0 origin-bottom transition-all duration-1000 ${
        isVisible ? 'animate-bloom' : 'opacity-0 scale-y-0'
      }`}
      style={{ left, height }}
    >
      <svg
        viewBox="0 0 40 120"
        className={`w-full h-full ${isVisible ? 'animate-sway' : ''}`}
        style={{ animationDelay: `${delay + 1000}ms` }}
      >
        {/* Stem */}
        <path
          d="M20 120 L20 45"
          stroke="hsl(120, 40%, 35%)"
          strokeWidth="3"
          fill="none"
        />
        
        {/* Leaves */}
        <ellipse
          cx="28"
          cy="85"
          rx="12"
          ry="6"
          fill="hsl(120, 45%, 30%)"
          transform="rotate(-30, 28, 85)"
        />
        <ellipse
          cx="12"
          cy="70"
          rx="10"
          ry="5"
          fill="hsl(120, 45%, 30%)"
          transform="rotate(30, 12, 70)"
        />
        
        {/* Tulip petals */}
        <ellipse
          cx="20"
          cy="35"
          rx="8"
          ry="18"
          className={petalColors[color]}
        />
        <ellipse
          cx="12"
          cy="38"
          rx="7"
          ry="16"
          className={petalColors[color]}
          transform="rotate(-15, 12, 38)"
        />
        <ellipse
          cx="28"
          cy="38"
          rx="7"
          ry="16"
          className={petalColors[color]}
          transform="rotate(15, 28, 38)"
        />
        <ellipse
          cx="20"
          cy="32"
          rx="6"
          ry="14"
          fill="hsl(350, 90%, 75%)"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default Tulip;
