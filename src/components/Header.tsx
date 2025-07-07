import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { translate, currentLanguage, availableLanguages, switchLanguage } = useTranslation();

  const menuItems = [
    { key: 'nav.about', href: '#about' },
    { key: 'nav.coaching', href: '#coaching' },
    { key: 'nav.testimonials', href: '#testimonials' },
    { key: 'nav.privacy', href: '#privacy' },
    { key: 'nav.blog', href: '#blog' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-50 border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'scrolled shadow-lg' : ''}`} style={{ padding: '20px 0' }}>
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold fade-in visible">PRIMICES</div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex gap-8 list-none">
              {menuItems.map((item, index) => (
                <li key={item.key} className={`fade-in ${isScrolled ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-black font-medium hover:text-gray-600 transition-colors duration-200 hover-scale"
                  >
                    {translate(item.key)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn btn-teal hidden md:inline-flex hover-lift"
              style={{ padding: '10px 20px' }}
            >
              {translate('nav.contact')}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center gap-1 border-2 border-black px-3 py-2 rounded-lg font-semibold hover-scale transition-all duration-300 hover:border-teal-500"
              >
                {currentLanguage.code.toUpperCase()}
                <ChevronDown size={12} className={`transition-transform duration-300 ${isLanguageMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 modal-overlay open">
                  <div className="py-1 modal-content">
                    {availableLanguages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          switchLanguage(language.code);
                          setIsLanguageMenuOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-2 text-sm transition-all duration-200 hover-scale ${
                          currentLanguage.code === language.code
                            ? 'bg-teal-50 text-teal-700'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {language.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden border-2 border-black p-2 rounded-lg hover-scale transition-all duration-300 hover:border-teal-500"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t modal-overlay open">
            <nav className="px-4 py-3 space-y-1 modal-content">
              {menuItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-gray-600 hover:text-gray-900 transition-all duration-200 text-sm font-medium hover-scale stagger-item visible"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {translate(item.key)}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="block w-full text-left py-2 text-teal-600 hover:text-teal-700 transition-all duration-200 text-sm font-medium hover-scale stagger-item visible"
                style={{ transitionDelay: `${menuItems.length * 100}ms` }}
              >
                {translate('nav.contact')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;