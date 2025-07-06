import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const StressSection: React.FC = () => {
  const { translate } = useTranslation();

  const benefits = [
    'stress.point1',
    'stress.point2',
    'stress.point3',
    'stress.point4',
    'stress.point5',
    'stress.point6'
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {translate('stress.title')}
                </h2>
                <span className="inline-flex items-center px-3 py-1 bg-teal-400 text-white rounded-full text-sm font-medium whitespace-nowrap">
                  Solution
                </span>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {translate('stress.subtitle')}
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-teal-400 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-700 leading-relaxed text-sm">
                    {translate(benefit)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-teal-100 rounded-2xl p-6 relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Stressed Business Person"
                className="w-full h-80 lg:h-96 object-cover rounded-xl"
              />
              
              {/* Decorative circles */}
              <div className="absolute top-4 left-4 w-6 h-6 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-4 w-4 h-4 bg-teal-300/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StressSection;