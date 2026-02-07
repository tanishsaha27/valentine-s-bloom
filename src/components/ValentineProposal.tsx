import { useState, useRef, useEffect } from 'react';
import PremiumFlowerAnimation from './PremiumFlowerAnimation';
import { Heart } from 'lucide-react';
import { supabase } from '../lib/supabase';

const ValentineProposal = () => {
  const [stage, setStage] = useState<'proposal' | 'accepted'>('proposal');
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showContent, setShowContent] = useState(false);
  const [response, setResponse] = useState('');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (stage !== 'accepted') return;
    const trimmed = response.trim();
    if (!trimmed) {
      setSaveStatus('idle');
      return;
    }

    setSaveStatus('saving');
    const timer = setTimeout(async () => {
      const { error } = await supabase
        .from('valentine_responses')
        .insert({ response: trimmed });

      setSaveStatus(error ? 'error' : 'saved');
    }, 800);

    return () => clearTimeout(timer);
  }, [response, stage]);

  const moveNoButton = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const maxX = container.width - 150;
    const maxY = container.height - 100;
    
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    
    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setStage('accepted');
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen dotted-bg relative overflow-hidden flex flex-col items-center justify-start pt-16"
    >
      {/* Main Content - Heading at Top */}
      <div className={`z-10 text-center px-4 transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'} absolute top-12`}>
        {stage === 'proposal' ? (
          <div className="animate-fade-in-up">
            {/* Header */}
            <div className="mb-4">
              <h1 className="text-4xl md:text-6xl font-bold text-romantic" style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '2px', lineHeight: '1.2', fontWeight: 700 }}>
                Will You Be My Valentine?
              </h1>
            </div>
          </div>
        ) : null}
      </div>

      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              width: `${20 + (i % 3) * 10}px`,
              height: `${20 + (i % 3) * 10}px`,
            }}
          />
        ))}
      </div>

      {/* Tulip Garden */}
      <PremiumFlowerAnimation />

      {/* Main Content - Buttons */}
      <div className={`z-10 text-center px-4 transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'} ${stage === 'accepted' ? 'absolute inset-0 overflow-y-auto' : 'absolute bottom-1/4'}`}>
        {stage === 'proposal' ? (
          <div className="animate-fade-in-up">
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative">
              <button
                onClick={handleYesClick}
                className="btn-yes animate-pulse-glow"
              >
                Yes! 💖
              </button>
              
              <button
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                className="btn-no"
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                  transition: 'transform 0.2s ease-out',
                }}
              >
                No 😢
              </button>
            </div>
            </div>
          
        ) : (
          <div className="animate-fade-in-up max-w-2xl mx-auto pt-40 pb-20">
            {/* Dancing Guy GIF */}
            <div className="mb-8">
              <img
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDd2bWJnOWR4Y3F4OGR2YmxhMnBxMzVxdHB2cnZtNWNxZWNobnNlNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYt5jPR6QX5pnqM/giphy.gif"
                alt="Dancing celebration"
                className="w-64 h-64 mx-auto rounded-2xl object-cover shadow-2xl"
                style={{ boxShadow: '0 0 40px hsl(350, 80%, 60%, 0.5)' }}
              />
            </div>

            {/* Success Header */}
            <h1 className="text-4xl md:text-5xl font-bold text-romantic mb-4 animate-heartbeat">
              Yaaay! 🎉💕
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              We will celebrate our Valentines on <span className="text-romantic">19th</span>! 💝
            </h2>

            {/* Question */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
              <p className="text-xl md:text-2xl text-foreground mb-6">
                How do you want to celebrate our anniversary? 💭
              </p>
              
              <textarea
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Write your ideas here... 💕"
                className="romantic-textarea min-h-32 resize-none text-lg"
                rows={4}
              />

              {saveStatus !== 'idle' && (
                <p className="mt-3 text-sm text-muted-foreground">
                  {saveStatus === 'saving' && 'Saving your response...'}
                  {saveStatus === 'saved' && 'Saved to your Supabase database.'}
                  {saveStatus === 'error' && 'Could not save. Check Supabase settings.'}
                </p>
              )}
              
              {response && (
                <div className="mt-6 animate-fade-in-up">
                  <p className="text-muted-foreground text-lg">
                    Can't wait to celebrate with you! 💖
                  </p>
                </div>
              )}
            </div>

            {/* More floating hearts */}
            <div className="mt-8 flex justify-center gap-4">
              {['💕', '💖', '💝', '💗', '💓'].map((heart, i) => (
                <span
                  key={i}
                  className="text-3xl animate-float"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  {heart}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValentineProposal;
