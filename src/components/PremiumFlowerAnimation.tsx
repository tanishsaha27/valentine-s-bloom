import { useState, useEffect } from 'react';

const PremiumFlowerAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Enable animations by removing the container class
    document.body.classList.remove('container');
  }, []);

  return (
    <div 
      className="fixed inset-0 overflow-hidden flex items-center justify-center"
      style={{
        background: 'radial-gradient(ellipse at center, #1a1f2e 0%, #0b0d0f 100%)',
      }}
    >
      {/* Night background */}
      <div className="night absolute inset-0" />
      
      {/* Main flowers container - centered */}
      <div className="flowers relative z-10">
        {/* Flower 1 */}
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1" />
            <div className="flower__leaf flower__leaf--2" />
            <div className="flower__leaf flower__leaf--3" />
            <div className="flower__leaf flower__leaf--4" />
            <div className="flower__white-circle" />
            
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={`light-${i}`} className={`flower__light flower__light--${i}`} />
            ))}
          </div>
          
          <div className="flower__line">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={`leaf-${i}`} className={`flower__line__leaf flower__line__leaf--${i}`} />
            ))}
          </div>
        </div>

        {/* Flower 2 */}
        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1" />
            <div className="flower__leaf flower__leaf--2" />
            <div className="flower__leaf flower__leaf--3" />
            <div className="flower__leaf flower__leaf--4" />
            <div className="flower__white-circle" />
            
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={`light-2-${i}`} className={`flower__light flower__light--${i}`} />
            ))}
          </div>
          
          <div className="flower__line">
            {[1, 2, 3, 4].map((i) => (
              <div key={`leaf-2-${i}`} className={`flower__line__leaf flower__line__leaf--${i}`} />
            ))}
          </div>
        </div>

        {/* Flower 3 */}
        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1" />
            <div className="flower__leaf flower__leaf--2" />
            <div className="flower__leaf flower__leaf--3" />
            <div className="flower__leaf flower__leaf--4" />
            <div className="flower__white-circle" />
            
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={`light-3-${i}`} className={`flower__light flower__light--${i}`} />
            ))}
          </div>
          
          <div className="flower__line">
            {[1, 2, 3, 4].map((i) => (
              <div key={`leaf-3-${i}`} className={`flower__line__leaf flower__line__leaf--${i}`} />
            ))}
          </div>
        </div>

        {/* Growing long grass */}
        <div className="grow-ans" style={{ '--d': '1.2s' } as any}>
          <div className="flower__g-long">
            <div className="flower__g-long__top" />
            <div className="flower__g-long__bottom" />
          </div>
        </div>

        {/* Grass groups */}
        {[1, 2].map((i) => (
          <div key={`grass-${i}`} className="growing-grass">
            <div className={`flower__grass flower__grass--${i}`}>
              <div className="flower__grass--top" />
              <div className="flower__grass--bottom" />
              {[1, 2, 3, 4, 5, 6, 7, 8].map((j) => (
                <div key={`grassleaf-${i}-${j}`} className={`flower__grass__leaf flower__grass__leaf--${j}`} />
              ))}
              <div className="flower__grass__overlay" />
            </div>
          </div>
        ))}

        {/* Right growing flowers */}
        <div className="grow-ans" style={{ '--d': '2.4s' } as any}>
          <div className="flower__g-right flower__g-right--1">
            <div className="leaf" />
          </div>
        </div>

        <div className="grow-ans" style={{ '--d': '2.8s' } as any}>
          <div className="flower__g-right flower__g-right--2">
            <div className="leaf" />
          </div>
        </div>

        {/* Front flowers */}
        <div className="grow-ans" style={{ '--d': '2.8s' } as any}>
          <div className="flower__g-front">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={`front-leaf-wrapper-${i}`} className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${i}`}>
                <div className="flower__g-front__leaf" />
              </div>
            ))}
            <div className="flower__g-front__line" />
          </div>
        </div>

        {/* Front right flowers */}
        <div className="grow-ans" style={{ '--d': '3.2s' } as any}>
          <div className="flower__g-fr">
            <div className="leaf" />
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={`fr-leaf-${i}`} className={`flower__g-fr__leaf flower__g-fr__leaf--${i}`} />
            ))}
          </div>
        </div>

        {/* Long growing leaves - 8 groups */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((groupIdx) => (
          <div key={`long-g-${groupIdx}`} className={`long-g long-g--${groupIdx}`}>
            {[0, 1, 2, 3].map((leafIdx) => {
              const delays = [
                ['3s', '2.2s', '3.4s', '3.6s'],
                ['3.6s', '3.8s', '4s', '4.2s'],
                ['4s', '4.2s', '4.4s', '4.6s'],
                ['4s', '4.2s', '3s', '3.6s'],
                ['4s', '4.2s', '3s', '3.6s'],
                ['4s', '4.2s', '3s', '3.6s'],
                ['4.2s', '4.4s', '4.6s', '4.8s'],
                ['3s', '3.2s', '3.5s', '3.6s'],
              ];
              
              return (
                <div key={`long-leaf-${leafIdx}`} className="grow-ans" style={{ '--d': delays[groupIdx][leafIdx] } as any}>
                  <div className={`leaf leaf--${leafIdx}`} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumFlowerAnimation;
