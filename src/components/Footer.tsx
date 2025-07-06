import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer: React.FC = () => {
  const { translate } = useTranslation();

  return (
    <footer className="bg-black text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center space-y-8 lg:space-y-12">
          <div className="space-y-4 lg:space-y-6">
            <div className="text-xs font-medium tracking-wider text-gray-400 uppercase">
              PRIMICES COACHING
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {translate('footer.cta.title')}
            </h2>
          </div>

          <button className="inline-flex items-center px-6 py-3 bg-teal-400 text-white font-semibold rounded-full hover:bg-teal-500 transition-colors duration-200 shadow-lg">
            {translate('footer.cta.button')}
            <ArrowRight className="ml-2" size={18} />
          </button>

          {/* Navigation Links */}
          <div className="pt-8 lg:pt-12 border-t border-gray-800">
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-6 lg:mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                {translate('nav.home')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                {translate('nav.coaching')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                {translate('nav.testimonials')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                {translate('nav.pricing')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                {translate('nav.blog')}
              </a>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              <div className="text-xl lg:text-2xl font-bold">PRIMICES</div>
              <div className="text-xs lg:text-sm text-gray-400">
                © 2024 Primices Coaching. Tous droits réservés.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;