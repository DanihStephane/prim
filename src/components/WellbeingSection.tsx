import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import BookingModal from './BookingModal';
import { useBooking } from '../hooks/useBooking';

const WellbeingSection: React.FC = () => {
  const { translate } = useTranslation();
  const { isBookingOpen, openBooking, closeBooking } = useBooking();
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [questionsRef, questionsVisible] = useStaggeredAnimation(8, 100);
  const [buttonRef, buttonVisible] = useScrollAnimation(0.3);

  const questions = [
    'wellbeing.question1',
    'wellbeing.question2',
    'wellbeing.question3',
    'wellbeing.question4',
    'wellbeing.question5',
    'wellbeing.question6',
    'wellbeing.question7',
    'wellbeing.question8'
  ];

  return (
    <>
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div 
              ref={titleRef}
              className={`flex-shrink-0 w-full lg:w-2/5 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            >
              <h2 className="text-5xl md:text-6xl text-[#00c2a9] leading-tight font-bold">{translate('wellbeing.title')}</h2>
              <p className="mt-5 text-xl font-semibold">{translate('wellbeing.subtitle')}</p>
            </div>
            
            <div ref={questionsRef} className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              {questions.map((question, index) => (
                <div 
                  key={index} 
                  className={`border-2 border-black p-6 rounded-2xl text-lg font-medium transition-all duration-500 hover:-translate-y-1.5 hover:border-[#00c2a9] hover:shadow-xl ${questionsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  {translate(question)}
                </div>
              ))}
              
              <div 
                ref={buttonRef}
                className={`col-span-1 md:col-start-2 text-right mt-5 transition-all duration-700 ${buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <button 
                  onClick={openBooking}
                  className="group inline-flex items-center px-8 py-3 rounded-full font-bold relative overflow-hidden transition-all bg-[#00c2a9] text-white hover:bg-[#00a693] hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {translate('hero.cta')}
                  <span className="w-7 h-7 bg-white text-[#00c2a9] rounded-full flex items-center justify-center ml-4 transition-all group-hover:translate-x-1">
                    <ArrowRight size={14} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </>
  );
};

export default WellbeingSection;