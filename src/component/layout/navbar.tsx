'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaPhoneAlt, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(3); // Example cart count

  const navItems = [
    { name: "HOME", path: "/", icon: "🍳" },
    { name: "MENU", path: "/menu", icon: "📋" },
    { name: "ABOUT", path: "/about", icon: "🌟" },
    { name: "CONTACT", path: "/contact", icon: "📞" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-[#b33434] to-[#d14e4e] sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top Promo Banner */}
        <div className="bg-amber-400 text-black text-center py-1 text-sm font-bold">
          🚀 FREE Ongkir untuk pesanan di atas Rp 50.000!
        </div>

        <div className="flex justify-between items-center py-3">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16">
              <Image 
                src="/logo.JPEG" 
                alt="Naira Snack Logo" 
                fill 
                className="object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <h1 className="text-3xl font-bold text-white" style={{
              fontFamily: "'Pacifico', cursive",
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              <span className="block text-amber-300">Naira</span>
              <span className="text-white">Snack</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link href={item.path} key={item.path}>
                <button className={`flex items-center gap-2 px-5 py-3 rounded-full text-white font-medium transition-all ${
                  pathname === item.path 
                    ? "bg-white/20 backdrop-blur-sm" 
                    : "hover:bg-white/10 hover:scale-105"
                }`}>
                  <span className="text-xl">{item.icon}</span>
                  {item.name}
                </button>
              </Link>
            ))}
            
            {/* Call Button */}
            <a href="tel:089877654" className="ml-4 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-bold transition-all">
              <FaPhoneAlt />
              Order Now
            </a>
            
            {/* Cart Indicator */}
            <button className="ml-4 relative p-3 text-white hover:text-amber-300">
              <FaShoppingCart className="text-2xl" />
              <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems}
              </span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`w-8 h-1 bg-white mb-1.5 transition-all ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></div>
            <div className={`w-8 h-1 bg-white mb-1.5 transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-8 h-1 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#a02d2d] pb-6 px-4 animate-slideDown">
          {navItems.map((item) => (
            <Link href={item.path} key={item.path} onClick={toggleMenu}>
              <div className={`flex items-center gap-3 py-4 px-5 text-white text-lg border-b border-white/10 ${
                pathname === item.path ? "bg-white/20" : "hover:bg-white/10"
              }`}>
                <span className="text-xl">{item.icon}</span>
                {item.name}
              </div>
            </Link>
          ))}
          
          <div className="flex gap-4 mt-4 px-2">
            <a href="tel:089877654" className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-lg font-bold">
              <FaPhoneAlt />
              Call Us
            </a>
            <button className="flex-1 flex items-center justify-center gap-2 bg-amber-500 text-black py-3 px-4 rounded-lg font-bold">
              <FaShoppingCart />
              Cart ({cartItems})
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;