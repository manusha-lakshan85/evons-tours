import React from "react";
import logo from "../assets/logoL.png";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <img
            src={logo}
            alt="Evon's Tours"
            className="h-16 mb-4 hover:scale-105 transition"
          />

          <p className="text-sm text-justify">
            Discover the beauty of Sri Lanka with our customized tours,
            comfortable transport, and unforgettable travel experiences.
          </p>
        </div>

        {/* QUICK LINKS */}
       <div className="text-left">
  <h3 className="text-white font-semibold mb-4">Quick Links</h3>

  <ul className="space-y-2 text-sm">
    <li className="hover:text-white cursor-pointer">Home</li>
    <li className="hover:text-white cursor-pointer">About</li>
    <li className="hover:text-white cursor-pointer">Tours</li>
    <li className="hover:text-white cursor-pointer">Contact</li>
  </ul>
</div>

        {/* TOURS */}
        <div className="text-left">
  <h3 className="text-white font-semibold mb-4">Tour Packages</h3>

  <ul className="space-y-2 text-sm">
    <li className="hover:text-white cursor-pointer">Cultural Tour</li>
    <li className="hover:text-white cursor-pointer">Hill Country</li>
    <li className="hover:text-white cursor-pointer">Beach Tour</li>
    <li className="hover:text-white cursor-pointer">Custom Tours</li>
  </ul>
</div>

        {/* CONTACT */}
       <div className="text-left">
  <h3 className="text-white font-semibold mb-4">Contact Us</h3>

  <p className="flex items-center gap-2 text-sm mb-2">
    <FaPhoneAlt /> +94 74 038 1598
  </p>

  <p className="flex items-center gap-2 text-sm mb-4">
    <FaMapMarkerAlt /> Sri Lanka
  </p>

  <div className="flex gap-4 text-lg mt-4">
    <a href="#"><FaFacebookF /></a>
    <a href="#"><FaInstagram /></a>
    <a href="#"><FaWhatsapp /></a>
  </div>
</div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © 2026 Evon's Tours. All rights reserved. | Designed by Manusha Lakshan
      </div>

    </footer>
  );
}