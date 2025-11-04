'use client'
import React from 'react';
import { Handshake, Award, Shield, Wrench, Users, Leaf, CreditCard } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  const leftFeatures = [
    {
      icon: Handshake,
      title: 'Professional Service:',
      description: 'Expert automotive technicians with advanced diagnostic tools.'
    },
    {
      icon: Award,
      title: 'Quality Repairs:',
      description: 'Premium parts and cutting-edge technology for lasting solutions.'
    },
    {
      icon: Shield,
      title: 'Guaranteed Work:',
      description: 'All repairs backed by warranty and quality assurance.'
    },
    {
      icon: Wrench,
      title: 'Complete Service:',
      description: 'Full range from diagnostics to major repairs and maintenance.'
    }
  ];

  const rightFeatures = [
    {
      icon: Users,
      title: 'Expert Technicians:',
      description: 'Certified mechanics trained on all makes and models.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly:',
      description: 'Environmentally responsible disposal and green practices.'
    },
    {
      icon: CreditCard,
      title: 'Fair Pricing:',
      description: 'Transparent pricing with no hidden fees or surprises.'
    },
    {
      icon: Shield,
      title: 'Modern Equipment:',
      description: 'State-of-the-art diagnostic and repair equipment.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            You like it <span className="text-blue-600">Clean?</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            We like it <span className="text-blue-600">Dirty!</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center">
          <div className="order-2 lg:order-1 space-y-4">
            {leftFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 sm:p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0" strokeWidth={1.5} />
                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl font-bold italic mb-2">{feature.title}</h3>
                    <p className="text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <Image
              src="/car3.png"
              alt="Luxury Car"
              width={1000}
              height={1000}
              className="w-full max-w-xs sm:max-w-md lg:max-w-xl h-auto object-contain"
            />
          </div>

          <div className="order-3 space-y-4">
            {rightFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 sm:p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-4 lg:flex-row-reverse">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0" strokeWidth={1.5} />
                  <div className="text-left lg:text-right">
                    <h3 className="text-lg sm:text-xl font-bold italic mb-2">{feature.title}</h3>
                    <p className="text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;