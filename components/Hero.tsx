"use client";
import { useRouter } from "next/navigation";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showStats?: boolean;
  showButtons?: boolean;
}

export function Hero({ 
  title = "Your Trusted Auto Care Experts",
  subtitle = "Professional Automotive Service",
  description = "Professional automotive service and repair with certified mechanics. Quality workmanship, affordable pricing, and guaranteed satisfaction.",
  showStats = false,
  showButtons = true 
}: HeroProps) {
  const router = useRouter();

  return (
    <section className="relative h-[80vh] sm:h-[85vh] flex items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-135"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/video2.mp4" type="video/mp4" />
        </video>
        {/* Enhanced overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-blue-900/20"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center text-white space-y-8 sm:space-y-12">
          {/* Main Title */}
          <h1 className="animate-fade-in-up opacity-0 animation-delay-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font2 max-w-5xl leading-tight tracking-tight">
            {title.includes('Auto Care Experts') ? (
              <>
                Your Trusted{' '}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Auto Care Experts
                </span>
              </>
            ) : (
              title
            )}
          </h1>

          {/* CTA Buttons */}
          {showButtons && (
            <div className="animate-fade-in-up opacity-0 animation-delay-600 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md sm:max-w-none justify-center">
              <button 
                className="group rhombus-btn bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold w-full sm:w-auto transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                onClick={() => router.push('/booking')}
              >
                <span className="flex items-center justify-center gap-2">
                  Book Appointment
               
                </span>
              </button>
              <button 
                className="group rhombus-btn bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold w-full sm:w-auto transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-white/20"
                onClick={() => window.open('tel:+1234567890')}
              >
                <span className="flex items-center justify-center gap-2">
                 
                  Call Us Now
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}
