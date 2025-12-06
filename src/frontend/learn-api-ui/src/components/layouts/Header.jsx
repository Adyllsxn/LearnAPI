import { useState, useEffect } from "react";
import { NAVBAR } from "@/constants/headerConstant.js";
import { IMG } from "@/constants/imagesConstants.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-black/95 backdrop-blur-xl border-b border-red-900/30" 
        : "bg-gradient-to-b from-black to-black/90 backdrop-blur-lg"
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <a 
            href="#" 
            className="group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-orange-500/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <img
                src={IMG.imgLogo}
                alt="Logo"
                className="relative w-24 h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              {NAVBAR.links.map((link, index) => (
                <a
                  key={index}
                  href={link === "Swagger API" ? "https://learnapi-h22m.onrender.com" : `#${link.toLowerCase()}`}
                  target={link === "Swagger API" ? "_blank" : "_self"}
                  rel={link === "Swagger API" ? "noopener noreferrer" : ""}
                  className="relative group py-2"
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">
                    {link}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-400 group-hover:w-full transition-all duration-300"></span>
                  
                  {link === "Swagger API" && (
                    <span className="absolute -top-1 -right-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-red-500 to-orange-500"></span>
                      </span>
                    </span>
                  )}
                </a>
              ))}
            </div>
          </nav>

          {/* HAMBURGER BUTTON */}
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-gradient-to-r from-red-400 to-orange-400 rounded-full transition-all duration-300 ${
                open ? "w-6 rotate-45 translate-y-2" : "w-6"
              }`}></span>
              <span className={`block h-0.5 bg-gradient-to-r from-red-400 to-orange-400 rounded-full transition-all duration-300 ${
                open ? "w-6 opacity-0" : "w-6"
              }`}></span>
              <span className={`block h-0.5 bg-gradient-to-r from-red-400 to-orange-400 rounded-full transition-all duration-300 ${
                open ? "w-6 -rotate-45 -translate-y-2" : "w-6"
              }`}></span>
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}>
          <div className="bg-black/95 backdrop-blur-md rounded-xl border border-red-900/30 p-4">
            
            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              {NAVBAR.links.map((link, index) => (
                <a
                  key={index}
                  href={link === "Swagger API" ? "https://learnapi-h22m.onrender.com" : `#${link.toLowerCase()}`}
                  target={link === "Swagger API" ? "_blank" : "_self"}
                  rel={link === "Swagger API" ? "noopener noreferrer" : ""}
                  className="flex items-center gap-3 p-3 rounded-lg group transition-all duration-200 hover:bg-red-900/10"
                  onClick={() => setOpen(false)}
                >
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-red-500 to-orange-400 rounded-full"></div>
                  <span className="text-gray-200 group-hover:text-white font-medium flex-1">
                    {link}
                  </span>
                  {link === "Swagger API" && (
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
            
            {/* Mobile Badge */}
            <div className="mt-4 pt-4 border-t border-red-900/20">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-900/10 rounded-full">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-red-500 to-orange-400 rounded-full"></div>
                <span className="text-xs text-orange-400 font-medium">
                  API Documentation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}