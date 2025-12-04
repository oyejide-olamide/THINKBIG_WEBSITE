import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const SectorsSection = () => {
  const { isDark } = useTheme();
  
  const sectors = [
    { name: 'Education', img: '/Think_big/Component 18.png' },
    { name: 'Technology', img: '/Think_big/Component 19.png' },
    { name: 'Creative Arts & Media', img: '/Think_big/Component 17.png' },
    { name: 'Business', img: '/Think_big/Componentb.png' },
    { name: 'Fashion & Style', img: '/Think_big/Component.png' },
    { name: 'Agriculture', img: '/Think_big/Component 21.png' },
    { name: 'Finance', img: '/Think_big/Component 20.png' },
    { name: 'Real Estate', img: '/Think_big/Component 22.png' },
    { name: 'Health', img: '/Think_big/Component 23.png' },
    { name: 'Government', img: '/Think_big/Component 24.png' },
  ];

  // calculate middle index so we can make the "middle" item span 2 rows
  const midIndex = Math.floor(sectors.length / 2);

  return (
    <section id="sectors" className={`body py-20 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors overflow-x-hidden`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className='flex lg:flex-row mb-9 md:flex-row gap-0 lg'>
        <img className=' rotate-x-180 lg:mt-5 lg:left-[335px] relative z-10 left-[30px]
         text-black h-0.5 md:h-1 lg:h-0.5 mt-10 w-[75px]' src="/Think_big/Line 3.png" alt="" />
        <h2 className={`lg:text-4xl text-2xl lg:mx-85 md:text-5xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
          10 Strategic Sectors
        </h2>
        <img className=' rotate-y-180 relative lg:mt-5 lg:left-[-328px] z-10 right-[26px]
         text-black h-0.5 md:h-0.5 mt-10 w-[75px]' src="/Think_big/Line 3.png" alt="" />
        </div>
  
        
        {/* grid: fix typo and add auto-rows so row-span works predictably */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7 auto-rows-[180px]
         md:auto-rows-[220px] lg:auto-rows-[200px]">
          {sectors.map((sector, idx) => (
            <div 
              key={idx}
              className={`relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl
               transition-shadow ${idx === 0 ? 'lg:row-span-2' : ''} ${idx === midIndex ? 'lg:col-span-2 ' : ''}`}>
              <img 
                src={sector.img}
                alt={sector.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <span className="text-white font-semibold text-sm"></span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg">
            EXPLORE →
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;