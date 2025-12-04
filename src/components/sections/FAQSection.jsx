import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const FAQSection = () => {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: 'What is THINK-BIG NAIJA 2025?',
      answer: 'THINK-BIG NAIJA 2025 is a transformative national forum designed to inspire, challenge, and equip Nigerian youths to dream boldly, build confidently, and lead with purpose.'
    },
    {
      question: 'When and where will the forum take place?',
      answer: 'The forum will take place on December 13th, 2025 at The Assembly, Along LAUTECH Main Gate, Beside BON Nest Hotel, Ogbomoso, Oyo State.'
    },
    {
      question: 'Is there a registration fee?',
      answer: 'Registration details including fees will be announced soon. Follow our social media channels for updates.'
    },
    {
      question: 'Can organizations or brands partner with the movement?',
      answer: 'Yes! We welcome partnerships from organizations and brands that share our vision. Click on "Partner With Us" to learn more about partnership opportunities.'
    }
  ];

  return (
    <section id="faq" className={`body py-20 ${isDark ? 'bg-gray-800' : 'bg-gradient-to-br from-yellow-50 to-amber-50'} transition-colors`}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-black'}`}>
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`${isDark ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md overflow-hidden transition-all`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-opacity-90 transition-colors"
              >
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-black'}`}>{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform ${openIndex === idx ? 'rotate-180' : ''} ${isDark ? 'text-yellow-400' : 'text-black'}`}
                />
              </button>
              
              {openIndex === idx && (
                <div className={`px-6 pb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;