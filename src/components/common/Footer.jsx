import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { Locate, FacebookIcon, Linkedin, Instagram, Twitter, Contact, Facebook } from 'lucide-react';

const Footer = () => {
  const { isDark } = useTheme();
  
  return (
    <footer className={`body ${isDark ? 'bg-gray-900' : 'bg-gray-900'} text-white`}>
      <div>
        {/* Join Movement Section */}
        
        <div
          className="relative text-center p-8 md:p-20 h-auto md:h-[400px] bg-cover bg-center"
          style={{ backgroundImage: `url('/Think_big/handme.png')` }}
        >
         
          <div className="absolute inset-0 bg-black/50 md:bg-black/40" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Join the Movement. Partner for Impact.
            </h2>
            <p className="text-sm md:text-base mx-4 md:mx-0 mb-6 text-justify">
              Be part of the national revolution that’s shaping Nigeria’s next generation of innovators, leaders, and changemakers. We invite visionary individuals, organizations, and brands to partner with THINK-BIG NAIJA 2025 — a movement built on integrity, purpose, and impact.
            </p>

            <button className="bg-yellow-400 text-black px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors shadow-lg">
              Partner With Us →
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 p-6 md:p-12 pt-10 gap-6 md:gap-8 border-t border-gray-700
             ${isDark ? 'bg-yellow-500' : 'bg-gradient-to-br from-yellow-500 to-yellow-700'} transition-colors`}
        >
          <div className="flex flex-col items-start md:items-start">
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-white font-bold text-lg md:text-xl tracking-wider">THINK-BIG</span>
              <span className="text-white italic text-sm md:text-lg">Naija</span>
            </div>
            <p className="text-white text-sm">
              From Nigeria to the World, By Nigerians.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white text-sm">
              <li><Link to="/HeroSection" className="hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About</Link></li>
              <li><Link to="/vision-mission" className="hover:text-yellow-400 transition-colors">Vision & Mission</Link></li>
              <li><Link to="/speakers" className="hover:text-yellow-400 transition-colors">Speakers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-white text-sm">
              <li className="flex items-center space-x-2"><Contact className="w-4 h-4" /> <span>thinkbignaija@gmail.com</span></li>
              <li className="flex items-center space-x-2"><Locate className="w-4 h-4" /> <span>Ogbomoso, Oyo State</span></li>
              <li className="flex items-center space-x-3 pt-1">
                <Instagram className="w-5 h-5 hover:text-yellow-400 transition-colors" />
                <Facebook className="w-5 h-5 hover:text-yellow-400 transition-colors" />
                <Linkedin className="w-5 h-5 hover:text-yellow-400 transition-colors" />
                <Twitter className="w-5 h-5 hover:text-yellow-400 transition-colors" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
