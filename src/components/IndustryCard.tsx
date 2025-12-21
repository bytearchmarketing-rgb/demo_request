import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  painPoint: string;
  solution: string;
  delay?: number;
}

export default function IndustryCard({
  icon: Icon,
  title,
  painPoint,
  solution,
  delay = 0
}: IndustryCardProps) {
  const delayClass = delay > 0 ? `animate-fade-in-delay-${delay}` : 'animate-fade-in';

  return (
    <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 ${delayClass}`}>
      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>

      <div className="mb-4">
        <p className="text-sm font-semibold text-red-600 mb-2">Common Challenge:</p>
        <p className="text-gray-700 leading-relaxed">{painPoint}</p>
      </div>

      <div>
        <p className="text-sm font-semibold text-green-600 mb-2">How SEO Helps:</p>
        <p className="text-gray-700 leading-relaxed">{solution}</p>
      </div>
    </div>
  );
}
