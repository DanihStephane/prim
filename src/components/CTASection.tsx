import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const CTASection: React.FC = () => {
  const { translate } = useTranslation();

  return (
    <section id="blog" className="py-16 lg:py-20 bg-gradient-to-br from-yellow-100 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {translate('cta.title')}
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {translate('cta.subtitle')}
              </p>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm">
              <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                {translate('cta.text')}
              </p>
            </div>

            <button className="inline-flex items-center px-6 py-3 bg-teal-400 text-white font-semibold rounded-full hover:bg-teal-500 transition-colors duration-200 shadow-lg">
              {translate('cta.button')}
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Entrepreneur overwhelmed"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl lg:rounded-3xl shadow-2xl"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl lg:rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;