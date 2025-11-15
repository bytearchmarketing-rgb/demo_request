import { Clock, AlertCircle, Zap } from 'lucide-react';

export default function ProblemSection() {
  const painPoints = [
    {
      icon: Clock,
      title: 'Drowning In Daily Tasks',
      description: 'Your team spends valuable hours answering the same questions, scheduling appointments, and chasing leads instead of growing the business'
    },
    {
      icon: AlertCircle,
      title: 'Missing Opportunities',
      description: 'Customers reach out after hours or during busy times. Without instant responses, they move on to competitors who are available'
    },
    {
      icon: Zap,
      title: 'Inconsistent Marketing',
      description: 'You know you need to stay visible, but creating content and managing campaigns gets pushed aside when things get busy'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0f0638] to-[#0a0320] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Running A Business Shouldn't Feel Like You're Always Behind
          </h2>
          <p className="text-xl text-[#b0c4ff] max-w-2xl mx-auto">
            You didn't start your business to spend hours on repetitive tasks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div key={index} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#ff6b35]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {point.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block">
            <p className="text-2xl md:text-3xl font-bold text-white mb-2">
              There's a better way to run your business
            </p>
            <div className="h-1 bg-gradient-to-r from-[#ff6b35] to-[#00d9ff] rounded-full w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
