import { Shield, Award, MapPin, CheckCircle } from 'lucide-react';
import { ReactNode } from 'react';

interface TrustBadgeProps {
  type: 'guarantee' | 'detroit' | 'partner' | 'check';
  text: string;
  subtitle?: string;
  pulse?: boolean;
}

export default function TrustBadge({ type, text, subtitle, pulse = false }: TrustBadgeProps) {
  const icons: Record<string, ReactNode> = {
    guarantee: <Shield className="w-5 h-5" />,
    detroit: <MapPin className="w-5 h-5" />,
    partner: <Award className="w-5 h-5" />,
    check: <CheckCircle className="w-5 h-5" />
  };

  const colors = {
    guarantee: 'text-green-600 bg-green-50',
    detroit: 'text-orange-600 bg-orange-50',
    partner: 'text-blue-600 bg-blue-50',
    check: 'text-green-600 bg-green-50'
  };

  return (
    <div className={`flex items-center gap-2 hover:scale-105 transition-transform duration-300 ${pulse ? 'animate-pulse-slow' : ''}`}>
      <div className={`${colors[type]} p-1 rounded-full`}>
        {icons[type]}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-700">{text}</span>
        {subtitle && <span className="text-xs text-gray-500">{subtitle}</span>}
      </div>
    </div>
  );
}
