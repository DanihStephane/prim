import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const WellbeingSection: React.FC = () => {
  const { translate } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    challenge: '',
    goal: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-400 leading-tight">
                {translate('wellbeing.title')}
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {translate('wellbeing.subtitle')}
              </p>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-colors duration-200 text-gray-900 placeholder-gray-500 text-sm"
                  placeholder={translate('wellbeing.form.name')}
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-colors duration-200 text-gray-900 placeholder-gray-500 text-sm"
                  placeholder={translate('wellbeing.form.email')}
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-colors duration-200 text-gray-900 placeholder-gray-500 text-sm"
                  placeholder={translate('wellbeing.form.business')}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-colors duration-200 text-gray-900 placeholder-gray-500 text-sm"
                  placeholder={translate('wellbeing.form.challenge')}
                  required
                />
                <input
                  type="text"
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-colors duration-200 text-gray-900 placeholder-gray-500 text-sm"
                  placeholder={translate('wellbeing.form.goal')}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-400 text-white py-3 px-6 rounded-full font-semibold hover:bg-teal-500 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
              >
                <span>{translate('wellbeing.form.submit')}</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellbeingSection;