import React from "react";
import {
  EnvelopeIcon,
  EnvelopeOpenIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaPaypal, FaApplePay, FaGooglePay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Newsletter Section */}
      <div className="bg-black rounded-xl md:rounded-2xl flex flex-col md:flex-row justify-between items-center mx-4 md:mx-8 lg:mx-16 p-6 md:p-12 lg:p-16 gap-6 md:gap-8 relative z-20 mb-[-80px] md:mb-[-100px]">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center md:text-left max-w-2xl">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
        <div className="w-full md:w-auto">
          <div className="flex flex-col gap-4 w-full max-w-md mx-auto md:mx-0">
            <div className="relative w-full bg-white rounded-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <EnvelopeIcon className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                className="text-black w-full pl-10 pr-4 py-3 rounded-full border-0 focus:ring-2 focus:ring-white/50 focus:outline-none text-sm md:text-base"
              />
            </div>
            <button className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-100 hover:cursor-pointer transition-colors whitespace-nowrap text-sm md:text-base w-full md:w-auto">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 bg-[#F0F0F0] relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
            <div className="flex items-center">
              <span className="font-extrabold text-2xl sm:text-3xl">SHOP.CO</span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Company
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {["About", "Features", "News", "Careers"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Help
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Links */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              FAQ
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {["Account", "Manage Deliveries", "Orders", "Payments"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Resources
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {["Free eBooks", "Development Tutorials", "How to - Blog", "Youtube Playlist"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; 2025 Shop.co. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-xs text-gray-400">Payment methods:</span>
            <div className="flex space-x-4">
              <span className=" text-sm">
                <FaPaypal className="w-10 h-10" />
              </span>
              <span className=" text-sm">
                <FaApplePay className="w-10 h-10" />
              </span>
              <span className=" text-sm">
                <FaGooglePay className="w-10 h-10" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
