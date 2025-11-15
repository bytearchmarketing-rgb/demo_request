import { Quote, Star } from 'lucide-react';

export default function SocialProofSection() {
  const testimonials = [
    {
      quote: 'Before Byte Arch, I was answering the same customer questions every single day. Now our AI agent handles everything seamlessly, and my customers actually prefer it because they get instant answers.',
      author: 'Sarah M.',
      title: 'Owner, Local Dental Practice',
      industry: '🏥'
    },
    {
      quote: 'We went from missing 30% of our appointment bookings to having a 99.5% booking capture rate. The system literally pays for itself in the first month.',
      author: 'Marcus J.',
      title: 'Manager, Home Services Company',
      industry: '🔧'
    },
    {
      quote: 'Byte Arch freed up 20+ hours per week for my team. Instead of drowning in emails and scheduling, they\'re now focused on actual business growth. Best decision we made this year.',
      author: 'Elena R.',
      title: 'CEO, Marketing Agency',
      industry: '📊'
    }
  ];

  return (
    <section className="py-24 bg-[#0a0320] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4169ff] opacity-20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b35] opacity-20 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results For Metro Detroit Businesses
          </h2>
          <p className="text-xl text-[#b0c4ff]">
            See how we've helped local companies transform their operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4169ff] to-[#00d9ff] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <Quote className="w-8 h-8 text-[#4169ff]" />
                  <span className="text-2xl">{testimonial.industry}</span>
                </div>

                <p className="text-gray-200 leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#4169ff] to-[#00d9ff] rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
