import { Hero } from '../../components/Hero';
import { Services } from '../../components/Services';
import { FeatureCard } from '../../components/FeatureCard';
import { TestimonialCard } from '../../components/TestimonialCard';
import { Shield, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certified Mechanics',
    description: 'All our technicians are ASE certified with years of experience',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock emergency roadside assistance available',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: '12-month warranty on all parts and labor',
  },
];

const testimonials = [
  {
    name: 'John Smith',
    location: 'Car Owner',
    rating: 5,
    text: 'Outstanding service! They fixed my engine problem quickly and the price was very reasonable. Highly recommend!',
  },
  {
    name: 'Sarah Johnson',
    location: 'Business Owner',
    rating: 5,
    text: "I've been bringing my fleet here for 3 years. Always professional, efficient, and trustworthy.",
  },
  {
    name: 'Mike Davis',
    location: 'Local Resident',
    rating: 5,
    text: 'Best auto shop in town. They explain everything clearly and never try to upsell unnecessary services.',
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Excellence in every aspect of <span className="text-blue-900">automotive care</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              What Our <span className="text-blue-900">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
