import { MapPin } from 'lucide-react';

export default function LocationSection() {
  const serviceAreas = [
    'Detroit', 'Dearborn', 'Livonia', 'Troy',
    'Royal Oak', 'Ann Arbor', 'Farmington Hills', 'Warren'
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0f0638] to-[#0a0320] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2NSwgMTA1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-[#ff6b35]" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Proudly Serving Metro Detroit
              </h2>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/10 mb-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We're not just your technology partner, we're your neighbors. Based right here in Metro Detroit, we understand local businesses because we are one. When you work with Byte Arch, you get a team that's invested in your success and the success of our community.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:border-[#00d9ff] transition-colors text-white font-medium"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-[#b0c4ff] font-semibold">
              Your local AI partner for unstoppable business growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
