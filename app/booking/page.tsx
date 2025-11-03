"use client";

import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Car, Truck, Check, CheckCircle } from 'lucide-react';
import { Calendar } from '../../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicleType: '',
    vehicleNumber: '',
    serviceType: '',
    timeSlot: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, date });
    // Show the success alert
    setShowAlert(true);
    // Auto-hide notification after 8 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 8000);
  };

  const vehicleTypes = [
    'Sedan',
    'SUV',
    'Truck',
    'Hatchback',
    'Coupe',
    'Van',
    'Motorcycle',
    'Other'
  ];

  const serviceTypes = [
    'Engine Diagnostics',
    'Oil Change',
    'Brake Service',
    'Tire Rotation',
    'Electrical System',
    'Air Conditioning',
    'Transmission Service',
    'General Inspection',
    'Battery Service',
    'Other'
  ];

  const timeSlots = [
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM'
  ];

  const features = [
    {
      title: 'Business Hours',
      items: [
        'Mon-Fri: 8:00 AM - 6:00 PM',
        'Sat: 9:00 AM - 4:00 PM'
      ]
    },
    {
      title: 'Free Pickup',
      items: [
        'We offer free vehicle pickup and delivery within 5 miles'
      ]
    },
    {
      title: 'Expert Service',
      items: [
        'Certified technicians with 15+ years experience'
      ]
    }
  ];

  const formatDate = (date: Date | undefined) => {
    if (!date) return 'Pick a date';
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="pt-32 bg-white">
      {/* Success Notification - Center Position */}
      {showAlert && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-2xl w-full mx-4 animate-in zoom-in-95 duration-500">
          <div className="bg-blue-900 p-8 rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.8),0_10px_30px_rgba(30,58,138,0.5)] border-2 border-blue-700" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 15px 25px -5px rgba(30, 58, 138, 0.6), 0 10px 20px -5px rgba(0, 0, 0, 0.5)' }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-8 h-8 text-blue-900" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">Appointment Booked!</h3>
                <p className="text-white text-base leading-relaxed drop-shadow-md">
                  Your appointment is scheduled for {date ? date.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  }) : 'the selected date'} at {formData.timeSlot}. We'll contact you shortly to confirm.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1730453075684-2ad6232ab451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtYWludGVuYW5jZSUyMG1lY2hhbmljfGVufDF8fHx8MTc2MTg4NDYwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
            <span className="inline-block transform skew-x-12 uppercase tracking-wide">Book Your Appointment</span>
          </div>
          <h1 className="mb-6">
            Schedule Your Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Schedule your vehicle service with our expert technicians. We'll have your car running like new in no time.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <div className="mb-6">
                      <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-4">
                        <span className="inline-block transform skew-x-12 uppercase tracking-wide text-white text-sm">Personal Information</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block mb-2 text-gray-700">
                          Full Name <span className="text-blue-900">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleChange('fullName', e.target.value)}
                          placeholder="John Doe"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block mb-2 text-gray-700">
                          Phone Number <span className="text-blue-900">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="+1 234 567 8900"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 transition-colors"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="email" className="block mb-2 text-gray-700">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Information */}
                  <div>
                    <div className="mb-6">
                      <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-4">
                        <span className="inline-block transform skew-x-12 uppercase tracking-wide text-white text-sm">Vehicle Information</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="vehicleType" className="block mb-2 text-gray-700">
                          Vehicle Type <span className="text-blue-900">*</span>
                        </label>
                        <Select 
                          value={formData.vehicleType} 
                          onValueChange={(value: string) => handleChange('vehicleType', value)}
                          required
                        >
                          <SelectTrigger className="w-full h-12 border-gray-300 focus:border-blue-900">
                            <SelectValue placeholder="Select vehicle type" />
                          </SelectTrigger>
                          <SelectContent>
                            {vehicleTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="vehicleNumber" className="block mb-2 text-gray-700">
                          Vehicle Number <span className="text-blue-900">*</span>
                        </label>
                        <input
                          type="text"
                          id="vehicleNumber"
                          value={formData.vehicleNumber}
                          onChange={(e) => handleChange('vehicleNumber', e.target.value)}
                          placeholder="ABC-1234"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div>
                    <div className="mb-6">
                      <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-4">
                        <span className="inline-block transform skew-x-12 uppercase tracking-wide text-white text-sm">Service Details</span>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="serviceType" className="block mb-2 text-gray-700">
                        Service Type <span className="text-blue-900">*</span>
                      </label>
                      <Select 
                        value={formData.serviceType} 
                        onValueChange={(value: string) => handleChange('serviceType', value)}
                        required
                      >
                        <SelectTrigger className="w-full h-12 border-gray-300 focus:border-blue-900">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div>
                    <div className="mb-6">
                      <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-4">
                        <span className="inline-block transform skew-x-12 uppercase tracking-wide text-white text-sm">Date & Time</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 text-gray-700">
                          Appointment Date <span className="text-blue-900">*</span>
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <button
                              type="button"
                              className="w-full h-12 px-4 border border-gray-300 rounded-lg flex items-center justify-between text-left hover:border-blue-900 transition-colors"
                            >
                              <span className={date ? 'text-gray-900' : 'text-gray-400'}>
                                {formatDate(date)}
                              </span>
                              <CalendarIcon className="w-5 h-5 text-gray-400" />
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(date: Date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div>
                        <label htmlFor="timeSlot" className="block mb-2 text-gray-700">
                          Time Slot <span className="text-blue-900">*</span>
                        </label>
                        <Select 
                          value={formData.timeSlot} 
                          onValueChange={(value: string) => handleChange('timeSlot', value)}
                          required
                        >
                          <SelectTrigger className="w-full h-12 border-gray-300 focus:border-blue-900">
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4" />
                                  {slot}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button type="submit" className="relative group w-full">
                      <div className="relative h-14 px-10 flex items-center justify-center cursor-pointer">
                        <div className="absolute inset-0 bg-blue-900 group-hover:bg-blue-800 transition-colors transform -skew-x-12"></div>
                        <span className="relative z-10 text-white uppercase tracking-wide flex items-center gap-2">
                          <Check className="w-5 h-5" />
                          Confirm Appointment
                        </span>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Features Sidebar */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-xl border-l-4 border-blue-900">
                  <h3 className="mb-4 text-black">
                    {feature.title}
                  </h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Additional Info Card */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-lg shadow-xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center transform -skew-x-12">
                    <div className="transform skew-x-12">
                      <Car className="w-6 h-6" />
                    </div>
                  </div>
                  <h3>Quick & Easy</h3>
                </div>
                <p className="text-blue-100">
                  Book your appointment in just a few clicks. Our team will confirm your booking within 2 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookingPage;
