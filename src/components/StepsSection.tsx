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
      <section id="pricing" className="max-w-[1200px] mx-auto px-5 py-24">
        <div 
          ref={titleRef} 
          className={`text-center mb-20 relative after:content-[''] after:absolute after:-bottom-5 after:left-1/2 after:-translate-x-1/2 after:w-15 after:h-1 after:bg-[#00c2a9] after:rounded-full transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{translate('steps.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{translate('steps.subtitle')}</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <ul 
            ref={timelineRef}
            className={`list-none relative flex-shrink-0 w-full lg:w-2/5 transition-all duration-700 ${timelineVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="absolute top-4 bottom-4 left-4 w-1 bg-[#00c2a9] rounded-full"></div>
            
            <li className="py-6 pl-16 relative transition-all duration-300 hover:translate-x-2 group">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#00c2a9] text-white flex justify-center items-center font-bold transition-all group-hover:scale-110">
                01
              </div>
              <span className="text-xl font-semibold">{translate('steps.step1.title')}</span>
            </li>
            
            <li className="py-6 pl-16 relative transition-all duration-300 hover:translate-x-2 group">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#00c2a9] text-white flex justify-center items-center font-bold transition-all group-hover:scale-110">
                02
              </div>
              <span className="text-xl font-semibold">{translate('steps.step2.title')}</span>
            </li>
            
            <li className="py-6 pl-16 relative transition-all duration-300 hover:translate-x-2 group">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#00c2a9] text-white flex justify-center items-center font-bold transition-all group-hover:scale-110">
                03
              </div>
              <span className="text-xl font-semibold">{translate('steps.step3.title')}</span>
            </li>
          </ul>
          
          <div 
            ref={boxRef}
            className={`bg-black text-white p-12 rounded-[35px] flex-grow border-r-[10px] border-[#00c2a9] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-2xl ${boxVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <h3 className="text-4xl mb-8 leading-tight font-bold">{translate('steps.cta.title')}</h3>
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
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </>
  );
};

export default StepsSection;