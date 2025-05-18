import React from "react";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="bg-black py-12 w-full">
      <div className="w-full px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Us</h2>
        
        <div className="flex flex-col w-full border-t border-amber-200">
          {/* WhatsApp */}
          <div className="flex items-center justify-center gap-6 py-5 w-full border-b border-amber-200 px-[44rem]">
            <FaWhatsapp className="text-green-500 text-2xl " />
            <a 
              href="https://wa.me/628987654" 
              className="text-lg text-white hover:underline w-full text-center ml-2"
            >
              0898 7765 4
            </a>
          </div>
          
          {/* Instagram */}
          <div className="flex items-center justify-center gap-6 py-5 w-full border-b border-amber-200 px-[44rem]">
            <FaInstagram className="text-pink-500 text-2xl " />
            <a 
              href="https://instagram.com/nairasnacks" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg text-white hover:underline w-full text-center ml-2"
            >
              @nairasnacks
            </a>
          </div>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-6 py-5 w-full px-[44rem]">
            <FaMapMarkerAlt className="text-red-500 text-2xl " />
            <a 
              href="https://maps.google.com/?q=Naira+Snacks+Sentul" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg text-white hover:underline w-full text-center ml-2"
            >
              Naira Snacks Sentul
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;