import { Check, ArrowRight } from 'lucide-react';

export default function FunnelHero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-br from-[#1a0b4d] via-[#0f0638] to-[#1a0b4d]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2NSwgMTA1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-[#4169ff] opacity-20 blur-3xl rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#ff6b35] opacity-10 blur-3xl rounded-full animate-float-delayed"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4">
                <span className="text-[#ff6b35] font-bold text-sm tracking-widest">
                  METRO DETROIT'S AI MARKETING PARTNER
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
                Your Business Deserves To Run On
                <span className="bg-gradient-to-r from-[#4169ff] via-[#00d9ff] to-[#4169ff] bg-clip-text text-transparent">
                  {' '}Autopilot
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[#b0c4ff] leading-relaxed">
                We build intelligent systems that handle your marketing, schedule your appointments, and serve your customers while you sleep
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-[#4169ff] to-[#00d9ff] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">Marketing that works around the clock</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-[#00d9ff] to-[#4169ff] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">Never miss another customer inquiry</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">Free your team from repetitive tasks</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] rounded-lg font-semibold text-lg text-white shadow-lg hover:shadow-2xl hover:shadow-[#ff6b35]/50 transition-all duration-300 hover:-translate-y-1">
                Book Your Strategy Call
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-[#4169ff] rounded-lg font-semibold text-lg text-white hover:bg-[#4169ff]/10 transition-all duration-300 hover:-translate-y-1">
                See What We Build
              </button>
            </div>

            <div className="text-sm text-gray-400 pt-4">
              <p>Trusted by Metro Detroit businesses transforming their operations with AI</p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4169ff] to-[#00d9ff] blur-3xl opacity-30 animate-pulse-slow"></div>
            <div className="relative bg-gradient-to-br from-[#1a0b4d]/40 to-[#0f0638]/40 backdrop-blur-xl rounded-3xl p-8 border border-[#4169ff]/30 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4169ff] to-[#00d9ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 text-white">🚀</div>
                  </div>
                  <div className="flex-1">
                    <div className="h-4 bg-gradient-to-r from-[#4169ff] to-transparent rounded-full w-4/5 mb-2"></div>
                    <div className="h-3 bg-white/20 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00d9ff] to-[#4169ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 text-white">📅</div>
                  </div>
                  <div className="flex-1">
                    <div className="h-4 bg-gradient-to-r from-[#00d9ff] to-transparent rounded-full w-3/5 mb-2"></div>
                    <div className="h-3 bg-white/20 rounded-full w-2/3"></div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 text-white">💬</div>
                  </div>
                  <div className="flex-1">
                    <div className="h-4 bg-gradient-to-r from-[#ff6b35] to-transparent rounded-full w-4/5 mb-2"></div>
                    <div className="h-3 bg-white/20 rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
