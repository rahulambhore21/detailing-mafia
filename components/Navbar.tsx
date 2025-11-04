"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
} from "lucide-react";
import logoImage from "@/public/logoimg.png";

interface NavbarProps {
  currentPage:
    | "home"
    | "about"
    | "services"
    | "service-detail"
    | "experience"
    | "blog"
    | "contact"
    | "booking";
  onNavigate: (
    page:
      | "home"
      | "about"
      | "services"
      | "service-detail"
      | "experience"
      | "blog"
      | "contact"
      | "booking",
    serviceTitle?: string
  ) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* --- Top Bar --- */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs sm:text-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">+91 80-100-44000</span>
            <span className="sm:hidden">Call Us</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {[Facebook, Instagram, Youtube, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-blue-300 transition-colors">
                <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            ))}
            <div
              onClick={() => onNavigate("booking")}
              className="hidden sm:block ml-4"
            >
              <div className="relative h-8 sm:h-9 px-4 sm:px-6 flex items-center justify-center cursor-pointer transform -skew-x-12">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform -skew-x-12 shadow-md shadow-blue-900/30"></div>
                <span className="relative z-10 skew-x-12 text-white text-xs sm:text-sm font-semibold uppercase tracking-wide">
                  Book Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <div className="bg-black/40 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div
            onClick={() => onNavigate("home")}
            className="cursor-pointer flex items-center"
          >
            <div className="relative h-16 sm:h-20 px-4 sm:px-6 flex items-center bg-black/25 transform -skew-x-12">
              <div className="absolute inset-0 bg-black/30 -skew-x-12"></div>
              <div className="relative z-10 skew-x-12">
                <Image
                  src={logoImage}
                  alt="Logo"
                  height={40}
                  width={120}
                  className="sm:h-[60px] sm:w-[160px] object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            { [
              { label: "Home", key: "home" },
              { label: "About", key: "about" },
              { label: "Services", key: "services" },
              { label: "Experience", key: "experience" },
              { label: "Blog", key: "blog" },
              { label: "Contact", key: "contact" },
            ].map((item) => (
              <div
                key={item.key}
                className="relative cursor-pointer group"
                onClick={() => onNavigate(item.key as any)}
              >
                {/* Outer rhombus */}
                <div
                  className={`relative w-20 xl:w-24 h-10 xl:h-12 flex items-center justify-center transition-all duration-300 rhombus-btn ${
                    currentPage === item.key
                      ? "bg-gradient-to-r from-blue-600 to-blue-800"
                      : "bg-gradient-to-r from-blue-600 to-blue-800 group-hover:from-blue-700 group-hover:to-blue-900"
                  }`}
                >
                  {/* Text */}
                  <span className="absolute text-white font-medium text-xs xl:text-sm select-none">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6 text-blue-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gradient-to-r from-blue-600 to-blue-800 backdrop-blur-md py-4 border-t border-blue-800">
            <div className="flex flex-col gap-2 px-4 sm:px-6">
              { [
                { label: "Home", key: "home" },
                { label: "About", key: "about" },
                { label: "Services", key: "services" },
                { label: "Experience", key: "experience" },
                { label: "Blog", key: "blog" },
                { label: "Contact", key: "contact" },
                { label: "Book Now", key: "booking" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key as any);
                    setIsMenuOpen(false);
                  }}
                  className={`py-3 px-4 text-left text-white uppercase rounded-md text-sm transition-colors ${
                    item.key === "booking"
                      ? "bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800"
                      : currentPage === item.key
                      ? "bg-blue-800/50"
                      : "hover:bg-gradient-to-r hover:from-blue-800/40 hover:to-blue-900/40"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
