import i18n from 'i18next';
import translationEN from './en/translation.json';
import translationDE from './de/translation.json';
import { initReactI18next } from 'react-i18next';

 const resources = {
  en: {
   translation: translationEN,
  },
  de: {
    translation: translationDE
  }
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false}
});

export default i18n;