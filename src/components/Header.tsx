import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Byte Arch Marketing" className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/ai-services"
              className={`font-medium transition-colors ${
                isActive('/ai-services') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              AI Services
            </Link>
            <Link
              to="/newsletter"
              className={`font-medium transition-colors ${
                isActive('/newsletter') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Newsletter
            </Link>
            <a
              href="#book-call"
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-200"
            >
              Book a Call
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block font-medium ${
                isActive('/') ? 'text-orange-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/ai-services"
              onClick={() => setIsMenuOpen(false)}
              className={`block font-medium ${
                isActive('/ai-services') ? 'text-orange-600' : 'text-gray-700'
              }`}
            >
              AI Services
            </Link>
            <Link
              to="/newsletter"
              onClick={() => setIsMenuOpen(false)}
              className={`block font-medium ${
                isActive('/newsletter') ? 'text-orange-600' : 'text-gray-700'
              }`}
            >
              Newsletter
            </Link>
            <a
              href="#book-call"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg text-center"
            >
              Book a Call
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
