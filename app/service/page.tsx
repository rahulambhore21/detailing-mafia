"use client";

import { CheckCircle, Phone, Wrench } from 'lucide-react';

interface ServiceDetailProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'service-detail' | 'experience' | 'blog' | 'contact' | 'booking', serviceTitle?: string) => void;
  serviceData: {
    icon: any;
    title: string;
    description: string;
    aboutTitle: string;
    aboutDescription: string;
    whatsIncluded: string[];
    benefits: string[];
    ctaTitle?: string;
    ctaDescription?: string;
    isEmergency?: boolean;
  };
}

function ServiceDetailPage() {
  // Default service data for demonstration
  const serviceData = {
    icon: Wrench,
    title: 'Engine Diagnostics',
    description: 'Advanced computer diagnostics to identify and resolve engine issues quickly',
    aboutTitle: 'About This Service',
    aboutDescription: 'Our advanced engine diagnostic service uses state-of-the-art computer systems to accurately identify issues with your vehicle\'s engine.',
    whatsIncluded: ['Computer Diagnostics', 'Engine Tune-up', 'Performance Testing', 'Problem Resolution'],
    benefits: ['Quick problem identification', 'Prevent costly repairs', 'Improve fuel efficiency', 'Peace of mind'],
    ctaTitle: 'Ready to diagnose your engine?',
    ctaDescription: 'Schedule an appointment today and let our expert technicians identify and resolve your engine issues.',
    isEmergency: false
  };
  return (
    <div className="pt-32 bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596986952526-3be237187071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmVwYWlyJTIwc2hvcHxlbnwxfHx8fDE3NjE4MjI2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-blue-900 rounded-lg flex items-center justify-center transform -skew-x-12">
              <div className="transform skew-x-12">
                <serviceData.icon className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {serviceData.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {serviceData.description}
          </p>
        </div>
      </section>

      {/* About This Service */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
            <h2 className="inline-block transform skew-x-12 text-2xl font-bold text-white uppercase tracking-wide">{serviceData.aboutTitle}</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mt-6">
            {serviceData.aboutDescription}
          </p>
        </div>
      </section>

      {/* What's Included & Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* What's Included */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-blue-900">
              <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
                <h3 className="inline-block transform skew-x-12 text-xl font-bold text-white uppercase tracking-wide">What's Included</h3>
              </div>
              <ul className="space-y-4">
                {serviceData.whatsIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-900 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-blue-900">
              <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
                <h3 className="inline-block transform skew-x-12 text-xl font-bold text-white uppercase tracking-wide">Benefits</h3>
              </div>
              <ul className="space-y-4">
                {serviceData.benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#49bf37', strokeWidth: 2.5 }} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
            <span className="inline-block transform skew-x-12 uppercase tracking-wide">
              {serviceData.ctaTitle || 'Ready to get started?'}
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            {serviceData.ctaDescription || 'Schedule an appointment today and let our expert technicians help you.'}
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            {serviceData.isEmergency ? (
              <>
                <button 
                  className="relative group"
                  onClick={() => window.location.href = 'tel:5551234567'}
                >
                  <div className="relative h-14 px-10 flex items-center justify-center cursor-pointer">
                    <div className="absolute inset-0 bg-red-600 hover:bg-red-700 transition-colors transform -skew-x-12"></div>
                    <span className="relative z-10 text-white uppercase tracking-wide font-semibold">
                      Emergency Call: (555) 123-4567
                    </span>
                  </div>
                </button>

                <button 
                  className="relative group"
                  onClick={() => console.log('Navigate to contact')}
                >
                  <div className="relative h-14 px-10 flex items-center justify-center cursor-pointer">
                    <div className="absolute inset-0 bg-blue-900 hover:bg-blue-800 transition-colors transform -skew-x-12"></div>
                    <span className="relative z-10 text-white uppercase tracking-wide font-semibold">
                      Contact Us
                    </span>
                  </div>
                </button>
              </>
            ) : (
              <>
                <button 
                  className="relative group"
                  onClick={() => console.log('Navigate to booking')}
                >
                  <div className="relative h-14 px-10 flex items-center justify-center cursor-pointer">
                    <div className="absolute inset-0 bg-blue-900 hover:bg-blue-800 transition-colors transform -skew-x-12"></div>
                    <span className="relative z-10 text-white uppercase tracking-wide font-semibold">
                      Book Appointment
                    </span>
                  </div>
                </button>

                <div className="flex items-center gap-3 text-white">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-400">Call:</div>
                    <a href="tel:5551234567" className="text-xl font-semibold hover:text-blue-400 transition-colors cursor-pointer">
                      (555) 123-4567
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetailPage;
