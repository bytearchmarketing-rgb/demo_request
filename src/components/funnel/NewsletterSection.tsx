import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section id="newsletter" className="py-24 bg-gradient-to-b from-[#0a0320] to-[#0f0638] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Ready To Book? Stay Connected
            </h3>
            <p className="text-lg text-[#b0c4ff] mb-8">
              Get weekly insights on AI, automation, and marketing strategies delivered straight to your inbox
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4169ff] focus:bg-white/15 transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-[#4169ff] to-[#00d9ff] rounded-lg font-semibold text-white shadow-lg hover:shadow-2xl hover:shadow-[#4169ff]/50 transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
                >
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-500 mt-6">
              We respect your inbox. Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
