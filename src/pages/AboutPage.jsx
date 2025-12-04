import React from 'react';

const AboutPage = () => {
  return (
    <div className=" justify-center bg-yellow-400 inset-0  " style={{backgroundImage: 
    `url('/Think_big/background.png') `, backgroundSize: 'cover', opacity: 60}}>


     <section className="py-24 sm:py-16 md:py-20 lg:py-24">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative">
      {/* Decorative background element (optional) */}
      <div className="absolute inset-x-0 top-1/2 h-px transform -translate-y-1/2 hidden sm:block"></div>
      
      <div className="relative flex items-center justify-center ">
        {/* Left line */}
        <div className="relative rotate-y-180 flex-1 max-w-[60px] sm:max-w-[80px] md:max-w-[100px]
         lg:max-w-[120px]">
          <img
            src="/Think_big/Line 3.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>
        
        {/* Title */}
        <h1 className="text-2xl xs:text-2.5xl sm:text-3xl md:text-4xl lg:text-[2.5rem]
         font-bold text-black px-3 sm:px-4 md:px-5">
          About Us
        </h1>
        
        {/* Right line */}
        <div className="relative rotate-y-180 flex-1 max-w-[60px] sm:max-w-[80px]
         md:max-w-[100px] lg:max-w-[120px]">
          <img
            src="/Think_big/Line 3.png"
            alt=""
            className="w-full h-auto object-contain scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      <div className="py-10 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative overflow-hidden -my-28">
                <img 
                  src="/Think_big/Vector 1.png"
                  alt="Nigerian Youth Collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className=''>
              <h3 className="text-2xl md:text-3xl  my-15 font-bold mb-10  text-black">
                The Spark and the Need
              </h3>
              <div className="space-y-4 text-black text-sm md:text-base leading-relaxed">
                <p>
                  Nigeria stands at a critical turning point. Its youths are brimming with potential, yet the environment often stifles that potential before it can grow. Every year, more young Nigerians abandon their dreams or leave in search of greener pastures.
                </p>
                <p>
                  But what if we transformed Nigeria into the green pasture that so many are seeking abroad? THINK-BIG NAIJA 2025 was created to awaken and equip a new generation of Nigerians to rise, build, and shape not only their personal future but also the future of the nation.
                </p>
                <p>
                  We believe the dream of the Nigerian youth and the story of Nigeria itself are inseparably linked. When young people thrive, Nigeria thrives. When their dreams are silenced, the nation’s potential is silenced too.
                </p>
                <p>
                  This forum exists to ignite that spark — to give young Nigerians the courage, clarity, and community they need to dream boldly, build locally, and shine globally.
                </p>
              </div>
            </div>
          </div>

          <div className='body flex md-flex-col gap-10 py-10 font-sans font-bold justify
           text-black text-[20px] italic lg:text-[25px] md:text-[22px]'>
            <div>
             <h1>200M+</h1>
             <p>Nigeria Population</p>
            </div>
            <div>
              <h1>60%</h1>
              <p>Under 25 years Old</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;