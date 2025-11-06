import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'services' | 'service-detail' | 'experience' | 'blog' | 'contact' | 'booking', serviceTitle?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black text-white border-t border-blue-900/20 relative">
      {/* Background Image */}
      <Image
        src="/images/footerbg.jpg"
        alt="Footer background"
        fill
        className="object-cover"
        priority={false}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-10"></div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-xl sm:text-2xl mb-4">
              SHRI KRISHNA <span className="text-blue-900">AUTOMOBILE</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Your trusted automotive service experts. Quality repairs, certified mechanics, and customer satisfaction guaranteed.
            </p>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 hover:bg-blue-900 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 hover:bg-blue-900 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 hover:bg-blue-900 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 hover:bg-blue-900 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-blue-900 transition-colors text-sm sm:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="text-gray-400 hover:text-blue-900 transition-colors text-sm sm:text-base"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-gray-400 hover:text-blue-900 transition-colors text-sm sm:text-base"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('experience')}
                  className="text-gray-400 hover:text-blue-900 transition-colors text-sm sm:text-base"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('blog')}
                  className="text-gray-400 hover:text-blue-900 transition-colors text-sm sm:text-base"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-blue-900 transition-colors text-sm sm:text-base"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-blue-900 transition-colors text-sm">Engine Diagnostics</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors text-sm">Oil Change & Maintenance</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors text-sm">Brake Services</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors text-sm">Transmission Service</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors text-sm">AC & Heating</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors text-sm">Electrical Systems</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors text-sm">Tire Services</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors text-sm">Suspension & Steering</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors text-sm">Cooling System</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors text-sm">General Repairs</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors text-sm">Detailing Services</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors text-sm">Emergency Services</li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 justify-center sm:justify-start">
                <MapPin className="w-5 h-5 text-blue-900 flex-shrink-0 mt-1" />
                <span className="text-sm">123 Auto Street, Car City, CC 12345</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 justify-center sm:justify-start">
                <Phone className="w-5 h-5 text-blue-900 flex-shrink-0 mt-1" />
                <span className="text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 justify-center sm:justify-start">
                <Mail className="w-5 h-5 text-blue-900 flex-shrink-0 mt-1" />
                <span className="text-sm">info@autocarepro.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-6 sm:py-8 mb-6 sm:mb-8">
          <div className="max-w-lg mx-auto text-center">
            <h3 className="text-xl sm:text-2xl mb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Subscribe to get special offers and automotive tips.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 sm:py-3 rounded-lg bg-gray-900 text-white border border-gray-800 focus:border-blue-900 focus:outline-none text-sm sm:text-base"
              />
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-xs sm:text-sm text-center">
            <p>© 2025 Shri Krishna Automobile. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}