"use client";

import { 
  Calendar,
  Car,
  Award,
  TrendingUp,
  Star,
  Users,
  CheckCircle,
  Wrench,
  Quote
} from 'lucide-react';
import { ImageWithFallback } from '../../components/imageWIthFallback';

function ExperiencePage() {
  const stats = [
    {
      number: '15+',
      label: 'Years Experience',
      icon: Calendar
    },
    {
      number: '5000+',
      label: 'Cars Serviced',
      icon: Car
    },
    {
      number: '98%',
      label: 'Satisfaction Rate',
      icon: Star
    },
    {
      number: '4.9/5',
      label: 'Average Rating',
      icon: Award
    }
  ];

  const workPortfolio = [
    {
      image: 'https://images.unsplash.com/photo-1761312834357-308b24292fa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjB0cmFuc2Zvcm1hdGlvbnxlbnwxfHx8fDE3NjE4OTU4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Complete Detailing Service',
      description: 'Full interior and exterior detailing with paint correction and ceramic coating.',
      tag: 'Car detailing transformation'
    },
    {
      image: 'https://images.unsplash.com/photo-1688701108480-0db760644684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmUlMjByZWJ1aWxkJTIwcmVzdG9yYXRpb258ZW58MXx8fHwxNzYxODk1ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Engine Restoration',
      description: 'Complete engine rebuild bringing a classic car back to life.',
      tag: 'Engine Rebuild Project'
    }
  ];

  const milestones = [
    {
      year: '2008',
      title: 'Shri Krishna Automobile Founded',
      description: 'Started with a vision to provide honest and reliable automotive service.'
    },
    {
      year: '2012',
      title: 'Facility Expansion',
      description: 'Doubled our service bays and invested in advanced diagnostic equipment.'
    },
    {
      year: '2016',
      title: 'ASE Blue Seal Recognition',
      description: 'Achieved ASE Blue Seal status - the highest certification for auto shops.'
    },
    {
      year: '2020',
      title: '5000+ Cars Serviced',
      description: 'Reached milestone of serving over 5000 satisfied customers.'
    },
    {
      year: '2023',
      title: 'Best Service Award',
      description: "Voted 'Best Auto Service' by local community for 3rd consecutive year."
    }
  ];

  const reviews = [
    {
      text: "I've been bringing my cars here for 5 years. They've worked on everything from oil changes to transmission repairs. Always professional, fair pricing, and they get it done right the first time.",
      name: 'Robert Martinez',
      service: 'General Maintenance',
      rating: 5
    },
    {
      text: 'My car was making a strange noise and I was worried it would be expensive. They diagnosed the issue quickly and fixed it for much less than I expected. Honest and reliable!',
      name: 'Jennifer Lee',
      service: 'Engine Diagnostics',
      rating: 5
    },
    {
      text: 'Outstanding service! They explained everything in detail and showed me exactly what needed to be fixed. No upselling, just honest recommendations. Highly recommend!',
      name: 'Thomas Anderson',
      service: 'Brake Service',
      rating: 5
    },
    {
      text: 'Best auto shop in the area! The staff is friendly, knowledgeable, and they always go the extra mile. My family trusts them with all our vehicles.',
      name: 'Maria Garcia',
      service: 'Multiple Services',
      rating: 5
    }
  ];

  return (
    <div className="pt-32 bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1637640125496-31852f042a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwbWVjaGFuaWMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjE3NzkyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
            <span className="inline-block transform skew-x-12 uppercase tracking-wide">Our Experience</span>
          </div>
          <h1 className="mb-6">
            15+ Years of Excellence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            In automotive service with thousands of satisfied customers
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative inline-block mb-4">
                    <div className="bg-blue-900 w-16 h-16 rounded-lg flex items-center justify-center transform -skew-x-12 group-hover:scale-110 transition-transform">
                      <div className="transform skew-x-12">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="text-black mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
              <span className="inline-block transform skew-x-12 uppercase tracking-wide text-white">Our Work</span>
            </div>
            <h2 className="mb-4 text-black">
              See the Quality of Our Service
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              And attention to detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {workPortfolio.map((work, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl">
                <div className="relative h-96 overflow-hidden">
                  <ImageWithFallback
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="inline-block bg-blue-900 px-4 py-1 text-sm transform -skew-x-12 mb-3">
                    <span className="inline-block transform skew-x-12">{work.tag}</span>
                  </div>
                  <h3 className="mb-2">{work.title}</h3>
                  <p className="text-gray-300">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
              <span className="inline-block transform skew-x-12 uppercase tracking-wide text-white">Our Journey</span>
            </div>
            <h2 className="mb-4 text-black">
              Milestones That Define Our Commitment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              To excellence
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-900/20 transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Year Badge */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8">
                    <div className="bg-blue-900 w-16 h-16 rounded-lg flex items-center justify-center transform -skew-x-12 shadow-lg">
                      <span className="transform skew-x-12 text-white">{milestone.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-lg border-l-4 border-blue-900">
                      <h3 className="text-black mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
              <span className="inline-block transform skew-x-12 uppercase tracking-wide text-white">Customer Reviews</span>
            </div>
            <h2 className="mb-4 text-black">
              Hear From Our Satisfied Customers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg relative">
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-blue-900/20" />
                </div>
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-blue-900 text-blue-900" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic">"{review.text}"</p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-white">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-black">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
            <span className="inline-block transform skew-x-12 uppercase tracking-wide">Join Our Family</span>
          </div>
          <h2 className="mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers who trust us with their vehicles
          </p>
          
          <button className="relative group">
            <div className="relative h-14 px-10 flex items-center justify-center cursor-pointer">
              <div className="absolute inset-0 bg-blue-900 hover:bg-blue-800 transition-colors transform -skew-x-12"></div>
              <span className="relative z-10 text-white uppercase tracking-wide">
                Schedule Your Service
              </span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}

export default ExperiencePage;
