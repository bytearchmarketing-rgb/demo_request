import { useState } from 'react';
import { Mail, CheckCircle, TrendingUp, Lightbulb, Target, Loader, FileText, Calendar, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabase';

export default function Newsletter() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{
          name: formData.name || null,
          email: formData.email,
          subscribed: true
        }]);

      if (error) {
        if (error.code === '23505') {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 4000);
          return;
        }
        throw error;
      }

      setStatus('success');
      setFormData({ name: '', email: '' });
    } catch (error) {
      console.error('Error subscribing:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6">
              <Mail className="w-4 h-4" />
              Free Daily Insights
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Growth Edge Newsletter
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Daily marketing tips, automation strategies, and growth insights delivered straight to your inbox. Designed specifically for busy business owners in Detroit and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {status === 'success' ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  You're Subscribed!
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Check your inbox for a welcome email with your first growth tip.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-orange-600 font-semibold hover:text-orange-700"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-lg"
                      placeholder="John"
                      disabled={status === 'loading'}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-lg"
                      placeholder="john@company.com"
                      required
                      disabled={status === 'loading'}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800 text-sm">
                        This email is already subscribed or something went wrong. Please try again.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-orange-500/40 transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        Subscribe for Free
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Unsubscribe anytime. We respect your privacy and never share your information.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Posts
              </h2>
              <p className="text-xl text-gray-600">
                Check out our latest insights and strategies
              </p>
            </div>

            <div className="space-y-8 mb-16">
              <article className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
                <div className="p-6 md:p-8">
                  <button
                    onClick={() => {
                      setSelectedImage('/Why-Your-Competitors-Are-Stealing-Your-Customers-And-How-to-Stop-It.png');
                      setIsModalOpen(true);
                    }}
                    className="w-full text-left group"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <FileText className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                          Why Your Competitors Are Stealing Your Customers
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          <Calendar className="w-4 h-4" />
                          <span>November 28, 2025</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl overflow-hidden cursor-pointer group-hover:opacity-90 transition-opacity">
                      <img
                        src="/Why-Your-Competitors-Are-Stealing-Your-Customers-And-How-to-Stop-It.png"
                        alt="Why Your Competitors Are Stealing Your Customers And How to Stop It"
                        className="w-full h-auto"
                      />
                    </div>
                  </button>
                </div>
              </article>

              <article className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
                <div className="p-6 md:p-8">
                  <button
                    onClick={() => {
                      setSelectedImage('/Marketing-vs-Branding-Whats-The-Difference.png');
                      setIsModalOpen(true);
                    }}
                    className="w-full text-left group"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <FileText className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                          Marketing vs Branding
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          <Calendar className="w-4 h-4" />
                          <span>November 27, 2025</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl overflow-hidden cursor-pointer group-hover:opacity-90 transition-opacity">
                      <img
                        src="/Marketing-vs-Branding-Whats-The-Difference.png"
                        alt="Marketing vs Branding: What's The Difference - Understanding the distinction between marketing and branding"
                        className="w-full h-auto"
                      />
                    </div>
                  </button>
                </div>
              </article>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What You'll Learn
              </h2>
              <p className="text-xl text-gray-600">
                Every email is packed with actionable insights you can implement immediately
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border-2 border-gray-100">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Growth Strategies
                </h3>
                <p className="text-gray-600">
                  Proven tactics to scale your business efficiently without burning out or breaking the bank.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Lightbulb className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Automation Tips
                </h3>
                <p className="text-gray-600">
                  Learn how to automate repetitive tasks and free up your time for what matters most.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-100">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Marketing Insights
                </h3>
                <p className="text-gray-600">
                  Stay ahead of trends and discover new ways to reach and convert your ideal customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join hundreds of Detroit business owners
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Get daily insights that help you work smarter, not harder. No fluff, no spam, just valuable content you can use right away.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Daily actionable tips</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Unsubscribe anytime</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>100% free forever</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-900" />
          </button>

          <div
            className="max-w-6xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Newsletter content"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
