import { Search, Zap, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'We Learn Your Business',
      description: 'A discovery call where we understand what makes your business unique and where automation can help most.'
    },
    {
      number: '02',
      icon: Zap,
      title: 'We Build Your Solution',
      description: 'Custom systems tailored to your specific needs. No templates. No cookie cutter solutions. Built for you.'
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'You Watch It Work',
      description: 'Your new systems handle marketing, scheduling, and customer service while you focus on what matters most.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0b4d] to-[#0f0638] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple Process, Powerful Results
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From first call to fully automated, we make the journey straightforward
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#4169ff] via-[#00d9ff] to-[#ff6b35] transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4169ff] to-[#00d9ff] rounded-full blur-xl opacity-40 animate-pulse-slow"></div>
                      <div className="w-24 h-24 bg-gradient-to-br from-[#4169ff] to-[#00d9ff] rounded-full flex items-center justify-center shadow-lg shadow-[#4169ff]/50 relative z-10 border-2 border-[#00d9ff]/30">
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-[#4169ff]/40 shadow-lg shadow-[#4169ff]/30">
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 -right-4 text-[#00d9ff] text-4xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
