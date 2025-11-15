import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0320] border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/Untitled 3.png" alt="Byte Arch" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Intelligent Marketing Solutions for Metro Detroit Businesses
            </p>
            <p className="text-[#00d9ff] font-semibold text-sm">
              You focus on running your business.<br />
              We handle marketing.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Marketing Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Automated Scheduling
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  AI Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#00d9ff] flex-shrink-0 mt-0.5" />
                <span>Metro Detroit, Michigan</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#00d9ff] flex-shrink-0" />
                <a href="mailto:hello@bytearch.com" className="hover:text-[#00d9ff] transition-colors">
                  hello@bytearch.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#00d9ff] flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-[#00d9ff] transition-colors">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © {currentYear} Byte Arch Marketing. All rights reserved.
            </div>

            <div className="flex gap-6">
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
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff6b35] hover:shadow-lg hover:shadow-[#ff6b35]/50 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
