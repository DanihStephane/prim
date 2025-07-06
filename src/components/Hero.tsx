import React from 'react';
import { ArrowRight, Star, Play } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Hero: React.FC = () => {
  const { translate } = useTranslation();

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-white order-2 lg:order-1">
            {/* Navigation dots */}
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {translate('hero.title')}
              </h1>
              <p className="text-base md:text-lg leading-relaxed opacity-90 max-w-lg">
                {translate('hero.subtitle')}
              </p>
            </div>

            <button className="inline-flex items-center px-6 py-3 bg-teal-400 text-white font-semibold rounded-full hover:bg-teal-500 transition-colors duration-200 shadow-lg">
              {translate('hero.cta')}
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>

          {/* Right Content */}
          <div className="relative order-1 lg:order-2">
            {/* Main Image Container with video overlay */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business Success"
                  className="w-full h-64 lg:h-80 object-cover rounded-xl"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200">
                    <Play size={20} className="text-blue-500 ml-0.5" fill="currentColor" />
                  </button>
                </div>

                {/* Video Info Badge */}
                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full">
                  <span className="text-xs text-gray-700 font-medium">
                    {translate('hero.video.info')}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-4 -left-4 bg-teal-400 text-white p-4 rounded-xl shadow-xl">
              <div className="text-2xl font-bold">216</div>
              <div className="text-xs opacity-90">{translate('hero.stats.owners')}</div>
            </div>

            <div className="absolute -top-4 -right-4 bg-black text-white p-4 rounded-xl shadow-xl">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-xs text-gray-300">{translate('hero.stats.success')}</div>
            </div>

            {/* Testimonial Card */}
            <div className="absolute bottom-3 right-3 bg-white p-3 rounded-xl shadow-lg max-w-48">
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xs text-gray-700 mb-1 leading-tight">
                {translate('hero.testimonial.text')}
              </p>
              <p className="text-xs text-gray-500 font-medium">
                {translate('hero.testimonial.author')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;