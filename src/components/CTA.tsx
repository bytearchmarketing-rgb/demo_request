import { ArrowRight } from 'lucide-react';

export default function CTA() {

  return (
    <section className="py-24 bg-gradient-to-br from-[#1a0b4d] via-[#0f0638] to-[#1a0b4d] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2NSwgMTA1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4169ff] opacity-20 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b35] opacity-20 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/20 shadow-2xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Let Your Business Run Itself?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Book a free demo call and discover how automation can transform your Metro Detroit business.
              No pressure. Just possibilities.
            </p>

            <div className="flex justify-center mb-8">
              <a
                href="/demo"
                className="group px-8 py-4 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] rounded-lg font-semibold text-white shadow-lg hover:shadow-[#ff6b35]/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 whitespace-nowrap inline-flex items-center gap-2"
              >
                Book Free Demo
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-br from-[#4169ff] to-[#00d9ff] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-br from-[#00d9ff] to-[#4169ff] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
