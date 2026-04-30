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
      <section id="blog" className="py-24">
        <div className="max-w-[1200px] mx-auto px-5 flex flex-col lg:flex-row gap-12 items-center">
          <div 
            ref={imageRef}
            className={`flex-shrink-0 w-full lg:w-2/5 overflow-hidden rounded-[35px] transition-all duration-700 ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Overwhelmed business owner at desk" 
              className="w-full rounded-[35px] transition-all hover:scale-105 duration-500"
            />
          </div>
          
          <div 
            ref={textRef}
            className={`flex-grow bg-[#d4b66a] p-12 rounded-[35px] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-2xl ${textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <h2 className="text-2xl font-bold">{translate('cta.title')}</h2>
            <h3 className="text-xl font-semibold mt-3 mb-6">{translate('cta.subtitle')}</h3>
            <p className="leading-relaxed mb-8">{translate('cta.text')}</p>
            <button 
              onClick={openBooking}
              className="group inline-flex items-center px-8 py-3 rounded-full font-bold relative overflow-hidden transition-all bg-black text-white hover:bg-gray-900 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {translate('hero.cta')}
              <span className="w-7 h-7 bg-white text-black rounded-full flex items-center justify-center ml-4 transition-all group-hover:translate-x-1">
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