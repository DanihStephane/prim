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
      <section id="contact" className="sacrifice-section bg-white">
        <div className="container">
          <div className="sacrifice-content flex gap-15 items-start">
            <div 
              ref={titleRef}
              className={`sacrifice-left flex-shrink-0 w-2/5 fade-in-left ${titleVisible ? 'visible' : ''}`}
            >
              <h2 className="text-6xl text-teal-500 leading-tight font-bold">{translate('wellbeing.title')}</h2>
              <p className="mt-5 text-xl font-semibold">{translate('wellbeing.subtitle')}</p>
            </div>
            
            <div ref={questionsRef} className="sacrifice-right flex-grow grid grid-cols-2 gap-5">
              {questions.map((question, index) => (
                <div 
                  key={index} 
                  className={`question-box border-2 border-black p-6 rounded-2xl text-lg font-medium hover-lift stagger-item ${questionsVisible[index] ? 'visible' : ''}`}
                >
                  {translate(question)}
                </div>
              ))}
              
              <div 
                ref={buttonRef}
                className={`btn-wrapper col-start-2 text-right mt-5 fade-in ${buttonVisible ? 'visible' : ''}`}
              >
                <button 
                  onClick={openBooking}
                  className="btn btn-teal hover-lift"
                >
                  {translate('hero.cta')}
                  <span className="arrow-icon">
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