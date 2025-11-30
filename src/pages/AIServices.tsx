import { useState } from 'react';
import { Bot, Zap, Clock, TrendingUp, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookCallModal from '../components/BookCallModal';

export default function AIServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden relative">
        <div className="absolute top-20 right-10 animate-float opacity-20 pointer-events-none hidden lg:block">
          <Bot className="w-32 h-32 text-blue-400" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float-delayed opacity-20 pointer-events-none hidden lg:block">
          <Zap className="w-40 h-40 text-blue-400" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-float-slow opacity-10 pointer-events-none hidden lg:block">
          <Star className="w-24 h-24 text-blue-400" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              <Bot className="w-4 h-4" />
              AI Powered Solutions
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-delay-1">
              Marketing Automation & AI Chatbots
              <span className="block text-blue-600 mt-2">That Work While You Sleep</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
              Stop losing leads to slow response times and manual processes. Our AI powered systems capture, nurture, and convert leads 24/7, giving your business the competitive edge.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-blue-600/40 transform hover:scale-110 transition-all duration-300 inline-flex items-center gap-2 animate-fade-in-delay-3"
            >
              Book a Call
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 mb-16 hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-in-left">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 hover:bg-blue-200 transition-colors duration-300">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Marketing Automation
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Automate your entire marketing funnel from lead capture to conversion. Our intelligent systems work around the clock to grow your business.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Email marketing automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Lead scoring and segmentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Automated follow up sequences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Campaign performance tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Landing page optimization</span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <Clock className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">24/7 Operations</h3>
                    <p className="text-sm text-gray-600">Never miss a lead, any time of day</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Higher Conversions</h3>
                    <p className="text-sm text-gray-600">Turn more visitors into customers</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <Zap className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Instant Response</h3>
                    <p className="text-sm text-gray-600">Engage leads immediately</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <Bot className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">AI Powered</h3>
                    <p className="text-sm text-gray-600">Smart, adaptive systems</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 md:p-12 hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 animate-slide-in-left">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                      <p className="text-sm text-gray-600">Always available support</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="text-3xl font-bold text-green-600 mb-2">Instant</div>
                      <p className="text-sm text-gray-600">Real time responses</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="text-3xl font-bold text-green-600 mb-2">Smart</div>
                      <p className="text-sm text-gray-600">AI learning system</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="text-3xl font-bold text-green-600 mb-2">Custom</div>
                      <p className="text-sm text-gray-600">Built for your business</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 animate-slide-in-right">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                    <Bot className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Customer Service Chatbots
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    AI powered chatbots that provide instant support, answer questions, and qualify leads while you focus on running your business.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Custom chatbot development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Natural language processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">24/7 customer support automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Lead qualification and routing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Multi channel deployment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Ready to Automate Your Growth?
            </h2>
            <p className="text-xl mb-8 text-blue-50 animate-fade-in-delay-1">
              Let's discuss how AI automation can transform your business operations and accelerate your growth
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 inline-flex items-center gap-2 animate-fade-in-delay-2"
            >
              Book a Call
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="mt-6 text-blue-100 text-sm animate-fade-in-delay-3">
              No obligation • 30 minute call • Custom automation plan
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
