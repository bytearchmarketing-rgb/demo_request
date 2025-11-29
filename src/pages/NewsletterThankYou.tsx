import { CheckCircle, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NewsletterThankYou() {
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
              Welcome to Our Newsletter!
            </h1>

            <p className="text-xl text-gray-600 mb-12">
              Thank you for subscribing! You're now part of our community and will receive exclusive marketing insights, tips, and strategies directly to your inbox.
            </p>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 md:p-12 border-2 border-orange-100 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Weekly Insights</h3>
                  <p className="text-gray-600">
                    Get actionable marketing tips and industry trends delivered every week.
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Exclusive Content</h3>
                  <p className="text-gray-600">
                    Access to case studies, guides, and resources not available anywhere else.
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Special Offers</h3>
                  <p className="text-gray-600">
                    Be the first to know about promotions and exclusive opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-600 mb-6">
                Ready to take your marketing to the next level?
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-call"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-orange-500/30 transform hover:-translate-y-0.5 transition-all"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/ai-services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transition-all"
                >
                  Explore Our Services
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
                Questions or Feedback?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                We'd love to hear from you! Feel free to reach out anytime.
              </p>
              <div className="flex justify-center">
                <a
                  href="mailto:mfife@bytearchmarketing.com"
                  className="text-orange-400 hover:text-orange-300 font-semibold"
                >
                  mfife@bytearchmarketing.com
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
