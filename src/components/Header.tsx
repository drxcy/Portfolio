import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className=" " >
      <div className="">
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg translate-y-0' 
        : 'bg-white translate-y-0'
    } flex justify-between items-center md:px-1 lg:px-2 font-Sora transition-colors duration-300`}>
      {/* Logo Section - Left */}
      <div className="w-[45%] md:w-[25%] py-4">
        <Link to="/" className="font-bold text-3xl md:text-4xl text-gradient-brand hover:opacity-80 transition-opacity px-8">
          WebServices
        </Link>
      </div>

      {/* Navigation - Center */}
      <nav className="space-x-6 hidden md:flex">
        <Link 
          to="/" 
          className="nav-link text-black md:text-sm lg:text-xl hover:text-purple-400 transition-colors py-4"
        >
          Home
        </Link>
        <Link 
          to="/packages" 
          className="nav-link text-black md:text-sm lg:text-xl hover:text-purple-400 transition-colors py-4"
        >
          Services
        </Link>
        <Link 
          to="/quote" 
          className="nav-link text-black md:text-sm lg:text-xl hover:text-purple-400 transition-colors py-4"
        >
          Why us
        </Link>
        <Link 
          to="/client" 
          className="nav-link text-black md:text-sm lg:text-xl hover:text-purple-400 transition-colors py-4"
        >
          Tech
        </Link>
        <Link 
          to="/admin" 
          className="nav-link text-black md:text-sm lg:text-xl hover:text-purple-400 transition-colors py-4"
        >
          Testimonials
        </Link>
        <Link 
          to="/quote" 
          className="nav-link text-black md:text-sm lg:text-xl hover:text-purple-400 transition-colors py-4"
        >
          Contact
        </Link>
      </nav>

      {/* CTA Button - Right */}
      <div className="flex items-center space-x-4 text-white hover:text-black py-4">
        <div className="lg:text-lg text-sm mr-1 rounded-full flex items-center transition ease-in-out delay-100 md:px-6 md:py-4 px-3 py-4 bg-gradient-to-r from-[#8c5be6] to-[#2a1454] hover:scale-105 transform transition-transform">
          <MessageCircle className="visible" height="1em" width="1em" />
          <Link 
            to="/quote" 
            className="ml-3 font-semibold"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full border-t border-gray-200 bg-white/95 backdrop-blur-md">
          <nav className="flex flex-col py-4 space-y-4" aria-label="Mobile navigation">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/packages" 
              className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/quote" 
              className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Works
            </Link>
            <Link 
              to="/client" 
              className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tech
            </Link>
            <Link 
              to="/admin" 
              className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/quote" 
              className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-4 pt-2">
              <div className="rounded-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#8c5be6] to-[#2a1454] text-white hover:scale-105 transform transition-transform">
                <MessageCircle className="mr-2" size={16} />
                <span className="font-semibold">Get Started</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
      </div>
    </div>
  );
};

export default Header; 