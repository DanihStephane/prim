import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import BookingModal from './BookingModal';
import { useBooking } from '../hooks/useBooking';

const BalanceSection: React.FC = () => {
  const { translate } = useTranslation();
  const { isBookingOpen, openBooking, closeBooking } = useBooking();
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>(0.2);
  const [cardsRef, cardsVisible] = useStaggeredAnimation<HTMLDivElement>(4, 150);

  return (
    <>
      <section id="testimonials" className="max-w-[1200px] mx-auto px-5 py-24">
        <h2 
          ref={titleRef}
          className={`text-5xl font-bold text-center mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {translate('balance.title')}
        </h2>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`bg-black text-white rounded-[35px] p-10 min-h-[250px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${cardsVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="w-10 h-10 rounded-full flex justify-center items-center bg-white text-black transition-all hover:scale-110">
              <Heart size={16} />
            </span>
            <p className="text-xl font-medium">{translate('balance.card1.desc')}</p>
          </div>
          
          <div className={`bg-[#00c2a9] text-white rounded-[35px] p-10 min-h-[250px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${cardsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="w-10 h-10 rounded-full flex justify-center items-center bg-black text-white transition-all hover:scale-110">
              <Heart size={16} />
            </span>
            <p className="text-xl font-medium">{translate('balance.card2.desc')}</p>
          </div>
          
          <div className={`bg-[#00c2a9] text-white rounded-[35px] p-10 min-h-[250px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${cardsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="w-10 h-10 rounded-full flex justify-center items-center bg-black text-white transition-all hover:scale-110">
              <Heart size={16} />
            </span>
            <p className="text-xl font-medium">{translate('balance.card3.desc')}</p>
          </div>
          
          <div className={`bg-black text-white rounded-[35px] p-10 min-h-[250px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${cardsVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="w-10 h-10 rounded-full flex justify-center items-center bg-white text-black transition-all hover:scale-110">
              <Heart size={16} />
            </span>
            <div>
              <p className="text-xl font-medium mb-6">{translate('balance.card4.desc')}</p>
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
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </>
  );
};

export default BalanceSection;