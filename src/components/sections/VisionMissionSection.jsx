import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const VisionMissionSection = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="vision" className={`py-20 ${isDark ? 'bg-gray-900' : 
    'bg-gradient-to-br from-amber-50 to-yellow-50'}  transition-colors`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="">
          {/* Our Vision */}
          <div className="overflow-hidden "  >
            <div className=" flex gap-0.5 md:flex-col lg:flex-row ">
              <img className='relative z-10 left-[35px] rotate-x-180 text-black lg:h-0.5 h-0.5 md:h-0.5 mt-4 w-[50px]' 
              src="/Think_big/Line 3.png" alt="" />
              <h3 className={`text-2xl font-bold  ${isDark ? 'text-white' : 'text-black'}
              mx-10`}>Our Vision</h3>
              <img className='relative rotate-y-180 z-10 right-[35px] lg:h-0.5 text-black h-0.5 md:h-0.5 mt-4 w-[50px]' 
              src="/Think_big/Line 3.png" alt="" />
            </div>
            
            <div className="p-7 lg:p-6 flex flex-col lg:flex-col-0 md:flex-col lg:flex-row lg:gap-20 ">
              <img 
                src={isDark 
                  ? "/Think_big/black.png"
                  : "/Think_big/white.png"
                }
                alt="Vision"
                className="lg:w-64 w-72 h-72 object-cover rounded-lg mb-6 "
              />
              
              <div className='justify-center text-justify mt-20'>
              <p className={`${isDark ? 'text-white' : 'text-black'} leading-relaxed text-sm`}>
                We envision a Nigeria where youths discover and live confidently in their identity, vision, capacity, and values globally. A Nigeria where the creativity, vision, intelligence, and aspirations of young people are not just recognized—but celebrated, supported, and given the resources to flourish.
              </p>
              
              <p className={`${isDark ? 'text-white' : 'text-black'}  mt-4 text-sm`}>
                In this future, "Made in Nigeria, from Nigeria, by Nigerians" becomes a global mark of distinction — a symbol of elite craftsmanship, innovation, and excellence. Nigeria is the destination, not a departure point.
              </p>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className=" overflow-hidden">
            <div className="lg:absolute z-10 mt-10 mb-10 flex lg:flex-row gap-0.5">
              <img className='lg:relative rotate-x-180 relative z-10 lg:h-0.5
               left-[15px] text-black md:h-1 h-0.5 lg:left-[825px] mt-4 w-[50px]' src="/Think_big/Line 3.png" alt="" />
              <h3 className={` lg:relative lg:text-2xl sm:text text-2xl font-bold text-justify relative
               left-[20px] lg:left-[830px]
               z-10 ${isDark ? 'text-white ' : 'text-black '}`}>Our Mission</h3>
              <img className='lg:relative rotate-y-180 relative h-0.5 z-10 lg:h-0.5 left-[20px]
               text-black md:h-1 mt-4 lg:left-[832px] w-[50px]' src="/Think_big/Line 3.png" alt="" />
            </div>
            
            <div className="p-6 flex flex-col md:flex-col lg:flex-row lg:mt-24 gap-20">
              
              <div className={`${isDark ? 'text-white -mt-5' : 'text-black text-justify -mt-5'} 
              space-y-3 text-sm lg:mt-20`}>
                <p>
                  Our mission is to inspire, challenge, and equip young Nigerians to dream without limits, create solutions rooted in our nation, and lead with confidence across the globe.

        We aim to turn personal aspirations into national assets and national pride into global influence.

        While young Nigerians remain at the heart of this movement, we welcome all generations who believe in the power of Nigeria’s transformation. Because building a future that works is a collaborative effort — and no one is ever too old to help shape the story of a nation.
                </p>
              </div>
              <img 
                src="/Think_big/Group 2.png"
                alt="Mission"
                className=" lg:w-64 w-72 h-72 object-cover rounded-lg mb-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;