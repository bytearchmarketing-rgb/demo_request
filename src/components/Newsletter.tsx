import { Mail, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="newsletter" className="py-24 bg-gradient-to-br from-[#0f0638] via-[#1a0b4d] to-[#0f0638] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2NSwgMTA1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#4169ff] opacity-10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#00d9ff] opacity-10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 p-4 bg-gradient-to-br from-[#4169ff]/20 to-[#00d9ff]/20 rounded-2xl border border-[#4169ff]/30">
            <Mail className="w-12 h-12 text-[#00d9ff]" />
          </div>

          <div className="mb-4">
            <span className="inline-block text-sm font-bold text-[#00d9ff] uppercase tracking-wider mb-2">Newsletter</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Growth Edge
            </h2>
          </div>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Weekly insights on marketing automation, AI tools, and growth strategies specifically for Metro Detroit businesses.
            Real insights. No fluff. Delivered to your inbox every week.
          </p>

          {status === 'success' ? (
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/50 rounded-2xl p-8 backdrop-blur-xl">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">You're subscribed!</h3>
              <p className="text-gray-300">Check your inbox for a welcome message.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4169ff] focus:bg-white/15 transition-all"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-gradient-to-r from-[#4169ff] to-[#00d9ff] rounded-lg font-semibold text-white shadow-lg hover:shadow-[#4169ff]/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
                </button>
              </div>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-4 text-red-400">Something went wrong. Please try again.</p>
          )}

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00d9ff] rounded-full"></div>
              <span>Weekly insights delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00d9ff] rounded-full"></div>
              <span>Unsubscribe anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00d9ff] rounded-full"></div>
              <span>Zero spam guaranteed</span>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-[#4169ff] font-bold mb-2">Automation Tips</div>
              <p className="text-gray-400 text-sm">Practical strategies you can implement today</p>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-[#00d9ff] font-bold mb-2">Growth Strategies</div>
              <p className="text-gray-400 text-sm">Proven tactics for Metro Detroit businesses</p>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-[#ff6b35] font-bold mb-2">Industry Trends</div>
              <p className="text-gray-400 text-sm">Stay ahead of the automation curve</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
