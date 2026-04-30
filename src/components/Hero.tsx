import React from 'react';
import { ArrowRight, Heart, Briefcase, Mail, MessageSquare, Camera } from 'lucide-react';
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
        className="relative min-h-screen bg-cover bg-center"
        style={{ 
          paddingTop: '200px',
          backgroundImage: 'url(https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="relative z-10 max-w-[1200px] mx-auto px-5">
          <div className="flex items-end gap-5 flex-col md:flex-row">
            {/* Left Side */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                {/* Social Sidebar */}
                <div className="hidden lg:flex absolute -left-20 top-1/2 -translate-y-1/2 bg-white p-4 rounded-[35px] shadow-lg flex-col gap-5 z-10 transition-all duration-300 hover:translate-x-1 hover:shadow-xl scale-in visible">
                  <a href="#" className="text-black hover:text-[#00c2a9] transition-all hover:scale-110"><Briefcase size={20} /></a>
                  <a href="#" className="text-black hover:text-[#00c2a9] transition-all hover:scale-110"><Mail size={20} /></a>
                  <a href="#" className="text-black hover:text-[#00c2a9] transition-all hover:scale-110"><MessageSquare size={20} /></a>
                  <a href="#" className="text-black hover:text-[#00c2a9] transition-all hover:scale-110"><Camera size={20} /></a>
                </div>
                
                <h1 
                  ref={titleRef}
                  className={`relative z-10 text-white text-6xl leading-tight mb-10 font-bold [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)] before:content-[''] before:absolute before:-inset-x-6 before:-inset-y-4 before:bg-gradient-to-br before:from-black/60 before:via-black/30 before:to-black/60 before:rounded-[25px] before:-z-10 before:backdrop-blur-md before:shadow-2xl fade-in-left ${titleVisible ? 'visible' : ''}`}
                >
                  {translate('hero.title')}
                </h1>
              </div>
              
              {/* Stats Card */}
              <div 
                ref={statsRef}
                className={`bg-[#00c2a9] text-white p-10 rounded-[35px] w-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl fade-in-left ${statsVisible ? 'visible' : ''}`}
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
            <div className="w-full md:w-1/2 flex flex-col gap-5 items-start pb-12 pl-0 md:pl-5">
              {/* Speech Bubble */}
              <div 
                ref={bubbleRef}
                className={`bg-white/20 backdrop-blur-lg border border-white/30 p-10 rounded-[35px] text-white w-full max-w-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl fade-in-right ${bubbleVisible ? 'visible' : ''}`}
              >
                <h2 className="text-2xl font-semibold mb-8">{translate('hero.question')}</h2>
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

              {/* Testimonial Cards */}
              <div 
                ref={cardsRef}
                className={`flex gap-5 w-full flex-col sm:flex-row fade-in-right ${cardsVisible ? 'visible' : ''}`}
                style={{ transitionDelay: '200ms' }}
              >
                {/* Success Rate Card */}
                <div className="bg-black text-white p-8 rounded-[35px] flex-1 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                  <span className="w-14 h-14 bg-white text-black rounded-full inline-flex justify-center items-center mb-4 transition-all hover:scale-110">
                    <Heart size={24} />
                  </span>
                  <span className="block text-5xl font-bold leading-none">100%</span>
                  <h3 className="mt-3 text-base font-medium">{translate('hero.satisfaction')}</h3>
                </div>

                {/* Testimonial Card */}
                <div className="bg-black text-white p-8 rounded-[35px] flex-1 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
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
                    className="group inline-flex items-center px-6 py-2 rounded-full font-bold relative overflow-hidden transition-all bg-[#00c2a9] text-white hover:bg-[#00a693] hover:-translate-y-0.5 hover:shadow-lg text-sm"
                  >
                    {translate('hero.cta')}
                    <span className="w-6 h-6 bg-white text-[#00c2a9] rounded-full flex items-center justify-center ml-3 transition-all group-hover:translate-x-1">
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
