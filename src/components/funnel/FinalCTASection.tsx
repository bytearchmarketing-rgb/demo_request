import { ArrowRight, Check, Calendar } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1a0b4d] via-[#0f0638] to-[#1a0b4d] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2NSwgMTA1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#4169ff] opacity-20 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#ff6b35] opacity-20 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/20 shadow-2xl text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Build Your Automated Business Together
            </h2>
            <p className="text-xl md:text-2xl text-[#b0c4ff] mb-12 max-w-2xl mx-auto">
              Book a free strategy call and discover exactly how AI can transform your business operations
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <div className="flex items-center gap-3 text-white justify-center sm:justify-start">
                <Check className="w-6 h-6 text-[#00d9ff] flex-shrink-0" />
                <span className="font-semibold">No obligation strategy session</span>
              </div>
              <div className="flex items-center gap-3 text-white justify-center sm:justify-start">
                <Check className="w-6 h-6 text-[#00d9ff] flex-shrink-0" />
                <span className="font-semibold">Custom roadmap for your business</span>
              </div>
              <div className="flex items-center gap-3 text-white justify-center sm:justify-start">
                <Check className="w-6 h-6 text-[#00d9ff] flex-shrink-0" />
                <span className="font-semibold">Clear pricing and timeline</span>
              </div>
            </div>

            <button className="group relative px-10 py-5 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] rounded-lg font-bold text-lg text-white shadow-lg hover:shadow-2xl hover:shadow-[#ff6b35]/50 transition-all duration-300 hover:-translate-y-1 mb-8 inline-flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-sm text-gray-400">
              This call is completely free and there's zero pressure. We only work with businesses we know we can help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
