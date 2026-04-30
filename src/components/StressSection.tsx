import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import BookingModal from './BookingModal';
import { useBooking } from '../hooks/useBooking';

const StressSection: React.FC = () => {
  const { translate } = useTranslation();
  const { isBookingOpen, openBooking, closeBooking } = useBooking();
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [imageRef, imageVisible] = useScrollAnimation(0.3);
  const [pointsRef, pointsVisible] = useStaggeredAnimation(7, 150);

  const stressPoints = [
    'stress.point1',
    'stress.point2', 
    'stress.point3',
    'stress.point4',
    'stress.point5',
    'stress.point6',
    'stress.point7'
  ];

  return (
    <>
      <section id="about" className="max-w-[1200px] mx-auto px-5" style={{ paddingTop: '50px' }}>
        <div 
          ref={headerRef}
          className={`flex flex-col md:flex-row justify-between items-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-5xl font-bold max-w-lg mb-6 md:mb-0">{translate('stress.title')}</h2>
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
        
        <p className={`text-xl text-gray-600 mb-8 transition-all duration-700 delay-200 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {translate('stress.subtitle')}
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div 
            ref={imageRef}
            className={`flex-shrink-0 w-full lg:w-2/5 overflow-hidden rounded-[35px] transition-all duration-700 ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <img 
              src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Stressed business owner" 
              className="w-full rounded-[35px] transition-all hover:scale-105 duration-500"
            />
          </div>
          
          <ul ref={pointsRef} className="flex-grow list-none w-full">
            {stressPoints.map((point, index) => (
              <li 
                key={index} 
                className={`py-5 border-b border-gray-300 flex items-center text-lg transition-all duration-500 hover:translate-x-2 ${pointsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <span className="flex justify-center items-center min-w-[32px] h-8 border-2 border-black text-black rounded-full mr-5 text-sm transition-all hover:scale-110">
                  <ArrowRight size={14} />
                </span>
                {translate(point)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </>
  );
};

export default StressSection;