"use client";

import { 
  Wrench, 
  Droplet, 
  CircleDot, 
  Gauge, 
  Snowflake, 
  Zap, 
  Car, 
  Move, 
  Thermometer,
  Settings,
  Sparkles,
  AlertCircle,
  CheckCircle,
  Phone
} from 'lucide-react';
import { ImageWithFallback } from '../../components/imageWIthFallback';
import { useRouter } from 'next/navigation';
import { titleToSlug } from '../../lib/utils';

function ServicesPage() {
  const router = useRouter();

  const services = [
    {
      icon: Gauge,
      title: 'Engine Diagnostics',
      description: 'Comprehensive computer diagnostics to identify engine issues accurately and quickly.',
      features: [
        'Check engine light diagnostics',
        'Performance testing',
        'Emission system checks',
        'Sensor diagnostics'
      ],
      image: '/engine diagnose.jpg'
    },
    {
      icon: Droplet,
      title: 'Oil Change & Maintenance',
      description: 'Regular maintenance services to keep your vehicle running at peak performance.',
      features: [
        'Premium oil and filter',
        'Fluid level checks',
        'Multi-point inspection',
        'Tire pressure check'
      ],
      image: '/Oil Change & Maintenance.jpg'
    },
    {
      icon: CircleDot,
      title: 'Brake Services',
      description: 'Complete brake system inspection, repair, and replacement for your safety.',
      features: [
        'Brake pad replacement',
        'Rotor resurfacing',
        'Brake fluid flush',
        'ABS diagnostics'
      ],
      image: '/Brake Services.jpg'
    },
    {
      icon: Settings,
      title: 'Transmission Service',
      description: 'Expert transmission repair and maintenance for smooth shifting and performance.',
      features: [
        'Transmission fluid service',
        'Clutch replacement',
        'Transmission diagnostics',
        'Differential service'
      ],
      image: '/Transmission Service.jpg'
    },
    {
      icon: Snowflake,
      title: 'AC & Heating',
      description: 'Climate control system repair and maintenance for year-round comfort.',
      features: [
        'AC recharge and repair',
        'Heater core service',
        'Compressor replacement',
        'System diagnostics'
      ],
      image: '/AC & Heating.jpg'
    },
    {
      icon: Zap,
      title: 'Electrical Systems',
      description: 'Complete electrical diagnostics and repair for all vehicle systems.',
      features: [
        'Battery testing and replacement',
        'Alternator service',
        'Starter motor repair',
        'Wiring diagnostics'
      ],
      image: '/Electrical Systems.jpg'
    },
    {
      icon: Car,
      title: 'Tire Services',
      description: 'Professional tire installation, balancing, and alignment services.',
      features: [
        'Tire rotation and balance',
        'Wheel alignment',
        'Tire replacement',
        'TPMS service'
      ],
      image: '/Tire Services.jpg'
    },
    {
      icon: Move,
      title: 'Suspension & Steering',
      description: 'Suspension system repair for a smooth and comfortable ride.',
      features: [
        'Shock and strut replacement',
        'Steering system repair',
        'Alignment service',
        'Ball joint replacement'
      ],
      image: '/Suspension & Steering.jpg'
    },
    {
      icon: Thermometer,
      title: 'Cooling System',
      description: 'Radiator and cooling system service to prevent overheating issues.',
      features: [
        'Radiator repair and replacement',
        'Coolant flush',
        'Thermostat replacement',
        'Water pump service'
      ],
      image: '/Cooling System.jpg'
    },
    {
      icon: Wrench,
      title: 'General Repairs',
      description: 'Comprehensive repair services for all vehicle makes and models.',
      features: [
        'Exhaust system repair',
        'Belts and hoses',
        'Fuel system service',
        'Pre-purchase inspection'
      ],
      image: '/General Repairs.jpg'
    },
    {
      icon: Sparkles,
      title: 'Detailing Services',
      description: 'Professional car detailing to restore your vehicle\'s showroom shine.',
      features: [
        'Interior deep cleaning',
        'Exterior wash and wax',
        'Paint correction',
        'Ceramic coating'
      ],
      image: '/Detailing Services.jpg'
    },
    {
      icon: AlertCircle,
      title: 'Emergency Services',
      description: '24/7 roadside assistance and emergency repair services.',
      features: [
        'Jump start service',
        'Flat tire assistance',
        'Lockout service',
        'Towing available'
      ],
      image: '/engine diagnose.jpg'
    }
  ];

  return (
    <div className="pt-32 bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596986952526-3be237187071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmVwYWlyJTIwc2hvcHxlbnwxfHx8fDE3NjE4MjI2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
            <span className="inline-block transform skew-x-12 uppercase tracking-wide">Our Services</span>
          </div>
          <h1 className="mb-6">
            Comprehensive Automotive Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Backed by certified technicians and cutting-edge technology
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center transform -skew-x-12">
                        <div className="transform skew-x-12">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="mb-3 text-black">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-blue-900 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Button */}
                    <button 
                      className="relative w-full group/btn"
                      onClick={() => router.push(`/service/${titleToSlug(service.title)}`)}
                    >
                      <div className="relative h-10 flex items-center justify-center cursor-pointer">
                        <div className="absolute inset-0 bg-blue-900 group-hover/btn:bg-blue-800 transition-colors transform -skew-x-12"></div>
                        <span className="relative z-10 text-white text-sm uppercase tracking-wide">
                          Learn More
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
            <span className="inline-block transform skew-x-12 uppercase tracking-wide">Need a Service?</span>
          </div>
          <h2 className="mb-6">
            Contact us today to schedule an appointment or get a free quote for your vehicle service needs.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button 
              className="relative group"
              onClick={() => router.push('/booking')}
            >
              <div className="relative h-14 px-10 flex items-center justify-center cursor-pointer">
                <div className="absolute inset-0 bg-blue-900 hover:bg-blue-800 transition-colors transform -skew-x-12"></div>
                <span className="relative z-10 text-white uppercase tracking-wide">
                  Book Appointment
                </span>
              </div>
            </button>
            
            <div className="flex items-center gap-3 text-white">
              <Phone className="w-5 h-5 text-blue-400" />
              <div>
                <div className="text-sm text-gray-400">Call Now:</div>
                <div className="text-xl">(555) 123-4567</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
