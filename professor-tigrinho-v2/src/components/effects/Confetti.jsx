/**
 * 🎉 CONFETTI COMPONENT
 * Efeito de confete para vitórias
 */

import { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from '@hooks/useWindowSize';
import { useAnimations } from '@hooks/useAnimations';

export const Confetti = ({ trigger, duration = 3000 }) => {
  const [isActive, setIsActive] = useState(false);
  const { width, height } = useWindowSize();
  const { confettiConfig, effectsEnabled } = useAnimations();
  
  useEffect(() => {
    if (trigger && effectsEnabled) {
      setIsActive(true);
      
      const timer = setTimeout(() => {
        setIsActive(false);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [trigger, duration, effectsEnabled]);
  
  if (!isActive || !effectsEnabled) return null;
  
  return (
    <ReactConfetti
      width={width}
      height={height}
      {...confettiConfig}
    />
  );
};

// Componente simplificado sem dependência externa
export const SimpleConfetti = ({ active }) => {
  const { effectsEnabled } = useAnimations();
  
  if (!active || !effectsEnabled) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {Array.from({ length: 100 }, (_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 animate-confetti-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-10px',
            backgroundColor: ['#8b5cf6', '#ec4899', '#fbbf24', '#10b981', '#3b82f6'][
              Math.floor(Math.random() * 5)
            ],
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;

