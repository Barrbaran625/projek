'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll'; 

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/", icon: "🍳" },
    { name: "MENU", path: "/menu", icon: "📋" },
    { name: "ABOUT", path: "/about", icon: "🌟" },
    { 
      name: "CONTACT", 
      path: "contact", // This will be the ID of your footer section
      icon: <FaPhoneAlt className="text-white" />,
      isScroll: true // Flag to identify scrollable links
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-[#b33434] to-[#d14e4e] sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top Promo Banner */}
        <div className="bg-amber-400 text-black text-center py-1 text-sm font-bold">
          🚀 FREE Ongkir sekitar Sentul dan Tanah Baru!
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
              item.isScroll ? (
                <ScrollLink
                  key={item.path}
                  to={item.path}
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust this if you have a fixed header
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-white font-medium transition-all cursor-pointer ${
                    pathname === `/${item.path}` 
                      ? "bg-white/20 backdrop-blur-sm" 
                      : "hover:bg-white/10 hover:scale-105"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.name}
                </ScrollLink>
              ) : (
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
              )
            ))}
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
            item.isScroll ? (
              <ScrollLink
                key={item.path}
                to={item.path}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={toggleMenu}
                className={`flex items-center gap-3 py-4 px-5 text-white text-lg border-b border-white/10 cursor-pointer ${
                  pathname === `/${item.path}` ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {item.name}
              </ScrollLink>
            ) : (
              <Link href={item.path} key={item.path} onClick={toggleMenu}>
                <div className={`flex items-center gap-3 py-4 px-5 text-white text-lg border-b border-white/10 ${
                  pathname === item.path ? "bg-white/20" : "hover:bg-white/10"
                }`}>
                  <span className="text-xl">{item.icon}</span>
                  {item.name}
                </div>
              </Link>
            )
          ))}
          
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;