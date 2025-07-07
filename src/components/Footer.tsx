import React from 'react';
import { ArrowRight, User, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';
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
        <div className="container">
          <div className="get-started">
            <h2 
              ref={titleRef}
              className={`text-4xl mb-8 fade-in ${titleVisible ? 'visible' : ''}`}
            >
              {translate('footer.cta.title')}
            </h2>
            <form 
              ref={formRef}
              className={`subscribe-form max-w-lg mx-auto flex border-2 border-gray-600 rounded-full p-1 relative hover-lift fade-in ${formVisible ? 'visible' : ''}`}
            >
              <User className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="email" 
                placeholder={translate('footer.email.placeholder')}
                className="flex-grow bg-transparent border-none py-3 px-16 text-white placeholder-gray-400 focus:outline-none form-input"
              />
              <button 
                type="button"
                onClick={openBooking}
                className="btn bg-white text-black pr-4 hover-scale"
              >
                {translate('footer.cta.button')}
                <span className="arrow-icon bg-black text-white">
                  <ArrowRight size={14} />
                </span>
              </button>
            </form>
          </div>
          
          <div className="footer-bottom mt-20 border-t border-gray-600 pt-12 flex flex-col items-center gap-8">
            <div 
              ref={socialsRef}
              className={`footer-socials flex gap-5 bg-white py-3 px-8 rounded-full hover-lift fade-in ${socialsVisible ? 'visible' : ''}`}
            >
              <a href="#" className="text-black text-xl hover-scale"><Linkedin size={20} /></a>
              <a href="#" className="text-black text-xl hover-scale"><Mail size={20} /></a>
              <a href="#" className="text-black text-xl hover-scale"><Facebook size={20} /></a>
              <a href="#" className="text-black text-xl hover-scale"><Instagram size={20} /></a>
            </div>
            
            <nav ref={navRef} className="footer-nav">
              <ul className="flex gap-5 list-none">
                {menuItems.map((item, index) => (
                  <li key={item.key} className={`stagger-item ${navVisible[index] ? 'visible' : ''}`}>
                    <a 
                      href={item.href}
                      className="text-white border border-white py-2 px-5 rounded-full block transition-all duration-300 hover:bg-white hover:text-black hover-scale"
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