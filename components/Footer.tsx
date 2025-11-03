import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'services' | 'service-detail' | 'experience' | 'blog' | 'contact' | 'booking', serviceTitle?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black text-white border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div>
            <div className="text-2xl mb-4">
              SHRI KRISHNA <span className="text-blue-900">AUTOMOBILE</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted automotive service experts. Quality repairs, certified mechanics, and customer satisfaction guaranteed.
            </p>
            <div className="flex gap-4">
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
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-blue-900 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="text-gray-400 hover:text-blue-900 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-gray-400 hover:text-blue-900 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('experience')}
                  className="text-gray-400 hover:text-blue-900 transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('blog')}
                  className="text-gray-400 hover:text-blue-900 transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-blue-900 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services (right of Quick Links) */}
          <div>
            <h3 className="text-xl mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-blue-900 transition-colors">Engine Diagnostics</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors">Oil Change & Maintenance</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors">Brake Services</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors">Transmission Service</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors">AC & Heating</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors">Electrical Systems</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors">Tire Services</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors">Suspension & Steering</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors">Cooling System</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors">General Repairs</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors">Detailing Services</li>
              <li className="text-gray-400 hover:text-blue-900 transition-colors">Emergency Services</li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-900 flex-shrink-0 mt-1" />
                <span>123 Auto Street, Car City, CC 12345</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-900 flex-shrink-0 mt-1" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-900 flex-shrink-0 mt-1" />
                <span>info@autocarepro.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8 mb-8">
          <div className="max-w-lg mx-auto text-center">
            <h3 className="text-2xl mb-2">Newsletter</h3>
            <p className="text-gray-400 mb-6">Subscribe to get special offers and automotive tips.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-800 focus:border-blue-900 focus:outline-none"
              />
              <button className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© 2025 Shri Krishna Automobile. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}