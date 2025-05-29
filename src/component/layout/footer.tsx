import React from "react";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div id="contact" className="bg-gradient-to-b from-gray-900 to-black py-16 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center uppercase tracking-wide relative">
          <span className="text-amber-500">Connect</span> With Us
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* WhatsApp Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-center shadow-lg border border-amber-500/30">
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaWhatsapp className="text-emerald-500 text-3xl" />
            </div>
            <h3 className="text-white text-2xl mb-4">WhatsApp Order</h3>
            <a 
              href="https://wa.me/+62 857-1752-2780" 
              className="text-amber-500 text-xl block mb-2 no-underline font-semibold tracking-wide"
            >
              +62 857-1752-2780
            </a>
            <p className="text-slate-400 text-base italic">Fast response within 15 minutes!</p>
          </div>
          
          {/* Instagram Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-center shadow-lg border border-amber-500/30">
            <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaInstagram className="text-pink-500 text-3xl" />
            </div>
            <h3 className="text-white text-2xl mb-4">Instagram</h3>
            <a 
              href="https://instagram.com/nairasnacks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500 text-xl block mb-2 no-underline font-semibold tracking-wide"
            >
              @nairasnacks
            </a>
            <p className="text-slate-400 text-base italic">Check our delicious snacks gallery!</p>
          </div>
          
          {/* Location Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-center shadow-lg border border-amber-500/30">
            <div className="bg-gradient-to-br from-red-500/20 to-red-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaMapMarkerAlt className="text-red-500 text-3xl" />
            </div>
            <h3 className="text-white text-2xl mb-4">Our Location</h3>
            <a 
              href="https://maps.google.com/?q=Naira+Snacks+Sentul" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500 text-xl block mb-2 no-underline font-semibold tracking-wide"
            >
              Naira Snacks Sentul
            </a>
            <p className="text-slate-400 text-base italic">Visit us for fresh snacks daily!</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl text-white mb-4">
            Hungry for our snacks?
          </h3>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto text-lg">
           
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-amber-400 text-black font-bold py-4 px-10 rounded-full text-lg">
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;