import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Calendar } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#apropos', label: 'À Propos' },
    { href: '#programme', label: 'Programme' },
    { href: '#intervenants', label: 'Intervenants' },
    { href: '#inscription', label: 'Inscription' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' : 'bg-white/80 backdrop-blur-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <span className="text-white font-black text-xl">IO</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-900 hover:text-teal-700 transition-colors duration-300">IOCDAFRICA</h1>
              <p className="text-xs text-gray-600 font-bold">🌍 Tourisme Durable</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-800 hover:text-teal-600 transition-all duration-300 font-bold text-lg hover:scale-105 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Info rapide */}
          <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-700">
            <div className="flex items-center space-x-2 bg-teal-50 px-3 py-2 rounded-full border border-teal-200">
              <Calendar className="w-4 h-4" />
              <span className="font-bold">18-19 Sept</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-full border border-blue-200">
              <MapPin className="w-4 h-4" />
              <span className="font-bold">Île Maurice</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;