"use client";

import { ChevronRight, Shield, Award, Users } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'service-detail' | 'experience' | 'blog' | 'contact' | 'booking', serviceTitle?: string) => void;
  title?: string;
  subtitle?: string;
  description?: string;
  showStats?: boolean;
  showButtons?: boolean;
}

export function Hero({ 
  onNavigate, 
  title = "Your Trusted Auto Care Experts",
  subtitle = "Professional Automotive Service",
  description = "Professional automotive service and repair with certified mechanics. Quality workmanship, affordable pricing, and guaranteed satisfaction.",
  showStats = true,
  showButtons = true 
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videoplayback.mp4" type="video/mp4" />
          {/* Fallback background image if video fails to load */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1596986752526-3be237187071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmVwYWlyJTIwc2hvcHxlbnwxfHx8fDE3NjE4MjI2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')"
            }}
          />
        </video>
        <div className="absolute inset-0 z-10 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 pointer-events-none"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-block bg-blue-900 px-4 py-2 rounded-full mb-6">
              <span className="text-sm">{subtitle}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              {title.includes('Auto Care Experts') ? (
                <>Your Trusted <span className="text-blue-900">Auto Care Experts</span></>
              ) : (
                title
              )}
            </h1>

            <p className="text-xl text-gray-300 mb-8">{description}</p>

            {showButtons && (
              <div className="flex flex-wrap gap-4 mb-12">
                <Button
                  onClick={() => onNavigate?.('booking')}
                  className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg"
                >
                  Book Appointment
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onNavigate?.('services')}
                  className="border-white text-black hover:bg-white hover:text-black px-8 py-6 text-lg"
                >
                  View Services
                </Button>
              </div>
            )}

            {showStats && (
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="w-8 h-8 text-blue-900" />
                  </div>
                  <div className="text-2xl mb-1">15+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-8 h-8 text-blue-900" />
                  </div>
                  <div className="text-2xl mb-1">5000+</div>
                  <div className="text-sm text-gray-400">Cars Repaired</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-8 h-8 text-blue-900" />
                  </div>
                  <div className="text-2xl mb-1">98%</div>
                  <div className="text-sm text-gray-400">Satisfaction Rate</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
