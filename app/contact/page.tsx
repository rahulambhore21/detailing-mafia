"use client";

import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Send,
  AlertCircle
} from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../../components/imageWIthFallback';

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Auto Street', 'Car City, CC 12345', 'United States'],
      bgColor: 'bg-blue-900'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-4567'],
      bgColor: 'bg-blue-900'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@autocarepro.com'],
      bgColor: 'bg-blue-900'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 4:00 PM',
        'Sunday: Closed',
        '24/7 Emergency Service Available'
      ],
      bgColor: 'bg-blue-900'
    }
  ];

  const socialMedia = [
    { icon: Facebook, label: 'Facebook', link: '#' },
    { icon: Instagram, label: 'Instagram', link: '#' },
    { icon: Twitter, label: 'Twitter', link: '#' },
    { icon: Youtube, label: 'Youtube', link: '#' }
  ];

  return (
    <div className="pt-32 bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1658244535520-ad4c4463c742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmVwYWlyJTIwc2hvcCUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTg5NjE2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
            <span className="inline-block transform skew-x-12 uppercase tracking-wide">Contact Us</span>
          </div>
          <h1 className="mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            For appointments, quotes, or any automotive questions
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-900">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center transform -skew-x-12">
                      <div className="transform skew-x-12">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-center mb-3 text-black">
                    {info.title}
                  </h3>
                  <div className="space-y-1 text-center">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Social */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <div className="mb-8">
                  <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-4">
                    <span className="inline-block transform skew-x-12 uppercase tracking-wide text-white">Send Us a Message</span>
                  </div>
                  <h2 className="mb-2 text-black">
                    Get In Touch
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll respond within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block mb-2 text-gray-700">
                      Full Name <span className="text-blue-900">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-700">
                      Email Address <span className="text-blue-900">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block mb-2 text-gray-700">
                      Message <span className="text-blue-900">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your vehicle and service needs..."
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="relative group w-full sm:w-auto">
                    <div className="relative h-14 px-10 flex items-center justify-center cursor-pointer">
                      <div className="absolute inset-0 bg-blue-900 group-hover:bg-blue-800 transition-colors transform -skew-x-12"></div>
                      <span className="relative z-10 text-white uppercase tracking-wide flex items-center gap-2">
                        Send Message
                        <Send className="w-5 h-5" />
                      </span>
                    </div>
                  </button>
                </form>
              </div>
            </div>

            {/* Connect With Us */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-xl h-full">
                <div className="mb-6">
                  <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-4">
                    <span className="inline-block transform skew-x-12 uppercase tracking-wide text-white text-sm">Connect With Us</span>
                  </div>
                  <h3 className="mb-4 text-black">
                    Follow Our Journey
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Stay updated with our latest services, tips, and special offers on social media.
                  </p>
                </div>

                <div className="space-y-4">
                  {socialMedia.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-900 hover:text-white transition-colors group"
                      >
                        <div className="w-12 h-12 bg-blue-900 group-hover:bg-white rounded-lg flex items-center justify-center transform -skew-x-12 transition-colors">
                          <div className="transform skew-x-12">
                            <Icon className="w-6 h-6 text-white group-hover:text-blue-900 transition-colors" />
                          </div>
                        </div>
                        <span className="text-gray-700 group-hover:text-white transition-colors">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>

                {/* Emergency Notice */}
                <div className="mt-8 p-4 bg-blue-900/10 border-l-4 border-blue-900 rounded">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-700">
                        <span className="text-blue-900">Need emergency service?</span> Call us 24/7 at (555) 123-4567
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
              <span className="inline-block transform skew-x-12 uppercase tracking-wide text-white">Find Us</span>
            </div>
            <h2 className="mb-4 text-black">
              Visit Our Modern Service Facility
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Map Placeholder */}
            <div className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1676018367970-c11f6ad317ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMHdvcmtzaG9wJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYxODk2MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Service Facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-6">
                <button className="relative group">
                  <div className="relative h-12 px-8 flex items-center justify-center cursor-pointer">
                    <div className="absolute inset-0 bg-blue-900 group-hover:bg-blue-800 transition-colors transform -skew-x-12"></div>
                    <span className="relative z-10 text-white uppercase tracking-wide flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Get Directions
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Location Info */}
            <div>
              <h3 className="mb-4 text-black">
                Easy to Find, Easy to Visit
              </h3>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art facility is conveniently located in the heart of Car City, with ample parking and easy access from major highways.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center transform -skew-x-12 flex-shrink-0">
                    <div className="transform skew-x-12">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1 text-black">Address</h4>
                    <p className="text-gray-600">123 Auto Street, Car City, CC 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center transform -skew-x-12 flex-shrink-0">
                    <div className="transform skew-x-12">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1 text-black">Business Hours</h4>
                    <p className="text-gray-600 text-sm">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm">Sat: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600 text-sm">Sun: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center transform -skew-x-12 flex-shrink-0">
                    <div className="transform skew-x-12">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1 text-black">Call Us</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-blue-900">24/7 Emergency Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
