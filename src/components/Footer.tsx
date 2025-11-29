import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src="/logo.png" alt="Byte Arch Marketing" className="h-16 w-auto" />
            </div>
            <p className="text-gray-400 max-w-md mb-4">
              You focus on what you do best. We handle the rest. Together we'll build something extraordinary.
            </p>
            <p className="text-gray-400 text-sm">
              Serving Detroit and beyond
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ai-services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Detroit, MI</li>
              <li>
                <a href="mailto:mfife@bytearchmarketing.com" className="hover:text-orange-500 transition-colors">
                  mfife@bytearchmarketing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Byte Arch Marketing. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy-policy" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
