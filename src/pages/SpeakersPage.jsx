import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Mail, Twitter, Linkedin, Award, Calendar, MapPin, X, ChevronRight } from 'lucide-react';

const SpeakersPage = () => {
  const { isDark } = useTheme();
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [showAllSpeakers, setShowAllSpeakers] = useState(false);

  const speakers = [
    { 
      id: 1,
      name: 'Tumininu Akinbowale ', 
      role: 'Convener ', 
      bio: 'Founder of THINK-BIG NAIJA, social entrepreneur with 10+ years experience in youth empowerment and national development.',
      expertise: ['Youth Empowerment', 'Leadership Development', 'Social Entrepreneurship'],
      img: '/Think_big/Group1.png',
      session: 'Keynote: The Nigerian Dream Reimagined',
      time: '10:00 AM - 11:00 AM',
      achievements: ['Forbes 30 Under 30', 'UN Youth Ambassador', 'Author of 3 Best-sellers']
    },
    { 
      id: 2,
      name: ' Ọba Ghandi Afọlábí Oladunni Ọláoyè, Orumógege II', 
      role: 'Ogbomoso', 
      bio: 'Renowned community leader with expertise in grassroots mobilization and sustainable development projects across Southwest Nigeria.',
      expertise: ['Community Development', 'Women Empowerment', 'Rural Transformation'],
      img: '/Think_big/Group10.png',
      session: 'Building from the Ground Up',
      time: '11:30 AM - 12:30 PM',
      achievements: ['National Community Award Winner', '30+ Development Projects', 'Mentored 500+ Youths']
    },
    { 
      id: 3,
      name: 'Oladotun Ajayi ', 
      role: ' Social Impact, Youth Leadership & Empowerment ', 
      bio: 'Leading voice in social innovation, helping organizations create sustainable impact through technology and community engagement.',
      expertise: ['Social Innovation', 'Impact Measurement', 'Digital Inclusion'],
      img: '/Think_big/Group9.png',
      session: 'Measuring Impact in the Digital Age',
      time: '1:00 PM - 2:00 PM',
      achievements: ['Google Social Impact Fellow', 'TEDx Speaker', 'Impact Africa Founder']
    },
    { 
      id: 4,
      name: 'Adeyemi Aderinto ', 
      role: 'ICT Innovation, EdTech & Strategic Consulting ', 
      bio: 'Tech entrepreneur revolutionizing education through technology, founder of Nigeria\'s fastest growing EdTech platform.',
      expertise: ['EdTech', 'Digital Transformation', 'Startup Scaling'],
      img: '/Think_big/Group8.png',
      session: 'Tech as an Equalizer',
      time: '2:30 PM - 3:30 PM',
      achievements: ['TechCrunch Disrupt Winner', 'Top 50 Women in Tech', '100,000+ Students Impacted']
    },
    { 
      id: 5,
      name: 'Jesudamilare Adesegun-David (JD) ', 
      role: 'Entrepreneurship Ecosystems & Community Development ', 
      bio: 'Serial entrepreneur who built 5 successful businesses from scratch, now dedicated to mentoring the next generation of founders.',
      expertise: ['Business Strategy', 'Startup Funding', 'Market Entry'],
      img: '/Think_big/Group7.png',
      session: 'From Idea to Empire',
      time: '4:00 PM - 5:00 PM',
      achievements: ['$50M+ in Exits', 'Angel Investor', '100+ Startups Funded']
    },
    { 
      id: 6,
      name: 'Oluseun Onigbinde ', 
      role: 'Governance, Fiscal Transparency & Civic Participation ', 
      bio: 'Former government official turned policy advisor, specializing in youth inclusion and public-private partnerships.',
      expertise: ['Public Policy', 'Governance', 'Youth Inclusion'],
      img: '/Think_big/Group6.png',
      session: 'Youth in Governance: The New Frontier',
      time: '9:00 AM - 10:00 AM',
      achievements: ['Former Minister of State', 'UN Policy Advisor', 'Harvard Kennedy School Fellow']
    },
    { 
      id: 7,
      name: 'Funmi Oyekanmi ', 
      role: 'Social Advocacy, Youth Policy & Sustainable Development (Trav', 
      bio: 'Dedicated to creating sustainable change through innovative social programs and cross-sector collaborations.',
      expertise: ['Program Development', 'Stakeholder Engagement', 'Sustainable Development'],
      img: '/Think_big/Ellipse 2.png',
      session: 'Collaboration for Change',
      time: '10:30 AM - 11:30 AM',
      achievements: ['Ashoka Fellow', 'Social Enterprise of the Year', 'UN Sustainable Development Goals Advocate']
    },
    { 
      id: 8,
      name: 'Dr. Olamide Alao Akala ', 
      role: 'Agriculture & Food Systems (AgriTech & Food Security) ', 
      bio: 'Pioneer in modern agriculture techniques, helping young Nigerians see farming as a viable and profitable career path.',
      expertise: ['AgriTech', 'Food Security', 'Export Agriculture'],
      img: '/Think_big/Group5.png',
      session: 'The New Face of Nigerian Agriculture',
      time: '12:00 PM - 1:00 PM',
      achievements: ['Agricultural Innovation Award', 'Exported to 15 Countries', 'Trained 10,000+ Young Farmers']
    },
    { 
      id: 9,
      name: 'Dr. Oladipo Elijah Kolawole (Ph.D) ', 
      role: 'Biotechnology, Innovation, Research ', 
      bio: 'Seasoned finance professional with expertise in financial inclusion and youth economic empowerment.',
      expertise: ['Financial Literacy', 'Investment Strategy', 'Wealth Creation'],
      img: '/Think_big/Ellipse3.png',
      session: 'Financial Freedom for the Next Generation',
      time: '1:30 PM - 2:30 PM',
      achievements: ['Former MD of Major Bank', 'Financial Times Top 100', 'Author of Financial Freedom Blueprint']
    },
    { 
      id: 10,
      name: 'Ogunsakin Timilehin ', 
      role: 'Health Tech, Medical Innovation & Entrepreneurship', 
      bio: 'Medical doctor turned health tech entrepreneur, revolutionizing healthcare access through technology solutions.',
      expertise: ['HealthTech', 'Telemedicine', 'Medical Innovation'],
      img: '/Think_big/Group4.png',
      session: 'Healthcare in the Digital Era',
      time: '3:00 PM - 4:00 PM',
      achievements: ['Medical Innovation Award', 'Patent Holder', '1M+ Patients Served']
    },
    { 
      id: 11,
      name: 'Paul Olubori Kehinde ', 
      role: 'Finance, Investments & Real Estate', 
      bio: 'Leading investment advisor helping young Nigerians build wealth through smart investment strategies.',
      expertise: ['Portfolio Management', 'Real Estate Investment', 'Stock Market'],
      img: '/Think_big/Ellipse5.png',
      session: 'Building Generational Wealth',
      time: '4:30 PM - 5:30 PM',
      achievements: ['$100M+ Portfolio', 'Top Investment Advisor', 'CNBC Africa Contributor']
    },
    { 
      id: 12,
      name: 'Amb. Victory Ashaka ', 
      role: 'Spoken Word Artiste', 
      bio: 'Award-winning artist using spoken word to inspire social change and creative expression among Nigerian youth.',
      expertise: ['Creative Arts', 'Storytelling', 'Youth Engagement'],
      img: '/Think_big/Ellipse4.png',
      session: 'The Power of Your Story',
      time: '6:00 PM - 7:00 PM',
      achievements: ['National Poetry Slam Champion', 'TED Global Performer', 'Creative Director of Major Brands']
    }
  ];

  const visibleSpeakers = showAllSpeakers ? speakers : speakers.slice(0, 6);

  return (
    <div className="">
      {/* Hero Section */}
      <section className={`relative py-8 md:py-10 overflow-hidden ${isDark ?
         'bg-gray-900' : 'bg-gradient-to-br from-amber-50 to-white'}`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400 
          rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-400 
          rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link 
              to="/" 
              className={`inline-flex items-center space-x-2 mb-6 text-sm ${isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-600 hover:text-yellow-700'}`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <div className='flex lg:flex-row md:flex-row'>
             <img className=' rotate-x-180 relative z-10 left-[35px]
         text-black h-0.5 md:h-0.5 mt-10 w-[75px] lg:mt-5 lg:left-[310px]' src="/Think_big/Line 3.png" alt="" />

            <h1 className={`lg:text-4xl sm:text text-2xl lg:mx-80 md:text-7xl font-bold mb-2 md:mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              The Strong 12 Speaker
            </h1>
            <img className=' rotate-y-180 relative z-10 lg:right-[310px] right-[30px]
         text-black h-0.5 md:h-0.5 lg:mt-6 mt-10 w-[75px]' src="/Think_big/Line 3.png" alt="" />
            </div>
            
          </div>
        </div>
      </section>

      {/* Mobile Overlapping Speakers Section */}
      <section className={`py-12 md:py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Header */}
          <div className="text-center mb-8 md:hidden">
            <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Tap to Explore
            </h2>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Tap on any speaker photo to see details
            </p>
          </div>
          
          {/* Mobile Overlapping Circle Grid */}
          <div className="relative md:hidden">
            <div className="flex justify-center items-center flex-wrap  gap-1 md:gap-2 max-w-md mx-auto min-h-[200px]">
              {visibleSpeakers.map((speaker, idx) => {
                
                const angle = (idx * 2 * Math.PI) / visibleSpeakers.length;
                const radius = 90; 
                const x = radius * Math.sin(angle);
                const y = radius * Math.cos(angle);
                
                return (
                  <button
                    key={speaker.id}
                    onClick={() => setSelectedSpeaker(speaker.id)}
                    className="absolute transition-all duration-300 hover:z-50
                     hover:scale-110"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: visibleSpeakers.length - idx,
                    }}
                  >
                    <div className=" relative w-16 h-16
                      rounded-full overflow-hidden                     
                      shadow-lg"                     
                  >
                      <img 
                        src={speaker.img}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                       
                      ">
                        {speaker.id}
                      </div>
                    </div>
                  </button>
                );
              })}
              
              {/* Center Circle */}
              <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
                isDark ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <div className={`text-center ${isDark ? 'text-white' : 'text-gray-900'} -mt-42`}>
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-xs">Speakers</div>
                </div>
              </div>
            </div>
            
            {/* Show More/Less Toggle */}
            {!showAllSpeakers && visibleSpeakers.length < speakers.length && (
              <div className="text-center mt-32">
                <button
                  onClick={() => setShowAllSpeakers(true)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold ${
                    isDark 
                      ? 'bg-yellow-400 text-black hover:bg-yellow-500' 
                      : 'bg-yellow-500 text-white hover:bg-yellow-600'
                  }`}
                >
                  Show All 12 Speakers
                </button>
              </div>
            )}
            
            {showAllSpeakers && (
              <div className="text-center mt-32">
                <button
                  onClick={() => setShowAllSpeakers(false)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold ${
                    isDark 
                      ? 'bg-gray-700 text-white hover:bg-gray-600' 
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                >
                  Show Less
                </button>
              </div>
            )}
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {speakers.map((speaker) => (
                <button
                  key={speaker.id}
                  onClick={() => setSelectedSpeaker(speaker.id)}
                  className={`group relative p-6 rounded-2xl text-left transition-all duration-300 hover:scale-105 ${
                    isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-yellow-50 shadow-lg'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-32 h-32 rounded-full overflow-hidden  mb-4 ${
                      isDark ? 'border-yellow-400' : 'border-yellow-500'
                    }`}>
                      <img 
                        src={speaker.img}
                        alt={speaker.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    
                    <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {speaker.name}
                    </h3>
                    <p className={`text-sm mb-3 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
                      {speaker.role}
                    </p>
                    <div className={`flex items-center text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span>Tap for details</span>
                      <ChevronRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Speaker Detail View */}
      {selectedSpeaker && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className={`max-w-md w-full max-h-[90vh] overflow-y-auto rounded-3xl ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            {speakers.map((speaker) => (
              speaker.id === selectedSpeaker && (
                <div key={speaker.id} className="p-6">
                  {/* Close Button */}
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={() => setSelectedSpeaker(null)}
                      className={`p-2 rounded-full ${
                        isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Speaker Image */}
                  <div className="relative mb-6">
                    <div className={`w-32 h-32 mx-auto rounded-full overflow-hidden border-4 ${
                      isDark ? 'border-yellow-400' : 'border-yellow-500'
                    }`}>
                      <img 
                        src={speaker.img}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Speaker Info */}
                  <div className="text-center mb-6">
                    <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {speaker.name}
                    </h2>
                    <p className={`text-lg ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mb-4`}>
                      {speaker.role}
                    </p>
                    <div className={`flex justify-center space-x-4 mb-6`}>
                      <button className={`p-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button className={`p-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button className={`p-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Session Details */}
                  <div className={`p-4 rounded-xl mb-6 ${
                    isDark ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <h4 className={`font-bold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Session Details
                    </h4>
                    <div className="space-y-2">
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className="font-semibold">Time:</span> {speaker.time}
                      </p>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className="font-semibold">Session:</span> {speaker.session}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mb-6">
                    <h4 className={`font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      About
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {speaker.bio}
                    </p>
                  </div>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className={`font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {speaker.expertise.map((item, idx) => (
                        <span 
                          key={idx}
                          className={`px-3 py-1 rounded-full text-xs ${
                            isDark ? 'bg-yellow-400 text-black' : 'bg-yellow-500 text-white'
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className={`font-bold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      <Award className="w-4 h-4 mr-2" />
                      Achievements
                    </h4>
                    <div className="space-y-2">
                      {speaker.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <ChevronRight className={`w-3 h-3 mt-1 flex-shrink-0 ${
                            isDark ? 'text-yellow-400' : 'text-yellow-600'
                          }`} />
                          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

     
    </div>
  );
};

export default SpeakersPage;