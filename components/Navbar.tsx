"use client";

import { useState } from "react";
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
// import logoImage from "figma:asset/4f860c7eb80666541441a4070f0faf78454e465d.png";

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

export function Navbar({
  currentPage,
  onNavigate,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<
    string | null
  >(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
  {/* Top bar */}
  <div className="bg-blue-900">
        <div className="max-w-[1400px] mx-auto px-4 py-2 px-[10px] py-[0px]">
          <div className="flex items-center justify-between text-white text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              <span>+91-80-100-44000</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <div className="hidden lg:flex items-center gap-3 ml-6">
                <div
                    className="relative group"
                    onClick={() => onNavigate("booking")}
                  >
                    <div className="relative h-10 px-6 flex items-center justify-center cursor-pointer">
                      <div className="absolute left-[-14px] top-[3px] bottom-[3px] w-[18px] bg-black transform -skew-x-12"></div>
                      <div
                        className={`absolute inset-0 bg-black transition-colors transform -skew-x-12 mx-[0px] my-[3px]`}
                      ></div>
                      <span
                        className={`relative z-10 ${currentPage === "booking" ? "text-white" : "text-white"} text-sm uppercase tracking-wide`}
                      >
                        Book Now
                      </span>
                    </div>
                  </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
  <div className="bg-black/25 border-black">
        <div className="max-w-[1400px] mx-auto px-4 ">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 mr-8">
              <div
                onClick={() => onNavigate("home")}
                className="block cursor-pointer"
              >
                <div className="relative h-20 px-8 flex items-center bg-black/25">
                  {/* Black skewed background */}
                  <div className="absolute inset-0 bg-black/25 -skew-x-12"></div>

                  {/* Content */}
                  <div className="relative z-10 flex items-center">
                    {/* Logo Image */}
                    <div className="text-2xl font-bold text-white">
                      SHRI KRISHNA <span className="text-blue-900">AUTOMOBILE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Home - Rhombus */}
              <div
                className="relative group"
                onClick={() => onNavigate("home")}
              >
                <div className="relative h-10 px-6 flex items-center justify-center cursor-pointer">
                  <div className="absolute left-[-14px] top-[3px] bottom-[3px] w-[18px] bg-blue-900 transform -skew-x-12"></div>
                  <div className="absolute inset-0 bg-blue-900 hover:bg-blue-800 transition-colors transform -skew-x-12"></div>
                  <span
                    className={`relative z-10 ${currentPage === "home" ? "text-white" : "text-white"} text-sm uppercase tracking-wide`}
                  >
                    Home
                  </span>
                </div>
              </div>

              {/* About Us - Rhombus */}
              <div
                className="relative group"
                onClick={() => onNavigate("about")}
              >
                <div className="relative h-10 px-6 flex items-center justify-center cursor-pointer">
                  <div className="absolute left-[-14px] top-[3px] bottom-[3px] w-[18px] bg-blue-900 transform -skew-x-12"></div>
                  <div className="absolute inset-0 bg-blue-900 hover:bg-blue-800 transition-colors transform -skew-x-12"></div>
                  <span className="relative z-10 text-white text-sm uppercase tracking-wide">
                    About
                  </span>
                </div>
              </div>

              {/* Services - Rhombus */}
              <div
                className="relative group"
                onClick={() => onNavigate("services")}
              >
                <div className="relative h-10 px-6 flex items-center justify-center cursor-pointer">
                  <div className="absolute left-[-14px] top-[3px] bottom-[3px] w-[18px] bg-blue-900 transform -skew-x-12"></div>
                  <div className="absolute inset-0 bg-blue-900 hover:bg-blue-800 transition-colors transform -skew-x-12"></div>
                  <span className="relative z-10 text-white text-sm uppercase tracking-wide">
                    Services
                  </span>
                </div>
              </div>
              {/* Experience - Rhombus */}
              <div
                className="relative group"
                onClick={() => onNavigate("experience")}
              >
                <div className="relative h-10 px-6 flex items-center justify-center cursor-pointer">
                  <div className="absolute left-[-14px] top-[3px] bottom-[3px] w-[18px] bg-blue-900 transform -skew-x-12"></div>
                  <div className="absolute inset-0 bg-blue-900 hover:bg-blue-800 transition-colors transform -skew-x-12"></div>
                  <span className="relative z-10 text-white text-sm uppercase tracking-wide">
                    Experience
                  </span>
                </div>
              </div>

              {/* Blog - Rhombus */}
              <div
                className="relative group"
                onClick={() => onNavigate("blog")}
              >
                <div className="relative h-10 px-6 flex items-center justify-center cursor-pointer">
                  <div className="absolute left-[-14px] top-[3px] bottom-[3px] w-[18px] bg-blue-900 transform -skew-x-12"></div>
                  <div className="absolute inset-0 bg-blue-900 hover:bg-blue-800 transition-colors transform -skew-x-12"></div>
                  <span className="relative z-10 text-white text-sm uppercase tracking-wide">
                    Blog
                  </span>
                </div>
              </div>

              {/* Contact - Rhombus */}
              <div
                className="relative group"
                onClick={() => onNavigate("contact")}
              >
                <div className="relative h-10 px-6 flex items-center justify-center cursor-pointer">
                  <div className="absolute left-[-14px] top-[3px] bottom-[3px] w-[18px] bg-blue-900 transform -skew-x-12"></div>
                  <div className="absolute inset-0 bg-blue-900 hover:bg-blue-800 transition-colors transform -skew-x-12"></div>
                  <span className="relative z-10 text-white text-sm uppercase tracking-wide">
                    Contact
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                // Make the hamburger (three lines) royal dark blue
                <Menu className="w-6 h-6 text-blue-900" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-blue-900/20">
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    onNavigate("home");
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-blue-900 transition-colors py-2 px-4 bg-gray-900 rounded text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    onNavigate("about");
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-blue-900 transition-colors py-2 px-4 bg-gray-900 rounded text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    onNavigate("services");
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-blue-900 transition-colors py-2 px-4 bg-gray-900 rounded text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    onNavigate("experience");
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-blue-900 transition-colors py-2 px-4 bg-gray-900 rounded text-left"
                >
                  Experience
                </button>
                <button
                  onClick={() => {
                    onNavigate("blog");
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-blue-900 transition-colors py-2 px-4 bg-gray-900 rounded text-left"
                >
                  Blog
                </button>
                <button
                  onClick={() => {
                    onNavigate("contact");
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-blue-900 transition-colors py-2 px-4 bg-gray-900 rounded text-left"
                >
                  Contact
                </button>
                <button
                  onClick={() => {
                    onNavigate("booking");
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-blue-900 transition-colors py-2 px-4 bg-blue-900 rounded text-left"
                >
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}