import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import deTranslationFile from 'assets/locales/DE/de.json';
import enTranslationFile from 'assets/locales/EN/MainPage.json';

i18n.use(initReactI18next).init({
  lng: 'en', // мова за замовчуванням
  resources: {
    en: {
      translation: enTranslationFile,
    },
    de: {
      translation: deTranslationFile,
    },
  },
  interpolation: {
    escapeValue: false, // не ескейпимо реактивні значення
  },
});

export default i18n;
