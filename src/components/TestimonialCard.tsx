import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote?: string;
  businessName?: string;
  industry?: string;
  results?: string;
  rating?: number;
  photoUrl?: string;
}

export default function TestimonialCard({
  quote,
  businessName,
  industry,
  results,
  rating = 5,
  photoUrl
}: TestimonialCardProps) {
  if (!quote) {
    return (
      <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-sm border-2 border-dashed border-orange-200 text-center">
        <Quote className="w-12 h-12 text-orange-300 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Success Stories Coming Soon</h3>
        <p className="text-gray-600">
          We are working with Detroit businesses to deliver first page rankings. Check back soon for their success stories.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <Quote className="w-8 h-8 text-orange-200 mb-4" />

      <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
        {quote}
      </p>

      {results && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-800 font-semibold">{results}</p>
        </div>
      )}

      <div className="flex items-center gap-4">
        {photoUrl && (
          <img
            src={photoUrl}
            alt={businessName}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-bold text-gray-900">{businessName}</p>
          {industry && <p className="text-sm text-gray-600">{industry}</p>}
        </div>
      </div>
    </div>
  );
}
