import { useState, useEffect } from 'react';
import { Calendar, Phone } from 'lucide-react';

interface StickyHeaderProps {
  onBookCall: () => void;
}

export default function StickyHeader({ onBookCall }: StickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/bytearchmarketing/demo-meeting', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg animate-slide-in-right">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="ByteArch Marketing"
            className="h-10 w-auto"
          />
          <span className="font-bold text-gray-900 hidden sm:block">ByteArch Marketing</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+13135550123"
            className="hidden md:flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-semibold">(313) 555-0123</span>
          </a>

          <button
            onClick={handleCalendlyClick}
            className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Book a Call</span>
            <span className="sm:hidden">Book Call</span>
          </button>
        </div>
      </div>
    </div>
  );
}
