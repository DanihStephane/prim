import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const StepsSection: React.FC = () => {
  const { translate } = useTranslation();

  return (
    <section id="pricing" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {translate('steps.title')}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {translate('steps.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Step 1 */}
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-teal-400 rounded-full mr-3"></div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                {translate('steps.step1.title')}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              {translate('steps.step1.desc')}
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-teal-400 rounded-full mr-3"></div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                {translate('steps.step2.title')}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              {translate('steps.step2.desc')}
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-teal-400 rounded-full mr-3"></div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                {translate('steps.step3.title')}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              {translate('steps.step3.desc')}
            </p>
          </div>
        </div>

        {/* Large CTA Card */}
        <div className="bg-black text-white p-8 lg:p-12 rounded-2xl lg:rounded-3xl relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight">
              {translate('steps.cta.title')}
            </h3>
            <button className="inline-flex items-center px-6 py-3 bg-teal-400 text-white font-semibold rounded-full hover:bg-teal-500 transition-colors duration-200">
              {translate('hero.cta')}
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-6 right-6 w-16 h-16 lg:w-20 lg:h-20 bg-teal-400/20 rounded-full"></div>
          <div className="absolute bottom-6 right-12 w-10 h-10 lg:w-12 lg:h-12 bg-teal-400/10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;