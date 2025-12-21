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
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl shadow-2xl" style={{ transform: 'translateZ(10px)' }}>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-4 border-orange-500 rounded-full" style={{ transform: 'translateZ(20px)' }}></div>
              <div className="absolute top-1/2 left-1/2 transform translate-x-2 translate-y-2 w-6 h-2 bg-orange-500 rounded-full" style={{ transform: 'translateZ(25px) rotate(45deg)', transformOrigin: 'left center' }}></div>
              <div className="absolute top-6 left-6 w-8 h-1 bg-orange-400 rounded-full opacity-60" style={{ transform: 'translateZ(15px)' }}></div>
              <div className="absolute top-10 left-6 w-12 h-1 bg-orange-400 rounded-full opacity-40" style={{ transform: 'translateZ(12px)' }}></div>
              <div className="absolute top-14 left-6 w-10 h-1 bg-orange-400 rounded-full opacity-30" style={{ transform: 'translateZ(10px)' }}></div>
            </div>
          </div>
        );
      case 'growth':
        return (
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl shadow-2xl" style={{ transform: 'translateZ(10px)' }}>
              <svg className="absolute inset-0 w-full h-full p-6" viewBox="0 0 100 100" style={{ transform: 'translateZ(20px)' }}>
                <polyline
                  points="10,80 30,60 50,50 70,30 90,20"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="80" r="4" fill="#f97316" />
                <circle cx="30" cy="60" r="4" fill="#f97316" />
                <circle cx="50" cy="50" r="4" fill="#f97316" />
                <circle cx="70" cy="30" r="4" fill="#f97316" />
                <circle cx="90" cy="20" r="5" fill="#f97316" />
                <polyline
                  points="90,20 90,35 75,35"
                  fill="#f97316"
                  opacity="0.3"
                />
              </svg>
              <div className="absolute bottom-4 left-4 right-4 h-1 bg-orange-300 rounded-full opacity-50" style={{ transform: 'translateZ(5px)' }}></div>
            </div>
          </div>
        );
      case 'location':
        return (
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl shadow-2xl" style={{ transform: 'translateZ(10px)' }}>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative" style={{ transform: 'translateZ(30px)' }}>
                  <div className="w-12 h-16 bg-orange-500 rounded-t-full rounded-b-lg relative">
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-500 rotate-45"></div>
                </div>
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-20 border-2 border-orange-400 rounded-full opacity-40" style={{ transform: 'translateZ(5px)' }}></div>
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 border-2 border-orange-300 rounded-full opacity-20" style={{ transform: 'translateZ(2px)' }}></div>
              </div>
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
