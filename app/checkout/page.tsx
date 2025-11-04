"use client";

import { useState } from 'react';
import { 
  Car, 
  Calendar, 
  Clock, 
  Wrench, 
  CreditCard, 
  DoorOpen, 
  CheckCircle,
  MapPin,
  Phone
} from 'lucide-react';
import { Switch } from '../../components/ui/switch';

interface BookingData {
  vehicleType: string;
  vehicleNumber: string;
  serviceType: string;
  date: string;
  time: string;
  serviceCharge: number;
}

function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<'door' | 'online'>('door');
  const [doorPickup, setDoorPickup] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock booking data - in real app, this would come from props/context/state
  const bookingData: BookingData = {
    vehicleType: 'BMW X3 SUV',
    vehicleNumber: 'MH-12-AB-1234',
    serviceType: 'Premium Detailing Package',
    date: 'November 8, 2025',
    time: '10:00 AM',
    serviceCharge: 299
  };

  const doorPickupCost = 49;
  const totalAmount = bookingData.serviceCharge + (doorPickup ? doorPickupCost : 0);

  const handleConfirmBooking = async () => {
    setIsProcessing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In real app, navigate to success page or show success modal
    console.log('Booking confirmed:', {
      ...bookingData,
      paymentMethod,
      doorPickup,
      totalAmount
    });
    
    setIsProcessing(false);
    alert('Booking confirmed successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-24 pb-24 md:pb-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-2 rounded-full mb-4">
            <span className="text-white font-medium tracking-wide">Checkout</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Complete Your Booking
          </h1>
          <p className="text-gray-300 text-lg">
            Review your service details and confirm your appointment
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Left Column - Booking Summary */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-blue-400" />
                Booking Summary
              </h2>

              <div className="space-y-6">
                {/* Vehicle Info */}
                <div className="flex items-start gap-4 p-4 bg-gray-700/30 rounded-2xl border border-gray-600/30">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Car className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg">Vehicle</h3>
                    <p className="text-blue-300 font-medium">{bookingData.vehicleType}</p>
                    <p className="text-gray-400 text-sm">{bookingData.vehicleNumber}</p>
                  </div>
                </div>

                {/* Service Type */}
                <div className="flex items-start gap-4 p-4 bg-gray-700/30 rounded-2xl border border-gray-600/30">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg">Service</h3>
                    <p className="text-purple-300 font-medium">{bookingData.serviceType}</p>
                    <p className="text-gray-400 text-sm">Professional grade service</p>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="flex items-start gap-4 p-4 bg-gray-700/30 rounded-2xl border border-gray-600/30">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg">Schedule</h3>
                    <p className="text-green-300 font-medium">{bookingData.date}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <p className="text-gray-400 text-sm">{bookingData.time}</p>
                    </div>
                  </div>
                </div>

                {/* Pricing Breakdown */}
                <div className="border-t border-gray-600/50 pt-6">
                  <h3 className="text-white font-semibold text-lg mb-4">Pricing Details</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Service Charge</span>
                      <span className="text-white font-medium">${bookingData.serviceCharge}</span>
                    </div>
                    
                    {doorPickup && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Door Pickup & Drop</span>
                        <span className="text-white font-medium">${doorPickupCost}</span>
                      </div>
                    )}
                    
                    <div className="border-t border-gray-600/50 pt-3 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-white">Total Amount</span>
                        <span className="text-2xl font-bold text-blue-400">${totalAmount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment & Services */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Payment Method */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-blue-400" />
                Payment Method
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Pay at Door */}
                <div 
                  onClick={() => setPaymentMethod('door')}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer group hover:scale-105 ${
                    paymentMethod === 'door' 
                      ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20' 
                      : 'border-gray-600/50 bg-gray-700/30 hover:border-gray-500'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                      paymentMethod === 'door' 
                        ? 'border-blue-500 bg-blue-500' 
                        : 'border-gray-400'
                    }`}>
                      {paymentMethod === 'door' && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <DoorOpen className={`w-6 h-6 transition-colors duration-300 ${
                      paymentMethod === 'door' ? 'text-blue-400' : 'text-gray-400'
                    }`} />
                  </div>
                  <h3 className={`text-lg font-semibold mt-4 transition-colors duration-300 ${
                    paymentMethod === 'door' ? 'text-white' : 'text-gray-300'
                  }`}>
                    Pay at Door
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Pay when our team arrives at your location
                  </p>
                </div>

                {/* Pay Online */}
                <div 
                  onClick={() => setPaymentMethod('online')}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer group hover:scale-105 ${
                    paymentMethod === 'online' 
                      ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20' 
                      : 'border-gray-600/50 bg-gray-700/30 hover:border-gray-500'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                      paymentMethod === 'online' 
                        ? 'border-blue-500 bg-blue-500' 
                        : 'border-gray-400'
                    }`}>
                      {paymentMethod === 'online' && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <CreditCard className={`w-6 h-6 transition-colors duration-300 ${
                      paymentMethod === 'online' ? 'text-blue-400' : 'text-gray-400'
                    }`} />
                  </div>
                  <h3 className={`text-lg font-semibold mt-4 transition-colors duration-300 ${
                    paymentMethod === 'online' ? 'text-white' : 'text-gray-300'
                  }`}>
                    Pay Online
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Secure payment with card or digital wallet
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-400" />
                Additional Services
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Car className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Door Pickup & Drop</h3>
                      <p className="text-gray-400 text-sm">We'll pickup and deliver your vehicle</p>
                      <p className="text-orange-400 font-medium text-sm mt-1">+${doorPickupCost}</p>
                    </div>
                  </div>
                  <Switch
                    checked={doorPickup}
                    onCheckedChange={setDoorPickup}
                    className="data-[state=checked]:bg-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-blue-400" />
                <h3 className="text-white font-semibold">Need Help?</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Call us at <span className="text-blue-400 font-medium">+1 (555) 123-4567</span> for any questions about your booking.
              </p>
            </div>
          </div>
        </div>

        {/* Confirm Button - Always Visible */}
        <div className="mt-8">
          <button
            onClick={handleConfirmBooking}
            disabled={isProcessing}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-6 px-8 rounded-2xl text-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isProcessing ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Processing...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6" />
                Confirm Booking - ${totalAmount}
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sticky Button - Additional for mobile UX */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent md:hidden">
        <button
          onClick={handleConfirmBooking}
          disabled={isProcessing}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl"
        >
          {isProcessing ? (
            <div className="flex items-center justify-center gap-3">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Processing...
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Confirm - ${totalAmount}
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;