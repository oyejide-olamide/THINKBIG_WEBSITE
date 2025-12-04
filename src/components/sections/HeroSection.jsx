import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import CountdownTimer from '../common/CountdownTimer';

const HeroSection = () => {
  return (
    <section className="body relative  min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/Think_big/Rectangle 2.png')`,
        }}
      >
        <div className="absolute inset-0 bg- bg-opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="bg-opacity-40 p-6 md:p-12 rounded-lg">
          <h1 className="text-3xl md:text-6xl font-bold text-white text-center mb-4">
            THINK-BIG NAIJA 2025
          </h1>
          
          <p className="text-base md:text-xl text-[11px] text-white text-center mb-8">
            A National Forum to Spark Nigerian Youths for a Global Revolution
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 
          md:space-x-8 mb-8 pb-8">
            <div className="flex items-start space-x-3 text-white">
              <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
              <span className="text-xs md:text-base text-[11px] lg:text-[20px]">
                The Assembly, Along LAUTECH Main Gate, Beside <br className='sm'/> BON Nest Hotel, Ogbomoso, Oyo State.
              </span>
            </div>
            
            <div className="items-center space-x-3 space-y-8 text-white">
              <span className="text-xs text-justify   gap-5  flex text-[20px] md:text-base font-[400]">
              <Calendar className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              
              December 13th, 2025
              </span>
            </div>
          </div>

          <CountdownTimer targetDate="2025-12-14T00:00:00" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;