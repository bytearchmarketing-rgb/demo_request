import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function FunnelFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0320] border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/Untitled 3 (1).png" alt="Byte Arch" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Intelligent Marketing Solutions for Metro Detroit
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#4169ff] hover:shadow-lg hover:shadow-[#4169ff]/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#00d9ff] hover:shadow-lg hover:shadow-[#00d9ff]/50 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff6b35] hover:shadow-lg hover:shadow-[#ff6b35]/50 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#newsletter" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Book Demo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00d9ff] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Metro Detroit, Michigan</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00d9ff] flex-shrink-0" />
                <a href="mailto:hello@bytearch.com" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  hello@bytearch.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00d9ff] flex-shrink-0" />
                <a href="tel:+1248555" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  (248) 555-0123
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
            <div>
              © {currentYear} Byte Arch Marketing. All rights reserved.
            </div>
            <div>
              Serving Metro Detroit with pride
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
