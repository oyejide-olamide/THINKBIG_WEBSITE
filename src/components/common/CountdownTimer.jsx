import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());
    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="text-3xl md:text-5xl font-bold text-yellow-400">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm mt-1 text-amber-400">{label}</div>
    </div>
  );

  return (
    <div className="body flex justify-center space-x-6 md:space-x-12 mt-8 max-w-32 mx-22 lg:mx-0 md:mx-52 lg:max-w-none ">
      <div className='backdrop-blur-sm p-4 w-52 rounded-2xl bg-gradient-to-br from-white/10 via-white/6 to-transparent border
       border-white/10 shadow-[0_10px_30px_rgba(2,6,23,0.12)]'><TimeUnit value={timeLeft.days} label="Days"  /></div>
      <div className='backdrop-blur-sm p-4 w-52 rounded-2xl bg-gradient-to-br from-white/10 via-white/6 to-transparent border border-white/10
       shadow-[0_10px_30px_rgba(2,6,23,0.12)] '><TimeUnit value={timeLeft.hours} label="Hours" /></div>
      <div className='backdrop-blur-sm p-4 w-52 rounded-2xl bg-gradient-to-br from-white/10 via-white/6 to-transparent border
       border-white/10 shadow-[0_10px_30px_rgba(2,6,23,0.12)] '><TimeUnit value={timeLeft.minutes} label="Minutes" /></div>
      <div className='backdrop-blur-sm p-4 w-52 rounded-2xl bg-gradient-to-br from-white/10 via-white/6 to-transparent border border-white/10 
      shadow-[0_10px_30px_rgba(2,6,23,0.12)]'><TimeUnit value={timeLeft.seconds} label="Seconds" /></div>
    </div>
  );
};

export default CountdownTimer;