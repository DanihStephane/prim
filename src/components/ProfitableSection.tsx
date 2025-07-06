import React from 'react';
import { X, Clock, Scale, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const ProfitableSection: React.FC = () => {
  const { translate } = useTranslation();

  return (
    <section id="coaching" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {translate('profitable.title')}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {translate('profitable.subtitle')}
          </p>
        </div>

        {/* Cards Grid - Exact layout from mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Row 1 */}
          {/* Card 1 - Large card spanning 2 columns on lg */}
          <div className="lg:col-span-2 bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <X size={20} className="text-gray-600" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">
              {translate('profitable.feature1.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              {translate('profitable.feature1.desc')}
            </p>
          </div>

          {/* Card 2 - Medium card */}
          <div className="bg-white p-5 lg:p-6 rounded-2xl shadow-sm border border-teal-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
              <Clock size={16} className="text-teal-600" />
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
              {translate('profitable.feature2.title')}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {translate('profitable.feature2.desc')}
            </p>
          </div>

          {/* Row 2 */}
          {/* Card 3 - Medium card */}
          <div className="bg-white p-5 lg:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
              <Scale size={16} className="text-gray-600" />
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
              {translate('profitable.feature3.title')}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {translate('profitable.feature3.desc')}
            </p>
          </div>

          {/* Card 4 - Small with button */}
          <div className="bg-white p-5 lg:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
              {translate('profitable.feature4.title')}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              {translate('profitable.feature4.desc')}
            </p>
            <button className="inline-flex items-center text-teal-400 font-medium text-sm hover:text-teal-500 transition-colors duration-200">
              {translate('hero.cta')}
              <ArrowRight className="ml-1" size={14} />
            </button>
          </div>

          {/* Card 5 - CTA Button */}
          <div className="bg-teal-400 text-white p-5 lg:p-6 rounded-2xl shadow-sm hover:bg-teal-500 transition-colors duration-300 cursor-pointer flex items-center justify-center">
            <button className="inline-flex items-center font-semibold text-sm lg:text-base">
              {translate('hero.cta')}
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitableSection;