import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import BookingModal from './BookingModal';
import { useBooking } from '../hooks/useBooking';

const StepsSection: React.FC = () => {
  const { translate } = useTranslation();
  const { isBookingOpen, openBooking, closeBooking } = useBooking();
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [timelineRef, timelineVisible] = useScrollAnimation(0.3);
  const [boxRef, boxVisible] = useScrollAnimation(0.3);

  return (
    <>
      <section id="pricing" className="container">
        <div ref={titleRef} className={`section-header-enhanced fade-in ${titleVisible ? 'visible' : ''}`}>
          <h2>{translate('steps.title')}</h2>
          <p>{translate('steps.subtitle')}</p>
        </div>
        
        <div className="steps-content flex items-center gap-12">
          <ul 
            ref={timelineRef}
            className={`steps-timeline list-none relative flex-shrink-0 w-2/5 fade-in-left ${timelineVisible ? 'visible' : ''}`}
          >
            <div className="absolute top-4 bottom-4 left-4 w-1 bg-teal-500 rounded-full"></div>
            
            <li className="py-5 pl-16 relative hover-lift" data-step="01">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-teal-500 text-white flex justify-center items-center font-bold hover-scale">
                01
              </div>
              <span className="text-xl font-semibold">{translate('steps.step1.title')}</span>
            </li>
            
            <li className="py-5 pl-16 relative hover-lift" data-step="02">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-teal-500 text-white flex justify-center items-center font-bold hover-scale">
                02
              </div>
              <span className="text-xl font-semibold">{translate('steps.step2.title')}</span>
            </li>
            
            <li className="py-5 pl-16 relative hover-lift" data-step="03">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-teal-500 text-white flex justify-center items-center font-bold hover-scale">
                03
              </div>
              <span className="text-xl font-semibold">{translate('steps.step3.title')}</span>
            </li>
          </ul>
          
          <div 
            ref={boxRef}
            className={`step-description-box bg-black text-white p-12 rounded-3xl flex-grow border-r-8 border-teal-500 hover-lift fade-in-right ${boxVisible ? 'visible' : ''}`}
          >
            <h3 className="text-4xl mb-8 leading-tight">{translate('steps.cta.title')}</h3>
            <button 
              onClick={openBooking}
              className="btn btn-teal hover-scale"
            >
              {translate('hero.cta')}
              <span className="arrow-icon">
                <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </>
  );
};

export default StepsSection;