import { CheckCircle, ArrowRight, Mail, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Thank You!
            </h1>

            <p className="text-xl text-gray-600 mb-12">
              We've received your request and we're excited to connect with you.
              You'll hear from us within 24 hours to confirm the details.
            </p>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 md:p-12 border-2 border-orange-100 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">1. Check Your Email</h3>
                  <p className="text-gray-600">
                    You'll receive a confirmation email with all the details within a few minutes.
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">2. We'll Confirm</h3>
                  <p className="text-gray-600">
                    Our team will reach out within 24 hours to confirm your appointment time.
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">3. Strategy Session</h3>
                  <p className="text-gray-600">
                    We'll discuss how to grow your business with AI-powered marketing automation.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-600 mb-6">
                While you wait, explore more about what we can do for your business:
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/ai-services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-orange-500/30 transform hover:-translate-y-0.5 transition-all"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/newsletter"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Subscribe to Newsletter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Have Questions?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Feel free to reach out to us directly if you need immediate assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:contact@bytearchmarketing.com"
                  className="text-orange-400 hover:text-orange-300 font-semibold"
                >
                  contact@bytearchmarketing.com
                </a>
                <span className="hidden sm:inline text-gray-500">|</span>
                <a
                  href="tel:+15551234567"
                  className="text-orange-400 hover:text-orange-300 font-semibold"
                >
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
