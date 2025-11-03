"use client";

import { CheckCircle, Target, Eye, Award } from 'lucide-react';
import { ImageWithFallback } from '../../components/imageWIthFallback';

function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-block bg-blue-900 px-4 py-2 rounded-full mb-6">
              About Us
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-6">
              India's Most Trusted <span className="text-blue-900">Car Detailing Studio</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6">
              The Detailing Mafia is India's premier car detailing and protection studio with over 50+ locations across the country. We specialize in premium car care services that transform your vehicle.
            </p>

            <p className="text-gray-300 text-lg mb-8">
              With our state-of-the-art facilities and highly trained professionals, we ensure that every vehicle receives the royal treatment it deserves. Our commitment to excellence has made us the preferred choice for luxury car owners across India.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Certified & Trained Professionals',
                'Premium Quality Products',
                'State-of-the-Art Equipment',
                'Customer Satisfaction Guaranteed',
                'Transparent Pricing',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-900 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-blue-900/30 p-6 rounded-lg">
                <Target className="w-10 h-10 text-blue-900 mb-3" />
                <h3 className="text-xl mb-2">Our Mission</h3>
                <p className="text-gray-400 text-sm">
                  To provide world-class car detailing services at affordable prices
                </p>
              </div>
              <div className="border border-blue-900/30 p-6 rounded-lg">
                <Eye className="w-10 h-10 text-blue-900 mb-3" />
                <h3 className="text-xl mb-2">Our Vision</h3>
                <p className="text-gray-400 text-sm">
                  To be India's #1 car care brand in every city
                </p>
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629281066736-ff3a1e6b36d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmd8ZW58MXx8fHwxNzYxNzQ0NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional car detailing"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating achievement card */}
            <div className="absolute -bottom-10 -left-10 bg-blue-900 p-8 rounded-xl shadow-2xl">
              <Award className="w-12 h-12 mb-2" />
              <div className="text-4xl mb-1">10+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;