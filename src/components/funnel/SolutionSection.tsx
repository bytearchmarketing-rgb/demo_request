import { Megaphone, Calendar, MessageSquare, ArrowRight } from 'lucide-react';

export default function SolutionSection() {
  const solutions = [
    {
      icon: Megaphone,
      title: 'Marketing That Never Sleeps',
      description: 'Your brand stays active with intelligent content creation, email campaigns, and social media management that runs automatically. We build systems that keep you top of mind with your ideal customers in Metro Detroit',
      benefits: [
        'Consistent brand presence across channels',
        'Automated email sequences that nurture leads',
        'Smart content that resonates with your audience'
      ],
      gradient: 'from-[#4169ff] to-[#00d9ff]'
    },
    {
      icon: Calendar,
      title: 'Appointments That Book Themselves',
      description: 'Stop playing phone tag. Our intelligent scheduling systems let customers book appointments instantly, send automatic reminders, and sync with your calendar. Your schedule stays full without lifting a finger',
      benefits: [
        'Instant booking from any device',
        'Automatic reminder system',
        'Seamless calendar integration'
      ],
      gradient: 'from-[#00d9ff] to-[#4169ff]'
    },
    {
      icon: MessageSquare,
      title: 'Always On Customer Support',
      description: 'Your customers get instant answers any time of day or night. Our AI agents handle common questions, qualify leads, and escalate when needed. It\'s like having your best employee available around the clock',
      benefits: [
        'Instant response to every inquiry',
        'Consistent, professional communication',
        'Qualified leads delivered to your team'
      ],
      gradient: 'from-[#ff6b35] to-[#ff8c5a]'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0320] to-[#0f0638] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2NSwgMTA1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We Build The Systems That Scale Your Business
          </h2>
          <p className="text-xl text-[#b0c4ff] max-w-2xl mx-auto">
            Three intelligent solutions that work together to transform how you operate
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}></div>

              <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  {solution.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-gradient-to-br from-[#4169ff] to-[#00d9ff] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 text-[#00d9ff] font-semibold group-hover:translate-x-2 transition-transform duration-300 self-start">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
