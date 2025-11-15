import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: 'Metro Detroit', sublabel: 'Locally Based', color: '#4169ff' },
    { label: 'Custom Built', sublabel: 'For Your Needs', color: '#00d9ff' },
    { label: 'Always On', sublabel: 'Round the Clock', color: '#ff6b35' },
    { label: 'Full Support', sublabel: 'Every Step', color: '#00d9ff' }
  ];

  const Counter = ({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, end, duration]);

    return (
      <span>
        {end % 1 !== 0 ? count.toFixed(1) : count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 bg-[#0a0320] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#4169ff] opacity-20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#ff6b35] opacity-20 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Metro Detroit Businesses Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Local expertise meets world class automation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-2xl`} style={{ backgroundColor: stat.color }}></div>

              <div className="relative">
                <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: stat.color }}>
                  {stat.label}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-8">Serving local businesses in</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="text-white font-semibold">Detroit</div>
            <div className="text-white">•</div>
            <div className="text-white font-semibold">Ann Arbor</div>
            <div className="text-white">•</div>
            <div className="text-white font-semibold">Royal Oak</div>
            <div className="text-white">•</div>
            <div className="text-white font-semibold">Troy</div>
            <div className="text-white">•</div>
            <div className="text-white font-semibold">Dearborn</div>
          </div>
        </div>
      </div>
    </section>
  );
}
