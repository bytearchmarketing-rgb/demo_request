import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  timeline?: string;
  isLast?: boolean;
}

export default function ProcessStep({
  number,
  title,
  description,
  icon: Icon,
  timeline,
  isLast = false
}: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mb-3">
              {number}
            </div>
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
              <Icon className="w-8 h-8 text-orange-600" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {title}
            </h3>
            {timeline && (
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-3">
                {timeline}
              </div>
            )}
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {!isLast && (
        <div className="hidden md:block absolute left-8 top-full w-1 h-8 bg-gradient-to-b from-orange-400 to-orange-200 transform translate-x-7" />
      )}
    </div>
  );
}
