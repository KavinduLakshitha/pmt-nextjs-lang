'use client';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before showing language buttons
  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = async (lang: string) => {
    try {
      await i18n.changeLanguage(lang);
      if (typeof window !== 'undefined') {
        localStorage.setItem('lang', lang);
      }
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  if (!mounted) {
    return <div className="flex gap-2">Loading...</div>;
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 border rounded hover:bg-gray-200 ${
          i18n.language === 'en' ? 'bg-blue-100' : ''
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('de')}
        className={`px-3 py-1 border rounded hover:bg-gray-200 ${
          i18n.language === 'de' ? 'bg-blue-100' : ''
        }`}
      >
        DE
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-3 py-1 border rounded hover:bg-gray-200 ${
          i18n.language === 'es' ? 'bg-blue-100' : ''
        }`}
      >
        ES
      </button>
        <button
        onClick={() => changeLanguage('fr')}
        className={`px-3 py-1 border rounded hover:bg-gray-200 ${
          i18n.language === 'fr' ? 'bg-blue-100' : ''
        }`}
        >
        FR
        </button>
        <button
        onClick={() => changeLanguage('it')}
        className={`px-3 py-1 border rounded hover:bg-gray-200 ${
          i18n.language === 'it' ? 'bg-blue-100' : ''
        }`}
        >
        IT
        </button>
        <button
        onClick={() => changeLanguage('ru')}
        className={`px-3 py-1 border rounded hover:bg-gray-200 ${
            i18n.language === 'ru' ? 'bg-blue-100' : ''
        }`}
        >
        RU
        </button>
        
    </div>
  );
}