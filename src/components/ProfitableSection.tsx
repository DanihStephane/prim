import React from 'react';
import { ArrowRight, Wrench, Clock, Target, Scale } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import BookingModal from './BookingModal';
import { useBooking } from '../hooks/useBooking';

const ProfitableSection: React.FC = () => {
  const { translate } = useTranslation();
  const { isBookingOpen, openBooking, closeBooking } = useBooking();
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useStaggeredAnimation(4, 200);
  const [buttonRef, buttonVisible] = useScrollAnimation(0.3);

  const features = [
    { icon: Wrench, key: 'profitable.feature1.desc' },
    { icon: Clock, key: 'profitable.feature2.desc' },
    { icon: Target, key: 'profitable.feature3.desc' },
    { icon: Scale, key: 'profitable.feature4.desc' }
  ];

  return (
    <>
      <section id="coaching" className="max-w-[1200px] mx-auto px-5 py-24">
        <div 
          ref={titleRef} 
          className={`text-center mb-20 relative after:content-[''] after:absolute after:-bottom-5 after:left-1/2 after:-translate-x-1/2 after:w-15 after:h-1 after:bg-[#00c2a9] after:rounded-full transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{translate('profitable.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{translate('profitable.subtitle')}</p>
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`p-8 border-2 border-[#00c2a9] rounded-[35px] text-center min-h-[200px] flex flex-col justify-center items-center gap-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${cardsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <IconComponent size={32} className="text-black transition-all hover:scale-110" />
                <p className="text-lg font-medium max-w-xs">{translate(feature.key)}</p>
              </div>
            );
          })}
        </div>
        
        <div 
          ref={buttonRef}
          className={`text-center transition-all duration-700 ${buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </>
  );
};

export default ProfitableSection;