import React, { useEffect, useState } from 'react';

const ConfettiPiece: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div className="absolute w-2 h-4" style={style}></div>
);

const Confetti: React.FC = () => {
  const [pieces, setPieces] = useState<React.CSSProperties[]>([]);
  const colors = ['#FF6B2E', '#9055FF', '#FF8A65', '#A066D3', '#F4511E'];

  useEffect(() => {
    const newPieces = Array.from({ length: 100 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${-20 + Math.random() * -80}px`,
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      transform: `rotate(${Math.random() * 360}deg)`,
      animation: `fall ${2 + Math.random() * 3}s linear ${Math.random() * 2}s forwards`,
      opacity: 0,
    }));
    setPieces(newPieces);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(${Math.random() * 360}deg);
            opacity: 1;
          }
        }
      `}</style>
      <div className="absolute inset-0 z-50 overflow-hidden pointer-events-none">
        {pieces.map((style, index) => (
          <ConfettiPiece key={index} style={style} />
        ))}
      </div>
    </>
  );
};

export default Confetti;
