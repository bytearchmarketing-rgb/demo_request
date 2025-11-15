import { Headphones, Wrench, Rocket } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: Headphones,
      title: 'We Listen To Your Business',
      description: 'Book a relaxed conversation where we learn about your goals, challenges, and what success looks like for you. No pressure, no sales pitch, just solutions'
    },
    {
      number: '02',
      icon: Wrench,
      title: 'We Build Your System',
      description: 'Our team designs and builds your custom AI solutions. We handle all the technical details while keeping you updated on progress'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'You Watch It Work',
      description: 'We launch your new systems, train your team, and provide ongoing support. You\'ll have a dedicated partner making sure everything runs smoothly'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0f0638] to-[#0a0320] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From First Call To Fully Automated In Three Simple Phases
          </h2>
          <p className="text-xl text-[#b0c4ff] max-w-2xl mx-auto">
            We handle the complexity so you don't have to
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute -top-8 -left-4 text-6xl font-bold opacity-5 text-white pointer-events-none">
                  {step.number}
                </div>

                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#4169ff]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4169ff] to-[#00d9ff] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 text-[#4169ff] text-3xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#b0c4ff] text-lg mb-6">Ready to get started?</p>
            <button className="group px-8 py-4 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] rounded-lg font-semibold text-lg text-white shadow-lg hover:shadow-2xl hover:shadow-[#ff6b35]/50 transition-all duration-300 hover:-translate-y-1">
              Book Your Free Consultation
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
