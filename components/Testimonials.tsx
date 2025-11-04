'use client'
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  rating: number;
  text: string;
  author: string;
  role: string;
  image: string;
  backgroundImage: string;
}

const TestimonialCard: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      rating: 5,
      text: "Very happy with the service provided, the seller is very friendly, there are many types of cars, we are very helpful with the seller's explanation so that we choose the right car for us",
      author: "RICHARD SANCHEZ",
      role: "Business man",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&h=800&fit=crop"
    },
    {
      rating: 5,
      text: "Exceptional detailing service! My car looks brand new. The attention to detail is incredible and the team was very professional throughout the entire process.",
      author: "SARAH JOHNSON",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&h=800&fit=crop"
    },
    {
      rating: 5,
      text: "Best car detailing experience I've ever had. They went above and beyond my expectations. Highly recommend their premium services to anyone looking for quality work.",
      author: "MICHAEL CHEN",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=800&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to testimonial index
  const testimonialProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, testimonials.length - 1]
  );

  useEffect(() => {
    const unsubscribe = testimonialProgress.onChange((latest) => {
      const index = Math.round(latest);
      setCurrentIndex(Math.max(0, Math.min(testimonials.length - 1, index)));
    });
    
    return () => unsubscribe();
  }, [testimonialProgress, testimonials.length]);

  const current = testimonials[currentIndex];

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    })
  };

  const backgroundVariants = {
    enter: {
      scale: 1.1,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0.9,
      opacity: 0,
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative"
      style={{ height: `${testimonials.length * 100}vh` }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              variants={backgroundVariants}
              animate={index === currentIndex ? "center" : "exit"}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${testimonial.backgroundImage}')`
                }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center p-4">
          <div className="max-w-6xl w-full">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Customer Testimonials
            </motion.h2>
            
            <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Content Container */}
              <div className="relative h-full grid grid-cols-1 md:grid-cols-2">
                {/* Left Side - Content */}
                <motion.div 
                  key={currentIndex}
                  className="relative bg-blue-600/90 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={1}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {/* Decorative dots - top right */}
                  <div className="absolute top-8 right-8 grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                      <motion.div 
                        key={i} 
                        className="w-2 h-2 bg-white/40 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      />
                    ))}
                  </div>

                  {/* Stars */}
                  <motion.div 
                    className="flex gap-1 mb-6"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {[...Array(current.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                      >
                        <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.blockquote 
                    className="text-white text-lg md:text-xl leading-relaxed mb-8"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    "{current.text}"
                  </motion.blockquote>

                  {/* Author Info */}
                  <motion.div 
                    className="flex items-center gap-4"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <motion.img 
                      src={current.image}
                      alt={current.author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                    />
                    <div>
                      <h3 className="text-white font-bold text-lg">{current.author}</h3>
                      <p className="text-white/80 text-sm">{current.role}</p>
                    </div>
                  </motion.div>

                  {/* Navigation Dots */}
                  <div className="mt-8 flex gap-3">
                    {testimonials.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`h-3 rounded-full transition-all ${
                          index === currentIndex 
                            ? 'bg-yellow-400 w-8' 
                            : 'bg-white/40 w-3'
                        }`}
                        layoutId={`dot-${index}`}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Right Side - Car silhouette or decorative element */}
                <motion.div 
                  className="relative hidden md:block"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {/* Decorative dots - bottom right */}
                  <div className="absolute bottom-8 right-8 grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                      <motion.div 
                        key={i} 
                        className="w-2 h-2 bg-yellow-400 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.9, duration: 0.3 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="text-white text-sm text-center">
            <div className="mb-2">Scroll to see more testimonials</div>
            <motion.div 
              className="w-1 h-8 bg-white/60 rounded-full mx-auto"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialCard;