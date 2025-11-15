import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0b4d] via-[#0f0638] to-[#1a0b4d]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2NSwgMTA1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="floating-shapes absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#4169ff] opacity-10 blur-3xl rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#ff6b35] opacity-10 blur-3xl rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#00d9ff] opacity-10 blur-3xl rounded-full animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
          <div className="text-white space-y-8 max-w-4xl relative z-20">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#4169ff] via-[#00d9ff] to-[#4169ff] bg-clip-text text-transparent">
                  Your Business
                </span>
                <br />
                <span className="text-white">Never Sleeps Again</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Marketing automation, automated scheduling, and 24/7 customer service bots that work around the clock for Metro Detroit businesses
              </p>
              <p className="text-lg text-[#ff6b35] font-semibold">
                You focus on what you do best. We handle the rest.<br />
                Together, we'll build something extraordinary.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/demo" className="group relative px-8 py-4 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] rounded-lg font-semibold text-lg text-white shadow-lg hover:shadow-[#ff6b35]/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                Book Your Free Demo
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/demo" className="px-8 py-4 border-2 border-[#4169ff] rounded-lg font-semibold text-lg text-white hover:bg-[#4169ff]/10 hover:shadow-lg hover:shadow-[#4169ff]/30 transition-all duration-300 hover:-translate-y-1">
                Learn More
              </a>
            </div>

            <div className="flex flex-wrap gap-8 justify-center pt-4">
              <div>
                <div className="text-3xl font-bold text-[#00d9ff]">Metro Detroit</div>
                <div className="text-sm text-gray-400">Local Focus</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00d9ff]">24/7</div>
                <div className="text-sm text-gray-400">Always Working</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00d9ff]">Custom Built</div>
                <div className="text-sm text-gray-400">For Your Business</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
