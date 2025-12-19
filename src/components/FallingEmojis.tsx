import React, { useEffect, useState } from 'react';

interface Emoji {
  id: number;
  emoji: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

const emojis = ['💰', '🚀', '✈️', '💻', '⚡', '🌍', '🎯', '💡', '📈', '🌟', '🏆', '💎'];

export function FallingEmojis() {
  const [fallingEmojis, setFallingEmojis] = useState<Emoji[]>([]);

  useEffect(() => {
    const createEmoji = (): Emoji => ({
      id: Date.now() + Math.random(),
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      duration: 10 + Math.random() * 6, // 10-16 segundos (mais lento e fluido)
      delay: Math.random() * 3,
      size: 18 + Math.random() * 12, // 18-30px (tamanhos variados)
    });

    // Criar emojis iniciais
    const initialEmojis = Array.from({ length: 6 }, createEmoji);
    setFallingEmojis(initialEmojis);

    // Adicionar novos emojis periodicamente de forma mais suave
    const interval = setInterval(() => {
      setFallingEmojis((prev) => {
        // Manter quantidade controlada para performance
        if (prev.length < 10) {
          return [...prev, createEmoji()];
        }
        // Remover emojis muito antigos
        return prev.slice(1).concat(createEmoji());
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-0">
        {fallingEmojis.map((emoji) => (
          <div
            key={emoji.id}
            className="emoji-fall"
            style={{
              left: `${emoji.left}%`,
              fontSize: `${emoji.size}px`,
              animationDuration: `${emoji.duration}s`,
              animationDelay: `${emoji.delay}s`,
            }}
          >
            {emoji.emoji}
          </div>
        ))}
      </div>
      <style>{`
        .emoji-fall {
          position: absolute;
          top: -50px;
          opacity: 0;
          will-change: transform, opacity;
          animation: emojiFall linear infinite, emojiFade ease-in-out infinite;
          filter: drop-shadow(0 0 6px rgba(147, 51, 234, 0.25));
        }
        
        @keyframes emojiFall {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.8);
          }
          50% {
            transform: translateY(50vh) rotate(180deg) scale(1);
          }
          100% {
            transform: translateY(calc(100vh + 50px)) rotate(360deg) scale(0.8);
          }
        }
        
        @keyframes emojiFade {
          0% {
            opacity: 0;
          }
          5% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.7;
          }
          95% {
            opacity: 0.5;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

