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
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2">
            You like it <span className="text-blue-600">Clean?</span>
          </h1>
          <h2 className="text-5xl font-bold">
            We like it <span className="text-blue-600">Dirty!</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="relative min-h-[80vh]">
          {/* Right Side Background Splash - Wedge Cut */}
          {/* <div className="absolute right-0 top-0 w-3/5 h-full bg-amber-500 z-0" style={{clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)'}}></div> */}

          {/* Full Background Image */}
          <div className="absolute inset-0 flex items-end justify-center pb-16">
            <Image
              src="/car3.png" 
              alt="Luxury Car" 
              width={1000} 
              height={1000}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Left Features */}
          <div className="absolute left-0 bottom-20 top-0 w-1/4 space-y-4 z-10">
            {leftFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg h-32"
              >
                <div className="flex items-center justify-between h-full">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold italic mb-2">{feature.title}</h3>
                    <p className="text-sm leading-relaxed">{feature.description}</p>
                  </div>
                  <feature.icon className="w-12 h-12 ml-4 flex-shrink-0" strokeWidth={1.5} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Features */}
          <div className="absolute right-0 bottom-20 top-0 w-1/4 space-y-4 z-10">
            {rightFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg h-32"
              >
                <div className="flex items-center justify-between h-full">
                  <feature.icon className="w-12 h-12 mr-4 flex-shrink-0" strokeWidth={1.5} />
                  <div className="flex-1 text-right">
                    <h3 className="text-2xl font-bold italic mb-2">{feature.title}</h3>
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