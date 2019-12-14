import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  resources: {},
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
