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
    <header className={`bg-white fixed top-0 left-0 right-0 z-50 border-b border-gray-200 transition-all duration-300 py-4 ${isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-md' : ''}`}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">PRIMICES</div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex gap-8 list-none">
              {menuItems.map((item, index) => (
                <li key={item.key} className="transition-all duration-500">
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-black font-medium hover:text-[#00c2a9] transition-all duration-200 hover:scale-105"
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
              className="hidden md:inline-flex items-center px-6 py-2 rounded-full font-bold transition-all bg-[#00c2a9] text-white hover:bg-[#00a693] hover:-translate-y-0.5 hover:shadow-lg"
            >
              {translate('nav.contact')}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center gap-1 border-2 border-black px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:border-[#00c2a9] hover:scale-105"
              >
                {currentLanguage.code.toUpperCase()}
                <ChevronDown size={12} className={`transition-transform duration-300 ${isLanguageMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-[60] transition-all duration-300">
                  <div className="py-1">
                    {availableLanguages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          switchLanguage(language.code);
                          setIsLanguageMenuOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-2 text-sm transition-all duration-200 hover:bg-gray-50 hover:scale-105 ${
                          currentLanguage.code === language.code
                            ? 'bg-[#00c2a9]/10 text-[#00c2a9]'
                            : 'text-gray-700'
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
              className="lg:hidden border-2 border-black p-2 rounded-lg transition-all duration-300 hover:border-[#00c2a9] hover:scale-105"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="px-4 py-3 space-y-1">
              {menuItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 text-gray-600 hover:text-[#00c2a9] transition-all duration-200 text-sm font-medium hover:scale-105"
                >
                  {translate(item.key)}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="block w-full text-left py-3 text-[#00c2a9] hover:text-[#00a693] transition-all duration-200 text-sm font-medium hover:scale-105"
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