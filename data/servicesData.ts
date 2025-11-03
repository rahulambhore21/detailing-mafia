import { 
  Gauge, 
  Droplet, 
  CircleDot, 
  Settings, 
  Snowflake, 
  Zap, 
  Car, 
  Move, 
  Thermometer, 
  Wrench, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';
import { ServicesDataType } from '../types';

export const servicesData: ServicesDataType = {
  'Engine Diagnostics': {
    icon: Gauge,
    title: 'Engine Diagnostics',
    description: 'Comprehensive computer diagnostics to identify engine issues accurately and quickly',
    aboutTitle: 'About This Service',
    aboutDescription: 'Our advanced engine diagnostic service uses state-of-the-art computer systems to accurately identify issues with your vehicle\'s engine. We can quickly pinpoint problems that might be causing performance issues, unusual noises, or warning lights on your dashboard.',
    whatsIncluded: [
      'Check engine light diagnostics',
      'Performance testing and analysis',
      'Emission system checks',
      'Sensor diagnostics and testing'
    ],
    benefits: [
      'Quick and accurate problem identification',
      'Prevent costly repairs by catching issues early',
      'Improve fuel efficiency and performance',
      'Peace of mind with comprehensive reports'
    ],
    ctaTitle: 'Ready to diagnose your engine?',
    ctaDescription: 'Schedule an appointment today and let our expert technicians identify and resolve your engine issues.'
  },
  'Oil Change & Maintenance': {
    icon: Droplet,
    title: 'Oil Change & Maintenance',
    description: 'Regular maintenance services to keep your vehicle running at peak performance',
    aboutTitle: 'About This Service',
    aboutDescription: 'Regular oil changes are essential for maintaining your vehicle\'s engine health and longevity. Our comprehensive oil change service includes premium oil and filters, along with a thorough multi-point inspection to ensure your vehicle is running safely and efficiently.',
    whatsIncluded: [
      'Premium oil and filter replacement',
      'Complete fluid level checks',
      'Comprehensive multi-point inspection',
      'Tire pressure check and adjustment'
    ],
    benefits: [
      'Extended engine life and reliability',
      'Better fuel economy and performance',
      'Reduced emissions and environmental impact',
      'Early detection of potential issues'
    ],
    ctaTitle: 'Schedule Your Oil Change Today',
    ctaDescription: 'Keep your engine running smoothly with our professional oil change service.'
  },
  'Brake Services': {
    icon: CircleDot,
    title: 'Brake Services',
    description: 'Complete brake system inspection, repair, and replacement for your safety',
    aboutTitle: 'About This Service',
    aboutDescription: 'Your vehicle\'s braking system is critical for your safety. Our comprehensive brake services ensure that your brakes are functioning properly, from brake pad replacement to complete system diagnostics. Trust our certified technicians to keep you safe on the road.',
    whatsIncluded: [
      'Brake pad replacement and installation',
      'Rotor resurfacing and replacement',
      'Complete brake fluid flush',
      'ABS diagnostics and repair'
    ],
    benefits: [
      'Enhanced safety and stopping power',
      'Prevent costly brake system damage',
      'Smoother, quieter braking performance',
      'Improved vehicle control and handling'
    ],
    ctaTitle: 'Don\'t Compromise on Safety',
    ctaDescription: 'Get your brakes inspected and serviced by our expert technicians today.'
  },
  'Transmission Service': {
    icon: Settings,
    title: 'Transmission Service',
    description: 'Expert transmission repair and maintenance for smooth shifting and performance',
    aboutTitle: 'About This Service',
    aboutDescription: 'Your transmission is one of the most complex and important components of your vehicle. Our experienced technicians specialize in transmission diagnostics, repair, and maintenance to ensure smooth shifting and optimal performance for both automatic and manual transmissions.',
    whatsIncluded: [
      'Transmission fluid service and flush',
      'Clutch replacement and adjustment',
      'Complete transmission diagnostics',
      'Differential service and repair'
    ],
    benefits: [
      'Smoother gear shifts and transitions',
      'Extended transmission lifespan',
      'Improved fuel efficiency',
      'Prevent expensive transmission failure'
    ],
    ctaTitle: 'Keep Your Transmission Running Smoothly',
    ctaDescription: 'Schedule your transmission service with our expert technicians today.'
  },
  'AC & Heating': {
    icon: Snowflake,
    title: 'AC & Heating',
    description: 'Climate control system repair and maintenance for year-round comfort',
    aboutTitle: 'About This Service',
    aboutDescription: 'Stay comfortable in your vehicle all year round with our comprehensive AC and heating services. Our technicians are trained to diagnose and repair all climate control system issues, from simple recharges to complete compressor replacements.',
    whatsIncluded: [
      'AC recharge and leak repair',
      'Heater core service and replacement',
      'Compressor replacement and repair',
      'Complete system diagnostics'
    ],
    benefits: [
      'Year-round comfortable driving',
      'Improved air quality in your vehicle',
      'Better windshield defrosting',
      'Energy-efficient climate control'
    ],
    ctaTitle: 'Stay Comfortable All Year',
    ctaDescription: 'Get your AC and heating system serviced by our climate control specialists.'
  },
  'Electrical Systems': {
    icon: Zap,
    title: 'Electrical Systems',
    description: 'Complete electrical diagnostics and repair for all vehicle systems',
    aboutTitle: 'About This Service',
    aboutDescription: 'Modern vehicles rely heavily on complex electrical systems. Our technicians have the expertise and equipment to diagnose and repair all electrical issues, from battery problems to sophisticated wiring harness repairs, ensuring your vehicle\'s electrical systems function flawlessly.',
    whatsIncluded: [
      'Battery testing and replacement',
      'Alternator service and repair',
      'Starter motor repair and replacement',
      'Complete wiring diagnostics'
    ],
    benefits: [
      'Reliable starting every time',
      'Proper charging system function',
      'All electronics working properly',
      'Prevent electrical system failures'
    ],
    ctaTitle: 'Electrical Issues? We Can Help',
    ctaDescription: 'Let our electrical system experts diagnose and fix your vehicle\'s electrical problems.'
  },
  'Tire Services': {
    icon: Car,
    title: 'Tire Services',
    description: 'Professional tire installation, balancing, and alignment services',
    aboutTitle: 'About This Service',
    aboutDescription: 'Your tires are your vehicle\'s only point of contact between your vehicle and the road. Proper tire maintenance is crucial for safety, performance, and fuel efficiency. We offer comprehensive tire services including installation, rotation, balancing, and alignment.',
    whatsIncluded: [
      'Tire rotation and balancing',
      'Precision wheel alignment',
      'New tire installation and replacement',
      'TPMS service and programming'
    ],
    benefits: [
      'Extended tire life and performance',
      'Improved fuel economy',
      'Better handling and traction',
      'Enhanced safety in all conditions'
    ],
    ctaTitle: 'Get the Most From Your Tires',
    ctaDescription: 'Schedule your tire service appointment with our tire specialists today.'
  },
  'Suspension & Steering': {
    icon: Move,
    title: 'Suspension & Steering',
    description: 'Suspension system repair for a smooth and comfortable ride',
    aboutTitle: 'About This Service',
    aboutDescription: 'A properly functioning suspension and steering system is essential for safe handling, ride comfort, and tire longevity. Our expert technicians can diagnose and repair all suspension and steering issues to keep your vehicle driving smoothly and safely.',
    whatsIncluded: [
      'Shock and strut replacement',
      'Steering system repair and service',
      'Precision alignment service',
      'Ball joint replacement'
    ],
    benefits: [
      'Smooth, comfortable ride quality',
      'Improved vehicle handling and control',
      'Extended tire life',
      'Enhanced safety and stability'
    ],
    ctaTitle: 'Enjoy a Smoother Ride',
    ctaDescription: 'Get your suspension and steering inspected and serviced by our specialists.'
  },
  'Cooling System': {
    icon: Thermometer,
    title: 'Cooling System',
    description: 'Radiator and cooling system service to prevent overheating issues',
    aboutTitle: 'About This Service',
    aboutDescription: 'Your vehicle\'s cooling system prevents engine overheating and maintains optimal operating temperature. Regular cooling system maintenance is essential to prevent costly engine damage. We provide comprehensive cooling system services to keep your engine running at the right temperature.',
    whatsIncluded: [
      'Radiator repair and replacement',
      'Complete coolant flush and refill',
      'Thermostat replacement',
      'Water pump service and repair'
    ],
    benefits: [
      'Prevent engine overheating',
      'Extend engine lifespan',
      'Maintain optimal engine performance',
      'Avoid expensive engine repairs'
    ],
    ctaTitle: 'Keep Your Engine Cool',
    ctaDescription: 'Schedule your cooling system service to prevent overheating problems.'
  },
  'General Repairs': {
    icon: Wrench,
    title: 'General Repairs',
    description: 'Comprehensive repair services for all vehicle makes and models',
    aboutTitle: 'About This Service',
    aboutDescription: 'From routine maintenance to complex repairs, our experienced technicians handle all types of automotive repairs. We service all makes and models, using quality parts and the latest diagnostic equipment to ensure your vehicle is repaired correctly the first time.',
    whatsIncluded: [
      'Exhaust system repair and replacement',
      'Belts and hoses replacement',
      'Fuel system service and repair',
      'Comprehensive pre-purchase inspection'
    ],
    benefits: [
      'One-stop shop for all repairs',
      'Experienced certified technicians',
      'Quality parts and workmanship',
      'Warranty on parts and labor'
    ],
    ctaTitle: 'Need Repairs? We\'ve Got You Covered',
    ctaDescription: 'Trust our experienced team to handle all your vehicle repair needs.'
  },
  'Detailing Services': {
    icon: Sparkles,
    title: 'Detailing Services',
    description: 'Professional car detailing to restore your vehicle\'s showroom shine',
    aboutTitle: 'About This Service',
    aboutDescription: 'Our professional detailing services go beyond a simple car wash. We meticulously clean, restore, and protect every surface of your vehicle, both inside and out. Whether you need a basic refresh or a complete showroom restoration, we\'ll make your vehicle look its absolute best.',
    whatsIncluded: [
      'Interior deep cleaning and conditioning',
      'Exterior wash, polish, and wax',
      'Professional paint correction',
      'Premium ceramic coating application'
    ],
    benefits: [
      'Showroom-quality appearance',
      'Increased resale value',
      'Long-lasting paint protection',
      'Fresh, clean interior environment'
    ],
    ctaTitle: 'Make Your Car Shine Like New',
    ctaDescription: 'Schedule a professional detailing service and restore your vehicle\'s beauty.'
  },
  'Emergency Services': {
    icon: AlertCircle,
    title: 'Emergency Services',
    description: '24/7 roadside assistance and emergency repair services',
    aboutTitle: 'About This Service',
    aboutDescription: 'Vehicle emergencies can happen anytime, anywhere. That\'s why we offer 24/7 emergency roadside assistance to get you back on the road quickly. Whether you have a dead battery, flat tire, or need a tow, our emergency response team is ready to help.',
    whatsIncluded: [
      '24/7 jump start service',
      'Flat tire change and assistance',
      'Emergency lockout service',
      'Towing service available'
    ],
    benefits: [
      'Fast response time anytime',
      'Professional, friendly service',
      'Peace of mind on the road',
      'Available 24 hours, 7 days a week'
    ],
    ctaTitle: 'Need Emergency Assistance?',
    ctaDescription: 'Call our emergency hotline now for immediate roadside assistance.',
    isEmergency: true
  }
};