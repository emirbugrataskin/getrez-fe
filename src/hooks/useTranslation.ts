import { useLanguage } from '../context/LanguageContext';
import tr from '../locales/tr.json';
import en from '../locales/en.json';

const translations = { tr, en };

export function useTranslation() {
  const { language } = useLanguage();
  // Return as a union of all translation keys for type safety
  return translations[language] as typeof tr & typeof en;
}
