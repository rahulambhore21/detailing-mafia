"use client";

import Image from 'next/image';

function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      
      {/* 1. Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        {/* Offline Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/video1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </section>

      <div className="border-t border-gray-200"></div>

      {/* 2. About Us Section */}
      <section className="py-2 h-auto px-4 relative">
        {/* Blue-800 Diagonal Cut Background - Wedge Shape on Left */}
        <div 
          className="absolute top-0 left-0 w-3/5 h-full bg-blue-800"
          style={{
            clipPath: 'polygon(0 0, 70% 0, 50% 100%, 0 100%)'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4">ABOUT US</h2>
          <div className="grid lg:grid-cols-2 gap-3 items-center">
            <div className="ml-30">
              <Image 
                src="/images/car3.png" 
                alt="Expert Car Detailing Service"
                width={360}
                height={120}
               
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Mankind-Machine Car Care, we believe your vehicle deserves nothing less than perfection. Our expert technicians combine traditional craftsmanship with cutting-edge technology to deliver automotive detailing services that exceed the highest standards of luxury and precision.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over a decade of experience in premium automotive care, we have built our reputation on attention to detail, quality materials, and an unwavering commitment to customer satisfaction. Every vehicle that enters our facility receives the same meticulous care we would give to our own.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From paint correction and ceramic coating to interior restoration and protection services, we offer a comprehensive range of solutions designed to preserve and enhance your investment while delivering an unparalleled ownership experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200"></div>

      {/* 3. Obsessed With Quality Banner */}
      <section className="py-12 px-4 bg-gray-100 relative">
        {/* Background Image using Next.js Image */}
        <Image 
          src="/images/car4.svg"
          alt="Premium Car Care Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-blue-800/80 z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <h2 className="text-4xl font-bold mb-4 text-white">OBSESSED WITH QUALITY</h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            Every detail matters. Our commitment to excellence drives us to deliver automotive care services that exceed expectations and set new standards in the industry.
          </p>
        </div>
      </section>

      <div className="border-t border-gray-200"></div>

      {/* 5. Why Choose Us */}
      <section className="py-12 px-4 bg-gray-50 relative">
        {/* Background Image using Next.js Image */}
        <Image 
          src="/images/car5.png"
          alt="Why Choose Us Background"
          fill
          className="object-cover"
          priority
        />
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-white/90 z-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <h2 className="text-4xl font-bold text-center mb-12">Why The Detailing Experts?</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {[{
              title: "Expert Technicians",
              desc: "Certified professionals with years of experience in luxury automotive detailing and paint protection services.",
              image: "/images/exptech.png"
            },
            {
              title: "Premium Products",
              desc: "We use only the finest materials and products from industry-leading brands to ensure exceptional results.",
              image: "/images/prempro.png"
            },
            {
              title: "Advanced Equipment",
              desc: "State-of-the-art tools and technology enable us to deliver precision results with maximum efficiency.",
              image: "/images/adveq.png"
            },
            {
              title: "Quality Guarantee",
              desc: "Every service comes with our satisfaction guarantee, ensuring your complete confidence in our work.",
              image: "/images/car6.png"
            }].map((card, index) => (
              <div key={index} className="bg-blue-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-700 overflow-hidden">
                <div className="grid grid-cols-2 gap-0 h-48">
                  <div className="relative overflow-hidden">
                    <Image 
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-lg font-bold mb-3 text-white">{card.title}</h3>
                    <p className="text-blue-100 leading-relaxed text-sm">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200"></div>

      {/* 6. Key Benefits */}
      <section className="py-12 px-4 relative">
        {/* Blue-800 Diagonal Cut Background - Wedge Shape on Right */}
        <div 
          className="absolute top-0 right-0 w-3/5 h-full bg-blue-800"
          style={{
            clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 50% 100%)'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-8">KEY BENEFITS</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Experience the ultimate in automotive luxury with our comprehensive detailing services. From paint correction that restores your vehicle's original brilliance to ceramic coating protection that maintains that showroom finish for years to come.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our meticulous attention to detail extends to every surface, ensuring your interior receives the same premium care as your exterior. Professional-grade products and techniques preserve value while enhancing the driving experience you deserve.
              </p>
            </div>
            <div className="mr-30">
              <Image 
                src="/images/car6.png" 
                alt="Premium Car Detailing Benefits"
                width={500}
                height={340}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200"></div>

      {/* 7. Benefits Icons Grid */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title: "Professional Service",
              desc: "Expert technicians deliver consistent, high-quality results using proven methods and premium materials every time."
            },
            {
              title: "Time Efficiency",
              desc: "Streamlined processes and advanced equipment ensure your vehicle receives exceptional care without unnecessary delays."
            },
            {
              title: "Cost Effective",
              desc: "Comprehensive packages and long-lasting protection provide exceptional value for your automotive investment."
            },
            {
              title: "Quality Assurance",
              desc: "Rigorous quality control standards and satisfaction guarantees ensure every service meets our exacting requirements."
            },
            {
              title: "Customer Support",
              desc: "Dedicated support team provides ongoing assistance and expert advice to maintain your vehicle's pristine condition."
            },
            {
              title: "Satisfaction Guarantee",
              desc: "Your complete satisfaction is our priority, backed by our commitment to excellence and quality workmanship."
            }].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;