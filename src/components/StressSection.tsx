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
      <section id="about" className="stress-section container" style={{ paddingTop: '50px' }}>
        <div 
          ref={headerRef}
          className={`section-header flex justify-between items-center mb-12 fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-5xl font-bold max-w-lg">{translate('stress.title')}</h2>
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
        
        <p className={`text-xl text-gray-600 mb-8 fade-in ${headerVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          {translate('stress.subtitle')}
        </p>
        
        <div className="stress-content flex gap-12 items-center">
          <div 
            ref={imageRef}
            className={`stress-image flex-shrink-0 w-2/5 image-container fade-in-left ${imageVisible ? 'visible' : ''}`}
          >
            <img 
              src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Stressed business owner" 
              className="w-full rounded-3xl"
            />
          </div>
          
          <ul ref={pointsRef} className="stress-points flex-grow list-none">
            {stressPoints.map((point, index) => (
              <li 
                key={index} 
                className={`py-5 border-b border-gray-300 flex items-center text-lg hover-lift stagger-item ${pointsVisible[index] ? 'visible' : ''}`}
              >
                <span className="arrow-icon flex justify-center items-center min-w-8 h-8 border-2 border-black text-black rounded-full mr-5 text-sm hover-scale">
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