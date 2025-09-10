import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../public/locales/en/common.json';
import de from '../public/locales/de/common.json';
import es from '../public/locales/es/common.json';
import fr from '../public/locales/fr/common.json';
import it from '../public/locales/it/common.json';
import ru from '../public/locales/ru/common.json';

// Initialize with a default language first
const defaultLanguage = 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      de: { common: de },
      es: { common: es },
      fr: { common: fr },
      it: { common: it },
      ru: { common: ru },
    },
    lng: defaultLanguage,
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false // Important for Next.js App Router
    }
  });

// Load saved language after initialization (client-side only)
if (typeof window !== 'undefined') {
  const savedLang = localStorage.getItem('lang');
  if (savedLang && savedLang !== i18n.language) {
    i18n.changeLanguage(savedLang);
  }
}

export default i18n;