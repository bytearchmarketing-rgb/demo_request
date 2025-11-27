import { useState } from 'react';
import { Bot, Workflow, Link2, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookCallModal from '../components/BookCallModal';

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Workflow,
      title: 'Marketing Automation',
      description: 'Our flagship service that captures, nurtures, and converts leads automatically.',
      features: [
        'Email marketing automation',
        'Lead scoring and segmentation',
        'Automated follow-up sequences',
        'Campaign performance tracking',
        'Landing page optimization',
        'A/B testing and analytics'
      ],
      color: 'orange'
    },
    {
      icon: Link2,
      title: 'System Integration',
      description: 'Connect your tools and streamline your workflow with seamless integrations.',
      features: [
        'CRM integration and setup',
        'Payment gateway connections',
        'Calendar and scheduling sync',
        'API development and management',
        'Data migration services',
        'Workflow automation between tools'
      ],
      color: 'blue'
    },
    {
      icon: Bot,
      title: 'Customer Service Chatbots',
      description: 'AI-powered chatbots that provide instant support and qualify leads 24/7.',
      features: [
        'Custom chatbot development',
        'Natural language processing',
        '24/7 customer support automation',
        'Lead qualification and routing',
        'Multi-channel deployment',
        'Analytics and continuous improvement'
      ],
      color: 'green'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Marketing Solutions for Growing Businesses
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From automation to integration to AI-powered support, we build the systems that help Detroit businesses scale efficiently.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-orange-500/40 transform hover:-translate-y-1 transition-all duration-200"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`max-w-6xl mx-auto ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-8 md:p-12">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 bg-${service.color}-100 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                          {service.title}
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                          {service.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Work With You
              </h2>
              <p className="text-xl text-gray-600">
                Our process is designed to deliver results without disrupting your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Consultation
                </h3>
                <p className="text-gray-600">
                  We assess your current systems, identify gaps, and create a tailored solution plan.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Implementation
                </h3>
                <p className="text-gray-600">
                  Our team handles all the technical work, keeping you informed every step of the way.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  3
                </div>
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
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Your Growth System
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              You focus on what you do best. We handle the rest. Together we'll build something extraordinary.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-white text-orange-600 font-bold text-lg rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
