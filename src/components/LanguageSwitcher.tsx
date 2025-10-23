import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-custom-dark/70 hover:text-custom-dark transition-all duration-500 font-medium group"
      title={t('language.switchTo')}
    >
      <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
      <span className="text-sm">
        {i18n.language === 'en' ? t('language.turkish') : t('language.english')}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
