import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import BookingModal from './BookingModal';
import { useBooking } from '../hooks/useBooking';

const CTASection: React.FC = () => {
  const { translate } = useTranslation();
  const { isBookingOpen, openBooking, closeBooking } = useBooking();
  const [imageRef, imageVisible] = useScrollAnimation(0.3);
  const [textRef, textVisible] = useScrollAnimation(0.3);

  return (
    <>
      <section id="blog" className="overwhelmed-section">
        <div className="container flex gap-5 items-center">
          <div 
            ref={imageRef}
            className={`overwhelmed-image flex-shrink-0 w-2/5 image-container fade-in-left ${imageVisible ? 'visible' : ''}`}
          >
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Overwhelmed business owner at desk" 
              className="w-full rounded-3xl"
            />
          </div>
          
          <div 
            ref={textRef}
            className={`overwhelmed-text flex-grow bg-yellow-300 p-12 rounded-3xl hover-lift fade-in-right ${textVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl font-bold">{translate('cta.title')}</h2>
            <h3 className="text-xl font-semibold mt-3 mb-6">{translate('cta.subtitle')}</h3>
            <p className="leading-relaxed mb-8">{translate('cta.text')}</p>
            <button 
              onClick={openBooking}
              className="btn bg-black text-white hover:bg-gray-800 hover-lift"
            >
              {translate('hero.cta')}
              <span className="arrow-icon bg-white text-black">
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

export default CTASection;