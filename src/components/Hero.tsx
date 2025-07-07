import React from 'react';
import { ArrowRight, Heart, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import BookingModal from './BookingModal';
import { useBooking } from '../hooks/useBooking';

const Hero: React.FC = () => {
  const { translate } = useTranslation();
  const { isBookingOpen, openBooking, closeBooking } = useBooking();
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [statsRef, statsVisible] = useScrollAnimation(0.3);
  const [bubbleRef, bubbleVisible] = useScrollAnimation(0.3);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.3);

  return (
    <>
      <section 
        id="home" 
        className="hero relative min-h-screen bg-cover bg-center parallax"
        style={{ 
          paddingTop: '200px',
          backgroundImage: 'url(https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="hero-content container relative z-10">
          <div className="hero-main flex items-end gap-5">
            {/* Left Side */}
            <div className="hero-left w-1/2">
              <div className="relative">
                {/* Social Sidebar */}
                <div className="social-sidebar scale-in visible">
                  <a href="#" className="hover-scale"><Linkedin size={20} /></a>
                  <a href="#" className="hover-scale"><Mail size={20} /></a>
                  <a href="#" className="hover-scale"><Facebook size={20} /></a>
                  <a href="#" className="hover-scale"><Instagram size={20} /></a>
                </div>
                
                <h1 
                  ref={titleRef}
                  className={`hero-title text-6xl leading-tight mb-10 fade-in-left ${titleVisible ? 'visible' : ''}`}
                >
                  {translate('hero.title')}
                </h1>
              </div>
              
              {/* Stats Card */}
              <div 
                ref={statsRef}
                className={`stats-card bg-teal-500 text-white p-10 rounded-3xl w-full hover-lift fade-in-left ${statsVisible ? 'visible' : ''}`}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="flex items-baseline">
                  <span className="text-8xl font-bold leading-none">216</span>
                  <span className="text-2xl font-semibold ml-3">{translate('hero.stats.owners')}</span>
                </div>
                <p className="mt-5 text-lg">{translate('hero.stats.description')}</p>
              </div>
            </div>

            {/* Right Side */}
            <div className="hero-right w-1/2 flex flex-col gap-5 items-start pb-12 pl-5">
              {/* Speech Bubble */}
              <div 
                ref={bubbleRef}
                className={`speech-bubble bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 p-10 rounded-3xl text-white w-full max-w-md hover-lift fade-in-right ${bubbleVisible ? 'visible' : ''}`}
              >
                <h2 className="text-2xl font-semibold mb-8">{translate('hero.question')}</h2>
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

              {/* Testimonial Cards */}
              <div 
                ref={cardsRef}
                className={`hero-testimonial-cards flex gap-5 w-full fade-in-right ${cardsVisible ? 'visible' : ''}`}
                style={{ transitionDelay: '200ms' }}
              >
                {/* Success Rate Card */}
                <div className="hero-card bg-black text-white p-8 rounded-3xl flex-1 text-center hover-lift">
                  <span className="icon w-15 h-15 bg-white text-black rounded-full inline-flex justify-center items-center mb-4 hover-scale">
                    <Heart size={24} />
                  </span>
                  <span className="block text-5xl font-bold leading-none">100%</span>
                  <h3 className="mt-3 text-base font-medium">{translate('hero.satisfaction')}</h3>
                </div>

                {/* Testimonial Card */}
                <div className="hero-card testimonial bg-black text-white p-8 rounded-3xl flex-1 hover-lift">
                  <div className="testimonial-header flex items-center gap-4 mb-4">
                    <div className="image-container w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100" 
                        alt="Alex" 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <p className="font-semibold">{translate('hero.testimonial.author')}</p>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed">{translate('hero.testimonial.text')}</p>
                  <button 
                    onClick={openBooking}
                    className="btn btn-teal text-sm hover-scale"
                  >
                    {translate('hero.cta')}
                    <span className="arrow-icon">
                      <ArrowRight size={12} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </>
  );
};

export default Hero;
