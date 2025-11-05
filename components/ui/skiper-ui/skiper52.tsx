"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useCallback, useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";
import { servicesData } from "@/data/servicesData";

interface ServiceImage {
  src: string;
  alt: string;
  code: string;
  description?: string;
  serviceTitle: string; // Add this to match servicesData keys
}

interface Skiper52Props {
  onServiceClick?: (serviceTitle: string) => void;
}

const Skiper52 = ({ onServiceClick }: Skiper52Props) => {
  // Create images array from servicesData
  const images: ServiceImage[] = [
    {
      src: "/engine diagnose.jpg",
      alt: "Engine Diagnostics",
      code: "Engine Diagnostics",
      serviceTitle: "Engine Diagnostics",
      description:
        "Advanced computer diagnostics to identify engine issues quickly and accurately",
    },
    {
      src: "/Oil Change & Maintenance.jpg",
      alt: "Oil Change & Maintenance",
      code: "Oil Change",
      serviceTitle: "Oil Change & Maintenance",
      description:
        "Regular maintenance to keep your engine running smoothly and efficiently",
    },
    {
      src: "/General Repairs.jpg",
      alt: "General Repairs",
      code: "General Repairs",
      serviceTitle: "General Repairs",
      description: "Comprehensive automotive repair services for all makes and models",
    },
    {
      src: "/Electrical Systems.jpg",
      alt: "Electrical Systems",
      code: "Electrical",
      serviceTitle: "Electrical Systems",
      description: "Expert electrical system diagnostics and repair services",
    },
    {
      src: "/Brake Services.jpg",
      alt: "Brake Services",
      code: "Brake Services",
      serviceTitle: "Brake Services",
      description: "Safety-first brake inspection, repair, and replacement services",
    },
    {
      src: "/Tire Services.jpg",
      alt: "Tire Services",
      code: "Tire Services",
      serviceTitle: "Tire Services",
      description: "Complete tire services including installation, balancing, and alignment",
    },
    {
      src: "/Transmission Service.jpg",
      alt: "Transmission Service",
      code: "Transmission",
      serviceTitle: "Transmission Service",
      description: "Specialized transmission diagnostics, repair, and maintenance",
    },
    {
      src: "/AC & Heating.jpg",
      alt: "AC & Heating",
      code: "AC & Heating",
      serviceTitle: "AC & Heating",
      description: "Climate control system repair and maintenance for year-round comfort",
    },
    {
      src: "/Detailing Services.jpg",
      alt: "Detailing Services",
      code: "Detailing",
      serviceTitle: "Detailing Services",
      description: "Professional car detailing to restore your vehicle's showroom shine",
    },
  ];

  const handleCardClick = (serviceTitle: string) => {
    if (onServiceClick) {
      onServiceClick(serviceTitle);
    }
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 ">
            Services
          </h2>
        </div>
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
          <HoverExpand_001 images={images} onCardClick={handleCardClick} />
        </div>
      </div>
    </section>
  );
};

export { Skiper52 };

const HoverExpand_001 = ({
  images,
  className,
  onCardClick,
}: {
  images: ServiceImage[];
  className?: string;
  onCardClick: (serviceTitle: string) => void;
}) => {
  const [activeImage, setActiveImage] = useState<number>(1);

  const handleImageClick = useCallback((index: number) => {
    setActiveImage(index);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, index: number) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActiveImage(index);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }
    },
    [images.length]
  );

  // Auto-rotate through images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={cn("relative w-full max-w-7xl", className)}
    >
      <div className="flex w-full items-center justify-center gap-2 p-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-2xl shadow-xl focus-within:ring-4 focus-within:ring-blue-500/50 focus-within:outline-none group"
            initial={{
              width: index === 1 ? "24rem" : "5rem",
              height: "28rem",
            }}
            animate={{
              width: activeImage === index ? "28rem" : "6rem",
              height: "32rem",
              scale: activeImage === index ? 1.02 : 0.98,
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
              scale: { duration: 0.3 },
            }}
            whileHover={{
              scale: activeImage === index ? 1.03 : 1,
              y: activeImage === index ? -4 : -2,
            }}
            onClick={() => {
              handleImageClick(index);
              onCardClick(image.serviceTitle); // Use serviceTitle for navigation
            }}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={0}
            role="button"
            aria-label={`View ${image.alt} service details`}
            aria-pressed={activeImage === index}
          >
            {/* Image */}
            <motion.img
              src={image.src}
              className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt={image.alt}
              loading="lazy"
            />

            {/* Overlay gradients */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeImage === index ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Content overlay */}
            <AnimatePresence mode="wait">
              {activeImage === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex flex-col items-start justify-end p-8"
                >
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-4 font-medium"
                  >
                    {image.code}
                  </motion.div>

                  <motion.h3
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-3xl font-bold text-white mb-3 leading-tight"
                  >
                    {image.alt}
                  </motion.h3>

                  <motion.p
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="text-white/90 text-base leading-relaxed mb-4"
                  >
                    {image.description}
                  </motion.p>

                  <motion.button
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onCardClick(image.serviceTitle);
                    }}
                    className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Learn More
                    <motion.svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <path d="m9 18 6-6-6-6" />
                    </motion.svg>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Inactive state indicator */}
            {activeImage !== index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform -rotate-90"
                  whileHover={{ scale: 1.1, rotate: -90 }}
                >
                  <span className="text-white font-semibold text-sm whitespace-nowrap">
                    {image.code}
                  </span>
                </motion.div>
              </motion.div>
            )}

            {/* Focus indicator */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-focus:ring-blue-500 transition-all duration-200" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export { HoverExpand_001 };

/**
 * Skiper 52 HoverExpand_001 — React + Framer Motion
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
