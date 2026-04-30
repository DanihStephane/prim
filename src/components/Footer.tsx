import React from 'react';
import { ArrowRight, User, Briefcase, Mail, MessageSquare, Camera } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import BookingModal from './BookingModal';
import { useBooking } from '../hooks/useBooking';

const Footer: React.FC = () => {
  const { translate } = useTranslation();
  const { isBookingOpen, openBooking, closeBooking } = useBooking();
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [formRef, formVisible] = useScrollAnimation(0.3);
  const [socialsRef, socialsVisible] = useScrollAnimation(0.3);
  const [navRef, navVisible] = useStaggeredAnimation(5, 100);

  const menuItems = [
    { key: 'nav.about', href: '#about' },
    { key: 'nav.coaching', href: '#coaching' },
    { key: 'nav.testimonials', href: '#testimonials' },
    { key: 'nav.privacy', href: '#privacy' },
    { key: 'nav.blog', href: '#blog' }
  ];

  return (
    <>
      <footer className="bg-black text-white py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="get-started">
            <h2 
              ref={titleRef}
              className={`text-4xl mb-8 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {translate('footer.cta.title')}
            </h2>
            <form 
              ref={formRef}
              className={`max-w-lg mx-auto flex flex-col sm:flex-row border-2 border-gray-600 rounded-[35px] sm:rounded-full p-1 relative transition-all duration-700 hover:-translate-y-1.5 hover:shadow-2xl ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="relative flex-grow">
                <User className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="email" 
                  placeholder={translate('footer.email.placeholder')}
                  className="w-full bg-transparent border-none py-3 px-16 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 focus:translate-y-[-2px]"
                />
              </div>
              <button 
                type="button"
                onClick={openBooking}
                className="group inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-medium min-w-[200px]"
              >
                {translate('footer.cta.button')}
                <span className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center ml-4 transition-all group-hover:translate-x-1">
                  <ArrowRight size={14} />
                </span>
              </button>
            </form>
          </div>
          
          <div className="footer-bottom mt-20 border-t border-gray-600 pt-12 flex flex-col items-center gap-8">
            <div 
              ref={socialsRef}
              className={`flex gap-5 bg-white py-3 px-8 rounded-full transition-all duration-700 hover:-translate-y-1.5 hover:shadow-2xl ${socialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <a href="#" className="text-black transition-all hover:scale-125"><Briefcase size={20} /></a>
              <a href="#" className="text-black transition-all hover:scale-125"><Mail size={20} /></a>
              <a href="#" className="text-black transition-all hover:scale-125"><MessageSquare size={20} /></a>
              <a href="#" className="text-black transition-all hover:scale-125"><Camera size={20} /></a>
            </div>
            
            <nav ref={navRef} className="footer-nav">
              <ul className="flex flex-wrap justify-center gap-5 list-none">
                {menuItems.map((item, index) => (
                  <li key={item.key} className={`transition-all duration-500 ${navVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <a 
                      href={item.href}
                      className="text-white border border-white py-2 px-5 rounded-full block transition-all duration-300 hover:bg-white hover:text-black hover:scale-110"
                    >
                      {translate(item.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </footer>

      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </>
  );
};

export default Footer;