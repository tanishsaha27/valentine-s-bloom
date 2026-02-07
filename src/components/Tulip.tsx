import { useEffect, useState, useRef } from 'react';

interface GrowingFlowerProps {
  delay: number;
  stemHeight: number;
  offsetX: number;
  flowerCount: number;
  stemCurve: number;
}

const GrowingFlower = ({ delay, stemHeight, offsetX, flowerCount, stemCurve }: GrowingFlowerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // We only need one flower head for the 'Tulip' look in the video
  const flowerHeadY = 300 - stemHeight;

  return (
    <g
      opacity={isVisible ? 1 : 0}
      style={{
        transition: `opacity 0.3s ease-out ${delay}ms`,
        animation: `plantSway 4s ease-in-out ${delay + 2000}ms infinite`,
        transformOrigin: `${offsetX}px 300px`,
      }}
    >
      {/* 1. The Stem: Animated using CSS Keyframes for growth */}
      <path
        d={`M ${offsetX} 300 Q ${offsetX + stemCurve} 250 ${offsetX} ${flowerHeadY}`}
        stroke="#45cba4"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        style={{
          strokeDasharray: 400,
          strokeDashoffset: isVisible ? 0 : 400,
          transition: `stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
          filter: 'drop-shadow(0 0 8px rgba(69, 203, 164, 0.5))',
        }}
      />

      {/* 2. Leaves: Popping in at specific points on the stem */}
      <g style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0)',
        transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 800}ms`,
        transformOrigin: `${offsetX}px 260px`
      }}>
        <path d={`M ${offsetX} 260 Q ${offsetX - 20} 250 ${offsetX - 30} 230`} stroke="#45cba4" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d={`M ${offsetX} 275 Q ${offsetX + 20} 265 ${offsetX + 30} 245`} stroke="#45cba4" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>

      {/* 3. THE FLOWER HEAD: This is where the magic happens */}
      <g transform={`translate(${offsetX}, ${flowerHeadY})`}>
        {[0, 72, 144, 216, 288].map((angle, idx) => (
          <path
            key={idx}
            /* A proper teardrop petal path instead of an ellipse */
            d="M0,0 C-10,-10 -15,-25 0,-35 C15,-25 10,-10 0,0"
            fill="#fff"
            style={{
              filter: 'drop-shadow(0 0 5px white)',
              transformOrigin: 'bottom center',
              transform: isVisible ? `rotate(${angle}deg) scale(1)` : `rotate(${angle}deg) scale(0)`,
              transition: `transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay + 1500 + (idx * 100)}ms`,
            }}
          />
        ))}

        {/* The Glowing Center */}
        <circle
          cx="0"
          cy="0"
          r={isVisible ? 6 : 0}
          fill="#ffeb3b"
          style={{
            filter: 'drop-shadow(0 0 10px #ffeb3b)',
            transition: `r 0.5s ease-out ${delay + 2200}ms`,
          }}
        />
      </g>
    </g>
  );
};

export default GrowingFlower;