import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Award, Menu, X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll-to-top behavior when route changes
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  // Track scroll position for navbar style
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mouse movement for glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDeveloperClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/developer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div
                className="w-14 h-14 bg-cover bg-center rounded-full"
                style={{
                  backgroundImage: "url('https://i.postimg.cc/wTyYPFSf/Screenshot-2025-01-28-235821-removebg-preview.png')",
                }}
              />
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Visakha Tech Solutions
                </span>
                <span className="hidden sm:block text-xs text-gray-600">
                  (AN ISO 9001:2015 CERTIFIED COMPANY)
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-0.5 bg-blue-600 bottom-[-4px]"
                    />
                  )}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all flex items-center"
              >
                Get a Quote <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4"
              >
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`text-sm font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'text-blue-600'
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full text-center hover:shadow-lg transition-all flex items-center justify-center"
                  >
                    Get a Quote <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-[#0c0118] to-black text-white overflow-hidden">
        {/* Floating Glow Effect */}
        <div
          className="absolute w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse pointer-events-none"
          style={{
            left: `${mousePosition.x - 128}px`,
            top: `${mousePosition.y - 128}px`,
            transition: 'left 0.1s ease-out, top 0.1s ease-out',
          }}
        ></div>

        {/* Footer Content */}
        <div className="px-4 md:px-6 lg:px-8 py-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 relative">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img
                  src="https://i.postimg.cc/wTBMqHXh/Whats-App-Image-2025-03-07-at-9-02-53-PM.png"
                  alt="Logo"
                  className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">Visakha Tech Solutions</h3>
                  <p className="text-sm text-gray-400 mt-1">ISO 9001:2015 Certified</p>
                </div>
              </div>
              <p className="text-gray-400">
                Bridging the gap between electrical and mechanical engineering for smarter, future-ready systems.
              </p>
              <div className="flex space-x-4">
                <a href="#!" className="text-blue-400 hover:text-blue-300 transition-colors hover:scale-110">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a href="#!" className="text-blue-400 hover:text-blue-300 transition-colors hover:scale-110">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" className="w-6 h-6" />
                </a>
                <a href="#!" className="text-blue-400 hover:text-blue-300 transition-colors hover:scale-110">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold border-b-2 border-blue-600 pb-2">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-blue-400 transition-colors hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold border-b-2 border-blue-600 pb-2">Contact Us</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-blue-400 animate-pulse" />
                  <div>
                    <p className="text-gray-400">Kusumuru Manideep</p>
                    <a href="tel:+917702119852" className="hover:text-blue-400">+91-7702119852</a>
                    <a href="tel:+919121419852" className="hover:text-blue-400 ml-2">+91-9121419852</a>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-blue-400 animate-pulse" />
                  <a href="mailto:Visakhatechsolutions@gmail.com" className="text-gray-400 hover:text-blue-400">
                    Visakhatechsolutions@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-400 animate-pulse" />
                  <p className="text-gray-400">
65-1-208/C, Pilakavanipalem, Coromandel, Sriharipuram, Visakhapatnam - 530011
Ph: 7702119852, 9121419852
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold border-b-2 border-blue-600 pb-2">Newsletter</h4>
              <p className="text-gray-400">Subscribe for industry insights and updates</p>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow hover:ring-blue-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
            © {new Date().getFullYear()} Visakha Tech Solutions. All rights{' '}
            <button
              onClick={handleDeveloperClick}
              className="text-gray-500 hover:text-blue-400 transition-colors"
            >
              reserved
            </button>
            .
          </div>
        </div>
      </footer>
    </div>
  );
}