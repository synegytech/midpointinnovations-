import { useEffect, useState } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center gap-8">
      {/* Logo with glow pulse */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse" />
        <img
          src="/logo.png"
          className="w-24 h-24 object-contain relative z-10"
          alt="Midpoint Innovations Loading"
          width={96}
          height={96}
        />
      </div>

      {/* Progress bar */}
      <div className="w-48 h-1 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-150 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Orbiting dots */}
      <div className="absolute w-40 h-40">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/60"
            style={{
              animation: `orbit 1.8s linear infinite`,
              animationDelay: `${i * 0.6}s`,
              top: '50%',
              left: '50%',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(60px) rotate(0deg) scale(0.6); opacity: 0.3; }
          50% { transform: rotate(180deg) translateX(60px) rotate(-180deg) scale(1); opacity: 1; }
          100% { transform: rotate(360deg) translateX(60px) rotate(-360deg) scale(0.6); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
