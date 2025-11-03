"use client";

import { Sparkles, Droplets, Shield, Car, Paintbrush, Sun } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './imageWIthFallback';

const services = [
  {
    icon: Sparkles,
    title: 'Engine Diagnostics',
    description: 'Advanced computer diagnostics to identify and resolve engine issues quickly',
    image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmUlMjBkaWFnbm9zdGljc3xlbnwxfHx8fDE3NjE4MjI2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Computer Diagnostics', 'Engine Tune-up', 'Performance Testing', 'Problem Resolution'],
  },
  {
    icon: Droplets,
    title: 'Oil Change Service',
    description: 'Complete oil change with premium quality oils and filter replacement',
    image: 'https://images.unsplash.com/photo-1572359249699-5ced96364f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY29hdGluZyUyMGNhcnxlbnwxfHx8fDE3NjE3NTk1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Premium Oil', 'Filter Replacement', 'Fluid Check', 'Multi-Point Inspection'],
  },
  {
    icon: Car,
    title: 'General Repairs',
    description: 'Comprehensive repair services for all makes and models of vehicles',
    image: 'https://images.unsplash.com/photo-1759646848818-0726eefd7988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXIlMjBwb2xpc2h8ZW58MXx8fHwxNzYxNzU5NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Brake Service', 'Transmission Repair', 'Suspension Work', 'All Makes & Models'],
  },
  {
    icon: Shield,
    title: 'Electrical Systems',
    description: 'Expert diagnostics and repair of all vehicle electrical components',
    image: 'https://images.unsplash.com/photo-1759825045061-ac853e131f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoaW5nJTIwc2VydmljZXxlbnwxfHx8fDE3NjE2NTcxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Battery Service', 'Alternator Repair', 'Wiring Diagnostics', 'Lighting Systems'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Professional automotive services with <span className="text-blue-900">cutting-edge technology and expert care</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-none">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <service.icon className="w-10 h-10" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}