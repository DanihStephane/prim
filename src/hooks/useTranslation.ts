import { useState, useCallback } from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    code: 'fr',
    name: 'Français'
  });

  const availableLanguages: Language[] = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' }
  ];

  const translate = useCallback((key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[currentLanguage.code] || key;
  }, [currentLanguage.code]);

  const switchLanguage = useCallback((languageCode: 'fr' | 'en') => {
    const language = availableLanguages.find(lang => lang.code === languageCode);
    if (language) {
      setCurrentLanguage(language);
    }
  }, [availableLanguages]);

  return {
    currentLanguage,
    availableLanguages,
    translate: translate,
    switchLanguage
  };
};