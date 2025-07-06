import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const BalanceSection: React.FC = () => {
  const { translate } = useTranslation();

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {translate('balance.title')}
          </h2>
        </div>

        {/* Cards Grid - 2x2 layout as in mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {/* Card 1 - Top Left - Teal */}
          <div className="bg-teal-400 text-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <CheckCircle size={24} className="opacity-80" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold mb-3">
              {translate('balance.card1.title')}
            </h3>
            <p className="leading-relaxed opacity-90 text-sm lg:text-base">
              {translate('balance.card1.desc')}
            </p>
          </div>

          {/* Card 2 - Top Right - Light Teal */}
          <div className="bg-teal-300 text-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <CheckCircle size={24} className="opacity-80" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold mb-3">
              {translate('balance.card2.title')}
            </h3>
            <p className="leading-relaxed opacity-90 text-sm lg:text-base">
              {translate('balance.card2.desc')}
            </p>
          </div>

          {/* Card 3 - Bottom Left - Black */}
          <div className="bg-black text-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <CheckCircle size={24} className="opacity-80" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold mb-3">
              {translate('balance.card3.title')}
            </h3>
            <p className="leading-relaxed opacity-90 text-sm lg:text-base">
              {translate('balance.card3.desc')}
            </p>
          </div>

          {/* Card 4 - Bottom Right - Light Teal */}
          <div className="bg-teal-300 text-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <CheckCircle size={24} className="opacity-80" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold mb-3">
              {translate('balance.card4.title')}
            </h3>
            <p className="leading-relaxed opacity-90 text-sm lg:text-base">
              {translate('balance.card4.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BalanceSection;