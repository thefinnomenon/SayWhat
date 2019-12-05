import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

// Define fallback language
const fallbackLanguage = { languageTag: 'en', isRTL: false };
// Set default language based upon system language
export const defaultLanguage =
  RNLocalize.findBestAvailableLanguage(['en', 'pt']) || fallbackLanguage;

// Load language files
import en from './locales/en.json';
import pt from './locales/pt.json';

// Initialize i18n module
i18n.use(initReactI18next).init({
  lng: defaultLanguage.languageTag,
  resources: {
    en: { translation: en },
    pt: { translation: pt },
  },
  nsSeparator: false,
  keySeparator: false,
  fallbackLng: false,
  debug: true,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
});

export default i18n;
