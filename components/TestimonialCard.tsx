import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  className?: string;
}

export function TestimonialCard({ name, location, rating, text, className = "" }: TestimonialCardProps) {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      <Quote className="w-12 h-12 text-blue-900 mb-4" />
      
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-blue-900 text-blue-900" />
        ))}
      </div>

      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
        "{text}"
      </p>

      <div className="border-t pt-4">
        <div className="mb-1">{name}</div>
        <div className="text-sm text-blue-900">{location}</div>
      </div>
    </div>
  );
}
