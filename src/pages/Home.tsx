import { useState } from 'react';
import { ArrowRight, TrendingUp, Search, Target, CheckCircle, Star, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookCallModal from '../components/BookCallModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToBooking = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section id="book-call" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden relative">
        <div className="absolute top-20 right-10 animate-float opacity-20 pointer-events-none hidden lg:block">
          <Star className="w-32 h-32 text-orange-400" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float-delayed opacity-20 pointer-events-none hidden lg:block">
          <TrendingUp className="w-40 h-40 text-orange-400" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-float-slow opacity-10 pointer-events-none hidden lg:block">
          <Target className="w-24 h-24 text-orange-400" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              <Search className="w-4 h-4" />
              Our #1 Service for Detroit Businesses
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-delay-1">
              Top 5 Google Rankings
              <span className="block text-orange-600 mt-2">in 90 Days or Your Money Back</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed animate-fade-in-delay-2">
              Stop losing customers to competitors who rank higher.
            </p>

            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
              Our proven SEO system gets Detroit businesses to the top of Google search results. If we don't get you on the 1st page of Google for your target keywords within 90 days, you get a full refund. Guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-3">
              <button
                onClick={scrollToBooking}
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-orange-500/40 transform hover:scale-110 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 font-semibold text-lg rounded-lg hover:border-orange-500 hover:text-orange-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                See How It Works
              </button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-600 animate-fade-in-delay-3">
              <div className="flex items-center gap-2 hover:text-orange-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>90 Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2 hover:text-orange-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No Long Term Contracts</span>
              </div>
              <div className="flex items-center gap-2 hover:text-orange-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Detroit Based Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-bounce-in-delay-1">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300 animate-float">
                <Search className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Keyword Domination</h3>
              <p className="text-gray-600">
                We identify and target the exact keywords your customers are searching for, then optimize your site to rank at the top.
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-bounce-in-delay-2">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300 animate-float-delayed">
                <TrendingUp className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Traffic Growth</h3>
              <p className="text-gray-600">
                Watch your website traffic surge as you climb the rankings. More visibility means more customers and more revenue.
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-bounce-in-delay-3">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300 animate-float-slow">
                <Target className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Focus</h3>
              <p className="text-gray-600">
                Specialized strategies for Detroit area businesses to dominate local search results and attract nearby customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 animate-bounce-in">
              <Shield className="w-10 h-10 animate-float" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our 90 Day Money Back Guarantee
            </h2>
            <p className="text-xl text-orange-50 mb-6 leading-relaxed">
              We're so confident in our SEO system that we offer this guarantee: If we don't get your business on the 1st page of Google for your target keywords within 90 days, you get every penny back. No questions asked.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-white font-semibold text-lg">
                That's how sure we are that our proven system works. You have nothing to lose and everything to gain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work With You
            </h2>
            <p className="text-xl text-gray-600">
              Our process is designed to deliver results without disrupting your business
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Consultation
                  </h3>
                  <p className="text-gray-600">
                    We assess your current systems, identify gaps, and create a tailored solution plan.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Implementation
                  </h3>
                  <p className="text-gray-600">
                    Our team handles all the technical work, keeping you informed every step of the way.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Optimization
                  </h3>
                  <p className="text-gray-600">
                    We monitor, refine, and improve your systems for maximum performance and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={scrollToBooking}
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-orange-500/40 transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
            >
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Ready to Dominate Your Market?
            </h2>
            <p className="text-xl mb-8 text-orange-50 animate-fade-in-delay-1">
              Book your free SEO audit today and discover exactly what it will take to get your business to the top of Google
            </p>
            <button
              onClick={scrollToBooking}
              className="px-10 py-4 bg-white text-orange-600 font-bold text-lg rounded-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 inline-flex items-center gap-2 animate-fade-in-delay-2"
            >
              Book a Call
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="mt-6 text-orange-100 text-sm animate-fade-in-delay-3">
              No obligation • 30 minute call • Custom ranking roadmap • 90 day guarantee
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
