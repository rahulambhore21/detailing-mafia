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
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 scale-130"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videoplayback.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col items-center text-center text-white">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-12 font2 max-w-4xl">
            {title.includes('Auto Care Experts') ? (
              <>Your Trusted <span className="text-blue-400">Auto Care Experts</span></>
            ) : (
              title
            )}
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              className="rhombus-btn px-8 py-4 text-lg font-semibold"
              onClick={() => router.push('/booking')}
            >
              Book Appointment
            </button>
            <button 
              className="rhombus-btn px-8 py-4 text-lg font-semibold"
              onClick={() => window.open('tel:+1234567890')}
            >
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
