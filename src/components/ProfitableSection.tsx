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
      <section id="coaching" className="container">
        <div ref={titleRef} className={`section-header-enhanced fade-in ${titleVisible ? 'visible' : ''}`}>
          <h2>{translate('profitable.title')}</h2>
          <p>{translate('profitable.subtitle')}</p>
        </div>
        
        <div ref={cardsRef} className="features-grid grid grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`feature-card p-8 border-2 border-teal-500 rounded-3xl text-center h-52 flex flex-col justify-center items-center gap-4 hover-lift stagger-item ${cardsVisible[index] ? 'visible' : ''}`}
              >
                <IconComponent size={32} className="text-black hover-scale" />
                <p className="text-lg font-medium max-w-xs">{translate(feature.key)}</p>
              </div>
            );
          })}
        </div>
        
        <div 
          ref={buttonRef}
          className={`text-center fade-in ${buttonVisible ? 'visible' : ''}`}
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
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </>
  );
};

export default ProfitableSection;