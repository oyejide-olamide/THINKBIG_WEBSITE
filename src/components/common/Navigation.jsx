import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Vision & Mission', path: '/vision-mission' },
    { name: 'Objectives', path: '/objectives' },
    { name: 'Sectors', path: '/sectors' },
    { name: 'Target Audience', path: '/audience' },
    { name: 'Speakers', path: '/speakers' },
    { name: "FAQ's", path: '/faq' },

  ];

  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`body fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-gray-900' : 'bg-black/80'} backdrop-blur-md px-6 py-4 transition-colors`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-1">
          <span className="text-white font-bold text-xl tracking-wider">THINK-BIG</span>
          <span className="text-white italic text-lg">Naija</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm transition-colors ${
                isActiveLink(item.path)
                  ? 'text-yellow-400 font-semibold'
                  : 'text-white hover:text-yellow-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="text-white p-2 hover:text-yellow-400 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button className="hidden md:block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors">
            Apply Now →
          </button>
            
          <Link to="/partner" className="hidden md:block border-2 border-white text-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition-colors text-sm">
            Partner With Us →
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-6 py-3 transition-colors ${
                isActiveLink(item.path)
                  ? 'bg-yellow-400 text-black font-semibold'
                  : 'text-white hover:bg-yellow-400 hover:text-black'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="px-6 py-3 space-y-2">
            <button className="w-full bg-yellow-400 text-black mb-4 px-6 py-2 rounded-full font-semibold">
              Apply Now →
            </button>

           
            <Link to="/partner" className="w-full border-2 border-white text-white px-6 py-2  rounded-full font-semibold">
              Partner With Us →
            </Link>
           
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;