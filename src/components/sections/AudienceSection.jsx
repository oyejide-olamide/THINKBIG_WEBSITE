import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const AudienceSection = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="audience" className={`body py-20 ${isDark ? 'bg-gray-800' : 'bg-gradient-to-br from-yellow-50 to-amber-100'} transition-colors`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Majority Audience */}
        <div className="mb-20">
          <div className='flex lg:absolute lg:flex-row lg:-mt-20 md:flex-row gap-0.5 lg'>
          <img className=' rotate-x-180 relative z-10 lg:mt-4 lg:left-[695px] left-[40px]
           text-black h-0.5 md:h-1 lg:h-0.5
           mt-8 w-[75px]' src="/Think_big/Line 3.png" alt="" />
          <h2 className={` lg:relative lg:text-3xl lg:left-[700px] lg:z-10 sm:text text-2xl  md:text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-black'}`}>
            Majority Audience
          </h2>
          <img className=' rotate-y-180 relative z-10 lg:mt-5 lg:left-[705px] right-[40px]
           text-black h-0.5 md:h-1 lg:h-0.5
          mt-8 w-[75px]' src="/Think_big/Line 3.png" alt="" />
          </div>

          <div className="grid md:grid-cols-2 lg:mt-20 gap-8 items-center">
             <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                The Next Generation of Leaders
              </h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                Secondary school students, undergraduates, NYSC members, young creatives, entrepreneurs, professionals, and innovators eager to rise and make an impact.
              </p>
            </div>

           <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
              <img 
                src="/Think_big/Componentw.png"
                alt="Professional"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="grid gap-4">
                <img 
                  src="/Think_big/Componentcorp.png"
                  alt="Business Leader"
                  className="w-full h-56 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src="/Think_big/Componentsingle.png"
                  alt="Mentor"
                  className="w-full h-56 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            
          </div>
        </div>

        {/* Minority Audience */}
        <div className=''>
          <div className='flex'>
           <img className=' rotate-x-180 relative z-10 left-[30px]
         text-black h-0.5 md:h-0.5 mt-10 lg:mt-5 lg:left-[-6px] w-[75px]' src="/Think_big/Line 3.png" alt="" />
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-black'}`}>
            Minority Audience
          </h2>
           <img className=' rotate-y-180 relative z-10 right-[30px]
         text-black h-0.5 md:h-0.5 mt-10 lg:mt-5 lg:right-[-6px] w-[75px]' src="/Think_big/Line 3.png" alt="" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center flex lg:flex-col">
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/Think_big/Componentman.png"
                alt="Professional"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="grid gap-4">
                <img 
                  src="/Think_big/Componentgroup.png"
                  alt="Business Leader"
                  className="w-full h-56 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src="/Think_big/Componentdoc.png"
                  alt="Mentor"
                  className="w-full h-56 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="order-2 md:order-1">
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                Nation Builders at Every Stage
              </h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                Adults, professionals, and scholars who support Nigeria's transformation and want to invest in the next generation's success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;