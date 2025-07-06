export interface Language {
  code: 'fr' | 'en';
  name: string;
}

export interface TranslationKey {
  fr: string;
  en: string;
}

export interface Translations {
  [key: string]: TranslationKey;
}