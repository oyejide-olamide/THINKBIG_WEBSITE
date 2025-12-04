import React from 'react';
import { Globe, Lightbulb, Flag} from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const ObjectivesSection = () => {
  const { isDark } = useTheme();
  
  const objectives = [
    { title: 'Shift the National Narrative', desc: 'Transform how the world perceives Nigerian', color: 'black', icon: Globe },
    { title: 'Awaken Dreams & Identity', desc: 'Inspire youth to rediscover their potential and purpose', color: 'yellow', icon: Lightbulb },
    { title: 'Awaken Dreams & Identity', desc: 'Inspire youth to rediscover their potential and purpose', color: 'yellow', icon:  Flag },
    { title: 'Awaken Dreams & Identity', desc: 'Inspire youth to rediscover their potential and purpose', color: 'yellow', icon: Lightbulb},
    { title: 'Awaken Dreams & Identity', desc: 'Inspire youth to rediscover their potential and purpose', color: 'black', icon: Lightbulb },
    { title: 'Awaken Dreams & Identity', desc: 'Inspire youth to rediscover their potential and purpose', color: 'yellow', icon: Lightbulb },
    { title: 'Awaken Dreams & Identity', desc: 'Inspire youth to rediscover their potential and purpose', color: 'yellow', icon: Lightbulb },
    { title: 'Awaken Dreams & Identity', desc: 'Inspire youth to rediscover their potential and purpose', color: 'black', icon: Lightbulb },
  ];

  return (
    <section id="objectives" className={`body ${isDark ? 'bg-gray-800 justify-center overflow-x-hidden' :
     'bg-gradient-to-br from-amber-50 to-yellow-50'} transition-colors `}>
      <div className="lg:max-w-7xl mx-auto lg:px-6 py-10">
        <div className=' flex flex-row-sm gap-0.5-lg gap-1.5 lg:flex-row justify-center items-center'>
         <img className=' rotate-x-180 text-black h-1 lg:h-0.5 lg:-mt-15 md:h-1 -mt-10 w-[75px]' src="/Think_big/Line 3.png" alt="" />
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isDark ? 
          'text-white' : 'text-black'}`}>
          Our Core Objectives
        </h2>
         <img className=' rotate-y-180 lg:h-0.5 lg:-mt-13 text-black h-1 md:h-1 -mt-10 
         w-[75px]' src="/Think_big/Line 3.png" alt="" />
        </div>
        <div className="grid grid-cols-1 w-[250px] sm:grid-cols-2 lg:grid-cols-3 gap-6
         text-center justify-center w-full lg:w-full lg:mx p-5 ">
          {objectives.map((obj, idx) => {
            const Icon = obj.icon;
            const isBlack = obj.color === 'black';
            
            return (
              <div 
                key={idx}
                className={`${isBlack ? (isDark ? 'bg-gray-700' : 'bg-black') : (isDark ? 'bg-yellow-600' : 'bg-yellow-400')} 
                p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform`}
              >
                <div className={`w-16 h-16 ${isBlack ? 'bg-yellow-400' : (isDark ? 'bg-gray-700' : 'bg-white')} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className={`w-8 h-8 ${isBlack ? 'text-black' : (isDark ? 'text-white' : 'text-yellow-500')}`} />
                </div>
                <h3 className={`text-lg font-bold text-center mb-3 ${isBlack ? 'text-white' : 'text-black'}`}>
                  {obj.title}
                </h3>
                <p className={`text-sm text-center ${isBlack ? 'text-gray-300' : 'text-black'}`}>
                  {obj.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;