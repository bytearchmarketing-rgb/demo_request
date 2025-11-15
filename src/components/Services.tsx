import { Rocket, Calendar, Bot } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Rocket,
      title: 'Marketing Automation',
      description: 'Your campaigns run continuously, reaching customers at exactly the right moment. Automated email sequences, social media posting, and lead nurturing that works while you sleep.',
      gradient: 'from-[#4169ff] to-[#00d9ff]',
      glowColor: '#4169ff'
    },
    {
      icon: Calendar,
      title: 'Automated Scheduling',
      description: 'Appointments book themselves. Reminders go out automatically. Calendar syncing, no-show reduction, and seamless booking experiences that keep your schedule full.',
      gradient: 'from-[#00d9ff] to-[#4169ff]',
      glowColor: '#00d9ff'
    },
    {
      icon: Bot,
      title: '24/7 Customer Service Bots',
      description: 'AI-powered agents that answer questions instantly, qualify leads, and provide support around the clock. Every customer gets immediate attention, any time of day.',
      gradient: 'from-[#ff6b35] to-[#ff8c5a]',
      glowColor: '#ff6b35'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0f0638] to-[#1a0b4d] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2NSwgMTA1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Three Ways We Help Your Business Thrive
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Automation solutions designed specifically for Metro Detroit businesses ready to scale
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}></div>

              <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border-2 border-white/10 hover:border-[#4169ff]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4169ff]/30">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" style={{background: `linear-gradient(to right, ${service.glowColor}, transparent)`}}></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`} style={{boxShadow: `0 10px 30px ${service.glowColor}40`}}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-[#00d9ff] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
