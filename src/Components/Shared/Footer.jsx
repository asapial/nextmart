import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bgnav text-green-900 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-green-900"
            >
              <path d="M22.672 15.226l-2.432.811..."></path>
            </svg>
            <span className="text-xl font-bold">NextMart</span>
          </div>
          <p className="text-green-900">
            Your one-stop shop for quality products and deals. Bringing premium shopping experience to your doorstep.
          </p>
          <div className="flex items-center gap-3 mt-3">
            <FaFacebookF className="hover:text-cyan-300 transition cursor-pointer" />
            <FaTwitter className="hover:text-cyan-300 transition cursor-pointer" />
            <FaInstagram className="hover:text-cyan-300 transition cursor-pointer" />
            <FaLinkedinIn className="hover:text-cyan-300 transition cursor-pointer" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h6 className="font-semibold text-lg mb-4 border-b border-green-900 pb-2">Services</h6>
          <ul className="space-y-2">
            <li className="hover:text-cyan-300 transition cursor-pointer">Branding</li>
            <li className="hover:text-cyan-300 transition cursor-pointer">Design</li>
            <li className="hover:text-cyan-300 transition cursor-pointer">Marketing</li>
            <li className="hover:text-cyan-300 transition cursor-pointer">Advertisement</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="font-semibold text-lg mb-4 border-b border-green-900 pb-2">Company</h6>
          <ul className="space-y-2">
            <li className="hover:text-cyan-300 transition cursor-pointer">About us</li>
            <li className="hover:text-cyan-300 transition cursor-pointer">Contact</li>
            <li className="hover:text-cyan-300 transition cursor-pointer">Jobs</li>
            <li className="hover:text-cyan-300 transition cursor-pointer">Press kit</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h6 className="font-semibold text-lg mb-4 border-b border-green-900 pb-2">Newsletter</h6>
          <p className="text-green-900 mb-3">Subscribe to get latest updates and offers</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg outline-none bg-green-200 text-cyan-800 w-full"
            />
            <button className="px-4 py-2 bg-green-900 text-indigo-600 font-semibold rounded-r-lg hover:bg-cyan-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-green-900 pt-4 text-center text-green-900 text-sm">
        &copy; {new Date().getFullYear()} NextMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
