import { useEffect, useRef } from 'react';

interface Animated3DIconProps {
  type: 'search' | 'growth' | 'location';
  delay?: number;
}

export default function Animated3DIcon({ type, delay = 0 }: Animated3DIconProps) {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const icon = iconRef.current;
    if (!icon) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = icon.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (y / rect.height) * -20;
      const rotateY = (x / rect.width) * 20;

      icon.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    };

    const handleMouseLeave = () => {
      icon.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    };

    icon.addEventListener('mousemove', handleMouseMove);
    icon.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      icon.removeEventListener('mousemove', handleMouseMove);
      icon.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const renderIcon = () => {
    switch (type) {
      case 'search':
        return (
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl shadow-2xl overflow-hidden" style={{ transform: 'translateZ(10px)' }}>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-16 bg-gradient-to-br from-orange-200 to-orange-100 rounded-lg shadow-lg" style={{ transform: 'translateZ(15px)' }}>
                <div className="absolute top-2 left-2 right-2 space-y-1.5">
                  <div className="w-full h-1 bg-orange-400 rounded-full opacity-50"></div>
                  <div className="w-4/5 h-1 bg-orange-400 rounded-full opacity-40"></div>
                  <div className="w-3/4 h-1 bg-orange-400 rounded-full opacity-30"></div>
                </div>
              </div>
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2 w-10 h-10 bg-orange-500 rounded-full shadow-lg flex items-center justify-center" style={{ transform: 'translateZ(25px)' }}>
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M12 8v8M8 12h8" />
                </svg>
                <div className="absolute inset-0 border-3 border-orange-600 rounded-full animate-pulse opacity-50"></div>
              </div>
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2 w-14 h-14 border-2 border-orange-400 rounded-full opacity-30" style={{ transform: 'translateZ(20px)' }}></div>
            </div>
          </div>
        );
      case 'growth':
        return (
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl shadow-2xl overflow-hidden" style={{ transform: 'translateZ(10px)' }}>
              <div className="absolute bottom-4 left-4 right-4 h-12 flex items-end justify-between gap-1" style={{ transform: 'translateZ(15px)' }}>
                <div className="w-2 h-3 bg-orange-300 rounded-t-sm opacity-60"></div>
                <div className="w-2 h-5 bg-orange-300 rounded-t-sm opacity-60"></div>
                <div className="w-2 h-4 bg-orange-300 rounded-t-sm opacity-60"></div>
                <div className="w-2 h-7 bg-orange-300 rounded-t-sm opacity-60"></div>
              </div>
              <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 100 100" style={{ transform: 'translateZ(20px)' }}>
                <defs>
                  <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path
                  d="M 15 75 L 35 55 L 50 60 L 70 35 L 85 25"
                  fill="none"
                  stroke="url(#arrowGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polygon
                  points="85,25 78,22 80,30"
                  fill="#f97316"
                />
                <circle cx="85" cy="25" r="3" fill="#f97316" className="animate-pulse" />
              </svg>
              <div className="absolute top-3 right-3 w-8 h-8 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center" style={{ transform: 'translateZ(30px)' }}>
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        );
      case 'location':
        return (
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl shadow-2xl overflow-hidden" style={{ transform: 'translateZ(10px)' }}>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translateZ(25px)' }}>
                <div className="relative w-14 h-16 bg-gradient-to-b from-orange-500 to-orange-600 rounded-t-full shadow-xl">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-600 rotate-45" style={{ borderRadius: '0 0 2px 0' }}></div>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-3 h-3">
                  <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute inset-0 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-20 border-2 border-orange-400 rounded-full opacity-30" style={{ transform: 'translateZ(8px)' }}></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-32 border-2 border-orange-300 rounded-full opacity-20" style={{ transform: 'translateZ(5px)' }}></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-40 border border-orange-200 rounded-full opacity-10" style={{ transform: 'translateZ(2px)' }}></div>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      ref={iconRef}
      className="w-24 h-24 mx-auto mb-4 transition-all duration-300 ease-out cursor-pointer"
      style={{
        transformStyle: 'preserve-3d',
        animation: `float ${3 + delay}s ease-in-out infinite`,
        animationDelay: `${delay * 0.2}s`,
      }}
    >
      {renderIcon()}
    </div>
  );
}
