import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import BookingModal from './BookingModal';
import { useBooking } from '../hooks/useBooking';

const BalanceSection: React.FC = () => {
  const { translate } = useTranslation();
  const { isBookingOpen, openBooking, closeBooking } = useBooking();
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useStaggeredAnimation(4, 150);

  return (
    <>
      <section id="testimonials" className="container">
        <h2 
          ref={titleRef}
          className={`text-5xl font-bold text-center mb-12 fade-in ${titleVisible ? 'visible' : ''}`}
        >
          {translate('balance.title')}
        </h2>
        
        <div ref={cardsRef} className="balance-grid grid grid-cols-2 gap-8">
          <div className={`balance-card bg-black text-white rounded-3xl p-10 h-64 flex flex-col justify-between hover-lift stagger-item ${cardsVisible[0] ? 'visible' : ''}`}>
            <span className="icon w-10 h-10 rounded-full flex justify-center items-center bg-white text-black hover-scale">
              <Heart size={16} />
            </span>
            <p className="text-xl font-medium">{translate('balance.card1.desc')}</p>
          </div>
          
          <div className={`balance-card bg-teal-500 text-white rounded-3xl p-10 h-64 flex flex-col justify-between hover-lift stagger-item ${cardsVisible[1] ? 'visible' : ''}`}>
            <span className="icon w-10 h-10 rounded-full flex justify-center items-center bg-black text-white hover-scale">
              <Heart size={16} />
            </span>
            <p className="text-xl font-medium">{translate('balance.card2.desc')}</p>
          </div>
          
          <div className={`balance-card bg-teal-500 text-white rounded-3xl p-10 h-64 flex flex-col justify-between hover-lift stagger-item ${cardsVisible[2] ? 'visible' : ''}`}>
            <span className="icon w-10 h-10 rounded-full flex justify-center items-center bg-black text-white hover-scale">
              <Heart size={16} />
            </span>
            <p className="text-xl font-medium">{translate('balance.card3.desc')}</p>
          </div>
          
          <div className={`balance-card bg-black text-white rounded-3xl p-10 h-64 flex flex-col justify-between hover-lift stagger-item ${cardsVisible[3] ? 'visible' : ''}`}>
            <span className="icon w-10 h-10 rounded-full flex justify-center items-center bg-white text-black hover-scale">
              <Heart size={16} />
            </span>
            <div>
              <p className="text-xl font-medium mb-4">{translate('balance.card4.desc')}</p>
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
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </>
  );
};

export default BalanceSection;