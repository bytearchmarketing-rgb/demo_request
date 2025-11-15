import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FunnelHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-[#0f0638]/95 backdrop-blur-xl border-b border-white/10 shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2">
            <img src="/Untitled 3 (1).png" alt="Byte Arch" className="h-12 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-[#00d9ff] transition-colors font-medium text-sm">
              Home
            </a>
            <a href="#newsletter" className="text-white hover:text-[#00d9ff] transition-colors font-medium text-sm">
              Newsletter
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-[#00d9ff] text-sm font-semibold">
              <Phone className="w-4 h-4" />
              <span>Serving Metro Detroit</span>
            </div>
            <button className="px-6 py-2.5 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-[#ff6b35]/50 transition-all duration-300 hover:-translate-y-0.5 text-sm">
              Book Call Demo
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10 bg-[#0f0638]/95 backdrop-blur-xl">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-white hover:text-[#00d9ff] transition-colors font-medium py-2">
                Home
              </a>
              <a href="#newsletter" className="text-white hover:text-[#00d9ff] transition-colors font-medium py-2">
                Newsletter
              </a>
              <button className="mt-4 px-6 py-3 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] rounded-lg text-white font-semibold w-full">
                Book Call Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
