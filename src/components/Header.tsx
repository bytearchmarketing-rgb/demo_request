import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Newsletter', href: '/newsletter' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0638]/90 backdrop-blur-xl border-b-2 border-[#4169ff]/30 shadow-lg shadow-[#4169ff]/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/Untitled (1) copy copy.png" alt="Byte Arch Marketing" className="h-12 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#00d9ff] transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="/demo" className="px-8 py-3 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-[#ff6b35]/50 transition-all duration-300 hover:-translate-y-0.5">
              Book Call Demo
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-[#00d9ff] transition-colors duration-200 font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <a href="/demo" className="mt-4 px-6 py-3 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] rounded-lg text-white font-semibold w-full block text-center">
                Book Call Demo
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
