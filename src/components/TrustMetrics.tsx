import { useEffect, useRef, useState } from 'react';
import { MapPin, Shield, Trophy, Star } from 'lucide-react';

interface MetricProps {
  icon: React.ElementType;
  value: string;
  label: string;
  delay: number;
}

function Metric({ icon: Icon, value, label, delay }: MetricProps) {
  const [isVisible, setIsVisible] = useState(false);
  const metricRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (metricRef.current) {
      observer.observe(metricRef.current);
    }

    return () => {
      if (metricRef.current) {
        observer.unobserve(metricRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={metricRef}
      className={`flex flex-col items-center text-center transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg transform hover:scale-110 hover:rotate-6 transition-all duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-sm text-gray-600 max-w-[150px]">{label}</div>
    </div>
  );
}

export default function TrustMetrics() {
  return (
    <div className="py-12 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <Metric
            icon={MapPin}
            value="100%"
            label="Detroit Based Team"
            delay={0}
          />
          <Metric
            icon={Shield}
            value="90 Day"
            label="Results Guarantee"
            delay={100}
          />
          <Metric
            icon={Trophy}
            value="5+ Years"
            label="SEO Experience"
            delay={200}
          />
          <Metric
            icon={Star}
            value="First Page"
            label="Rankings"
            delay={300}
          />
        </div>
      </div>
    </div>
  );
}
